import type { NextApiRequest, NextApiResponse } from 'next'

// These county services are referenced by Huntsville's public property viewer.
const countyServices: Record<
  string,
  { url: string; fields: string; parcel: string; district: string; year: string }
> = {
  '01089': {
    url: 'https://web3.kcsgis.com/kcsgis/rest/services/Madison/Madison_Public_ISV/MapServer/185/query',
    fields: 'ParcelNum,TaxDistrict,TaxYear',
    parcel: 'ParcelNum',
    district: 'TaxDistrict',
    year: 'TaxYear',
  },
  '01083': {
    url: 'https://web2.kcsgis.com/kcsgis/rest/services/Limestone/Public/MapServer/103/query',
    fields: 'PARCELID,RecordYear',
    parcel: 'PARCELID',
    district: '',
    year: 'RecordYear',
  },
  '01103': {
    url: 'https://web2.kcsgis.com/kcsgis/rest/services/Morgan/Public/MapServer/118/query',
    fields: 'PID,TaxDist,RecordYear',
    parcel: 'PID',
    district: 'TaxDist',
    year: 'RecordYear',
  },
}

export const config = { api: { bodyParser: { sizeLimit: '2kb' } } }

// Best-effort per-instance limit. Serverless instances do not share this state.
const requestWindows = new Map<string, { count: number; until: number }>()

async function getJson(url: string) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) throw new Error('Source unavailable')
    const result = await response.json()
    if (result.error) throw new Error('Source unavailable')
    return result
  } finally {
    clearTimeout(timer)
  }
}

function pointQuery(url: string, longitude: number, latitude: number, fields: string) {
  const query = new URLSearchParams({
    where: '1=1',
    geometry: `${longitude},${latitude}`,
    geometryType: 'esriGeometryPoint',
    inSR: '4326',
    spatialRel: 'esriSpatialRelIntersects',
    outFields: fields,
    returnGeometry: 'false',
    f: 'json',
  })
  return `${url}?${query.toString()}`
}

// The handler keeps each source's failure separate so partial results remain useful.
// eslint-disable-next-line sonarjs/cognitive-complexity
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Use POST to submit an address.' })
  }
  const client = (req.headers['x-real-ip'] || req.socket.remoteAddress || 'unknown')
    .toString()
    .slice(0, 128)
  const now = Date.now()
  if (requestWindows.size > 5000) {
    for (const [key, value] of requestWindows) {
      if (value.until <= now) requestWindows.delete(key)
    }
  }
  const window = requestWindows.get(client)
  if (window && window.until > now && window.count >= 20) {
    res.setHeader('Retry-After', '60')
    return res.status(429).json({ error: 'Too many lookups. Please try again shortly.' })
  }
  requestWindows.set(
    client,
    window && window.until > now
      ? { count: window.count + 1, until: window.until }
      : { count: 1, until: now + 60000 }
  )
  const address = typeof req.body?.address === 'string' ? req.body.address.trim() : ''
  if (address.length < 8 || address.length > 220 || /https?:\/\//i.test(address)) {
    return res
      .status(400)
      .json({
        error: 'Enter a street address, city, state and ZIP rather than a website link.',
      })
  }
  const censusParams = new URLSearchParams({
    address,
    benchmark: 'Public_AR_Current',
    vintage: 'Current_Current',
    format: 'json',
  })
  let data
  try {
    data = await getJson(
      `https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?${censusParams}`
    )
  } catch {
    return res
      .status(503)
      .json({
        error:
          'The Census address service is unavailable. Please try again or use the official links.',
      })
  }
  const matches = data?.result?.addressMatches
  if (!Array.isArray(matches) || !matches.length) {
    return res
      .status(200)
      .json({
        status: 'no_match',
        message:
          'The Census address service did not find a match. Check the complete address or use the official property viewer.',
      })
  }
  if (matches.length !== 1) {
    return res
      .status(200)
      .json({
        status: 'ambiguous',
        message:
          'The Census service returned more than one possible match. Add a city, state and ZIP and try again.',
      })
  }
  const match = matches[0]
  const longitude = match?.coordinates?.x
  const latitude = match?.coordinates?.y
  if (
    typeof longitude !== 'number' ||
    typeof latitude !== 'number' ||
    !Number.isFinite(longitude) ||
    !Number.isFinite(latitude) ||
    Math.abs(longitude) > 180 ||
    Math.abs(latitude) > 90
  ) {
    return res
      .status(502)
      .json({ error: 'The address service returned an incomplete location.' })
  }
  const county = match.geographies?.Counties?.[0]
  const place = match.geographies?.['Incorporated Places']?.[0]
  const service = countyServices[county?.GEOID]
  const femaUrl = pointQuery(
    'https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer/28/query',
    longitude,
    latitude,
    'FLD_ZONE,ZONE_SUBTY,SFHA_TF'
  )
  const [fema, parcel] = await Promise.allSettled([
    getJson(femaUrl),
    service
      ? getJson(pointQuery(service.url, longitude, latitude, service.fields))
      : Promise.resolve(null),
  ])
  let floodResult: Record<string, unknown> = { status: 'unavailable' }
  if (fema.status === 'fulfilled') {
    const features = fema.value?.features
    if (Array.isArray(features) && features.length === 1) {
      const a = features[0].attributes || {}
      floodResult = {
        status: 'point_result',
        zone: a.FLD_ZONE || null,
        description: a.ZONE_SUBTY || null,
        specialHazard: a.SFHA_TF || null,
      }
    } else if (Array.isArray(features))
      floodResult = { status: features.length ? 'multiple' : 'no_data' }
  }
  let parcelResult: Record<string, unknown> = {
    status: service ? 'unavailable' : 'outside_coverage',
  }
  if (service && parcel.status === 'fulfilled') {
    const features = parcel.value?.features
    if (Array.isArray(features) && features.length === 1) {
      const a = features[0].attributes || {}
      parcelResult = {
        status: 'point_candidate',
        parcelNumber: a[service.parcel] || null,
        taxDistrict: service.district ? a[service.district] || null : null,
        taxYear: a[service.year] || null,
      }
    } else if (Array.isArray(features))
      parcelResult = { status: features.length ? 'multiple' : 'no_candidate' }
  }
  return res
    .status(200)
    .json({
      status: 'matched',
      matchedAddress: match.matchedAddress,
      county: county?.NAME || null,
      place: place?.NAME || null,
      latitude,
      longitude,
      flood: floodResult,
      parcel: parcelResult,
      checkedAt: new Date().toISOString(),
      caveat:
        'Census positions are estimated from street address ranges. This is a point lookup, not a parcel boundary, building location, flood determination, or tax quote. Confirm the exact property in official records.',
    })
}
