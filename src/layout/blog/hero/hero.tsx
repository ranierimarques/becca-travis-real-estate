import { Box, Flex, Hat } from "@common"
import getDate from "@resources/utils/get-date"
import Image from "next/image"
import Link from "next/link"
import * as S from "./hero.styles"

interface HeroProps {
  newPost: {
    id: string
    slug: string
    tag: string
    postTitle: string
    postDescription: string
    postBanner: {
      url: string
    }
    postBannerAlt: string
    createdAt: string
  }
}

export function Hero({ newPost }: HeroProps) {
  return (
    <S.Section>
      <S.Background />

      <Hat>News</Hat>
      <S.Title>Becca Travis Blog</S.Title>
      <S.Description>
        Stay up to date with the latest real estate news, insights and lifestyle
        updates about Huntsville &amp; North Alabama
      </S.Description>

      <Link href={`/blog/${newPost.slug}`} passHref>
        <S.LastPostLink>
          <Image
            src={newPost.postBanner.url}
            alt={newPost.postBannerAlt}
            width={272}
            height={272}
            style={{
              borderRadius: "8px 0 0 8px",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
          <Box css={{ padding: 32, width: 358, display: "inline-block" }}>
            <Flex align="center" justify="between">
              <Hat capitalize>{newPost.tag}</Hat>
              <S.PostDate>
                {getDate(newPost.createdAt, "en-US", "short")}
              </S.PostDate>
            </Flex>

            <S.PostTitle>{newPost.postTitle}</S.PostTitle>
            <S.PostDescription title={newPost.postDescription}>
              {newPost.postDescription}
            </S.PostDescription>
          </Box>
        </S.LastPostLink>
      </Link>
    </S.Section>
  )
}
