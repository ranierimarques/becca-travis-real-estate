import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/404/sections'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/404"
        noindex
        title="404: Page Not Found | Becca Travis"
        description="Page Not Found | Becca Travis"
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
      />

      <Hero />
    </main>
  )
}

export default Home
