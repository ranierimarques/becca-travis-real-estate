import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/contact-us/sections'
import { LastCall } from '@/shared'

const LetsTalk: NextPage = () => (
  <main>
    <MetaSEO
      title="Let's talk real estate | Becca Travis"
      description="Get in touch with Becca Travis about buying or selling a home."
      image="/sharing-cards/og-contact-us.jpg"
      alt="Contact Becca Travis"
    />
    <Hero />
    <LastCall />
  </main>
)

export default LetsTalk
