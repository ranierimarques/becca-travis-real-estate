<<<<<<< HEAD
import { FormattedHouseCard } from '@/services/house-listings/types'

export type FormattedHouseCards = FormattedHouseCard[]
=======
export type HouseCard = {
  success: boolean
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
    Latitude: number
    Longitude: number
  }[]
  total: number
}
>>>>>>> 2f3df9d22c2d914895baff2b8053202c0d3a3923
