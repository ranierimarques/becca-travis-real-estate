import { DeepPartial } from '@/types/helpers'
import create from 'zustand'

type Properties<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T]

interface PropertyType {
  Residential: 'Residential'
  ResidentialIncome: 'Residential Income'
  ResidentialLease: 'Residential Lease'
  CommercialLease: 'Commercial Lease'
  BusinessOpportunity: 'Business Opportunity'
  Land: 'Land'
}

interface PropertySubType {
  SingleFamilyResidence: 'Single Family Residence'
  ManufacturedHome: 'Manufactured Home'
  Townhouse: 'Townhouse'
  'Farmw/Home': 'Farm w/Home'
  Condominium: 'Condominium'
  DeededRV: 'Deeded RV'
}

interface StandardStatus {
  Active: 'Active'
  Pending: 'Pending'
  Closed: 'Closed'
  ComingSoon: 'Coming Soon'
  Expired: 'Expired'
  Hold: 'Hold'
  ActiveUnderContract: 'Active Under Contract'
  Canceled: 'Canceled'
}

interface City {
  Addison: 'Addison'
  Albertville: 'Albertville'
  Alexandria: 'Alexandria'
  Altoona: 'Altoona'
  Anderson: 'Anderson'
  Anniston: 'Anniston'
  Arab: 'Arab'
  Ardmore: 'Ardmore'
  Arley: 'Arley'
  Ashville: 'Ashville'
}

export interface GeoLocation {
  address: string
  limit: number
  offset: number
  bounds: number[]
  box: string
  filter: {
    // BEDROOMS
    BedroomsTotal: {
      gte: string
      lte: string
    }
    // BATHROOMS
    BathroomsTotalInteger: {
      gte: string
      lte: string
    }
    // LOT SIZE
    LotSizeAcres: {
      gte: string
      lte: string
    }
    // PROPERTY SIZE
    LivingArea: {
      gte: string
      lte: string
    }
    // PRICE RANGE
    ListPrice: {
      gte: string
      lte: string
    }
    // YEAR BUILT
    YearBuilt: {
      gte: string
      lte: string
    }
    ElementarySchool: string
    MiddleOrJuniorSchool: string
    HighSchool: string
    PostalCode: string
    PropertyType: PropertyType
    PropertySubType: PropertySubType
    StandardStatus: StandardStatus
    City: City
  }
}

export type GeoLocationOptional = DeepPartial<GeoLocation>
export type SetFiltersSection = Properties<GeoLocation['filter'], object | string>
export type SetFilters = <T extends keyof GeoLocation['filter']>(
  section: T,
  newFilter: DeepPartial<GeoLocation['filter'][T]>
) => void

export interface GeoLocationState {
  geoLocation: GeoLocationOptional
  setGeoLocation: (geoLocation: GeoLocationOptional) => void
  setFilters: SetFilters
  resetFilters: () => void
}

export const useGeolocationStore = create<GeoLocationState>(set => ({
  geoLocation: {
    address: '',
    bounds: [],
    filter: {},
  },
  setGeoLocation: geoLocation => set(state => ({ ...state.geoLocation, geoLocation })),
  setFilters: (section, newFilters) =>
    set(state => ({
      geoLocation: {
        ...state.geoLocation,
        filter: {
          ...state.geoLocation.filter,
          [section]:
            typeof newFilters === 'object'
              ? {
                  ...(state.geoLocation.filter?.[section] as object),
                  ...(newFilters as object),
                }
              : newFilters,
        },
      },
    })),
  resetFilters: () =>
    set(state => ({
      geoLocation: {
        address: state.geoLocation.address,
        bounds: [],
        filter: {},
      },
    })),
}))
