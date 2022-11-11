import { Hero } from '@/layout/contact-us/sections'
import { RuntimeLoader } from '@rive-app/react-canvas'
import type { NextPage } from 'next'
import Head from 'next/head'

const riveWasmUrl = 'https://unpkg.com/@rive-app/canvas/rive.wasm'

RuntimeLoader.setWasmUrl(riveWasmUrl)

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
        <link rel="preload" href={riveWasmUrl} as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/check.riv" as="fetch" crossOrigin="anonymous" />
      </Head>

      <Hero />
    </main>
  )
}

export default Home
