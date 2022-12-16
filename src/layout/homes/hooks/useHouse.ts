import { getHouseListing } from '@/services/house-listings'
import useSWR from 'swr'
import { useGeolocationStore, type GeoLocationState } from '../store/geolocation'

const fetcher = async (
  _endpoint: string,
  geoLocation: GeoLocationState['geoLocation']
) => {
  const BedroomsTotal = geoLocation.filter?.BedroomsTotal

  const params = {
    limit: '20',
    PropertyType: 'Residential',
    StandardStatus: 'Active',
    'PhotosCount.gte': '1', // There must be at least 1 photo
    'ListPrice.gt': '1', // Price cannot be 0
    sortBy: 'BridgeModificationTimestamp',
    order: 'desc',
  } as Record<string, string>

  if (geoLocation.address) {
    params['UnparsedAddress.in'] = 'huntsville'
  }

  if (geoLocation?.bounds && geoLocation.bounds.length >= 3) {
    params['box'] = geoLocation.bounds.join(',')
  }

  if (BedroomsTotal) {
    params['BedroomsTotal.gte'] = String(BedroomsTotal.gte)
    params['BedroomsTotal.lte'] = String(BedroomsTotal.lte)
  }

  return getHouseListing({ type: 'card-full-info', params, fetchOn: 'browser' })
}

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { data, error } = useSWR(['houses', geoLocation], fetcher)

  console.log(data)

  return {
    house: {
      ...data,
    },
    isLoading: !error && !data,
    isError: error,
  }
}
