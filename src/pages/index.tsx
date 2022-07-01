import { Hero, OurCommunities } from "@layout/index"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      <OurCommunities />
    </main>
  )
}

export default Home
