import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import {
  Hero,
  Sellers,
  SellingWithUs,
  WhyARealtor,
} from '@/layout/sellers-resources/sections'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Becca Travis"
        description="Find your dream home today | Becca Travis Real Estate Group"
        image="/sharing-cards/og-sellers.jpg"
        alt="Discover your home's true value and sell confidently"
      />

      <Hero />
      <WhyARealtor />
      <Sellers />
      <SellingWithUs />
      <LastCall />
    </main>
  )
}

export default Home
