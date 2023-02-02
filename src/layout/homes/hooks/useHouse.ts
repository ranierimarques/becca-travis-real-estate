import { getHouseListing } from '@/services/house-listings'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { useInfiniteQuery } from '@tanstack/react-query'
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

const fetcher = async (
  pageParam: number,
  geoLocation: GeoLocationState['geoLocation']
) => {
  const increment = 9

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

  return getHouseListing({
    type: 'card-full-info',
    params: {
      limit: increment.toString(),
      offset: `${pageParam * increment}`,
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
    },
    fetchOn: 'browser',
  })
}

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['search/houses', geoLocation],
    queryFn: ({ pageParam = 0 }) => fetcher(pageParam, geoLocation),
    getNextPageParam: (_, allPages) => allPages.length,
    refetchOnWindowFocus: false,
  })

  return {
    house: {
      timestamp: data?.pages?.at(-1)?.timestamp,
      listings: data?.pages?.reduce((total, current) => {
        return [...total, ...current.listings]
      }, [] as FormattedHouseCard[]),
      total: data?.pages?.at(-1)?.total,
    },
    isLoadingAll: rest.isInitialLoading || rest.isFetchingNextPage || rest.isRefetching,
    ...rest,
  }
}
