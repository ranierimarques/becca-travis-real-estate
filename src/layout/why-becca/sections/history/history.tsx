import { Box, Image } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './history.styles'
import { becca, family, ourHistory } from './images'

export function History() {
  return (
    <Section
      hasMaxWidth
      css={{ pt: 120, '@bp5': { pt: 216 }, '@bp4': { pt: 120 }, '@bp2': { pt: 80 } }}
      id="section-history"
    >
      <S.Container>
        <S.TextContainer>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            There are many reasons why Huntsville is a great place to live. The economy is
            strong and there are plenty of jobs available. The schools are excellent, and
            the living cost is very affordable.
          </S.Paragraph>
        </S.TextContainer>

        <Box css={{ borderRadius: 8, overflow: 'hidden' }}>
          <Image src={becca} alt="Becca Travis" />
        </Box>
      </S.Container>

      <S.Container mid>
        <Box
          css={{
            borderRadius: 8,
            overflow: 'hidden',
            '@bp4': {
              order: '2',
            },
          }}
        >
          <Image src={ourHistory} alt="Becca Travis" />
        </Box>

        <S.TextContainer>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            Huntsville is home to a number of highly respected colleges and universities.
            The quality of education in Huntsville is excellent, and students who attend
            school here have the opportunity to receive a well-rounded education.
          </S.Paragraph>
        </S.TextContainer>

        <S.Path />
        <S.Path inverted />
      </S.Container>

      <S.Container>
        <S.TextContainer>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            The Huntsville area offers an excellent real estate market. You&apos;ll find
            an amazing selection of homes for sale here, and my job is to make sure you
            have all the information needed so we can save time on finding what fits best
            with your needs!
          </S.Paragraph>
        </S.TextContainer>
        <Box css={{ borderRadius: 8, overflow: 'hidden' }}>
          <Image src={family} alt="Happy Family" />
        </Box>
      </S.Container>
    </Section>
  )
}
