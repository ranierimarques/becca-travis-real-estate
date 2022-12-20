import { convertSquareFeets } from '@/resources/utils/convert'
import { formatToDollar } from '@/resources/utils/currency'
import { getDate } from '@/resources/utils/date'
import { GetHouseListing, House, HouseCard, ReturnType, Type } from './types'

const baseURL = 'https://api.bridgedataoutput.com/api/v2/valleymls/listings'
const defaultParams = {
  limit: '3',
  PropertyType: 'Residential',
  StandardStatus: 'Active',
  fields:
    // Return only this values
    'Media.MediaURL,ListPrice,UnparsedAddress,LivingArea,BathroomsTotalInteger,BedroomsTotal,ListingId,Latitude,Longitude',
  'PhotosCount.gte': '1', // There must be at least 1 photo
  'ListPrice.gt': '1', // Price cannot be 0
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

export async function getHouseListing<T extends Type>({
  type,
  params,
  fetchOn = 'server',
  toURL = '',
}: GetHouseListing<T>): Promise<ReturnType<T>> {
  const authorization = getAuthorization(fetchOn)

  if (type === 'house') {
    const newParams = {
      fields:
        'Media.MediaURL,ListPrice,UnparsedAddress,LivingArea,BathroomsTotalInteger,BedroomsTotal,ListingId,MlsStatus,LotSizeSquareFeet,SubdivisionName,PropertySubType,CountyOrParish,CityRegion,FoundationDetails,Levels,BuildingAreaTotal,NewConstructionYN,PropertyCondition,PropertyType,Sewer,WaterSource,ElementarySchool,MiddleOrJuniorSchool,HighSchool,Coordinates',
    }
    const endpoint = baseURL + toURL + '?' + new URLSearchParams(newParams)

    const response = await fetch(endpoint, authorization)
    const house: House = await response.json()

    const listing = {
      id: house.bundle.ListingId,
      price: formatToDollar(house.bundle.ListPrice),
      address: house.bundle.UnparsedAddress,
      status: house.bundle.MlsStatus,
      lastUpdated: house.bundle.BridgeModificationTimestamp,
      lastUpdatedTitle: getDate(
        house.bundle.BridgeModificationTimestamp,
        'en-US',
        'full'
      ),
      media: house.bundle.Media.map(media => media.MediaURL),
      bathroomsTotal: house.bundle.BathroomsTotalInteger,
      bedroomsTotal: house.bundle.BedroomsTotal,
      lotSizeSquareFeet: convertSquareFeets(house.bundle.LotSizeSquareFeet),
      subdivisionName: house.bundle.SubdivisionName,
      propertySubType: house.bundle.PropertySubType,
      countyOrParish: house.bundle.CountyOrParish,
      cityRegion: house.bundle.CityRegion,
      foundationDetails: house.bundle.FoundationDetails,
      levels: house.bundle.Levels,
      buildingTotalArea: house.bundle.BuildingAreaTotal,
      newConstruction: house.bundle.NewConstructionYN,
      propertyCondition: house.bundle.PropertyCondition,
      propertyType: house.bundle.PropertyType,
      sewer: house.bundle.Sewer,
      waterSource: house.bundle.WaterSource,
      elementarySchool: house.bundle.ElementarySchool,
      middleSchool: house.bundle.MiddleOrJuniorSchool,
      highSchool: house.bundle.HighSchool,
      coords: house.bundle.Coordinates,
    }

    return <ReturnType<T>>{
      success: house.success,
      listing,
    }
  }

  const newParams = { ...defaultParams, ...params }
  const endpoint = baseURL + toURL + '?' + new URLSearchParams(newParams)

  const response = await fetch(endpoint, authorization)
  const house: HouseCard = await response.json()

  const listings = house.bundle.map(listing => ({
    id: listing.ListingId,
    media: listing.Media[0].MediaURL,
    price: formatToDollar(listing.ListPrice),
    address: listing.UnparsedAddress,
    bedroomsTotal: listing.BedroomsTotal,
    bathroomsTotal: listing.BathroomsTotalInteger,
    livingArea: convertSquareFeets(listing.LivingArea),
    coordinates: {
      latitude: listing.Latitude,
      longitude: listing.Longitude,
    },
  }))

  if (type === 'card') {
    return <ReturnType<T>>listings
  } else {
    return <ReturnType<T>>{
      listings,
      timestamp: house.bundle[0].BridgeModificationTimestamp,
      total: house.total,
    }
  }
}
