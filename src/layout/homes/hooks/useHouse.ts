import { getHouseListing } from '@/services/house-listings'
import useSWR, { preload } from 'swr'
import { useGeolocationStore, type GeoLocationState } from '../store/geolocation'
import { useHousesListStore } from '@/layout/homes/store/housesList'
import { FormattedHouseCard } from '@/services/house-listings/types'

type Fetcher = [string, GeoLocationState['geoLocation']]

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

  const rangeNumberfilters: string[] = [
    'BedroomsTotal',
    'BathroomsTotalInteger',
    'LotSizeAcres',
    'LivingArea',
    'ListPrice',
    'YearBuilt',
  ]

  if (geoLocation.filter) {
    const filter = geoLocation.filter as Filter
    rangeNumberfilters.forEach(f => {
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

const fetcher = async ([, geoLocation]: Fetcher) => {
  const params = {
    limit: '50',
    PropertyType: 'Residential',
    StandardStatus: 'Active',
    'PhotosCount.gte': '1', // There must be at least 1 photo
    'ListPrice.gt': '1', // Price cannot be 0
    sortBy: 'BridgeModificationTimestamp',
    order: 'desc',
  } as Record<string, string>
  const newParams = mountFilters(geoLocation, params)

  return getHouseListing({
    type: 'card-full-info',
    params: newParams,
    fetchOn: 'browser',
  })
}

preload(['houses', ''], fetcher)

export function useHouse() {
  const geoLocation = useGeolocationStore(state => state.geoLocation)
  const setHousesList = useHousesListStore(state => state.setHousesList)
  const currentHousesList = useHousesListStore(state => state.housesList)

  const { data, error } = useSWR(['houses', geoLocation], fetcher, {
    keepPreviousData: true,
  })

  if (data) {
    // vem do scroll infinito essa propriedade, pra mandter exibindo as casas anteriores
    if (geoLocation.keepPreviousHouses) {
      const nonDuplicateListings: FormattedHouseCard[] = []
      currentHousesList.listings.concat(data.listings).forEach(listing => {
        if (!nonDuplicateListings.find(l => l.id === listing.id)) {
          nonDuplicateListings.push(listing)
        }
      })

      setHousesList({
        listings: nonDuplicateListings,
        timestamp: data.timestamp,
        total: data.total,
      })
    } else {
      setHousesList(data)
    }
  }

  return {
    house: {
      ...data,
    },
    isLoading: !error && !data,
    isError: error,
  }
}
