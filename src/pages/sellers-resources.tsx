import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Hero,
  Sellers,
  SellingWithUs,
  WhyARealtor,
} from '@/layout/sellers-resources/sections'
import { LastCall } from '@/shared'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      <WhyARealtor />
      <Sellers />
      <SellingWithUs />
      <LastCall />
    </main>
  )
}

export default Home
