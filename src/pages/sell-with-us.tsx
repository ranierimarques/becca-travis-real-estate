import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/sell-with-us/sections'

const Page: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Becca Travis"
        description="Find your dream home today | Becca Travis Real Estate Group"
        image="/sharing-cards/og-sellers.jpg"
        alt="Discover your home's true value and sell confidently"
      />

      <Hero />
    </main>
  )
}

export default Page
