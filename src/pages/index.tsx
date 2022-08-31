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
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'

const Page: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export default Page

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://api.bridgedataoutput.com/api/v2/valleymls/listings?access_token=c8c61ffc7e3cfcb91714551392eb82cd&limit=3&sortBy=BridgeModificationTimestamp&order=desc&PropertyType=Residential&StandardStatus=Active'
  )
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
