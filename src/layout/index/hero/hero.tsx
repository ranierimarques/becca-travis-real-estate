import Image from 'next/image'
import * as S from './hero.styles'
import { downtownHuntsville } from './images'
import { Loupe } from './svgs'

export function Hero() {
  return (
    <S.Section>
      <S.Hat>HEARTY WELCOME</S.Hat>
      <S.Title>
        Find your dream <br />
        home today
      </S.Title>

      <S.InputWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search by address, neighborhood, city or ZIP code"
        />
        <Loupe />
      </S.InputWrapper>

      <S.HelperText>
        We will make your dream home a reality. <br />
        Find out more about the various homes we have available today.
      </S.HelperText>

      <S.ImageWrapper>
        <Image
          src={downtownHuntsville}
          alt="Downtown Hunstsville Lake"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 35%"
          priority
        />
        <S.ImageOverlay />
      </S.ImageWrapper>

      <S.ArrowDown />
    </S.Section>
  )
}
