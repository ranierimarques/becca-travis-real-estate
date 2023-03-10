import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/sell-with-us/sections'

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: '/sharing-cards/og-image.jpg',
  alt: `Feel at home before finding the perfect property.`,
  url: 'https://beccatravis.com/',
}

const Page: NextPage = () => {
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
    </main>
  )
}

export default Page
