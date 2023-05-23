import Image from 'next/image'
import { SearchInput } from '@/shared'
import { Section } from '@/template'
import * as S from './hero.styles'
import { downtownHuntsville } from './images'

export function Hero() {
  return (
    <Section padding="7" direction="vertical">
      <S.Title>
        Find your dream <br />
        home today
      </S.Title>

      <SearchInput navigate />

      <S.HelperText>
        If you have any questions about the properties listed, <br /> please don&apos;t
        hesitate to contact us. We&apos;re here to help!
      </S.HelperText>

      <S.ImageWrapper>
        <Image
          src={downtownHuntsville}
          alt="Downtown Hunstsville Lake"
          style={{ objectFit: 'cover', objectPosition: '50% 35%' }}
          fill
          priority
        />
        <S.ImageOverlay />
      </S.ImageWrapper>

      <S.ArrowDown />
    </Section>
  )
}
