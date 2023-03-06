import { FormattedHouseCards } from '@/types/houses'

export type HouseCard = {
  success: string
  status: number
  bundle: (
    | {
        LivingArea: number
        BedroomsTotal: number
        BridgeModificationTimestamp: string
        Media?: {
          MediaURL: string
        }[]
        ListingId: string
        StandardStatus:
          | 'Active'
          | 'Coming Soon'
          | 'Pending'
          | 'Hold'
          | 'Active Under Contract'
          | 'Closed'
          | 'Expired'
          | 'Canceled'
        ListPrice: number
        BathroomsTotalInteger: number
        UnparsedAddress: string
        ListingKey: string
        Latitude: number
        Longitude: number
        FeedTypes: []
        url: string
      }
    | undefined
  )[]
  total: number
}

export type FormattedHouseCard = {
  id: string
  media: string | undefined
  status:
    | 'Active'
    | 'Coming Soon'
    | 'Pending'
    | 'Hold'
    | 'Active Under Contract'
    | 'Closed'
    | 'Expired'
    | 'Canceled'
  price: string
  address: string
  bedroomsTotal: number
  bathroomsTotal: number
  livingArea: string
  coordinates: {
    latitude: number
    longitude: number
  }
}

export type FormattedHouseCardsWithAdditionalInfo = {
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
    StandardStatus:
      | 'Active'
      | 'Coming Soon'
      | 'Pending'
      | 'Hold'
      | 'Active Under Contract'
      | 'Closed'
      | 'Expired'
      | 'Canceled'
    Media?: {
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
    PublicRemarks: string
    HighSchool: string
    Coordinates: string[]
    url: string
  }
}

export type FormattedHouse = {
  success: boolean
  listing: {
    id: string
    price: string
    address: string
    status:
      | 'Active'
      | 'Coming Soon'
      | 'Pending'
      | 'Hold'
      | 'Active Under Contract'
      | 'Closed'
      | 'Expired'
      | 'Canceled'
    lastUpdated: string
    lastUpdatedTitle: string
    media: string[] | null
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
    publicRemarks: string
    priceNumber: number
    coords: string[]
  }
}

export type Type = 'card' | 'card-full-info' | 'house'

export type Params = {
  limit?: string
  offset?: string
  fields?: string
  sortBy?: string
  order?: string
  near?: string
  box?: string
  'PropertyType.in'?: string
  'PropertySubType.in'?: string
  'StandardStatus.in'?: string
  'City.in'?: string
  'UnparsedAddress.in'?: string
  'ListingId.ne'?: string
  'BedroomsTotal.gte'?: string
  'BedroomsTotal.lte'?: string
  'BathroomsTotalInteger.gte'?: string
  'BathroomsTotalInteger.lte'?: string
  'LotSizeAcres.gte'?: string
  'LotSizeAcres.lte'?: string
  'LivingArea.gte'?: string
  'LivingArea.lte'?: string
  'ListPrice.gte'?: string
  'ListPrice.lte'?: string
  'YearBuilt.gte'?: string
  'YearBuilt.lte'?: string
  'ElementarySchool.eq'?: string
  'MiddleOrJuniorSchool.eq'?: string
  'HighSchool.eq'?: string
  'PostalCode.eq'?: string
}

type NoExtraProperties<T, U> = U & Record<Exclude<keyof U, keyof T>, never>

export type GetHouseListing<T, P> = {
  type: T
  params?: NoExtraProperties<Params, P>
  fetchOn?: 'browser' | 'server'
  toURL?: string
}

export type ReturnType<T> = T extends 'card'
  ? FormattedHouseCards
  : T extends 'card-full-info'
  ? FormattedHouseCardsWithAdditionalInfo
  : FormattedHouse
