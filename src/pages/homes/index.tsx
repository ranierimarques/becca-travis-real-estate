import { MetaSEO } from '@/common'
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
            Online property search is temporarily unavailable. Contact Becca for current
            homes and a personal search.
          </S.Intro>
          <S.Action href="/contact-us">Contact Becca</S.Action>
        </S.Wrap>
      </S.Hero>
      <S.Content>
        <S.Body>
          <h2>Explore the area</h2>
          <p>
            Discover communities across North Alabama while we help you find the right
            property.
          </p>
          <S.Action href="/areas">Explore communities</S.Action>
        </S.Body>
      </S.Content>
    </S.Page>
  )
}
