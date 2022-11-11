import { Image } from '@/common'
import { Hat } from '@/shared'
import Link from 'next/link'
import {
  athens,
  decatur,
  hamptonCover,
  harvest,
  huntsville,
  meridianville,
} from './images'
import * as S from './our-communities.styles'
import { ArrowLeftSvg } from './svgs'

const communitiesData = [
  { image: harvest, alt: 'Harvest road', name: 'Harvest', href: '/harvest' },
  { image: huntsville, alt: 'forest', name: 'Huntsville', href: '/huntsville' },
  { image: hamptonCover, alt: 'lake', name: 'Hamptom Cove', href: '/hamptom-cove' },
  { image: decatur, alt: 'home', name: 'Decatur', href: '/decatur' },
  { image: athens, alt: 'river', name: 'Athens', href: '/athens' },
  { image: meridianville, alt: 'house', name: 'Meridianville', href: '/meridianville' },
]

export function OurCommunities() {
  return (
    <S.Section>
      <Hat css={{ mb: 8 }}>Meet our communities</Hat>
      <S.Title>Our communities</S.Title>
      <S.CommunitiesList>
        {communitiesData.map(community => {
          return (
            <li key={community.name}>
              <Link href={community.href} passHref>
                <S.CommunityLink>
                  <Image
                    src={community.image}
                    alt={`${community.name} ${community.alt}`}
                    fill
                    css={{
                      borderRadius: '8px',

                      transition: 'opacity 150ms ease, filter 250ms ease',
                      objectFit: 'cover',
                    }}
                  />
                  <S.ImageMask />
                  <S.Description>{community.name}, AL</S.Description>
                  <S.HoverSpan>
                    Read more
                    <ArrowLeftSvg />
                  </S.HoverSpan>
                </S.CommunityLink>
              </Link>
            </li>
          )
        })}
      </S.CommunitiesList>
    </S.Section>
  )
}
