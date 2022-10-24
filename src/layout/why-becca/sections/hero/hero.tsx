import { Button, Flex } from '@common'
import { Hat } from '@shared'
import Image from 'next/image'
import * as S from './hero.styles'
import { becca } from './images'
import { ArrowDownSvg } from './svgs'

export function Hero() {
  function scrollTo() {
    window.scrollTo(0, 700)
  }

  return (
    <S.Section>
      <S.Container>
        <div>
          <Hat css={{ marginBottom: 8 }}>Why Becca?</Hat>
          <S.Title>With Becca Travis, you can buy or sell a home easily.</S.Title>
          <S.Paragraph>
            From finding you your dream home to negotiating on behalf of clients, we have
            every aspect covered and more!
          </S.Paragraph>
          <Flex css={{ gap: 24 }}>
            <Button size="2" href="/contact-us">
              Contact Becca Travis
            </Button>
            <S.KeepExploring onClick={scrollTo}>
              <ArrowDownSvg /> Keep exploring
            </S.KeepExploring>
          </Flex>
        </div>

        <Image src={becca} quality={100} alt="Becca Travis photo" priority />
      </S.Container>
    </S.Section>
  )
}
