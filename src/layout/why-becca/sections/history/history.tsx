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
          <Hat variant="2">Meet Becca</Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            Becca Travis is a passionate real estate professional who loves working with
            people from all cultures. Fluent in Portuguese and conversational in Spanish,
            Becca has a unique ability to connect with clients on a personal level and
            make the home buying or selling process a stress-free and enjoyable
            experience.
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
          <Hat variant="2">Meet Becca</Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            With a background in IT staffing and marketing, Becca brings a consultative
            approach to working with her clients. She is dedicated to helping buyers and
            sellers achieve their dreams in Madison and Limestone counties in Northern
            Alabama. Becca is committed to treating her clients with the utmost respect
            and professionalism, always following the golden rule of treating others how
            THEY want to be treated.
          </S.Paragraph>
        </S.TextContainer>

        <S.Path />
        <S.Path inverted />
      </S.Container>

      <S.Container>
        <S.TextContainer>
          <Hat variant="2">Meet Becca</Hat>
          <S.Title>Becca Travis Real State</S.Title>
          <S.Paragraph>
            Becca&apos;s dedication to her clients has been recognized by her peers and
            the industry. She was honored as the 2021 Coldwell Banker International
            Diamond Society winner, ranked in the top 50 agents in Alabama, and named one
            of the top 20 agents on social media in Huntsville.
          </S.Paragraph>
        </S.TextContainer>
        <Box css={{ borderRadius: 8, overflow: 'hidden' }}>
          <Image src={family} alt="Happy Family" />
        </Box>
      </S.Container>
    </Section>
  )
}
