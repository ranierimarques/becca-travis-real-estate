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
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
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
