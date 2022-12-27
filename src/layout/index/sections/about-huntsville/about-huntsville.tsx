import { Button, Image } from '@/common'
import { Section } from '@/template'
import * as S from './about-huntsville.styles'
import { huntsville } from './images'

export function AboutHuntsville() {
  return (
    <Section hasMaxWidth padding="4" direction="horizontal">
      <S.Container>
        <S.TextContainer>
          <S.Title>About Huntsville</S.Title>
          <S.Paragraph>
            Huntsville is now Alabamas Largest City. US recently names Huntsville, Al as
            the Place to Live, other notable mentions include: One Of The Best Place to
            Retire, Best Place to Live in Alabama, Most Affordable Place to Live,
            Fastest-Growing Place.
          </S.Paragraph>
          <Button
            href="/huntsville"
            size={{
              '@initial': '3',
              '@bp1': '2',
            }}
          >
            Learn more
          </Button>
        </S.TextContainer>
        <S.ImageContainer>
          <Image src={huntsville} alt="Huntsville drone shoot" fill />
        </S.ImageContainer>
      </S.Container>
    </Section>
  )
}
