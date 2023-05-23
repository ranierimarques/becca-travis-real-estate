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
    title: 'Thinking about moving to Harvest?',
    description:
      'The charming community of Harvest offers a peaceful and tranquil escape from the hustle and bustle of city life.',
    image: Img.harvest,
    source: 'https://unsplash.com/pt-br/fotografias/uttvGsYg1DI',
  },
  huntsville: {
    title: 'Are you considering a move to Huntsville, Alabama?',
    description:
      'Huntsville, Alabama is a thriving city known for its rich history, technological advancements, and Southern charm.',
    image: Img.huntsville,
    source: 'https://unsplash.com/pt-br/fotografias/6Qo5-GUXFqc',
  },
  hamptonCove: {
    title: 'Happenings of Hampton Cove',
    description:
      'Nestled amidst the stunning natural beauty of North Alabama, Hampton Cove is a place where the best of urban and rural lifestyles converge.',
    image: Img.hamptonCove,
    source: 'https://unsplash.com/pt-br/fotografias/HrwSidHL9fM',
  },
  decatur: {
    title: 'Discover Decatur',
    description:
      'Decatur is a vibrant city with a rich history, strong economy, and plenty of recreational opportunities.',
    image: Img.decatur,
    source: 'https://unsplash.com/pt-br/fotografias/uttvGsYg1DI',
  },
  athens: {
    title: 'Call Athens Home',
    description: 'Athens, Alabama: Where History and Nature Meet.',
    image: Img.athens,
    source: 'https://unsplash.com/pt-br/fotografias/aPgxZw4zcyc',
  },
  meridianville: {
    title: 'Welcome to Meridianville, Alabama',
    description:
      'Meridianville, Alabama: Where Community and Convenience Meet. Your Gateway to Southern Charm.',
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
