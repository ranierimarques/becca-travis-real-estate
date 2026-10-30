import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero, SellingWithUs, WhyARealtor } from '@/layout/sellers-resources/sections'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/sellers-resources"
        title="Home Seller Resources | Becca Travis"
        description="Explore home selling resources and learn how Becca Travis supports sellers in North Alabama."
        image="/sharing-cards/og-sellers.jpg"
        alt="Discover your home's true value and sell confidently"
      />

      <Hero />
      <WhyARealtor />
      <SellingWithUs />
      <LastCall />
    </main>
  )
}

export default Home
