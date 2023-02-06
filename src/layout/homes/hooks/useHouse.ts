import { getHouseListing } from '@/services/house-listings'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useGeolocationStore, type GeoLocationOptional } from '../store/geolocation'

function getRangeNumberFilters(geoLocation: GeoLocationOptional) {
  const rangeNumberFilters = [
    'BedroomsTotal',
    'BathroomsTotalInteger',
    'LotSizeAcres',
    'LivingArea',
    'ListPrice',
    'YearBuilt',
  ] as const

  return rangeNumberFilters.reduce((total, param) => {
    return {
      ...total,
      [`${param}.gte`]: geoLocation.filter?.[param]?.gte?.toString(),
      [`${param}.lte`]: geoLocation.filter?.[param]?.lte?.toString(),
    }
  }, {} as Record<`${typeof rangeNumberFilters[number]}.${'gte' | 'lte'}`, string | undefined>)
}

function getStringFilters(geoLocation: GeoLocationOptional) {
  const stringFilters = [
    'ElementarySchool',
    'MiddleOrJuniorSchool',
    'HighSchool',
    'PostalCode',
  ] as const

  return stringFilters.reduce((total, param) => {
    return { ...total, [param]: geoLocation?.filter?.[param] }
  }, {} as Record<typeof stringFilters[number], string | undefined>)
}

function getBox(geoLocation: GeoLocationOptional) {
  if (geoLocation?.bounds && geoLocation.bounds.length >= 3) {
    return geoLocation.bounds.join(',')
  }

  return undefined
}

function getCheckboxesFilters(geoLocation: GeoLocationOptional) {
  const checkboxesFiltersParams = [
    'PropertyType',
    'PropertySubType',
    'StandardStatus',
    'City',
  ] as const

  return checkboxesFiltersParams.reduce((total, param) => {
    const values = Object.values(geoLocation?.filter?.[param] ?? {})
    const query = values.filter(value => value !== undefined).toString()

    return { ...total, [`${param}.in`]: query !== '' ? query : undefined }
  }, {} as Record<`${typeof checkboxesFiltersParams[number]}.in`, string | undefined>)
}

const fetcher = async (pageParam: number, geoLocation: GeoLocationOptional) => {
  const increment = 9

  const gteAndLteFilters = getRangeNumberFilters(geoLocation)
  const othersFilters = getStringFilters(geoLocation)
  const box = getBox(geoLocation)
  const checkboxesFilters = getCheckboxesFilters(geoLocation)

  return getHouseListing({
    type: 'card-full-info',
    params: {
      limit: increment.toString(),
      offset: `${pageParam * increment}`,
      'PhotosCount.gte': '1', // There must be at least 1 photo
      'ListPrice.gt': '1', // Price cannot be 0
      sortBy: 'BridgeModificationTimestamp',
      order: 'desc',
      'UnparsedAddress.in': geoLocation.address !== '' ? geoLocation.address : undefined,
      box,
      ...checkboxesFilters,
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
    staleTime: 1000 * 60, // 1 minute
    retry: 3, // 3 attempts
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
