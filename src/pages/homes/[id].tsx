import { Home } from '@layout/homes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export default function HomePage({ bundle }: any) {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      {/* <Home data={bundle} /> */}
      {JSON.stringify(bundle, null, 2)}
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const options = {
  method: 'GET',
  headers: { Authorization: 'Bearer c8c61ffc7e3cfcb91714551392eb82cd' },
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://api.bridgedataoutput.com/api/v2/valleymls/listings?ListingId=${params?.id}`,
    options
  )
  const data = await res.json()

  if (data.total === 0) {
    return { notFound: true }
  }

  return { props: { bundle: data.bundle[0] } }
}
