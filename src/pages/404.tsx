import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/404/sections'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="404: Page Not Found | Becca Travis"
        description="Page Not Found | Becca Travis"
        image="/sharing-cards/og-index.jpg"
        alt="Feel at home before finding the perfect property."
      />

      <Hero />
    </main>
  )
}

export default Home
