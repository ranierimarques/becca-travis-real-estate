import { Flex } from '@/common'
import { Hat } from '@/shared'
import * as S from './hero.styles'

interface HeroProps {
  communityName: string
}

export function Hero({ communityName }: HeroProps) {
  return (
    <S.Section>
      <Flex direction="column" align="center">
        <Hat>{communityName}</Hat>
        <S.Title>The {communityName} is Plenty</S.Title>
        <S.Description>
          Where seeds have been planted, people have been nurtured
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
