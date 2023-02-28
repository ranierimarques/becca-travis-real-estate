import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import { atom } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { Homes } from '@/layout/homes/sections'

export const visualizationAtom = atom<'map' | 'gallery'>('map')

const Page: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  view,
}) => {
  useHydrateAtoms([[visualizationAtom, view]])

  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Homes />
    </main>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      view: context.query.view,
    },
  }
}

export default Page
