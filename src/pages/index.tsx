import {
  AboutHuntsville,
  Hero,
  OurCommunities,
  RentToOwn,
  Services,
} from "@layout/index"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      <Services />
      <RentToOwn />
      <AboutHuntsville />
      <OurCommunities />
    </main>
  )
}

export default Home
