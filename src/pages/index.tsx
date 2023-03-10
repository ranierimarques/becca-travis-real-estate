import type { InferGetStaticPropsType, NextPage } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { MetaSEO } from '@/common'
import {
  AboutHuntsville,
  Achievements,
  Hero,
  NewToMarket,
  OurCommunities,
  RentToOwn,
  Services,
} from '@/layout/index/sections'
import { getHouseListing } from '@/services/house-listings'
import { ClientTestimonials, LastCall } from '@/shared'

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: '/sharing-cards/og-image.jpg',
  alt: `Feel at home before finding the perfect property.`,
  url: 'https://beccatravis.com/',
}

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => {
  return (
    <main>
      <MetaSEO
        title={meta.title}
        description={meta.description}
        image={meta.image}
        alt={meta.alt}
        url={meta.url}
      />

      <Hero />
      <Services />
      <Achievements />
      <NewToMarket />
      <RentToOwn />
      <AboutHuntsville />
      <OurCommunities />
      <ClientTestimonials />
      <LastCall />
    </main>
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  const listings = await getHouseListing({ type: 'card', params: { limit: '4' } })

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['home/new-to-market'],
    queryFn: () => listings,
  })

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
    revalidate: 60 * 10, // 10 minutes
  }
}

export default Page
