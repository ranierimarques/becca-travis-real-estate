import Image from 'next/image'
import * as S from './carousel.styles'
import {
  diamondSociety,
  homeSnap,
  luxuryHome,
  luxuryHomeMarketing,
  prominentAgent,
  realogy,
} from './images'

const awards = [
  {
    src: homeSnap,
    alt: '',
  },
  {
    src: diamondSociety,
    alt: '',
  },
  {
    src: luxuryHome,
    alt: '',
  },
  {
    src: luxuryHomeMarketing,
    alt: '',
  },
  {
    src: prominentAgent,
    alt: '',
  },
  {
    src: realogy,
    alt: '',
  },
]

export function Carousel() {
  return (
    <S.Container>
      <S.AwardsBackground />
      <S.AwardsWrapper>
        {awards.map(award => (
          <S.Award key={award.alt}>
            <Image src={award.src} alt={award.alt} />
          </S.Award>
        ))}
      </S.AwardsWrapper>
      <S.AwardsWrapper>
        {awards.map(award => (
          <S.Award key={award.alt}>
            <Image src={award.src} alt={award.alt} />
          </S.Award>
        ))}
      </S.AwardsWrapper>
    </S.Container>
  )
}
