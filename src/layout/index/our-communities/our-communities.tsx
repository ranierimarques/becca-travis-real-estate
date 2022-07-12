import Image from 'next/image'
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
  {
    image: harvest,
    alt: 'Harvest road',
    community: `Harvest, AL`,
    href: '#',
  },
  {
    image: huntsville,
    alt: 'Huntsville forest',
    community: `Huntsville, AL`,
    href: '#',
  },
  {
    image: hamptonCover,
    alt: 'Hamptom Cove lake',
    community: `Hamptom Cove, AL`,
    href: '#',
  },
  {
    image: decatur,
    alt: 'Decatur home',
    community: `Decatur, AL`,
    href: '#',
  },
  {
    image: athens,
    alt: 'Athens river',
    community: `Athens, AL`,
    href: '#',
  },
  {
    image: meridianville,
    alt: 'Meridianville house',
    community: `Meridianville, AL`,
    href: '#',
  },
]

export function OurCommunities() {
  return (
    <S.Section>
      <S.Heading>MEET OUR COMMUNITIES</S.Heading>
      <S.Title>Our communities</S.Title>
      <S.CommunitiesList>
        {communitiesData.map(community => {
          return (
            <S.Community key={community.community}>
              <Link href={community.href} passHref>
                <a>
                  <S.ImageMask />
                  <Image src={community.image} alt={community.alt} layout="fill" />
                  <S.Description>{community.community}</S.Description>
                  <S.HoverSpan>
                    Read more
                    <ArrowLeftSvg />
                  </S.HoverSpan>
                </a>
              </Link>
            </S.Community>
          )
        })}
      </S.CommunitiesList>
    </S.Section>
  )
}
