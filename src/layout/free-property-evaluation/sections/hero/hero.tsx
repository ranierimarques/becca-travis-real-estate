import { Hat } from '@/shared'
import * as S from './hero.styles'
import * as Svg from './svgs'

export function Hero() {
  function scrollTo() {
    document.querySelector('#form')?.scrollIntoView()
  }

  return (
    <S.Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <Hat css={{ mb: 8 }}>budget</Hat>
      <S.Title>Free Property Evaluation</S.Title>
      <S.Paragraph>
        Fill out the form below and let the magic happen! Your property is about to get
        the royal
        <br /> treatment with a FREE evaluation. Go ahead, let&apos;s make your real
        estate dreams come true!
      </S.Paragraph>
      <S.KeepExploring onClick={scrollTo}>
        <Svg.CircleArrow /> Keep exploring
      </S.KeepExploring>
    </S.Section>
  )
}
