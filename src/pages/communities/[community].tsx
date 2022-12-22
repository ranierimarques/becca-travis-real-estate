import {
  About,
  CommunityMap,
  Demographics,
  Hero,
  Homes,
  MarketTrends,
  Schools,
  Yelp,
} from '@/layout/communities/sections'
import { convertSquareFeets } from '@/resources/utils/convert'
import { formatToDollar } from '@/resources/utils/currency'
import { LastCall } from '@/shared'
import { HouseCard } from '@/types/houses'
import type { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'

const Page: NextPage = ({ data, listings, community }: any) => {
  const capitalizedCommunityName = community.charAt(0).toUpperCase() + community.slice(1)

  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero communityName={capitalizedCommunityName} />
      <About communityName={capitalizedCommunityName} />
      <Demographics communityName={capitalizedCommunityName} />
      <MarketTrends communityName={capitalizedCommunityName} />
      <Schools communityName={capitalizedCommunityName} />
      <CommunityMap communityName={capitalizedCommunityName} />
      <Homes listings={listings} communityName={capitalizedCommunityName} />
      <Yelp data={data} communityName={capitalizedCommunityName} />
      <LastCall />
    </main>
  )
}

export interface FetchTypes {
  businesses: {
    id: string
    alias: string
    name: string
    image_url: string
    is_closed: boolean
    url: string
    review_count: number
    categories: Category[]
    rating: number
    coordinates: Coordinates
    transactions: string[]
    price: string
    location: Location
    phone: string
    display_phone: string
    distance: number
  }
}

export interface Category {
  alias: string
  title: string
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface Location {
  address1: string
  address2: string
  address3: string
  city: string
  zip_code: string
  country: string
  state: string
  display_address: string[]
}

const endpoint = 'https://api.yelp.com/v3/businesses'

const bridgeEndpoint =
  'https://api.bridgedataoutput.com/api/v2/valleymls/listings?limit=6&sortBy=BridgeModificationTimestamp&order=desc&PropertyType=Residential&StandardStatus=Active&fields=Media.MediaURL%2CListPrice%2CUnparsedAddress%2CLivingArea%2CBathroomsTotalInteger%2CBedroomsTotal%2CListingId&PhotosCount.gte=1&ListPrice.gt=1&City=Huntsville'

const bridgeOptions = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.BRIDGE_API_KEY}` },
} as RequestInit

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}` },
} as RequestInit

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const response = await fetch(
    endpoint + `/search?location=${params?.community}&sort_by=review_count&limit=6`,
    options
  )

  const data = (await response.json()) as FetchTypes

  const bridgeResponse = await fetch(bridgeEndpoint, bridgeOptions)
  const bridgeData = (await bridgeResponse.json()) as HouseCard

  const listings = bridgeData.bundle.map(listing => ({
    id: listing.ListingId,
    media: listing.Media[0].MediaURL,
    price: formatToDollar(listing.ListPrice),
    address: listing.UnparsedAddress,
    bedroomsTotal: listing.BedroomsTotal,
    bathroomsTotal: listing.BathroomsTotalInteger,
    livingArea: convertSquareFeets(listing.LivingArea),
  }))

  return {
    props: {
      community: params?.community,
      data: data.businesses,
      listings,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { community: 'huntsville' } },
      { params: { community: 'athens' } },
      { params: { community: 'harvest' } },
      { params: { community: 'hamptom-cove' } },
      { params: { community: 'decatur' } },
      { params: { community: 'meridianville' } },
    ],
    fallback: false,
  }
}

export default Page
