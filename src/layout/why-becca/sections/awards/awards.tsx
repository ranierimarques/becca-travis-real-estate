import { Hat } from '@/shared'
import * as S from './awards.styles'
import { Carousel } from './carousel/carousel'

export function Awards() {
  return (
    <S.Section>
      <Hat>Excellence</Hat>
      <S.Title>
        Awards and <br /> certifications
      </S.Title>
      <S.Paragraph>
        We’re always ready to help by providing the best service for you
      </S.Paragraph>
      <Carousel />
    </S.Section>
  )
}
