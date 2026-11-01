import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero, SellingWithUs, WhyARealtor } from '@/layout/sellers-resources/sections'
import { WarrantyResourceLink } from '@/layout/site-tools/arw-warranty-closing-hub/warranty-resource-link'
import { EstatePropertyOrganizer } from '@/layout/site-tools/estate-property-organizer/estate-property-organizer'
import { SmartConcessionOptimizer } from '@/layout/site-tools/smart-concession-optimizer/smart-concession-optimizer'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/sellers-resources"
        title="Home Seller Resources | Becca Travis"
        description="Explore North Alabama seller resources, organize estate-property details, model seller credits, and compare Alabama home warranty plans."
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
      />

      <Hero />
      <WhyARealtor />
      <SellingWithUs />
      <EstatePropertyOrganizer />
      <SmartConcessionOptimizer />
      <WarrantyResourceLink audience="sellers" />
      <LastCall />
    </main>
  )
}

export default Home
