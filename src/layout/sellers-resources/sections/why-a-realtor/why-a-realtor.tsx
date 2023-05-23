import { Box, Button, Flex } from '@/common'
import { Hat } from '@/shared'
import * as Svg from './svgs'
import * as S from './why-a-realtor.styles'

const reasons = [
  {
    title: 'Up-to-date knowledge',
    paragraph: `Working with an experienced realtor provides you with access to up-to-date knowledge that is essential when selling your home.
     A good realtor will provide you with a comparative market analysis done by a human, which will give you an accurate understanding of the current market conditions and how to price your home competitively.`,
    svg: <Svg.Certified className={S.SvgStyles()} />,
  },
  {
    title: 'Making Marketing work for you',
    paragraph: `An experienced realtor can provide you with the latest marketing techniques to target buyers moving to the Huntsville area, including professional photography and 3-D tours.
     In addition, they can perform a comparative market analysis, providing you with up-to-date knowledge of local home values and market trends.
      By partnering with a knowledgeable realtor, you can be confident that you have access to the most current information and tools to sell your home quickly and for top dollar.
    `,
    svg: <Svg.Contract className={S.SvgStyles()} />,
  },
  {
    title: 'Experience',
    paragraph: `Experience is key when it comes to successfully selling a home.
      We believe in being there for our clients every step of the way, from finding the perfect property to navigating closing negotiations.
      we have access to relocation buyers who may be interested in your home, and we understand how to leverage the power of social media to reach even more potential buyers.
      Our experience and resources ensure that we have the tools necessary to sell your home quickly and for top dollar.
    `,
    svg: <Svg.Search className={S.SvgStyles()} />,
  },
]

export function WhyARealtor() {
  return (
    <S.Section hasMaxWidth>
      <S.Container>
        <S.Content>
          <Hat variant="2">Sell your home</Hat>
          <S.Title>Why you need a Realtor</S.Title>
          <S.Paragraph>
            Selling a home can be a complex and challenging process, and while some may
            consider going the DIY route, partnering with an experienced realtor can bring
            numerous benefits. Here are just a few reasons why having a professional on
            your side can help you maximize your profits and minimize the headaches:
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
