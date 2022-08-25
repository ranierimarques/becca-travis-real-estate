import { Home } from "@layout/homes"
import Head from "next/head"

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

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.bridgedataoutput.com/api/v2/valleymls/listings/replication?access_token=c8c61ffc7e3cfcb91714551392eb82cd&limit=2000&PropertyType=Residential&StandardStatus=Active&fields=ListingId`
  )
  const data = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = data.bundle.map((house: { ListingId: number }) => ({
    params: { id: house.ListingId },
  }))

  console.log(paths)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `https://api.bridgedataoutput.com/api/v2/valleymls/listings?access_token=c8c61ffc7e3cfcb91714551392eb82cd&ListingId=${params.id}`
  )
  const data = await res.json()
  const bundle = data.bundle[0]

  return { props: { bundle } }
}
