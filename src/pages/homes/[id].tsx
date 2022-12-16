import { Home } from '@/layout/homes-id/sections'
import { getHouseListing } from '@/services/house-listings'
import InferNextPropsType from 'infer-next-props-type'
import { GetStaticPaths, NextPage } from 'next'
import Head from 'next/head'

const Page: NextPage<InferNextPropsType<typeof getStaticProps>> = ({
  listing,
  relatedProperties,
}) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Home listing={listing} relatedProperties={relatedProperties} />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

type Params = {
  params: {
    id: string
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const house = await getHouseListing({ type: 'house', toURL: '/' + params.id })

  if (!house.success) return { notFound: true }

  const relatedProperties = await getHouseListing({
    type: 'card',
    params: {
      near: `${house.listing.coords[0]},${house.listing.coords[1]}`,
      'ListingId.ne': params.id,
    },
  })

  return {
    props: {
      listing: house.listing,
      relatedProperties,
    },
    revalidate: false,
  }
}

export default Page
