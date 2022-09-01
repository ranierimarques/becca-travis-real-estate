import {
  AboutHuntsville,
  Achievements,
  Hero,
  NewToMarket,
  OurCommunities,
  RentToOwn,
  Services,
} from '@layout/index'
import { ClientTestimonials, LastCall } from '@shared'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'

const Page: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      <Services />
      <Achievements />
      <NewToMarket data={data} />
      <RentToOwn />
      <AboutHuntsville />
      <OurCommunities />
      <ClientTestimonials />
      <LastCall />
    </main>
  )
}

const options = {
  method: 'GET',
  headers: { Authorization: 'Bearer c8c61ffc7e3cfcb91714551392eb82cd' },
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://api.bridgedataoutput.com/api/v2/valleymls/listings?limit=3&sortBy=BridgeModificationTimestamp&order=desc&PropertyType=Residential&StandardStatus=Active&fields=Media.MediaURL%2CListPrice%2CUnparsedAddress%2CLivingArea%2CBathroomsTotalInteger%2CBedroomsTotal%2CListingId&PhotosCount.gte=1&ListPrice.gt=1',
    options
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}

export default Page
