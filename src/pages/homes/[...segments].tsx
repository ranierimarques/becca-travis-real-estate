import { GetStaticPaths, InferGetStaticPropsType, NextPage } from 'next'
import { MetaSEO } from '@/common'
import { Home } from '@/layout/homes-id/sections'
import { convertToSlug } from '@/resources/utils/convert'
import { getHouseListing } from '@/services/house-listings'
import { LastCall } from '@/shared'

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: 'https://beccatravis.com/sharing-cards/og-image.jpg',
  alt: '',
  url: 'https://beccatravis.com/',
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ listing }) => {
  return (
    <main>
      <MetaSEO
        title={`${listing.address} | Becca Travis`}
        description={`This property features ${listing.bedroomsTotal} Bedrooms, 
        ${listing.bathroomsTotal} Bathrooms and a total of ${listing.buildingTotalArea}
         square feet of building area. Find out more at beccatravis.com`}
        image={`/api/og?title=${listing.address}&image=${listing.media?.[0]}`}
        alt={meta.alt}
        url={meta.url}
      />

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
