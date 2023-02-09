import { getHouseListing } from '@/services/house-listings'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useGeolocationStore, type GeoLocationOptional } from '../store/geolocation'

function getSelectAndInputRangeFilters(geoLocation: GeoLocationOptional) {
  const selectAndInputRangeParams = [
    'BedroomsTotal',
    'BathroomsTotalInteger',
    'LotSizeAcres',
    'LivingArea',
    'ListPrice',
    'YearBuilt',
  ] as const

  return selectAndInputRangeParams.reduce((total, param) => {
    const gteValue = geoLocation.filter?.[param]?.gte ?? ''
    const lteValue = geoLocation.filter?.[param]?.lte ?? ''

    return {
      ...total,
      [`${param}.gte`]: Number.parseInt(gteValue, 10) >= 0 ? gteValue : undefined,
      [`${param}.lte`]: Number.parseInt(lteValue, 10) >= 0 ? lteValue : undefined,
    }
  }, {} as Record<`${typeof selectAndInputRangeParams[number]}.${'gte' | 'lte'}`, string | undefined>)
}

function getInputFilters(geoLocation: GeoLocationOptional) {
  const inputParams = [
    'ElementarySchool',
    'MiddleOrJuniorSchool',
    'HighSchool',
    'PostalCode',
  ] as const

  return inputParams.reduce((total, param) => {
    return { ...total, [`${param}.eq`]: geoLocation.filter?.[param] }
  }, {} as Record<`${typeof inputParams[number]}.eq`, string | undefined>)
}

function getCheckboxesFilters(geoLocation: GeoLocationOptional) {
  const checkboxesParams = [
    'PropertyType',
    'PropertySubType',
    'StandardStatus',
    'City',
  ] as const

  return checkboxesParams.reduce((total, param) => {
    const values = Object.values(geoLocation.filter?.[param] ?? {})
    const query = values.filter(value => value !== undefined).toString()

    return { ...total, [`${param}.in`]: query !== '' ? query : undefined }
  }, {} as Record<`${typeof checkboxesParams[number]}.in`, string | undefined>)
}

function getMapBoundsFilter(geoLocation: GeoLocationOptional) {
  if (geoLocation.bounds && geoLocation.bounds.length >= 3) {
    return { box: geoLocation.bounds.join(',') }
  }

  return { box: undefined }
}

function getAddressFilter(geoLocation: GeoLocationOptional) {
  return {
    'UnparsedAddress.in': geoLocation.address !== '' ? geoLocation.address : undefined,
  }
}

const INCREMENT = 9

const fetcher = async (pageParam: number, geoLocation: GeoLocationOptional) => {
  const selectAndInputRangeFilters = getSelectAndInputRangeFilters(geoLocation)
  const inputFilters = getInputFilters(geoLocation)
  const checkboxesFilters = getCheckboxesFilters(geoLocation)
  const mapBoundsFilter = getMapBoundsFilter(geoLocation)
  const addressFilter = getAddressFilter(geoLocation)

  return getHouseListing({
    type: 'card-full-info',
    params: {
      limit: INCREMENT.toString(),
      offset: `${pageParam * INCREMENT}`,
      'PhotosCount.gte': '1', // There must be at least 1 photo
      sortBy: 'BridgeModificationTimestamp',
      order: 'desc',
      ...selectAndInputRangeFilters,
      ...inputFilters,
      ...checkboxesFilters,
      ...mapBoundsFilter,
      ...addressFilter,
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
      timestamp: data?.pages.at(-1)?.timestamp,
      listings: data?.pages.reduce((total, current) => {
        return [...total, ...current.listings]
      }, [] as FormattedHouseCard[]),
      total: data?.pages.at(-1)?.total,
    },
    isLoadingAll: rest.isInitialLoading || rest.isFetchingNextPage || rest.isRefetching,
    ...rest,
  }
}
