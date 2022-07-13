import { Box, Hat } from "@common"
import * as S from "./hero.styles"

export function Hero() {
  return (
    <S.Section>
      <S.Background />
      <Hat>NEWS</Hat>
      <S.Title>Becca Travis Blog</S.Title>
      <S.Description>
        Stay up to date with the latest real estate news, insights and lifestyle
        updates about Huntsville &amp; North Alabama
      </S.Description>
      <S.LastPost>
        <Box
          css={{
            width: "336px",
            height: "326px",
            backgroundColor: "$gray1",
          }}
        ></Box>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "32px 0 46px 32px",
          }}
        >
          <Hat>Huntsville</Hat>
          <S.PostTitle>Need help selling your home?</S.PostTitle>
          <S.PostDescription>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi.
          </S.PostDescription>
          <S.PostDate>Feb 17, 2022</S.PostDate>
        </Box>
      </S.LastPost>
    </S.Section>
  )
}
