import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import {
  AboutHuntsville,
  Achievements,
  BuyerPaths,
  Hero,
  NewToMarket,
  OurCommunities,
  Services,
} from '@/layout/index/sections'
import { ClientTestimonials, LastCall } from '@/shared'

const Page: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/"
        title="Huntsville Real Estate | Becca Travis"
        description="Explore homes and communities in Huntsville and North Alabama with Becca Travis Real Estate."
        image="/sharing-cards/og-index.jpg"
        alt="Feel at home before finding the perfect property."
      />

      <Hero />
      <BuyerPaths />
      <Services />
      <Achievements />
      <NewToMarket />
      <AboutHuntsville />
      <OurCommunities />
      <ClientTestimonials />
      <LastCall />
    </main>
  )
}

export default Page
