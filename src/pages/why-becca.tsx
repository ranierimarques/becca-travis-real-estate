import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Awards, Hero, History, WhiteGlove } from '@/layout/why-becca/sections'
import { ClientTestimonials, LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/why-becca"
        title="Meet Becca Travis | Huntsville Real Estate"
        description="Learn about Becca Travis, her real estate experience, and her approach to serving North Alabama clients."
        image="/sharing-cards/og-why-becca.jpg"
        alt="From finding your dream home to negotiating terms on your behalf."
      />

      <Hero />
      <History />
      <Awards />
      <WhiteGlove />
      <ClientTestimonials />
      <LastCall />
    </main>
  )
}

export default Home
