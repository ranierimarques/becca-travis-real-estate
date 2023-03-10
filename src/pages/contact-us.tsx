import type { NextPage } from 'next'
import { RuntimeLoader } from '@rive-app/react-canvas'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/contact-us/sections'

const riveWasmUrl = 'https://unpkg.com/@rive-app/canvas/rive.wasm'

RuntimeLoader.setWasmUrl(riveWasmUrl)

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: 'https://beccatravis.com/sharing-cards/og-image.jpg',
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
      >
        <link rel="preload" href={riveWasmUrl} as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/check.riv" as="fetch" crossOrigin="anonymous" />
      </MetaSEO>

      <Hero />
    </main>
  )
}

export default Home
