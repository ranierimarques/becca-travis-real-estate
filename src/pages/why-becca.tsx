import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Awards, Hero, History, WhiteGlove } from '@/layout/why-becca/sections'
import { ClientTestimonials, LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Why Becca? | Becca Travis"
        description="Why Becca Travis should be your first choice | Becca Travis"
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
