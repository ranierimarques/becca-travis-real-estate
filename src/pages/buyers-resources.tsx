import type { NextPage } from 'next'
import Head from 'next/head'
import { HuntsvilleInformation } from '@/layout/buyers-resources/sections'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <HuntsvilleInformation />
    </main>
  )
}

export default Home
