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

const options = {
  method: 'GET',
  headers: { Authorization: 'Bearer c8c61ffc7e3cfcb91714551392eb82cd' },
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.bridgedataoutput.com/api/v2/valleymls/listings?limit=25&PropertyType=Residential&StandardStatus=Active&fields=Media.MediaURL%2CListPrice%2CUnparsedAddress%2CLivingArea%2CBathroomsTotalInteger%2CBedroomsTotal%2CListingId&PhotosCount.gte=1&ListPrice.gt=1`,
    options
  )
  const data = await res.json()
  const bundle = data.bundle

  return { props: { bundle } }
}
