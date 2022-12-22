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
  const capitalizedCommunityName = community[0].toUpperCase() + community.slice(1)

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
  headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}` },
} as RequestInit

type Params = {
  params: {
    community: string
  }
}

export async function getStaticProps({ params }: Params) {
  const response = await fetch(
    endpoint + `/search?location=${params.community}&sort_by=review_count&limit=6`,
    options
  )

  const data = (await response.json()) as FetchTypes

  const listings = await getHouseListing({
    type: 'card',
    params: { City: params.community, limit: '6' },
  })

  return {
    props: {
      community: params.community,
      data: data.businesses,
      listings,
    },
  }
}

export default Page
