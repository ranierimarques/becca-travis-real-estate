import {
  AboutHuntsville,
  Achievements,
  ClientTestimonials,
  Hero,
  NewToMarket,
  OurCommunities,
  RentToOwn,
  Services,
} from '@layout/index'
import { LastCall } from '@shared'
import type { NextPage } from 'next'
import Head from 'next/head'

const Page: NextPage = () => {
  return (
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
  )
}

export default Page
