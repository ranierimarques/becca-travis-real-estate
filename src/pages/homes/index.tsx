import { Homes } from '@layout/homes'
import Head from 'next/head'

export default function PostPage({ bundle }: any) {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Homes data={bundle} />
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.bridgedataoutput.com/api/v2/valleymls/listings/replication?access_token=c8c61ffc7e3cfcb91714551392eb82cd&limit=25&PropertyType=Residential&StandardStatus=Active`
  )
  const data = await res.json()
  const bundle = data.bundle

  return { props: { bundle } }
}
