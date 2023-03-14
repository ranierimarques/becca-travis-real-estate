import type { NextPage } from 'next'
import { RuntimeLoader } from '@rive-app/react-canvas'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/contact-us/sections'

const riveWasmUrl = 'https://unpkg.com/@rive-app/canvas/rive.wasm'

RuntimeLoader.setWasmUrl(riveWasmUrl)

const Home: NextPage = () => {
  return (
    <main>
      <MetaSEO
        title="Becca Travis"
        description="Find your dream home today | Becca Travis Real Estate Group"
        image="/sharing-cards/og-contact-us.jpg"
        alt="Contact Becca Travis today and start with the best realtor."
      >
        <link rel="preload" href={riveWasmUrl} as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/check.riv" as="fetch" crossOrigin="anonymous" />
      </MetaSEO>

      <Hero />
    </main>
  )
}

export default Home
