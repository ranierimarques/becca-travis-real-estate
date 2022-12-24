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
import { getHouseListing } from '@/services/house-listings'
import { LastCall } from '@/shared'
import type { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

type PageWithStaticProps = NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const Page: PageWithStaticProps = ({ data, listings, community }) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero communityName={community} />
      <About communityName={community} />
      <Demographics communityName={community} />
      <MarketTrends communityName={community} />
      <Schools communityName={community} />
      <CommunityMap communityName={community} />
      <Homes listings={listings} communityName={community} />
      <Yelp data={data} communityName={community} />
      <LastCall />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { community: 'huntsville' } },
      { params: { community: 'athens' } },
      { params: { community: 'harvest' } },
      { params: { community: 'hampton-cove' } },
      { params: { community: 'decatur' } },
      { params: { community: 'meridianville' } },
    ],
    fallback: false,
  }
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
    transactions: string[]
    price: string
    location: Location
    phone: string
    display_phone: string
    distance: number
  }[]
}

export interface Category {
  alias: string
  title: string
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

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
} as RequestInit

type Params = {
  params: {
    community: string
  }
}

export async function getStaticProps({ params }: Params) {
  const isAthens = params.community === 'athens'
  const community = params.community.replace('-', ' ')

  const response = await fetch(
    endpoint +
      `/search?location=${
        isAthens ? 'athens, alabama' : community
      }&sort_by=review_count&limit=6`,
    options
  )

  const data = (await response.json()) as FetchTypes

  const listings = await getHouseListing({
    type: 'card',
    params: { City: community, limit: '6' },
  })

  console.log(listings)

  return {
    props: {
      community: community,
      data: data.businesses,
      listings,
    },
  }
}

export default Page
