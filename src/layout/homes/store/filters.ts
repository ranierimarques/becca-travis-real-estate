import create from 'zustand'
import { DeepPartial } from '@/types/helpers'

interface PropertyType {
  Residential?: 'Residential'
  ResidentialIncome?: 'Residential Income'
  ResidentialLease?: 'Residential Lease'
  CommercialLease?: 'Commercial Lease'
  BusinessOpportunity?: 'Business Opportunity'
  Land?: 'Land'
}

interface PropertySubType {
  SingleFamilyResidence?: 'Single Family Residence'
  ManufacturedHome?: 'Manufactured Home'
  Townhouse?: 'Townhouse'
  'Farmw/Home'?: 'Farm w/Home'
  Condominium?: 'Condominium'
  DeededRV?: 'Deeded RV'
}

interface StandardStatus {
  Active?: 'Active'
  Pending?: 'Pending'
  Closed?: 'Closed'
  ComingSoon?: 'Coming Soon'
  Expired?: 'Expired'
  Hold?: 'Hold'
  ActiveUnderContract?: 'Active Under Contract'
  Canceled?: 'Canceled'
}

interface City {
  Addison?: 'Addison'
  Albertville?: 'Albertville'
  Alexandria?: 'Alexandria'
  Altoona?: 'Altoona'
  Anderson?: 'Anderson'
  Anniston?: 'Anniston'
  Arab?: 'Arab'
  Ardmore?: 'Ardmore'
  Arley?: 'Arley'
  Ashville?: 'Ashville'
}

export interface Filters {
  address: string
  bounds: number[]
  // BEDROOMS
  BedroomsTotal: {
    gte: string | undefined
    lte: string | undefined
  }
  // BATHROOMS
  BathroomsTotalInteger: {
    gte: string | undefined
    lte: string | undefined
  }
  // LOT SIZE
  LotSizeAcres: {
    gte: string | undefined
    lte: string | undefined
  }
  // PROPERTY SIZE
  LivingArea: {
    gte: string | undefined
    lte: string | undefined
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
  PropertyType?: PropertyType
  PropertySubType?: PropertySubType
  StandardStatus?: StandardStatus
  City?: City
}

export type SetFilters = <T extends keyof Filters>(
  section: T,
  newFilter: DeepPartial<Filters[T]>
) => void

export interface FiltersState {
  filters: Filters
  setFilters: SetFilters
  resetFilters: () => void
}

const initialState: Filters = {
  address: '',
  bounds: [] as number[],
  BathroomsTotalInteger: {
    gte: undefined,
    lte: undefined,
  },
  BedroomsTotal: {
    gte: undefined,
    lte: undefined,
  },
  LotSizeAcres: {
    gte: undefined,
    lte: undefined,
  },
  LivingArea: {
    gte: undefined,
    lte: undefined,
  },
  ListPrice: {
    gte: '',
    lte: '',
  },
  YearBuilt: {
    gte: '',
    lte: '',
  },
  ElementarySchool: '',
  HighSchool: '',
  MiddleOrJuniorSchool: '',
  PostalCode: '',
  PropertyType: {
    Residential: 'Residential',
  },
  StandardStatus: {
    Active: 'Active',
  },
} as const

export const useFiltersStore = create<FiltersState>(set => ({
  filters: initialState,
  setFilters: (section, newFilters) =>
    set(state => ({
      filters: {
        ...state.filters,
        [section]:
          typeof newFilters === 'object'
            ? {
                ...(state.filters[section] as object),
                ...(newFilters as object),
              }
            : newFilters,
      },
    })),
  resetFilters: () =>
    set(state => ({
      filters: {
        ...initialState,
        address: state.filters.address,
      },
    })),
}))
