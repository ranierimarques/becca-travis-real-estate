import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '@/layout/404/sections'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
    </main>
  )
}

export default Home
