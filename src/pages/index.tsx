import {
  AboutHuntsville,
  Achievements,
  Hero,
  NewToMarket,
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
      <Achievements />
      <NewToMarket />
      <RentToOwn />
      <AboutHuntsville />
      <OurCommunities />
    </main>
  )
}

export default Home
