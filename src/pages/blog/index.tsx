import type { NextPage } from "next"
import Head from "next/head"

import { Hero, Latest } from "@layout/blog"

const Blog: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Hero />
      <Latest />
    </main>
  )
}

export default Blog
