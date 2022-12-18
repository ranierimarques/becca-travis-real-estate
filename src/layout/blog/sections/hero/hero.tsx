import { Flex } from '@/common'
import { Hat } from '@/shared'
import { getDate } from '@/utils/date'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './hero.styles'
import * as Svg from './svgs'

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
    readingTime: string
  }
}

export function Hero({ newPost }: HeroProps) {
  return (
    <S.Section>
      <S.Wrapper>
        <div>
          <Hat>News</Hat>
          <S.Title>Becca Travis Blog</S.Title>
          <S.Description>
            Be &quot;in the know&quot; of what&apos;s current and news <br />
            worthy in Huntsville & North Alabama.
          </S.Description>
          <S.KeepExploring>
            <Svg.CircleArrow /> Keep exploring
          </S.KeepExploring>
        </div>

        <Link href={`/post/${newPost.slug}`} passHref>
          <S.LastPostLink>
            <Image
              src={newPost.postBanner.url}
              alt={newPost.postBannerAlt}
              width={612}
              height={344}
              priority
              style={{
                borderRadius: '8px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
            <S.Overlay />
            <Flex
              direction="column"
              align="start"
              css={{ position: 'absolute', bottom: 24, left: 24, gap: 8 }}
            >
              <Hat variant="3" capitalize>
                {newPost.tag}
              </Hat>
              <S.PostTitle>{newPost.postTitle}</S.PostTitle>
              <S.PostDescription title={newPost.postDescription}>
                {newPost.postDescription}
              </S.PostDescription>
              <Flex align="center" css={{ gap: 20 }}>
                <S.PostDate>{getDate(newPost.createdAt, 'en-US', 'short')}</S.PostDate>
                <S.ReadingTime>{newPost.readingTime}</S.ReadingTime>
              </Flex>
            </Flex>
          </S.LastPostLink>
        </Link>
      </S.Wrapper>
    </S.Section>
  )
}
