import { AboutHuntsville, Hero, OurCommunities, Services } from "@layout/index"
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
      <AboutHuntsville />
      <OurCommunities />
    </main>
  )
}

export default Home
