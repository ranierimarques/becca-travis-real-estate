import { Hero } from '@layout/contact-us/sections'
import riveWasmUrl from '@rive-app/canvas/rive.wasm'
import { RuntimeLoader } from '@rive-app/react-canvas'
import type { NextPage } from 'next'
import Head from 'next/head'

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
