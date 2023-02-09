import { getHouseListing } from '@/services/house-listings'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useGeolocationStore, type GeoLocationOptional } from '../store/geolocation'

function getSelectFilters(geoLocation: GeoLocationOptional) {
  const selectParams = [
    'BedroomsTotal',
    'BathroomsTotalInteger',
    'LotSizeAcres',
    'LivingArea',
  ] as const

  return selectParams.reduce((total, param) => {
    const gteValue = geoLocation.filter?.[param]?.gte
    const lteValue = geoLocation.filter?.[param]?.lte

    return {
      ...total,
      [`${param}.gte`]: gteValue !== 'default' ? gteValue : undefined,
      [`${param}.lte`]: lteValue !== 'default' ? lteValue : undefined,
    }
  }, {} as Record<`${typeof selectParams[number]}.${'gte' | 'lte'}`, string | undefined>)
}

function getStringFilters(geoLocation: GeoLocationOptional) {
  const stringFilters = [
    'ElementarySchool',
    'MiddleOrJuniorSchool',
    'HighSchool',
    'PostalCode',
  ] as const

  return stringFilters.reduce((total, param) => {
    return { ...total, [`${param}.eq`]: geoLocation?.filter?.[param] }
  }, {} as Record<`${typeof stringFilters[number]}.eq`, string | undefined>)
}

function getMapBoundsFilter(geoLocation: GeoLocationOptional) {
  if (geoLocation?.bounds && geoLocation.bounds.length >= 3) {
    return { box: geoLocation.bounds.join(',') }
  }

  return { box: undefined }
}

function getCheckboxesFilters(geoLocation: GeoLocationOptional) {
  const checkboxesParams = [
    'PropertyType',
    'PropertySubType',
    'StandardStatus',
    'City',
  ] as const

  return checkboxesParams.reduce((total, param) => {
    const values = Object.values(geoLocation?.filter?.[param] ?? {})
    const query = values.filter(value => value !== undefined).toString()

    return { ...total, [`${param}.in`]: query !== '' ? query : undefined }
  }, {} as Record<`${typeof checkboxesParams[number]}.in`, string | undefined>)
}

function getInputFilters(geoLocation: GeoLocationOptional) {
  const inputParams = ['ListPrice', 'YearBuilt'] as const

  return inputParams.reduce((total, param) => {
    const gteValue = geoLocation.filter?.[param]?.gte ?? ''
    const lteValue = geoLocation.filter?.[param]?.lte ?? ''

    return {
      ...total,
      [`${param}.gte`]: Number.parseInt(gteValue, 10) >= 0 ? gteValue : undefined,
      [`${param}.lte`]: Number.parseInt(lteValue, 10) >= 0 ? lteValue : undefined,
    }
  }, {} as Record<`${typeof inputParams[number]}.${'gte' | 'lte'}`, string | undefined>)
}

const INCREMENT = 9

const fetcher = async (pageParam: number, geoLocation: GeoLocationOptional) => {
  const othersFilters = getStringFilters(geoLocation)
  const selectFilters = getSelectFilters(geoLocation)
  const inputFilters = getInputFilters(geoLocation)
  const mapBoundsFilter = getMapBoundsFilter(geoLocation)
  const checkboxesFilters = getCheckboxesFilters(geoLocation)

  return getHouseListing({
    type: 'card-full-info',
    params: {
      limit: INCREMENT.toString(),
      offset: `${pageParam * INCREMENT}`,
      'PhotosCount.gte': '1', // There must be at least 1 photo
      sortBy: 'BridgeModificationTimestamp',
      order: 'desc',
      'UnparsedAddress.in': geoLocation.address !== '' ? geoLocation.address : undefined,
      ...selectFilters,
      ...othersFilters,
      ...inputFilters,
      ...mapBoundsFilter,
      ...checkboxesFilters,
    },
    fetchOn: 'browser',
  })
}

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['search/houses', geoLocation],
    queryFn: ({ pageParam = 0 }) => fetcher(pageParam, geoLocation),
    getNextPageParam: (_, allPages) => {
      if (allPages[0].total - allPages.length * INCREMENT <= 0) return undefined
      return allPages.length
    },
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
