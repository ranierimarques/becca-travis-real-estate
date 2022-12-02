import { convertSquareFeets } from '@/resources/utils/convert'
import { formatToDollar } from '@/resources/utils/currency'
import { HouseCard } from '@/types/houses'
import useSWR, { Fetcher } from 'swr'
import { useGeolocationStore, GeoLocationState } from '../store/geoLocation'

const options: RequestInit = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_BRIDGE_API_KEY}` },
}

const baseURL = 'https://api.bridgedataoutput.com/api/v2/valleymls/listings?'

const fetcher: Fetcher<HouseCard, [string, GeoLocationState['geoLocation']]> = async (
  ...[, geoLocation]
) => {
  const params = {
    limit: '20',
    PropertyType: 'Residential',
    StandardStatus: 'Active',
    fields:
      // Return only this values
      'Media.MediaURL,ListPrice,UnparsedAddress,LivingArea,BathroomsTotalInteger,BedroomsTotal,ListingId,Longitude,Latitude',
    'PhotosCount.gte': '1', // There must be at least 1 photo
    'ListPrice.gt': '1', // Price cannot be 0
    sortBy: 'BridgeModificationTimestamp',
    order: 'desc',
  } as Record<string, string>

  if (geoLocation.address) {
    params['UnparsedAddress.in'] = geoLocation.address
  }

  if (geoLocation?.bounds && geoLocation.bounds.length >= 3) {
    params.box = geoLocation.bounds.join(',')
  }

  if (geoLocation?.filter) {
    const { BedroomsTotal } = geoLocation.filter

    if (BedroomsTotal) {
      params['BedroomsTotal.gte'] = BedroomsTotal.gte.toString()
      params['BedroomsTotal.lte'] = BedroomsTotal.lte.toString()
    }
  }

  const endpoint = baseURL + new URLSearchParams(params)
  const res = await fetch(endpoint, options)
  return res.json()
}

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { data, error } = useSWR(['houses', geoLocation], fetcher)

  return {
    house: {
      listings: data?.bundle.map(listing => ({
        id: listing.ListingId,
        media: listing.Media[0].MediaURL,
        price: formatToDollar(listing.ListPrice),
        address: listing.UnparsedAddress,
        bedroomsTotal: listing.BedroomsTotal,
        bathroomsTotal: listing.BathroomsTotalInteger,
        livingArea: convertSquareFeets(listing.LivingArea),
        lastModificationTimestamp: listing.BridgeModificationTimestamp,
        coordinates: {
          latitude: listing.Latitude,
          longitude: listing.Longitude,
        },
      })),
      total: data?.total,
    },
    isLoading: !error && !data,
    isError: error,
  }
}
