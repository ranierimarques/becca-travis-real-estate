import { Box, Flex } from '@common'
import { MissOutCard } from '@shared'
import { getDate } from '@utils/date'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './articles.styles'

interface PostsProps {
  posts: {
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
    readingTime: string
  }[]
}

export function Articles({ posts }: PostsProps) {
  return (
    <S.Articles>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`} passHref>
            <S.Link>
              <Box css={{ w: '100%', aspectRatio: '16 / 9', position: 'relative' }}>
                <Image
                  src={post.postBanner.url}
                  alt={post.postBannerAlt}
                  layout="fill"
                  style={{ borderRadius: 8 }}
                />
                <S.Overlay />
              </Box>
              <Flex justify="between" css={{ lh: 0, mt: 16, mb: 12 }}>
                <div>
                  <S.ArticleTag>{post.tag}</S.ArticleTag>
                  <S.ReadingTime>{post.readingTime}</S.ReadingTime>
                </div>
                <S.ArticleDate>{getDate(post.createdAt, 'en-US', 'short')}</S.ArticleDate>
              </Flex>

              <S.ArticleTitle>{post.postTitle}</S.ArticleTitle>
              <S.ArticleDescription>{post.postDescription}</S.ArticleDescription>
            </S.Link>
          </Link>
        </li>
      ))}

      <MissOutCard />
    </S.Articles>
  )
}
