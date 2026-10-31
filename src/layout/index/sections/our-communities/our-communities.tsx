import { areaGuides } from '@/resources/community-guides/areas'
import { Hat } from '@/shared'
import { Section } from '@/template'
import {
  athens,
  decatur,
  hamptomCove,
  harvest,
  huntsville,
  meridianville,
} from './images'
import * as S from './our-communities.styles'
import { ArrowLeftSvg } from './svgs'

const communitiesData = [
  { image: harvest, name: 'Harvest', href: '/communities/harvest' },
  {
    image: huntsville,
    name: 'Huntsville',
    href: '/communities/huntsville',
  },
  {
    image: hamptomCove,
    name: 'Hampton Cove',
    href: '/communities/hampton-cove',
  },
  { image: decatur, name: 'Decatur', href: '/communities/decatur' },
  { image: athens, name: 'Athens', href: '/communities/athens' },
  {
    image: meridianville,
    name: 'Meridianville',
    href: '/communities/meridianville',
  },
]

const featuredAreaSlugs = [
  'downtown-huntsville',
  'five-points',
  'jones-valley',
  'monte-sano',
  'big-cove',
  'mcmullen-cove',
  'owens-cross-roads',
  'madison',
  'hazel-green',
  'guntersville',
]

const featuredAreas = areaGuides.filter(guide => featuredAreaSlugs.includes(guide.slug))

export function OurCommunities() {
  return (
    <Section
      padding="5"
      hasMaxWidth
      direction={{ '@initial': undefined, '@bp4': 'vertical' }}
    >
      <Hat css={{ mb: 8, '@bp4': { mb: 12 } }}>Meet our communities</Hat>
      <S.Title>Our communities</S.Title>
      <S.CommunitiesList>
        {communitiesData.map(community => {
          return (
            <li key={community.name}>
              <S.CommunityLink href={community.href}>
                <S.Image src={community.image} alt="" fill />
                <S.ImageMask />
                <S.Description>{community.name}, AL</S.Description>
                <S.HoverSpan>
                  Read more
                  <ArrowLeftSvg />
                </S.HoverSpan>
              </S.CommunityLink>
            </li>
          )
        })}
      </S.CommunitiesList>
      <S.MoreAreas aria-label="More North Alabama area guides">
        <S.MoreAreasTitle>Explore more local guides</S.MoreAreasTitle>
        <S.MoreAreasLinks>
          {featuredAreas.map(area => (
            <li key={area.slug}>
              <S.MoreAreaLink href={`/areas/${area.slug}`}>{area.name}</S.MoreAreaLink>
            </li>
          ))}
        </S.MoreAreasLinks>
      </S.MoreAreas>
      <S.ExploreLink href="/areas">Explore all communities</S.ExploreLink>
    </Section>
  )
}
