import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/sell-with-us/sections'

const Page: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/sell-with-us"
        title="Sell Your Home | Becca Travis"
        description="Start a conversation with Becca Travis about selling your home in North Alabama."
        image="/sharing-cards/og-sellers.jpg"
        alt="Discover your home's true value and sell confidently"
      />

      <Hero />
    </main>
  )
}

export default Page
