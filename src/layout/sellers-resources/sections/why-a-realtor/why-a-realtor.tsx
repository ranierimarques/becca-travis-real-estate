import { Box, Button, Flex } from '@common'
import { CertifiedSvg, ContractSvg, SearchSvg } from './svgs'
import * as S from './why-a-realtor.styles'

const reasons = [
  {
    title: 'Up-to-date knowledge',
    paragraph: `Agents have up-to-date knowledge of the market and
    can help you find the best deal. I'm ready to help you in this process!`,
    svg: <CertifiedSvg />,
  },
  {
    title: 'Best features',
    paragraph: `They have resources at their disposal that you likely don't, like access to MLS listings and Multiple Listing Services (MLS).`,
    svg: <SearchSvg />,
  },
  {
    title: 'Experience',
    paragraph: `A good agent will be with you every step of the way, from finding the right property to getting through closing negotiations.`,
    svg: <ContractSvg />,
  },
]

export function WhyARealtor() {
  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <S.Hat>
            <S.Line /> MEET HUNTSVILLE
          </S.Hat>
          <S.Title>Why you need a Realtor</S.Title>
          <S.Paragraph>
            While it is possible to sell a home without the help of a realtor, there are
            several reasons why working with an experienced professional can be
            advantageous. Here are three of the most important ones:
          </S.Paragraph>
          <Button size="2">Contact Becca Travis</Button>
        </S.Content>
        <Flex direction="column" css={{ gap: 104 }}>
          {reasons.map(reason => {
            return (
              <S.Reasons key={reason.title}>
                <Box css={{ position: 'absolute', top: -24, left: 32 }}>{reason.svg}</Box>
                <S.Svg />
                <S.ReasonTitle>{reason.title}</S.ReasonTitle>
                <S.ReasonParagraph>{reason.paragraph}</S.ReasonParagraph>
              </S.Reasons>
            )
          })}
        </Flex>
      </S.Container>
    </S.Section>
  )
}
