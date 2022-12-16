import { getHouseListing } from '@/services/house-listings'
import useSWR from 'swr'
import { useAddressStore } from '../store/address'

const fetcher = async (_endpoint: string, address: string) => {
  return getHouseListing({
    type: 'card-full-info',
    params: {
      limit: '20',
      PropertyType: 'Residential',
      StandardStatus: 'Active',
      'PhotosCount.gte': '1', // There must be at least 1 photo
      'ListPrice.gt': '1', // Price cannot be 0
      'UnparsedAddress.in': address,
      sortBy: 'BridgeModificationTimestamp',
      order: 'desc',
    },
    fetchOn: 'browser',
  })
}

export function useHouse() {
  const address = useAddressStore(state => state.address)
  const { data, error } = useSWR(['houses', address], fetcher)

  return {
    house: {
      ...data,
    },
    isLoading: !error && !data,
    isError: error,
  }
}
