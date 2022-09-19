import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lat: latitude, lng: longitude } = req.query

  if (!latitude || !longitude) {
    return res.status(400).json({ data: 'Missing latitude or longitude' })
  }

  try {
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_GEOLOCATION_API_KEY}`
    const response = await fetch(endpoint)
    const data = await response.json()
    const address = data.results[0].formatted_address

    res.status(200).json(address)
  } catch (error) {
    res.status(400).json({ data: 'Error', error })
  }
}
