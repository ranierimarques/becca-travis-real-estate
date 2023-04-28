import { StaticImageData } from 'next/image'
import { Box, Flex, Image } from '@/common'
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
    source: string
  }
}

const communities: Communities = {
  harvest: {
    title: 'The Harvest is Plenty',
    description: 'Where seeds have been planted, people have been nurtured',
    image: Img.harvest,
    source: 'https://unsplash.com/pt-br/fotografias/uttvGsYg1DI',
  },
  huntsville: {
    title: 'The Heart of Huntsville',
    description:
      'Beautiful hillsides, various entertainment and diverse ethnicities is what makes the heart of Huntsville',
    image: Img.huntsville,
    source: 'https://unsplash.com/pt-br/fotografias/6Qo5-GUXFqc',
  },
  hamptonCove: {
    title: 'Happenings of Hampton Cove',
    description:
      'This community of widespread features from a waterfall entry, exclusive golf course, paved walkways and a flair of flamingos, makes this one of the most sought after neighborhoods',
    image: Img.hamptonCove,
    source: 'https://unsplash.com/pt-br/fotografias/HrwSidHL9fM',
  },
  decatur: {
    title: 'Destined for Decatur',
    description:
      'With the largest Victorian era home in close proximity, and Alabamas oldest opera house in the area, this is sure to be a prime location for anyone wanting to experience the culture of our beautiful state',
    image: Img.decatur,
    source: 'https://unsplash.com/pt-br/fotografias/uttvGsYg1DI',
  },
  athens: {
    title: 'What about Athens?',
    description:
      'The manufacturing industry keeps this community thriving. Athens State University founded in 1822 is still an intricant part of the community.   People within the community and surrounding areas are makes up the pulse of Athens',
    image: Img.athens,
    source: 'https://unsplash.com/pt-br/fotografias/aPgxZw4zcyc',
  },
  meridianville: {
    title: 'The Make-Up of Meridianville',
    description:
      'This quaint suburb of Huntsville sets in Madison County. Considered one of the best places to reside, Meridianville offers a rural feel in a modern day community.  Amongst the farms, Wade Mountain Nature and Preserve, and Horseback Riding Tours; the Independent Musical Productions, and Huntsville Country Club brings a balance to the community',
    image: Img.meridianville,
    source: 'https://unsplash.com/pt-br/fotografias/w_k-BFRiqJ0',
  },
}

export function Hero({ communityName }: HeroProps) {
  const isHamptonCove = communityName === 'hampton cove'
  return (
    <Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Container>
        <Flex direction="column" align="center">
          <Hat>{communityName}</Hat>
          <S.Title>
            {communities[isHamptonCove ? 'hamptonCove' : communityName].title}
          </S.Title>
          <S.Description>
            {communities[isHamptonCove ? 'hamptonCove' : communityName].description}
          </S.Description>
        </Flex>

        <Box css={{ position: 'relative' }}>
          <Box
            css={{
              background: '$white',

              position: 'absolute',
              left: '50%',

              transform: 'translate(-50%)',

              height: '100%',
              width: '100vw',
            }}
          />
          <Box
            css={{
              background: 'rgba($colors$tangerine5Rgb, 0.3)',

              position: 'absolute',
              left: '50%',

              transform: 'translate(-50%)',

              height: '40%',
              width: '100vw',
            }}
          />
          <Flex direction="column" align="end" css={{ gap: 8, position: 'relative' }}>
            <Box css={{ br: 8, overflow: 'hidden' }}>
              <Image
                priority
                src={communities[isHamptonCove ? 'hamptonCove' : communityName].image}
                alt={communityName}
              />
            </Box>
            <S.ImageSource>
              Image by Unknown via{' '}
              <a
                href={communities[isHamptonCove ? 'hamptonCove' : communityName].source}
                target="_blank"
                rel="noreferrer"
              >
                {communities[isHamptonCove ? 'hamptonCove' : communityName].source}
              </a>{' '}
            </S.ImageSource>
          </Flex>
        </Box>
      </S.Container>
    </Section>
  )
}
