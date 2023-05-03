import { Button, Image } from '@/common'
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
          Are you considering a move to Huntsville, Alabama? Look no further! Huntsville
          is an amazing place to live, work, and play with a wide range of activities to
          enjoy and friendly people to meet. It&apos;s no wonder the US recently named it
          the &quot;Place to Live&quot; and it has also been recognized as one of the best
          places to retire, live, and the most affordable and fastest-growing city in
          Alabama.
        </S.Paragraph>
        <Button
          href="/communities/huntsville#about-huntsville"
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
    </Section>
  )
}
