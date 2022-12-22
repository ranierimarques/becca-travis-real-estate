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
  bounds?: number[]
  filter?: {
    BedroomsTotal?: {
      // BEDROOMS
      gte: number
      lte: number
    }
    BathroomsTotal?: {
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
    ElementarySchool?: {
      // ELEMENTARY SCHOOL
      in: string
    }
    MiddleOrJuniorSchool?: {
      // MIDDLE SCHOOL
      in: string
    }
    HighSchool?: {
      // HIGH SCHOOL
      in: string
    }
    PostalCode?: {
      // ZIP CODE
      in: string
    }
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
