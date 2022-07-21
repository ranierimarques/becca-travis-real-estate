import { Box } from "@common"
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
