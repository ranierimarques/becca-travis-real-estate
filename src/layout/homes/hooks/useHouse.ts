import { getHouseListing } from '@/services/house-listings'
import useSWR, { preload } from 'swr'
import { useGeolocationStore, type GeoLocationState } from '../store/geolocation'

type Fetcher = [string, GeoLocationState['geoLocation']]

const fetcher = async ([, geoLocation]: Fetcher) => {
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
    params['UnparsedAddress.in'] = geoLocation.address
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

preload(['houses', ''], fetcher)

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { data, error } = useSWR(['houses', geoLocation], fetcher, {
    keepPreviousData: true,
  })

  return {
    house: {
      ...data,
    },
    isLoading: !error && !data,
    isError: error,
  }
}
