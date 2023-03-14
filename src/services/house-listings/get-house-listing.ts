import { convertSquareFeets } from '@/resources/utils/convert'
import { formatToDollar } from '@/resources/utils/currency'
import { getFormattedDate } from '@/resources/utils/date'
import { GetHouseListing, House, HouseCard, Params, ReturnType, Type } from './types'

const baseURL = 'https://api.bridgedataoutput.com/api/v2/valleymls/listings'
const defaultParams: Params = {
  limit: '3',
  'PropertyType.in': 'Residential',
  'StandardStatus.in': 'Active',
  fields:
    // Return only this values
    'Media.MediaURL,ListPrice,StandardStatus,UnparsedAddress,LivingArea,BathroomsTotalInteger,BedroomsTotal,ListingId,Latitude,Longitude',
  sortBy: 'BridgeModificationTimestamp',
  order: 'desc',
}

function getAuthorization(fetchOn: 'browser' | 'server') {
  const token =
    fetchOn === 'browser'
      ? process.env.NEXT_PUBLIC_BRIDGE_API_KEY
      : process.env.BRIDGE_API_KEY

  return {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  }
}

// This function remove parameters when value of key isn't a string
function getValidParams(params: Params) {
  const filteredParams = Object.entries(params).filter(
    ([, value]) => typeof value === 'string'
  )
  return Object.fromEntries(filteredParams)
}

export async function getHouseListing<T extends Type, P extends Params>({
  type,
  params,
  fetchOn = 'server',
  toURL = '',
}: GetHouseListing<T, P>): Promise<ReturnType<T>> {
  const authorization = getAuthorization(fetchOn)

  if (type === 'house') {
    const newParams = {
      fields:
        'Media.MediaURL,PublicRemarks,ListPrice,UnparsedAddress,LivingArea,BathroomsTotalInteger,BedroomsTotal,ListingId,StandardStatus,LotSizeSquareFeet,SubdivisionName,PropertySubType,CountyOrParish,CityRegion,FoundationDetails,Levels,BuildingAreaTotal,NewConstructionYN,PropertyCondition,PropertyType,Sewer,WaterSource,ElementarySchool,MiddleOrJuniorSchool,HighSchool,Coordinates',
    }
    const endpoint = baseURL + toURL + '?' + new URLSearchParams(newParams)

    const response = await fetch(endpoint, authorization)
    const house: House = await response.json()

    const listing = {
      id: house.bundle.ListingId,
      price: formatToDollar(house.bundle.ListPrice),
      priceNumber: house.bundle.ListPrice,
      address: house.bundle.UnparsedAddress,
      status: house.bundle.StandardStatus,
      lastUpdated: house.bundle.BridgeModificationTimestamp,
      lastUpdatedTitle: getFormattedDate(
        house.bundle.BridgeModificationTimestamp,
        'MMMM D, YYYY [at] h:mm:ss A [UTC]Z'
      ),
      media: house.bundle.Media?.map(media => media.MediaURL) ?? null,
      bathroomsTotal: house.bundle.BathroomsTotalInteger,
      bedroomsTotal: house.bundle.BedroomsTotal,
      lotSizeSquareFeet: convertSquareFeets(house.bundle.LotSizeSquareFeet),
      subdivisionName: house.bundle.SubdivisionName,
      propertySubType: house.bundle.PropertySubType,
      countyOrParish: house.bundle.CountyOrParish,
      cityRegion: house.bundle.CityRegion,
      foundationDetails: house.bundle.FoundationDetails,
      levels: house.bundle.Levels,
      buildingTotalArea: house.bundle.LivingArea,
      newConstruction: house.bundle.NewConstructionYN,
      propertyCondition: house.bundle.PropertyCondition,
      propertyType: house.bundle.PropertyType,
      sewer: house.bundle.Sewer,
      waterSource: house.bundle.WaterSource,
      elementarySchool: house.bundle.ElementarySchool,
      middleSchool: house.bundle.MiddleOrJuniorSchool,
      highSchool: house.bundle.HighSchool,
      publicRemarks: house.bundle.PublicRemarks,
      coords: house.bundle.Coordinates,
    }

    return {
      success: house.success,
      listing,
    } as ReturnType<T>
  }

  const newParams = { ...defaultParams, ...params }
  const validParams = getValidParams(newParams)

  const endpoint = baseURL + toURL + '?' + new URLSearchParams(validParams)

  const response = await fetch(endpoint, authorization)
  const house: HouseCard = await response.json()

  const listings = house.bundle.map(listing => {
    if (!listing) return []

    return {
      id: listing.ListingId,
      media: listing.Media?.[0].MediaURL ?? null,
      status: listing.StandardStatus,
      price: formatToDollar(listing.ListPrice),
      address: listing.UnparsedAddress,
      bedroomsTotal: listing.BedroomsTotal,
      bathroomsTotal: listing.BathroomsTotalInteger,
      livingArea: convertSquareFeets(listing.LivingArea),
      coordinates: {
        latitude: listing.Latitude,
        longitude: listing.Longitude,
      },
    }
  })

  if (type === 'card') {
    return listings as ReturnType<T>
  } else {
    return {
      listings,
      timestamp: house.bundle[0]?.BridgeModificationTimestamp,
      total: house.total,
    } as ReturnType<T>
  }
}
