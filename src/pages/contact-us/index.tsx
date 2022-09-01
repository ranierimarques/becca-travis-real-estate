import { ContactUs } from '@layout/contact-us'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <ContactUs />
    </main>
  )
}

export default Home
