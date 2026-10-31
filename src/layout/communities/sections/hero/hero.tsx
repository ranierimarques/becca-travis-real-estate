import { StaticImageData } from 'next/image'
import { Button, Image } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './hero.styles'
import * as Img from './images'

interface HeroProps {
  communityName: string
}

type Communities = {
  [key: string]: {
    title: string
    description: string
    image: StaticImageData
    imageAlt: string
    source: string
  }
}

const communities: Communities = {
  harvest: {
    title: 'Get to know Harvest',
    description:
      'Explore northwest Madison County with a practical guide to local neighborhoods, everyday routes, and the details to check by address.',
    image: Img.harvest,
    imageAlt: 'Wooded North Alabama hills in warm evening light',
    source: 'https://unsplash.com/pt-br/fotografias/uttvGsYg1DI',
  },
  huntsville: {
    title: 'Find your place in Huntsville',
    description:
      'Explore Huntsville neighborhoods and compare home styles, commute routes, and the places that shape your daily routine.',
    image: Img.huntsville,
    imageAlt: 'Welcome to Huntsville mural beneath downtown trees',
    source: 'https://unsplash.com/pt-br/fotografias/6Qo5-GUXFqc',
  },
  'hampton cove': {
    title: 'Explore Hampton Cove',
    description:
      'Get to know southeast Huntsville, from neighborhood settings to the questions worth checking before you choose an address.',
    image: Img.hamptonCove,
    imageAlt: 'Water cascading over a broad rocky ledge',
    source: 'https://unsplash.com/pt-br/fotografias/HrwSidHL9fM',
  },
  decatur: {
    title: 'Explore life in Decatur',
    description:
      'Start with the river city’s neighborhoods, downtown character, and the local details that can shape your home search.',
    image: Img.decatur,
    imageAlt: 'Historic brick storefront on a downtown Decatur street',
    source: 'https://unsplash.com/pt-br/fotografias/uttvGsYg1DI',
  },
  athens: {
    title: 'Make room for Athens',
    description:
      'Compare historic Athens and nearby Limestone County communities with a clear guide to local settings and address-specific details.',
    image: Img.athens,
    imageAlt: 'Golden autumn leaves filling the canopy above a park',
    source: 'https://unsplash.com/pt-br/fotografias/aPgxZw4zcyc',
  },
  meridianville: {
    title: 'Discover Meridianville',
    description:
      'Explore north Madison County neighborhoods, open settings, and the services and school assignments to verify for each property.',
    image: Img.meridianville,
    imageAlt: 'Mature trees around an open green lawn',
    source: 'https://unsplash.com/pt-br/fotografias/w_k-BFRiqJ0',
  },
}

export function Hero({ communityName }: HeroProps) {
  const normalizedName = communityName.toLowerCase().replace(/-/g, ' ')
  const community = communities[normalizedName] || communities.huntsville

  return (
    <Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Container>
        <S.Copy>
          <Hat>{communityName}</Hat>
          <S.Title>{community.title}</S.Title>
          <S.Description>{community.description}</S.Description>
          <S.Actions>
            <Button href="/areas" size="2">
              Compare North Alabama areas
            </Button>
            <Button href="/contact-us" size="2" outlined>
              Talk with Becca
            </Button>
          </S.Actions>
        </S.Copy>

        <S.Figure>
          <S.ImageFrame>
            <Image
              priority
              src={community.image}
              alt={community.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1184px) 48vw, 520px"
              style={{ objectFit: 'cover' }}
            />
          </S.ImageFrame>
          <S.ImageSource>
            Illustrative photo via{' '}
            <a href={community.source} target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </S.ImageSource>
        </S.Figure>
      </S.Container>
    </Section>
  )
}
