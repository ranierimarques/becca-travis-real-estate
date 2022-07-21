import { Hero, History } from "@layout/why-becca"
import { ClientTestimonials, LastCall } from "@shared"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      <History />
      <ClientTestimonials />
      <LastCall />
    </main>
  )
}

export default Home
