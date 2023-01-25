import {
  Hero,
  Sellers,
  SellingWithUs,
  WhyARealtor,
} from '@/layout/sellers-resources/sections'
import { LastCall } from '@/shared'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      {/* <WhyARealtor /> */}
      {/* <Sellers /> */}
      {/* <SellingWithUs /> */}
      {/* <LastCall /> */}
    </main>
  )
}

export default Home
