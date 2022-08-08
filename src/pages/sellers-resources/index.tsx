import { Sellers } from "@layout/sellers-resources"
import { LastCall } from "@shared"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Sellers />
      <LastCall />
    </main>
  )
}

export default Home
