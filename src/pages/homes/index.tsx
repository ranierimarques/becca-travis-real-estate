import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { MetaSEO } from '@/common'
import { useVisualizationStore } from '@/layout/homes/store/visualization'

const Homes = dynamic(() => import('@/layout/homes/sections').then(mod => mod.Homes), {
  ssr: false,
  loading: () => <div style={{ height: '100vh' }} />,
})

const Page = () => {
  const router = useRouter()
  const setVisualization = useVisualizationStore(state => state.setVisualization)

  useEffect(() => {
    if (router.query.view === 'map') setVisualization('map')
    if (router.query.view === 'gallery') setVisualization('gallery')
  }, [router.query.view, setVisualization])

  return (
    <main>
      <MetaSEO
        title="Homes For Sale | Becca Travis"
        description="View listing photos and use our detailed real estate filters to find the perfect place | Becca Travis"
        image="/sharing-cards/og-index.jpg"
        alt="Feel at home before finding the perfect property"
      />

      <Homes />
    </main>
  )
}

export default Page
