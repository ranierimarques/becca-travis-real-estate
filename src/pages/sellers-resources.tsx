import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero, SellingWithUs, WhyARealtor } from '@/layout/sellers-resources/sections'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/sellers-resources"
        title="Home Seller Resources | Becca Travis"
        description="Explore home selling resources and learn how Becca Travis supports sellers in North Alabama."
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
      />

      <Hero />
      <WhyARealtor />
      <SellingWithUs />
      <LastCall />
    </main>
  )
}

export default Home
