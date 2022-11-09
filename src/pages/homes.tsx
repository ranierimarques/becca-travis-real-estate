import { Homes } from '@layout/homes/sections'
import { useVisualizationStore } from '@layout/homes/store/visualization'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Page: NextPage = () => {
  const router = useRouter()
  const setVisualization = useVisualizationStore(state => state.setVisualization)

  useEffect(() => {
    if (router.query.view === 'map') setVisualization('map')
    if (router.query.view === 'gallery') setVisualization('gallery')
  }, [router.query.view, setVisualization])

  return (
    <main>
      <Head>
        <title>Becca Travis</title>
      </Head>

      <Homes />
    </main>
  )
}

export default Page
