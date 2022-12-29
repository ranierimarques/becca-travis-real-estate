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
  { image: harvest, alt: 'Harvest road', name: 'Harvest', href: '/communities/harvest' },
  {
    image: huntsville,
    alt: 'forest',
    name: 'Huntsville',
    href: '/communities/huntsville',
  },
  {
    image: hamptomCove,
    alt: 'lake',
    name: 'Hamptom Cove',
    href: '/communities/hampton-cove',
  },
  { image: decatur, alt: 'home', name: 'Decatur', href: '/communities/decatur' },
  { image: athens, alt: 'river', name: 'Athens', href: '/communities/athens' },
  {
    image: meridianville,
    alt: 'house',
    name: 'Meridianville',
    href: '/communities/meridianville',
  },
]

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
                <S.Image
                  src={community.image}
                  alt={`${community.name} ${community.alt}`}
                  fill
                />
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
    </Section>
  )
}
