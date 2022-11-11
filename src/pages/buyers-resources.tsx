import { HuntsvilleInformation } from '@/layout/buyers-resources/sections'
import type { NextPage } from 'next'
import Head from 'next/head'

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
