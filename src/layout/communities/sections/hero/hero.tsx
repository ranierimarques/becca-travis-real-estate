import { Flex } from '@/common'
import { Hat } from '@/shared'
import * as S from './hero.styles'

interface HeroProps {
  communityName: string
}

type Communities = {
  [key: string]: {
    title: string
    description: string
  }
}

const communities: Communities = {
  harvest: {
    title: 'The Harvest is Plenty',
    description: 'Where seeds have been planted, people have been nurtured',
  },
  huntsville: {
    title: 'The Heart of Huntsville',
    description:
      'Beautiful hillsides, various entertainment and diverse ethnicities is what makes the heart of Huntsville',
  },
  hamptonCove: {
    title: 'Happenings of Hampton Cove',
    description:
      'This community of widespread features from a waterfall entry, exclusive golf course, paved walkways and a flair of flamingos, makes this one of the most sought after neighborhoods',
  },
  decatur: {
    title: 'Destined for Decatur',
    description:
      'With the largest Victorian era home in close proximity, and Alabamas oldest opera house in the area, this is sure to be a prime location for anyone wanting to experience the culture of our beautiful state',
  },
  athens: {
    title: 'What about Athens?',
    description:
      'The manufacturing industry keeps this community thriving. Athens State University founded in 1822 is still an intricant part of the community.   People within the community and surrounding areas are makes up the pulse of Athens',
  },
  meridianville: {
    title: 'The Make-Up of Meridianville',
    description:
      'This quaint suburb of Huntsville sets in Madison County. Considered one of the best places to reside, Meridianville offers a rural feel in a modern day community.  Amongst the farms, Wade Mountain Nature and Preserve, and Horseback Riding Tours; the Independent Musical Productions, and Huntsville Country Club brings a balance to the community',
  },
}

export function Hero({ communityName }: HeroProps) {
  const isHamptonCove = communityName === 'hampton cove'
  return (
    <S.Section>
      <Flex direction="column" align="center">
        <Hat>{communityName}</Hat>
        <S.Title>
          {communities[isHamptonCove ? 'hamptonCove' : communityName].title}
        </S.Title>
        <S.Description>
          {communities[isHamptonCove ? 'hamptonCove' : communityName].description}
        </S.Description>
        <Flex direction="column" align="end" css={{ gap: 8 }}>
          <S.Banner />
          <S.ImageSource>
            Image by Unknown via <a href="#">Hyperlink</a>{' '}
          </S.ImageSource>
        </Flex>
      </Flex>
      <S.Background />
    </S.Section>
  )
}
