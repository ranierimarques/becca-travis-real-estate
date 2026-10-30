import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Form, Hero } from '@/layout/free-property-evaluation/sections'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/free-property-evaluation"
        title="Free Home Evaluation | Becca Travis"
        description="Request a free property evaluation from Becca Travis Real Estate."
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
