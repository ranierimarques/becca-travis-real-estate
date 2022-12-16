import { FormattedHouseCards } from '@/types/houses'

export type HouseCard = {
  success: string
  status: number
  bundle: {
    LivingArea: number
    BedroomsTotal: number
    BridgeModificationTimestamp: string
    Media: {
      MediaURL: string
    }[]
    ListingId: string
    ListPrice: number
    BathroomsTotalInteger: number
    UnparsedAddress: string
    ListingKey: string
    FeedTypes: []
    url: string
  }[]
  total: number
}

export type FormattedHouseCard = {
  id: string
  media: string
  price: string
  address: string
  bedroomsTotal: number
  bathroomsTotal: number
  livingArea: string
}

type FormattedHouseCardsWithAdditionalInfo = {
  listings: FormattedHouseCards
  timestamp: string
  total: number
}

export type House = {
  success: boolean
  status: number
  bundle: {
    LotSizeSquareFeet: number
    BedroomsTotal: number
    BridgeModificationTimestamp: string
    MlsStatus:
      | 'ACTIVE'
      | 'Active – Non Compliance'
      | 'Cancelled'
      | 'Coming Soon'
      | 'Contingent'
      | 'Expired'
      | 'Expired Provisional'
      | 'Leased'
      | 'Office Exclusive'
      | 'Pending'
      | 'Provisional'
      | 'Sold'
      | 'Temporarily Off Market'
    Media: {
      MediaURL: string
    }[]
    ListingId: string
    ListPrice: number
    BathroomsTotalInteger: number
    UnparsedAddress: string
    ListingKey: string
    FeedTypes: []
    PropertySubType: string
    CountyOrParish: string
    SubdivisionName: string
    CityRegion: string | null
    FoundationDetails: string
    Levels: string
    BuildingAreaTotal: string
    NewConstructionYN: string
    PropertyCondition: string
    PropertyType: string
    Sewer: string
    WaterSource: string
    ElementarySchool: string
    MiddleOrJuniorSchool: string
    HighSchool: string
    Coordinates: string[]
    url: string
  }
}

type FormattedHouse = {
  success: boolean
  listing: {
    price: string
    address: string
    status:
      | 'ACTIVE'
      | 'Active – Non Compliance'
      | 'Cancelled'
      | 'Coming Soon'
      | 'Contingent'
      | 'Expired'
      | 'Expired Provisional'
      | 'Leased'
      | 'Office Exclusive'
      | 'Pending'
      | 'Provisional'
      | 'Sold'
      | 'Temporarily Off Market'
    lastUpdated: string
    lastUpdatedTitle: string
    media: string[]
    bathroomsTotal: number
    bedroomsTotal: number
    lotSizeSquareFeet: string
    subdivisionName: string
    propertySubType: string
    countyOrParish: string
    cityRegion: string | null
    foundationDetails: string
    levels: string
    buildingTotalArea: string
    newConstruction: string
    propertyCondition: string
    propertyType: string
    sewer: string
    waterSource: string
    elementarySchool: string
    middleSchool: string
    highSchool: string
    coords: string[]
  }
}

export type Type = 'card' | 'card-full-info' | 'house'

export type GetHouseListing<T> = {
  type: T
  params?: {
    limit?: string
    PropertyType?: string
    StandardStatus?: string
    fields?: string
    'PhotosCount.gte'?: string
    'ListPrice.gt'?: string
    'UnparsedAddress.in'?: string
    sortBy?: string
    order?: string
    near?: string
    'ListingId.ne'?: string
  }
  fetchOn?: 'browser' | 'server'
  toURL?: string
}

export type ReturnType<T> = T extends 'card'
  ? FormattedHouseCards
  : T extends 'card-full-info'
  ? FormattedHouseCardsWithAdditionalInfo
  : FormattedHouse
