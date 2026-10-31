import { Box, Button, Flex } from '@/common'
import { Hat } from '@/shared'
import * as Svg from './svgs'
import * as S from './why-a-realtor.styles'

const reasons = [
  {
    title: 'A property-specific pricing review',
    paragraph:
      'Review comparable sales, competing listings, property condition, and your timing before choosing an asking-price strategy. The relevant information changes by property and date.',
    svg: <Svg.Certified className={S.SvgStyles()} />,
  },
  {
    title: 'A clear marketing plan',
    paragraph:
      'Choose photographs, property details, showing instructions, and channels that fit your home and timeline. Verify the facts before they appear in any listing description.',
    svg: <Svg.Contract className={S.SvgStyles()} />,
  },
  {
    title: 'Guidance through the transaction',
    paragraph:
      'Compare offer terms, inspection requests, timing, and closing tasks with the professionals involved in your sale. A plan helps you make decisions as new information arrives.',
    svg: <Svg.Search className={S.SvgStyles()} />,
  },
]

export function WhyARealtor() {
  return (
    <S.Section hasMaxWidth>
      <S.Container>
        <S.Content>
          <Hat variant="2">Sell your home</Hat>
          <S.Title>Plan the sale with Becca</S.Title>
          <S.Paragraph>
            A property-specific plan can help you decide what to prepare, how to present
            the home, and which questions to resolve as offers arrive.
          </S.Paragraph>
          <Button
            href="/contact-us"
            size={{
              '@initial': '2',
              '@bp4': '3',
            }}
            css={{
              '@bp1': {
                padding: '12px 24px',
                borderRadius: '5px',
                fontSize: '14px',
                lineHeight: '21px',
                fontWeight: '400',
              },
            }}
          >
            Contact Becca Travis
          </Button>
        </S.Content>

        <Flex
          direction="column"
          css={{
            gap: 104,
            '@bp5': { gap: 144 },
            '@bp4': { gap: 88 },
            '@bp2': { gap: 78 },
          }}
        >
          {reasons.map(reason => {
            return (
              <S.Reason key={reason.title}>
                <Box
                  css={{
                    position: 'relative',
                    top: -24,

                    mb: 8,

                    '@bp5': {
                      w: 84,
                      h: 84,
                    },

                    '@bp2': {
                      mb: 10,
                    },
                    '@bp1': {
                      mb: 12,
                    },
                  }}
                >
                  {reason.svg}
                </Box>
                <S.ReasonContent>
                  <S.ReasonTitle>{reason.title}</S.ReasonTitle>
                  <S.ReasonParagraph>{reason.paragraph}</S.ReasonParagraph>
                </S.ReasonContent>
                <S.CirclesSvg />
              </S.Reason>
            )
          })}
        </Flex>
      </S.Container>
    </S.Section>
  )
}
