import { MetaSEO } from '@/common'
import { HomeSearchBrief } from '@/layout/homes/home-search-brief'
import * as S from '@/resources/community-guides/styles'

export default function HomesPage() {
  return (
    <S.Page>
      <MetaSEO
        canonicalPath="/homes"
        noindex
        title="Find a Home | Becca Travis"
        description="Contact Becca Travis for help finding a home in North Alabama."
        image="/sharing-cards/og-index.jpg"
        alt="Becca Travis Real Estate"
      />
      <S.Hero>
        <S.Wrap>
          <S.Eyebrow>Your home search</S.Eyebrow>
          <S.Title>Let’s find your next home</S.Title>
          <S.Intro>
            The public property search is being updated. You can still start now with a
            personal search brief built around your target area, timing and priorities.
          </S.Intro>
          <S.Action href="#buyer-brief">Build my home search brief</S.Action>
        </S.Wrap>
      </S.Hero>
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
