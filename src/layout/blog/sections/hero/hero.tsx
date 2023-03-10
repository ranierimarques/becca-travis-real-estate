import { Box, Flex, Image } from '@/common'
import { Hat } from '@/shared'
import { getDate } from '@/utils/date'
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
  function scrollTo() {
    document.querySelector('#latest')?.scrollIntoView()
  }

  return (
    <S.Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Wrapper>
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp4': 'center',
          }}
          css={{ minWidth: 336, '@bp4': { minwidth: 'auto' } }}
        >
          <Hat>News</Hat>
          <S.Title>Becca Travis Blog</S.Title>
          <S.Description>
            Be &quot;in the know&quot; of what&apos;s current and news <br />
            worthy in Huntsville & North Alabama.
          </S.Description>
          <S.KeepExploring onClick={scrollTo}>
            <Svg.CircleArrow /> Keep exploring
          </S.KeepExploring>
        </Flex>

        <Box
          css={{
            '@bp4': {
              position: 'relative',
              pb: 64,
            },
            '@bp2': {
              pb: 56,
            },
            '@bp1': {
              pb: 64,
            },
          }}
        >
          <Box
            css={{
              '@bp4': {
                background: '$white',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '100%',
                width: '100vw',
              },
            }}
          />
          <Box
            css={{
              '@bp4': {
                background: 'rgba($colors$tangerine5Rgb, 0.3)',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '10%',
                width: '100vw',
              },
            }}
          />

          <S.LastPostLink href={`/post/${newPost.slug}`}>
            <Box
              css={{
                borderRadius: '8px',
                userSelect: 'none',
                pointerEvents: 'none',
                overflow: 'hidden',
              }}
            >
              <Image
                src={newPost.postBanner.url}
                alt={newPost.postBannerAlt}
                width={612}
                height={344}
                priority
              />
            </Box>

            <S.Overlay />
            <Flex
              direction="column"
              align="start"
              css={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                gap: 8,
                paddingRight: 20,
                '@bp3': { bottom: 20, left: 20 },
                '@bp1': { bottom: 16, left: 16 },
              }}
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
        </Box>
      </S.Wrapper>
    </S.Section>
  )
}
