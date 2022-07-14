import { Box, Hat } from "@common"
import Image from "next/image"

import * as S from "./hero.styles"

interface HeroProps {
  graphcms: any
}

export function Hero({ graphcms }: HeroProps) {
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
        <Image
          src={graphcms.posts[0].postBanner[0].url}
          alt="image"
          width={272}
          height={272}
        />
        <Box
          css={{
            display: "flex",
            width: "358px",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "32px",
          }}
        >
          <Box
            css={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Hat>Huntsville</Hat>

            <S.PostDate>{graphcms.posts[0].datePublished}</S.PostDate>
          </Box>
          <S.PostTitle>{graphcms.posts[0].title}</S.PostTitle>
          <S.PostDescription>
            {graphcms.posts[0].postDescription}
          </S.PostDescription>
        </Box>
      </S.LastPost>
    </S.Section>
  )
}
