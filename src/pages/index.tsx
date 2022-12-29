import {
  AboutHuntsville,
  Achievements,
  Hero,
  NewToMarket,
  OurCommunities,
  RentToOwn,
  Services,
} from '@/layout/index/sections'
import { getHouseListing } from '@/services/house-listings'
import { ClientTestimonials, LastCall } from '@/shared'
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
      <NewToMarket initialListings={listings} />
      <RentToOwn />
      <AboutHuntsville />
      <OurCommunities />
      {/* <ClientTestimonials /> */}
      {/* <LastCall /> */}
    </main>
  )
}

export const getStaticProps = async () => {
  const listings = await getHouseListing({ type: 'card', params: { limit: '4' } })

  return {
    props: {
      listings,
    },
    revalidate: 60 * 10, // 10 minutes
  }
}

export default Page
