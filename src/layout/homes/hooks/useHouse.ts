import { useInfiniteQuery } from '@tanstack/react-query'
import useDebounce from '@/resources/hooks/useDebounce'
import { getHouseListing } from '@/services/house-listings'
import { FormattedHouseCard } from '@/services/house-listings/types'
import { Filters, useFiltersStore } from '../store/filters'

function getSelectAndInputRangeFilters(filters: Filters) {
  const selectAndInputRangeParams = [
    'BedroomsTotal',
    'BathroomsTotalInteger',
    'LotSizeAcres',
    'LivingArea',
    'ListPrice',
    'YearBuilt',
  ] as const

  return selectAndInputRangeParams.reduce((total, param) => {
    const gteValue = filters[param].gte ?? ''
    const lteValue = filters[param].lte ?? ''

    return {
      ...total,
      [`${param}.gte`]: Number.parseInt(gteValue, 10) >= 0 ? gteValue : undefined,
      [`${param}.lte`]: Number.parseInt(lteValue, 10) >= 0 ? lteValue : undefined,
    }
  }, {} as Record<`${typeof selectAndInputRangeParams[number]}.${'gte' | 'lte'}`, string | undefined>)
}

function getInputFilters(filters: Filters) {
  const inputParams = [
    'ElementarySchool',
    'MiddleOrJuniorSchool',
    'HighSchool',
    'PostalCode',
  ] as const

  return inputParams.reduce((total, param) => {
    return {
      ...total,
      [`${param}.eq`]: filters[param] !== '' ? filters[param] : undefined,
    }
  }, {} as Record<`${typeof inputParams[number]}.eq`, string | undefined>)
}

function getCheckboxesFilters(filters: Filters) {
  const checkboxesParams = [
    'PropertyType',
    'PropertySubType',
    'StandardStatus',
    'City',
  ] as const

  return checkboxesParams.reduce((total, param) => {
    const values = Object.values(filters[param] ?? {})
    const query = values.filter(value => value !== undefined).toString()

    return { ...total, [`${param}.in`]: query !== '' ? query : undefined }
  }, {} as Record<`${typeof checkboxesParams[number]}.in`, string | undefined>)
}

function getMapBoundsFilter(filters: Filters) {
  return { box: filters.bounds.length >= 3 ? filters.bounds.join(',') : undefined }
}

function getAddressFilter(filters: Filters) {
  return { 'UnparsedAddress.in': filters.address !== '' ? filters.address : undefined }
}

const INCREMENT = 50

const fetcher = async (pageParam: number, filters: Filters) => {
  const selectAndInputRangeFilters = getSelectAndInputRangeFilters(filters)
  const inputFilters = getInputFilters(filters)
  const checkboxesFilters = getCheckboxesFilters(filters)
  const mapBoundsFilter = getMapBoundsFilter(filters)
  const addressFilter = getAddressFilter(filters)

  return getHouseListing({
    type: 'card-full-info',
    params: {
      limit: INCREMENT.toString(),
      offset: `${pageParam * INCREMENT}`,
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
  const filters = useFiltersStore(state => state.filters)
  const filtersDebounced = useDebounce(filters, 800)
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['search/houses', filtersDebounced],
    queryFn: ({ pageParam = 0 }) => fetcher(pageParam, filtersDebounced),
    getNextPageParam: (_, allPages) => {
      if (allPages[0].total - allPages.length * INCREMENT <= 0) return undefined
      return allPages.length
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, // 1 minute
  })

  const listings = data?.pages.reduce((total, current) => {
    return [...total, ...current.listings]
  }, [] as FormattedHouseCard[])

  const house = {
    timestamp: data?.pages.at(-1)?.timestamp,
    listings,
    total: data?.pages.at(-1)?.total,
  }

  const isLoadingAll =
    rest.isInitialLoading || rest.isFetchingNextPage || rest.isRefetching

  return { house, isLoadingAll, ...rest }
}
