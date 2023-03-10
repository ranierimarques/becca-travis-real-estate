import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/sell-with-us/sections'

const meta = {
  title: 'Becca Travis',
  description: `Find your dream home today | Becca Travis Real Estate Group`,
  image: '/sharing-cards/og-sellers.jpg',
  alt: `Discover your home's true value and sell confidently`,
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
