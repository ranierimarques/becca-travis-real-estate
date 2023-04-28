import { Image } from '@/common'
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
    alt: `Becca's award`,
  },
  {
    src: diamondSociety,
    alt: `Becca's award`,
  },
  {
    src: luxuryHome,
    alt: `Becca's award`,
  },
  {
    src: luxuryHomeMarketing,
    alt: `Becca's award`,
  },
  {
    src: prominentAgent,
    alt: `Becca's award`,
  },
  {
    src: realogy,
    alt: `Becca's award`,
  },
]

export function Carousel() {
  return (
    <S.Container>
      <S.SliderWrapper>
        <S.AwardsBackground />

        <S.AwardsWrapper>
          {awards.map((award, index) => (
            <S.Award key={index}>
              <Image src={award.src} alt={award.alt} />
            </S.Award>
          ))}
        </S.AwardsWrapper>
        <S.AwardsWrapper>
          {awards.map((award, index) => (
            <S.Award key={index}>
              <Image src={award.src} alt={award.alt} />
            </S.Award>
          ))}
        </S.AwardsWrapper>
        <S.AwardsWrapper>
          {awards.map((award, index) => (
            <S.Award key={index}>
              <Image src={award.src} alt={award.alt} />
            </S.Award>
          ))}
        </S.AwardsWrapper>
        <S.AwardsWrapper>
          {awards.map((award, index) => (
            <S.Award key={index}>
              <Image src={award.src} alt={award.alt} />
            </S.Award>
          ))}
        </S.AwardsWrapper>
      </S.SliderWrapper>
    </S.Container>
  )
}
