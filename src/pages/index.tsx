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
import { SWRConfig } from 'swr'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <main>
        <Head>
          <title>Becca Travis</title>
        </Head>

        <Hero />
        <Services />
        <Achievements />
        <NewToMarket />
        <RentToOwn />
        <AboutHuntsville />
        <OurCommunities />
        <ClientTestimonials />
        <LastCall />
      </main>
    </SWRConfig>
  )
}

export const getStaticProps = async () => {
  const listings = await getHouseListing({ type: 'card' })

  return {
    props: {
      fallback: {
        '/home/houses': listings,
      },
    },
    revalidate: 60 * 30, // 30 minutes
  }
}

export default Page
