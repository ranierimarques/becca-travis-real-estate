import { Fragment } from 'react'
import { Box, Flex, Image } from '@/common'
import { Tooltip } from '@/primitives'
import { Hat, LastCall } from '@/shared'
import { Section } from '@/template'
import { getDate } from '@/utils/date'
import * as S from './post.styles'
import { ClockSvg } from './svgs'

function GetList({ post }: any) {
  return (
    <>
      {post.children.map((child: any, i: number) => {
        return <S.ListItem key={i}>{child.children[0].children[0].text}</S.ListItem>
      })}
    </>
  )
}

function contentSwitch(type: string, post: any, index: number) {
  switch (type) {
    case 'heading-one': {
      return <S.Heading1 key={index}>{post.children[0].text}</S.Heading1>
    }
    case 'heading-two': {
      return <S.Heading2 key={index}>{post.children[0].text}</S.Heading2>
    }
    case 'heading-three': {
      return <S.Heading3 key={index}>{post.children[0].text}</S.Heading3>
    }
    case 'heading-four': {
      return <S.Heading4 key={index}>{post.children[0].text}</S.Heading4>
    }
    case 'heading-five': {
      return <S.Heading5 key={index}>{post.children[0].text}</S.Heading5>
    }
    case 'heading-six': {
      return <S.Heading6 key={index}>{post.children[0].text}</S.Heading6>
    }
    case 'paragraph': {
      return <S.Paragraph key={index}>{post.children[0].text}</S.Paragraph>
    }
    case 'block-quote': {
      return <S.Blockquote key={index}>{post.children[0].text}</S.Blockquote>
    }
    case 'numbered-list': {
      return (
        <S.OrderedList key={index}>
          <GetList post={post} index={index} />
        </S.OrderedList>
      )
    }
    case 'bulleted-list': {
      return (
        <S.UnorderedList key={index}>
          <GetList post={post} index={index} />
        </S.UnorderedList>
      )
    }
    case 'image': {
      return (
        <Box key={index} css={{ mb: 24, br: 8, overflow: 'hidden' }}>
          <Image
            src={post.src}
            alt={post.title}
            width={post.width}
            height={post.height}
          />
        </Box>
      )
    }
    default: {
      return <Fragment key={index}>{post.children[0].text}</Fragment>
    }
  }
}

export function Post({ data }: any) {
  const article = data.post

  return (
    <>
      <Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
        <S.Header>
          <Hat css={{ marginBottom: 8 }}>{article.tag}</Hat>
          <S.PostTitle>{article.postTitle}</S.PostTitle>
          <S.PostDescription>{article.postDescription}</S.PostDescription>
          <Box
            css={{
              position: 'relative',
            }}
          >
            <Box
              css={{
                background: '$white',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '100%',
                width: '100vw',
              }}
            />
            <Box
              css={{
                background: 'rgba($colors$tangerine5Rgb, 0.3)',

                position: 'absolute',
                left: '50%',

                transform: 'translate(-50%)',

                height: '40%',
                width: '100vw',
              }}
            />
            <div>
              <Image
                src={article.postBanner.url}
                alt={article.postBannerAlt}
                width="888"
                height="340"
                priority
                style={{
                  borderRadius: '8px',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />

              <S.PostDetails>
                <Flex align="center" css={{ gap: 16 }}>
                  <span>
                    {getDate(article.createdAt, 'en-US', 'long').replace(' ', ' - ')}
                  </span>
                  <Box css={{ bg: '$gray5', w: '4px', h: '4px', br: 999 }} />
                  <span>{data.readingTime}</span>
                </Flex>
                <S.LastUpdate>
                  <ClockSvg />
                  Last updated on {getDate(article.updatedAt, 'en-US', 'short')}
                </S.LastUpdate>
                <Box css={{ display: 'none', '@bp2': { display: 'block' } }}>
                  <Tooltip
                    variant="2"
                    align="end"
                    alignOffset={-5}
                    content={`Last updated on ${getDate(
                      article.updatedAt,
                      'en-US',
                      'short'
                    )}`}
                  >
                    <S.TooltipButton>
                      <ClockSvg />
                    </S.TooltipButton>
                  </Tooltip>
                </Box>
              </S.PostDetails>
              <S.Divider />
              {/* <DividerSvg /> */}
            </div>
          </Box>
        </S.Header>
      </Section>

      <S.Content>
        <S.Container>
          {article.postContent.raw.children.map((post: any, index: number) =>
            contentSwitch(post.type, post, index)
          )}
        </S.Container>
      </S.Content>

      <LastCall />
    </>
  )
}
