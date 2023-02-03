import create from 'zustand'

interface PropertyType {
  Residential: 'Residential'
  ResidentialIncome: 'Residential Income'
  ResidentialLease: 'Residential Lease'
  CommercialLease: 'Commercial Lease'
  BusinessOpportunity: 'Business Opportunity'
  Land: 'Land'
}

interface PropertySubType {
  Apartment: 'Apartment'
  Business: 'Business'
  CommercialLot: 'COMMERCIAL LOT'
  DeededRv: 'Deeded RV Lots'
  Duplex: 'Duplex'
  Lot: 'LOT'
  PatioHome: 'Patio Home'
  Retail: 'Retail'
  UnimprovedLand: 'Unimproved Land'
}

interface StandardStatus {
  Active: 'Active'
  Pending: 'Pending'
  Closed: 'Closed'
  Sold: 'Sold'
  ComingSoon: 'Coming Soon'
  Expired: 'Expired'
  Hold: 'Hold'
  ActiveUnderContract: 'Active Under Contract'
  Canceled: 'Canceled'
}

interface City {
  Madison: 'Madison'
  Athens: 'Athens'
  Guntersville: 'Guntersville'
  Hartselle: 'Hartselle'
  Boaz: 'Boaz'
  FortPayne: 'Fort Payne'
  Fayetteville: 'Fayetteville'
  Southside: 'Southside'
  RainbowCity: 'Rainbow City'
  Attalla: 'Attalla'
}

interface GeoLocation {
  address?: string
  limit?: number
  offset?: number
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
  setGeoLocation: geoLocation => set(state => ({ ...state.geoLocation, geoLocation })),
}))
