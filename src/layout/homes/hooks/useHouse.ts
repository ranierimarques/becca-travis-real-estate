import { convertSquareFeets } from '@resources/utils/convert'
import { formatToDollar } from '@resources/utils/currency'
import useSWR, { Fetcher } from 'swr'
import { useAddressStore } from '../store/address'

type Houses = {
  success: boolean
  status: number
  bundle: {
    LivingArea: number
    BedroomsTotal: number
    BridgeModificationTimestamp: string
    Media: {
      MediaURL: string
    }[]
    ListingId: string
    ListPrice: number
    BathroomsTotalInteger: number
    UnparsedAddress: string
    ListingKey: string
    FeedTypes: []
    url: string
  }[]
  total: number
}

const options: RequestInit = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_BRIDGE_API_KEY}` },
}

const baseURL = 'https://api.bridgedataoutput.com/api/v2/valleymls/listings?'

const fetcher: Fetcher<Houses, [string, string]> = (...[, address]) => {
  const params = {
    limit: '20',
    PropertyType: 'Residential',
    StandardStatus: 'Active',
    fields:
      // Return only this values
      'Media.MediaURL,ListPrice,UnparsedAddress,LivingArea,BathroomsTotalInteger,BedroomsTotal,ListingId',
    'PhotosCount.gte': '1', // There must be at least 1 photo
    'ListPrice.gt': '1', // Price cannot be 0
    'UnparsedAddress.in': address,
    sortBy: 'BridgeModificationTimestamp',
    order: 'desc',
  }

  const endpoint = baseURL + new URLSearchParams(params)
  return fetch(endpoint, options).then(res => res.json())
}

export function useHouse() {
  const address = useAddressStore(state => state.address)
  const { data, error } = useSWR(['houses', address], fetcher)

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
      })),
      total: data?.total,
    },
    isLoading: !error && !data,
    isError: error,
  }
}
