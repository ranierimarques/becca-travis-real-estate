import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/404/sections'

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: 'https://beccatravis.com/sharing-cards/og-index.jpg',
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
    </main>
  )
}

export default Home
