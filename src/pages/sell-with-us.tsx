import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/sell-with-us/sections'

const Page: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Sell with us | Becca Travis"
        description="Start your house selling journey with Becca's expertise | Becca Travis"
        image="/sharing-cards/og-sellers.jpg"
        alt="Discover your home's true value and sell confidently"
      />

      <Hero />
    </main>
  )
}

export default Page
