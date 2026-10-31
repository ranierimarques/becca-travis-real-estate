import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { MetaSEO } from '@/common'
import { HomeSearchBrief } from '@/layout/homes/home-search-brief'
import * as S from '@/resources/community-guides/styles'
import * as I from '@/layout/homes/idx-frame.styles'
import { getApprovedSmartFrameUrl } from '../../config/idx-smart-frame'

type HomesPageProps = {
  frameUrl: string | null
}

export const getServerSideProps: GetServerSideProps<HomesPageProps> = async () => ({
  props: {
    frameUrl: getApprovedSmartFrameUrl(process.env.VALLEYMLS_IDX_SMARTFRAME_URL),
  },
})

export default function HomesPage({
  frameUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <S.Page>
      <MetaSEO
        canonicalPath="/homes"
        noindex={!frameUrl}
        title={
          frameUrl
            ? 'North Alabama Homes for Sale | Becca Travis'
            : 'Find a Home | Becca Travis'
        }
        description={
          frameUrl
            ? 'Search North Alabama homes for sale, then build a personal search brief around your area, timing and priorities.'
            : 'Start a personal home search with Becca Travis, built around your target area, timing and priorities.'
        }
        image="/sharing-cards/og-index.jpg"
        alt="Search North Alabama homes with Becca Travis"
      />
      <S.Hero>
        <S.Wrap>
          <S.Eyebrow>Your home search</S.Eyebrow>
          <S.Title>Let’s find your next home</S.Title>
          <S.Intro>
            {frameUrl
              ? 'Browse North Alabama homes for sale, then share your target area, timing and priorities for a more personal search.'
              : 'The public property search is being updated. You can still start now with a personal search brief built around your target area, timing and priorities.'}
          </S.Intro>
          <S.Action href={frameUrl ? '#live-property-search' : '#buyer-brief'}>
            {frameUrl ? 'Browse current homes' : 'Build my home search brief'}
          </S.Action>
        </S.Wrap>
      </S.Hero>

      {frameUrl && (
        <S.Content
          id="live-property-search"
          aria-labelledby="live-property-search-title"
        >
          <S.Body>
            <h2 id="live-property-search-title">Search North Alabama homes</h2>
            <p>Browse current listings through the ValleyMLS SmartFrame search.</p>
          </S.Body>
          <I.Frame
            src={frameUrl}
            title="Search ValleyMLS homes"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </S.Content>
      )}

      <S.Content id="buyer-brief">
        <HomeSearchBrief />
        <S.Body>
          <h2>Still comparing where to live?</h2>
          <p>
            Use the North Alabama area guide to compare communities, commute questions and
            the details you want to verify before narrowing your search.
          </p>
          <S.Action href="/areas">Compare North Alabama areas</S.Action>
        </S.Body>
      </S.Content>
    </S.Page>
  )
}
