import { Button, Flex, Image } from '@/common'
import { Section } from '@/template'
import * as S from './about-huntsville.styles'
import { huntsville } from './images'

export function AboutHuntsville() {
  return (
    <Section
      hasMaxWidth
      padding="4"
      direction="horizontal"
      css={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: 40,

        '@bp4': {
          gridTemplateColumns: 'auto',
          justifyContent: 'center',
        },
      }}
    >
      <S.TextContainer>
        <S.Title>About Huntsville</S.Title>
        <S.Paragraph>
          Downtown Huntsville has Big Spring Park, historic streets and places to visit.
          Beyond the center, neighborhoods offer different home styles and daily routes.
          Use the local guide to get oriented, then check schools, services, taxes and
          your commute for each address you are considering.
        </S.Paragraph>
        <Flex css={{ gap: 12, flexWrap: 'wrap' }}>
          <Button
            href="/communities/huntsville#about-huntsville"
            size={{
              '@initial': '3',
              '@bp1': '2',
            }}
          >
            Learn more
          </Button>
          <Button
            href="/north-alabama-closing-checklist#property-taxes"
            outlined
            size={{
              '@initial': '3',
              '@bp1': '2',
            }}
          >
            Property taxes & closing checklist
          </Button>
        </Flex>
      </S.TextContainer>
      <S.ImageContainer>
        <Image
          src={huntsville}
          alt="Huntsville and surrounding landscape from above"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1184px) 44vw, 520px"
        />
      </S.ImageContainer>
    </Section>
  )
}
