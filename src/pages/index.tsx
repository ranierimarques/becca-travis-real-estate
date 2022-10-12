import {
  AboutHuntsville,
  Achievements,
  Hero,
  NewToMarket,
  OurCommunities,
  RentToOwn,
  Services,
} from '@layout/index/sections'
import { ClientTestimonials, LastCall } from '@shared'
import { convertSquareFeets } from '@utils/convert'
import { formatToDollar } from '@utils/currency'
import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ listings }) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      <Services />
      <Achievements />
      <NewToMarket listings={listings} />
      <RentToOwn />
      <AboutHuntsville />
      <OurCommunities />
      <ClientTestimonials />
      <LastCall />
    </main>
  )
}

type FetchTypes = {
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
  }[]
  total: number
}

const endpoint =
  'https://api.bridgedataoutput.com/api/v2/valleymls/listings?limit=3&sortBy=BridgeModificationTimestamp&order=desc&PropertyType=Residential&StandardStatus=Active&fields=Media.MediaURL%2CListPrice%2CUnparsedAddress%2CLivingArea%2CBathroomsTotalInteger%2CBedroomsTotal%2CListingId&PhotosCount.gte=1&ListPrice.gt=1'

const options = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.BRIDGE_API_KEY}` },
} as RequestInit

export const getStaticProps = async () => {
  const response = await fetch(endpoint, options)
  const data = (await response.json()) as FetchTypes

  const listings = data.bundle.map(listing => ({
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
      listings,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}

export default Page
