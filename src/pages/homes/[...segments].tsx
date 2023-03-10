import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { Home } from '@/layout/homes-id/sections'
import { convertToSlug } from '@/resources/utils/convert'
import { getHouseListing } from '@/services/house-listings'
import { LastCall } from '@/shared'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ listing }) => {
  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Home key={listing.id} listing={listing} />
      <LastCall />
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
  params?: {
    segments: string[]
  }
}

export const getStaticProps = async ({ params }: Params) => {
  const house = await getHouseListing({ type: 'house', toURL: '/' + params?.segments[0] })

  if (!house.success || !params || params.segments.length >= 3) return { notFound: true }

  const sluggedAddress = convertToSlug(house.listing.address)

  if (params.segments[1] !== sluggedAddress) {
    return {
      redirect: {
        destination: `/homes/${params?.segments[0]}/${sluggedAddress}`,
        permanent: true,
      },
    }
  }

  const relatedProperties = await getHouseListing({
    type: 'card',
    params: {
      near: `${house.listing.coords[0]},${house.listing.coords[1]}`,
      'ListingId.ne': house.listing.id,
    },
  })

  return {
    props: {
      listing: house.listing,
      fallback: {
        '/homes/related-properties': relatedProperties,
      },
    },
    revalidate: 60 * 30, // 30 minutes
  }
}

export default Page
