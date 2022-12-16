<<<<<<< HEAD
import { getHouseListing } from '@/services/house-listings'
import useSWR from 'swr'
import { useGeolocationStore, type GeoLocationState } from '../store/geoLocation'
=======
import { convertSquareFeets } from '@/resources/utils/convert'
import { formatToDollar } from '@/resources/utils/currency'
import { HouseCard } from '@/types/houses'
import useSWR, { Fetcher } from 'swr'
import { useGeolocationStore, GeoLocationState } from '../store/geoLocation'

const options: RequestInit = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_BRIDGE_API_KEY}` },
}
>>>>>>> 2f3df9d22c2d914895baff2b8053202c0d3a3923

const fetcher = async (
  _endpoint: string,
  geoLocation: GeoLocationState['geoLocation']
) => {
  const BedroomsTotal = geoLocation.filter?.BedroomsTotal

<<<<<<< HEAD
=======
const fetcher: Fetcher<HouseCard, [string, GeoLocationState['geoLocation']]> = async (
  ...[, geoLocation]
) => {
>>>>>>> 2f3df9d22c2d914895baff2b8053202c0d3a3923
  const params = {
    limit: '20',
    PropertyType: 'Residential',
    StandardStatus: 'Active',
<<<<<<< HEAD
=======
    fields:
      // Return only this values
      'Media.MediaURL,ListPrice,UnparsedAddress,LivingArea,BathroomsTotalInteger,BedroomsTotal,ListingId,Longitude,Latitude',
>>>>>>> 2f3df9d22c2d914895baff2b8053202c0d3a3923
    'PhotosCount.gte': '1', // There must be at least 1 photo
    'ListPrice.gt': '1', // Price cannot be 0
    sortBy: 'BridgeModificationTimestamp',
    order: 'desc',
  } as Record<string, string>

  if (geoLocation.address) {
<<<<<<< HEAD
    params['UnparsedAddress.in'] = 'huntsville'
  }

  if (geoLocation?.bounds && geoLocation.bounds.length >= 3) {
    params['box'] = geoLocation.bounds.join(',')
=======
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
>>>>>>> 2f3df9d22c2d914895baff2b8053202c0d3a3923
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
<<<<<<< HEAD

  console.log(data)

  return {
    house: {
      ...data,
=======

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
>>>>>>> 2f3df9d22c2d914895baff2b8053202c0d3a3923
    },
    isLoading: !error && !data,
    isError: error,
  }
}
