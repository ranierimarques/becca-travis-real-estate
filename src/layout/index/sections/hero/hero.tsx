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
        Search an area or address to start a personal home search brief. <br /> Becca can
        help you compare available homes and plan your next step.
      </S.HelperText>

      <S.ImageWrapper>
        <Image
          src={downtownHuntsville}
          alt="Downtown Huntsville lake and park"
          style={{ objectFit: 'cover', objectPosition: '50% 35%' }}
          fill
          priority
          sizes="100vw"
        />
        <S.ImageOverlay />
      </S.ImageWrapper>

      <S.ArrowDown />
    </Section>
  )
}
