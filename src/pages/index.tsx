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
      {/* <NewToMarket data={data} /> */}
      {JSON.stringify(data, null, 2)}
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

function formatToDollar(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    'https://api.bridgedataoutput.com/api/v2/valleymls/listings?limit=3&sortBy=BridgeModificationTimestamp&order=desc&PropertyType=Residential&StandardStatus=Active&fields=Media.MediaURL%2CListPrice%2CUnparsedAddress%2CLivingArea%2CBathroomsTotalInteger%2CBedroomsTotal%2CListingId&PhotosCount.gte=1&ListPrice.gt=1',
    options
  )
  const data1 = await res.json()

  const data = data1.bundle.map((a: any) => formatToDollar(a.ListPrice))

  return {
    props: {
      data,
    },
    revalidate: 60 * 30, // 30 minutes
  }
}

export default Page
