import { Box } from "@common"
import { HandshakeSvg, HomeSvg, LikeSvg } from "./svgs"
import * as S from "./white-glove.styles"

export function WhiteGlove() {
  return (
    <S.Section>
      <div>
        <S.Hat>
          <Box css={{ w: 16, h: 1, background: "$magenta1" }} />
          meet huntsville
        </S.Hat>
        <S.Title>White glove moving</S.Title>
        <S.Paragraph>
          There are many reasons to use a buyers agent when purchasing a home.
          Here are three key reasons:
        </S.Paragraph>

        <S.Accordion type="single" defaultValue="item-1" collapsible>
          <S.Item value="item-1">
            <S.Header>
              <S.Trigger>
                <S.ContentTriggerWrapper>
                  <LikeSvg /> Experience
                </S.ContentTriggerWrapper>
                <S.Chevron />
              </S.Trigger>
            </S.Header>
            <S.Content>
              <S.ContentText>
                First, they have the experience and expertise to help you
                navigate through the buying process.
              </S.ContentText>
            </S.Content>
          </S.Item>

          <S.Item value="item-2">
            <S.Header>
              <S.Trigger>
                <S.ContentTriggerWrapper>
                  <HandshakeSvg />
                  Negotiation
                </S.ContentTriggerWrapper>
                <S.Chevron />
              </S.Trigger>
            </S.Header>
            <S.Content>
              <S.ContentText>
                Second, they can represent your interests and negotiate on your
                behalf.
              </S.ContentText>
            </S.Content>
          </S.Item>

          <S.Item value="item-3">
            <S.Header>
              <S.Trigger>
                <S.ContentTriggerWrapper>
                  <HomeSvg />
                  Buyer Resources
                </S.ContentTriggerWrapper>
                <S.Chevron />
              </S.Trigger>
            </S.Header>
            <S.Content>
              <S.ContentText>
                And third, they can provide valuable resources and advice along
                the way.
              </S.ContentText>
            </S.Content>
          </S.Item>
        </S.Accordion>
      </div>

      <Box
        css={{
          width: "520px",
          height: "552px",
          background: "$magenta5",
          borderRadius: "8px",
        }}
      ></Box>
    </S.Section>
  )
}
