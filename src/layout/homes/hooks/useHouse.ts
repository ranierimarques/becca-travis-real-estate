import { getHouseListing } from '@/services/house-listings'
import useSWR from 'swr'
import { useGeolocationStore, type GeoLocationState } from '../store/geoLocation'

const fetcher = async (
  _endpoint: string,
  geoLocation: GeoLocationState['geoLocation']
) => {
  const BedroomsTotal = geoLocation.filter.BedroomsTotal

  return getHouseListing({
    type: 'card-full-info',
    params: {
      limit: '20',
      PropertyType: 'Residential',
      StandardStatus: 'Active',
      'PhotosCount.gte': '1', // There must be at least 1 photo
      'ListPrice.gt': '1', // Price cannot be 0
      'UnparsedAddress.in': geoLocation.address || '',
      'BedroomsTotal.gte': BedroomsTotal ? String(BedroomsTotal.gte) : '',
      'BedroomsTotal.lte': BedroomsTotal ? String(BedroomsTotal.lte) : '',
      box: geoLocation.bounds.length >= 3 ? geoLocation.bounds.join(',') : '',
      sortBy: 'BridgeModificationTimestamp',
      order: 'desc',
    },
    fetchOn: 'browser',
  })
}

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { data, error } = useSWR(['houses', geoLocation], fetcher)

  return {
    house: {
      ...data,
    },
    isLoading: !error && !data,
    isError: error,
  }
}
