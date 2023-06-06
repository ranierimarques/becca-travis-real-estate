import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero, SellingWithUs, WhyARealtor } from '@/layout/sellers-resources/sections'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Sellers Resources | Becca Travis"
        description="Learn how we work and ensure your goals are my goals every step of the way | Becca Travis"
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
