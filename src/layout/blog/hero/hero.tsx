import { Box, Hat } from '@common'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './hero.styles'

interface HeroProps {
  graphcms: any
}

export function Hero({ graphcms }: HeroProps) {
  console.log(graphcms)

  return (
    <S.Section>
      <S.Background />

      <Hat>NEWS</Hat>
      <S.Title>Becca Travis Blog</S.Title>
      <S.Description>
        Stay up to date with the latest real estate news, insights and lifestyle updates
        about Huntsville &amp; North Alabama
      </S.Description>

      <Link href={`/blog/${graphcms.posts[7].slug}`} passHref>
        <S.LastPostLink>
          <Image
            src={graphcms.posts[7].postBanner[0].url}
            alt="image"
            width={272}
            height={272}
            style={{
              borderRadius: '8px 0 0 8px',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />
          <Box css={{ padding: 32, width: 358, display: 'inline-block' }}>
            <Box
              css={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Hat capitalize>Huntsville</Hat>

              <S.PostDate>{graphcms.posts[7].datePublished}</S.PostDate>
            </Box>
            <S.PostTitle>{graphcms.posts[7].postTitle}</S.PostTitle>
            <S.PostDescription title={graphcms.posts[7].postDescription}>
              {graphcms.posts[7].postDescription}
            </S.PostDescription>
          </Box>
        </S.LastPostLink>
      </Link>
    </S.Section>
  )
}
