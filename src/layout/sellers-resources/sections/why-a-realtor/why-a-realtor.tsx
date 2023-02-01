import { Box, Button, Flex } from '@/common'
import { Hat } from '@/shared'
import * as Svg from './svgs'
import * as S from './why-a-realtor.styles'

const reasons = [
  {
    title: 'Up-to-date knowledge',
    paragraph: `Agents have up-to-date knowledge of the market and
    can help you find the best deal. I'm ready to help you in this process!`,
    svg: <Svg.Certified className={S.SvgStyles()} />,
  },
  {
    title: 'Best features',
    paragraph: `They have resources at their disposal that you likely don't, like access to MLS listings and Multiple Listing Services (MLS).`,
    svg: <Svg.Contract className={S.SvgStyles()} />,
  },
  {
    title: 'Experience',
    paragraph: `A good agent will be with you every step of the way, from finding the right property to getting through closing negotiations.`,
    svg: <Svg.Search className={S.SvgStyles()} />,
  },
]

export function WhyARealtor() {
  return (
    <S.Section hasMaxWidth>
      <S.Container>
        <S.Content>
          <Hat variant="2">Meet Huntsville</Hat>
          <S.Title>Why you need a Realtor</S.Title>
          <S.Paragraph>
            While it is possible to sell a home without the help of a realtor, there are
            several reasons why working with an experienced professional can be
            advantageous. Here are three of the most important ones:
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
