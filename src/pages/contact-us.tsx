import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/contact-us/sections'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/contact-us"
        title="Contact Becca Travis | Huntsville Real Estate"
        description="Contact Becca Travis Real Estate with questions about buying or selling a home in North Alabama."
        image="/sharing-cards/og-contact-us.jpg"
        alt="Contact Becca Travis today and start with the best REALTOR®."
      />

      <Hero />
    </main>
  )
}

export default Home
