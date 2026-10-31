import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { MetaSEO } from '@/common'
import { StateGuide } from '@/layout/agenciamento/state-guide'
import type { StateGuide as StateGuideData } from '@/resources/relocation/state-guides'
import { stateGuideBySlug, stateGuides } from '@/resources/relocation/state-guides'

type StatePageProps = {
  guide: StateGuideData
  relatedGuides: StateGuideData[]
}

export default function StatePage({
  guide,
  relatedGuides,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = `Comprar Casa ${guide.locationPhrase} em Português | Becca Travis`

  return (
    <>
      <MetaSEO
        canonicalPath={`/agenciamento/${guide.slug}`}
        locale="pt_BR"
        title={title}
        description={guide.summary}
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Sala de estar iluminada com lareira e janelas"
      />
      <StateGuide guide={guide} relatedGuides={relatedGuides} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: stateGuides.map(guide => ({ params: { state: guide.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<StatePageProps> = async ({ params }) => {
  const state = typeof params?.state === 'string' ? params.state : ''
  const guide = stateGuideBySlug[state]

  if (!guide) return { notFound: true }

  const relatedGuides = guide.relatedSlugs
    .map(slug => stateGuideBySlug[slug])
    .filter((item): item is StateGuideData => Boolean(item))

  return {
    props: {
      guide,
      relatedGuides,
    },
  }
}
