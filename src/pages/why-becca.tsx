import type { NextPage } from 'next'
import Head from 'next/head'
import { Awards, Hero, History, WhiteGlove } from '@/layout/why-becca/sections'
import { ClientTestimonials, LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

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
