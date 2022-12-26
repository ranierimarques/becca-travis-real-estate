import create from 'zustand'

enum PropertyType {
  Residential = 'Residential',
  Land = 'Land',
  BusinessOpportunity = 'Business Opportunity',
  ResidentialIncome = 'Residential Income',
}

enum PropertySubType {
  SingleFamilyResidence = 'Single Family Residence',
  ManufacturedHome = 'Manufactured Home',
  Condominium = 'Condominium',
  DeededRv = 'Deeded RV',
  Townhouse = 'Townhouse',
  FarmWhome = 'Farm w/Home',
}

enum StandardStatus {
  Active = 'Active',
  Pending = 'Pending',
  Sold = 'Sold',
  ComingSoon = 'Coming Soon',
  ActiveUnderContract = 'Active Under Contract',
}

enum City {
  Addison = 'Addison',
  Alexandria = 'Alexandria',
  Anderson = 'Anderson',
  Arab = 'Arab',
  Arley = 'Arley',
  Albertville = 'Albertville',
  Altoona = 'Altoona',
  Anniston = 'Anniston',
  Ardmore = 'Ardmore',
  Ashville = 'Ashville',
}
interface GeoLocation {
  address?: string
  limit?: number
  offset?: number
  keepPreviousHouses?: boolean
  bounds?: number[]
  box?: string
  filter?: {
    BedroomsTotal?: {
      // BEDROOMS
      gte: number
      lte: number
    }
    BathroomsTotalInteger?: {
      // BATHROOMS
      gte: number
      lte: number
    }
    LotSizeAcres?: {
      // LOT SIZE
      gte: number
      lte: number
    }
    LivingArea?: {
      // PROPERTY SIZE
      gte: number
      lte: number
    }
    ListPrice?: {
      // PRICE RANGE
      gte: number
      lte: number
    }
    YearBuilt?: {
      // YEAR BUILT
      gte: number
      lte: number
    }
    ElementarySchool?: string
    MiddleOrJuniorSchool?: string
    HighSchool?: string
    PostalCode?: string
    PropertyType?: PropertyType
    PropertySubType?: PropertySubType
    StandardStatus?: StandardStatus
    City?: City
  }
}

export interface GeoLocationState {
  geoLocation: GeoLocation
  setGeoLocation: (geoLocation: GeoLocation) => void
}

export const useGeolocationStore = create<GeoLocationState>(set => ({
  geoLocation: {
    address: '',
    bounds: [],
    filter: {},
  },
  setGeoLocation: geoLocation => set({ geoLocation }),
}))
