import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import { atom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { MetaSEO } from '@/common'
import { Homes } from '@/layout/homes/sections'

export const visualizationAtom = atom<'map' | 'gallery'>('map')

const meta = {
  title: 'Becca Travis',
  description: `Feel at home before finding the perfect property.`,
  image: 'https://beccatravis.com/sharing-cards/og-image.jpg',
  alt: `Feel at home before finding the perfect property.`,
  url: 'https://beccatravis.com/',
}

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  view,
}) => {
  useHydrateAtoms([[visualizationAtom, view]])

  return (
    <main>
      <MetaSEO
        title={meta.title}
        description={meta.description}
        image={meta.image}
        alt={meta.alt}
        url={meta.url}
      />

      <Homes />
    </main>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      view: context.query.view || 'map',
    },
  }
}

export default Page
