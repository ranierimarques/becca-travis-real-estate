import { getHouseListing } from '@/services/house-listings'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { useEffect } from 'react'
import useSWRInfinite from 'swr/infinite'
import { useGeolocationStore, type GeoLocationState } from '../store/geolocation'

const rangeNumberFilters = [
  'BedroomsTotal',
  'BathroomsTotalInteger',
  'LotSizeAcres',
  'LivingArea',
  'ListPrice',
  'YearBuilt',
] as const

const stringFilters = [
  'ElementarySchool',
  'MiddleOrJuniorSchool',
  'HighSchool',
  'PostalCode',
  'PropertyType',
  'PropertySubType',
  'StandardStatus',
  'City',
] as const

const fetcher = async (key: string, geoLocation: GeoLocationState['geoLocation']) => {
  const increment = 9
  const index = key.split('/').at(-1) as string
  const initialOffset = Number.parseInt(index) - 1 // -1 to start in 0

  const gteAndLteFilters = rangeNumberFilters.reduce((total, param) => {
    return {
      ...total,
      [`${param}.gte`]: geoLocation.filter?.[param]?.gte?.toString(),
      [`${param}.lte`]: geoLocation.filter?.[param]?.lte?.toString(),
    }
  }, {} as Record<`${typeof rangeNumberFilters[number]}.${'gte' | 'lte'}`, string | undefined>)

  const othersFilters = stringFilters.reduce((total, param) => {
    return { ...total, [param]: geoLocation?.filter?.[param] }
  }, {} as Record<typeof stringFilters[number], string | undefined>)

  const params = {
    limit: increment.toString(),
    offset: `${initialOffset * increment}`,
    'PhotosCount.gte': '1', // There must be at least 1 photo
    'ListPrice.gt': '1', // Price cannot be 0
    sortBy: 'BridgeModificationTimestamp',
    order: 'desc',
    'UnparsedAddress.in': geoLocation.address,
    box:
      geoLocation?.bounds && geoLocation.bounds.length >= 3
        ? geoLocation.bounds.join(',')
        : undefined,
    ...gteAndLteFilters,
    ...othersFilters,
  }

  return getHouseListing({
    type: 'card-full-info',
    params: params,
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

  const listings = data?.reduce((total, current) => {
    return [...total, ...current.listings]
  }, [] as FormattedHouseCard[])

  return {
    house: {
      timestamp: data?.at(-1)?.timestamp,
      listings,
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
