import Link from 'next/link'
import { MetaSEO } from '@/common'
import { areaGuides } from '@/resources/community-guides/areas'
import * as S from '@/resources/community-guides/styles'

const existing = [
  { name: 'Huntsville', href: '/communities/huntsville' },
  { name: 'Athens', href: '/communities/athens' },
  { name: 'Decatur', href: '/communities/decatur' },
  { name: 'Harvest', href: '/communities/harvest' },
  { name: 'Hampton Cove', href: '/communities/hampton-cove' },
  { name: 'Meridianville', href: '/communities/meridianville' },
]
const areas = [
  ...existing,
  ...areaGuides.map(area => ({ name: area.name, href: `/areas/${area.slug}` })),
].sort((a, b) => a.name.localeCompare(b.name))

export default function AreasIndex() {
  return (
    <S.Page>
      <MetaSEO
        canonicalPath="/areas"
        title="North Alabama Community Guides | Becca Travis"
        description="Explore Huntsville, Madison and communities across North Alabama with local guides and practical home search tips."
        image="/sharing-cards/og-index.jpg"
        alt="Becca Travis Real Estate"
      />
      <S.Hero>
        <S.Wrap>
          <S.Eyebrow>Find a place that feels like home</S.Eyebrow>
          <S.Title>Explore North Alabama</S.Title>
          <S.Intro>
            From historic Huntsville neighborhoods to communities across the Tennessee
            Valley, discover the places that make this region distinctive.
          </S.Intro>
        </S.Wrap>
      </S.Hero>
      <S.Content>
        <S.Eyebrow>Communities and neighborhoods</S.Eyebrow>
        <S.Grid>
          {areas.map(area => (
            <li key={area.href}>
              <S.AreaLink href={area.href}>{area.name}</S.AreaLink>
            </li>
          ))}
        </S.Grid>
        <S.Body>
          <h2>Let’s explore together</h2>
          <p>
            Every home search is personal. Tell me what matters to you, and we can explore
            the areas that fit your life.
          </p>
          <Link href="/contact-us">Contact Becca</Link>
        </S.Body>
      </S.Content>
    </S.Page>
  )
}
