import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import {
  Hero,
  Sellers,
  SellingWithUs,
  WhyARealtor,
} from '@/layout/sellers-resources/sections'
import { LastCall } from '@/shared'

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: '/sharing-cards/og-image.jpg',
  alt: `Feel at home before finding the perfect property.`,
  url: 'https://beccatravis.com/',
}

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title={meta.title}
        description={meta.description}
        image={meta.image}
        alt={meta.alt}
        url={meta.url}
      />

      <Hero />
      <WhyARealtor />
      <Sellers />
      <SellingWithUs />
      <LastCall />
    </main>
  )
}

export default Home
