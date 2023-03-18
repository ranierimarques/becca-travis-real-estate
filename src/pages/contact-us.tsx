import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/contact-us/sections'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Contact us | Becca Travis"
        description="Need help? Send us a message | Becca Travis"
        image="/sharing-cards/og-contact-us.jpg"
        alt="Contact Becca Travis today and start with the best realtor."
      />

      <Hero />
    </main>
  )
}

export default Home
