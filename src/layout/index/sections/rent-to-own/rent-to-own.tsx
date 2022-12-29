import { Button, Image } from '@/common'
import { Section } from '@/template'
import { family } from './images'
import * as S from './rent-to-own.styles'

export function RentToOwn() {
  return (
    <Section
      hasMaxWidth
      padding="4"
      direction="horizontal"
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 40,

        '@bp4': {
          gridTemplateColumns: 'auto',
          justifyContent: 'center',
        },
      }}
    >
      <S.ImageContainer>
        <Image src={family} alt="Happy family" fill />
      </S.ImageContainer>

      <S.TextContainer>
        <S.Title>Rent to Own</S.Title>
        <S.Paragraph>
          The Rent to Own program is a great solution for people who want to purchase a
          home but can&apos;t qualify for a home loan. We&apos;ll determine if you qualify
          for the program, find and purchase your dream home, lease it back to you and
          help you repair your credit so you can purchase it from us in 18 months or less.
        </S.Paragraph>
        <Button
          href="/rent-to-own"
          size={{
            '@initial': '3',
            '@bp1': '2',
          }}
        >
          Learn more
        </Button>
      </S.TextContainer>
    </Section>
  )
}
