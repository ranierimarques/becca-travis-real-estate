import { Box, Hat } from '@common'
import getDate from '@resources/utils/get-date'
import { LastCall } from '@shared'
import Image from 'next/image'
import { Fragment } from 'react'
import * as S from './post.styles'
import { ClockSvg, DividerSvg } from './svgs'

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
          <GetList post={post} />
        </S.OrderedList>
      )
    }
    case 'bulleted-list': {
      return (
        <S.UnorderedList key={index}>
          <GetList post={post} />
        </S.UnorderedList>
      )
    }
    default: {
      return <Fragment key={index}>{post.children[0].text}</Fragment>
    }
  }
}

export function Post({ data }: any) {
  const article = data.posts[0]

  return (
    <S.Section>
      <S.Background />
      <S.Content>
        <S.Header>
          <Hat css={{ marginBottom: 8 }}>{article.tag}</Hat>
          <S.PostTitle>{article.title}</S.PostTitle>
          <S.PostDescription>{article.postDescription}</S.PostDescription>
          <div>
            <Image src={article.postBanner[0].url} alt="test" width="888" height="340" />

            <S.PostDetails>
              <Box css={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <S.DatePublished>
                  {getDate(article.createdAt, 'en-US', 'long').replace(' ', ' - ')}
                </S.DatePublished>
                <Box
                  css={{
                    background: '#8C8A97',
                    width: '4px',
                    height: '4px',
                    borderRadius: 999,
                  }}
                />
                <S.TimeToRead>{data.readingTime}</S.TimeToRead>
              </Box>
              <S.LastUpdate>
                <ClockSvg />
                Last updated on {getDate(article.updatedAt, 'en-US', 'short')}
              </S.LastUpdate>
            </S.PostDetails>
            <DividerSvg />
          </div>
        </S.Header>

        {article.postContent.raw.children.map((post: any, index: number) =>
          contentSwitch(post.type, post, index)
        )}
      </S.Content>
      <LastCall />
    </S.Section>
  )
}
