import { Home } from '@layout/homes'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export default function HomePage({ bundle }: any) {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Home data={bundle} />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://api.bridgedataoutput.com/api/v2/valleymls/listings?access_token=c8c61ffc7e3cfcb91714551392eb82cd&ListingId=${params?.id}`
  )
  const data = await res.json()

  return { props: { bundle: data.bundle[0] } }
}
