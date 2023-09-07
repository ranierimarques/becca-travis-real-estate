import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Form, Hero } from '@/layout/free-property-evaluation/sections'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Becca Travis Real Estate"
        description="Find your dream home today | Becca Travis"
        image="/sharing-cards/og-index.jpg"
        alt="Feel at home before finding the perfect property."
      />

      <Hero />
      <Form />
      <LastCall />
    </main>
  )
}

export default Home
