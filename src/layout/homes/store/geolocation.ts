import { DeepPartial } from '@/types/helpers'
import create from 'zustand'

type ObjectProperties<T> = { [K in keyof T]: T[K] extends object ? K : never }[keyof T]

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
    BedroomsTotal: {
      // BEDROOMS
      gte: number
      lte: number
    }
    BathroomsTotalInteger: {
      // BATHROOMS
      gte: number
      lte: number
    }
    LotSizeAcres: {
      // LOT SIZE
      gte: number
      lte: number
    }
    LivingArea: {
      // PROPERTY SIZE
      gte: number
      lte: number
    }
    ListPrice: {
      // PRICE RANGE
      gte: number
      lte: number
    }
    YearBuilt: {
      // YEAR BUILT
      gte: number
      lte: number
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
export type SetFiltersSection = ObjectProperties<GeoLocation['filter']>

export interface GeoLocationState {
  geoLocation: GeoLocationOptional
  setGeoLocation: (geoLocation: GeoLocationOptional) => void
  setFilters: <T extends SetFiltersSection>(
    section: T,
    filter: DeepPartial<GeoLocation['filter'][T]>
  ) => void
  resetFilters: () => void
}

export const useGeolocationStore = create<GeoLocationState>(set => ({
  geoLocation: {
    address: '',
    bounds: [],
    filter: {},
  },
  setGeoLocation: geoLocation => set(state => ({ ...state.geoLocation, geoLocation })),
  setFilters: (section, filter) =>
    set(state => ({
      geoLocation: {
        ...state.geoLocation,
        filter: {
          ...state.geoLocation.filter,
          [section]: {
            ...state.geoLocation.filter?.[section],
            ...filter,
          },
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
