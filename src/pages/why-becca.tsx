import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Awards, Hero, History, WhiteGlove } from '@/layout/why-becca/sections'
import { ClientTestimonials, LastCall } from '@/shared'

const meta = {
  title: 'Becca Travis',
  description: `Find your dream home today | Becca Travis Real Estate Group`,
  image: 'https://beccatravis.com/sharing-cards/og-why-becca.jpg',
  alt: `From finding your dream home to negotiating terms on your behalf.`,
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
      <History />
      <Awards />
      <WhiteGlove />
      <ClientTestimonials />
      <LastCall />
    </main>
  )
}

export default Home
