import { getHouseListing } from '@/services/house-listings'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { useEffect } from 'react'
import useSWRInfinite from 'swr/infinite'
import { useGeolocationStore, type GeoLocationState } from '../store/geolocation'

const mountFilters = (
  geoLocation: GeoLocationState['geoLocation'],
  params: {
    [key: string]: string | undefined
  }
) => {
  if (geoLocation.address) {
    params['UnparsedAddress.in'] = geoLocation.address
  }

  if (geoLocation?.bounds && geoLocation.bounds.length >= 3) {
    params.box = geoLocation.bounds.join(',')
  }

  interface Filter {
    [key: string]:
      | {
          gte: number
          lte: number
        }
      | undefined
  }

  const rangeNumberFilters: string[] = [
    'BedroomsTotal',
    'BathroomsTotalInteger',
    'LotSizeAcres',
    'LivingArea',
    'ListPrice',
    'YearBuilt',
  ]

  if (geoLocation.filter) {
    const filter = geoLocation.filter as Filter
    rangeNumberFilters.forEach(f => {
      if (filter[f]) {
        params[`${f}.gte`] = String(filter[f]?.gte)
        params[`${f}.lte`] = String(filter[f]?.lte)
      }
    })
  }

  const stringFilters: string[] = [
    'ElementarySchool',
    'MiddleOrJuniorSchool',
    'HighSchool',
    'PostalCode',
    'PropertyType',
    'PropertySubType',
    'StandardStatus',
    'City',
  ]

  if (geoLocation.filter) {
    const filter = geoLocation.filter as Record<string, string>
    stringFilters.forEach(f => {
      if (filter[f]) {
        params[f] = filter[f]
      }
    })
  }

  return params
}

const fetcher = async (key: string, geoLocation: GeoLocationState['geoLocation']) => {
  const increment = 9
  const index = key.split('/').at(-1) as string
  const initialOffset = Number.parseInt(index) - 1 // -1 to start in 0

  const params = {
    limit: increment.toString(),
    offset: `${initialOffset * increment}`,
    PropertyType: 'Residential',
    StandardStatus: 'Active',
    'PhotosCount.gte': '1', // There must be at least 1 photo
    'ListPrice.gt': '1', // Price cannot be 0
    sortBy: 'BridgeModificationTimestamp',
    order: 'desc',
  }
  const newParams = mountFilters(geoLocation, params)

  return getHouseListing({
    type: 'card-full-info',
    params: newParams,
    fetchOn: 'browser',
  })
}

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { data, error, size, setSize, mutate, isValidating } = useSWRInfinite(
    index => `search/${index + 1}`,
    key => fetcher(key, geoLocation)
  )

  useEffect(() => {
    mutate()
    setSize(1)
  }, [geoLocation, mutate, setSize])

  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isRefreshing = isValidating && data && data.length === size

  return {
    house: {
      timestamp: data?.at(-1)?.timestamp,
      listings: data?.reduce(
        (total, current) => [...total, ...current.listings],
        [] as FormattedHouseCard[]
      ),
      total: data?.at(-1)?.total,
    },
    isError: error,
    setSize,
    isLoadingMore,
    isRefreshing,
    isLoadingInitialData,
    isLoadingAll: isLoadingInitialData || isLoadingMore || isRefreshing,
  }
}
