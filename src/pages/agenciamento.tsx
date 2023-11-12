import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import {
  Cascade,
  Contact,
  Experience,
  FinancialUnderstanding,
  Hero,
  ReachingYourGoals,
} from '@/layout/agenciamento/sections'

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
      <Experience />
      <Cascade />
      <ReachingYourGoals />
      <FinancialUnderstanding />
      <Contact />
    </main>
  )
}

export default Home
