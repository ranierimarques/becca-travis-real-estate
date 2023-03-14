import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import { atom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { MetaSEO } from '@/common'
import { Homes } from '@/layout/homes/sections'

export const visualizationAtom = atom<'map' | 'gallery'>('map')

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  view,
}) => {
  useHydrateAtoms([[visualizationAtom, view]])

  return (
    <main>
      <MetaSEO
        title="Becca Travis"
        description="Find your dream home today | Becca Travis Real Estate Group"
        image="/sharing-cards/og-image.jpg"
        alt="Feel at home before finding the perfect property."
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
