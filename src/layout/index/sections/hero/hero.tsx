import { SearchInput } from '@shared'
import Image from 'next/image'
import * as S from './hero.styles'
import { downtownHuntsville } from './images'

export function Hero() {
  return (
    <S.Section>
      <S.Title>
        Find your dream <br />
        home today
      </S.Title>

      <SearchInput />

      <S.HelperText>
        If you have any questions about the properties <br />
        listed on this page, please feel free to contact us.
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