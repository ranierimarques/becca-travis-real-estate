import { Box, Flex, Image } from '@/common'
import { Tooltip } from '@/primitives'
import { Hat, LastCall } from '@/shared'
import { Section } from '@/template'
import { ListItemChild, PostData, PostElements, Textual } from '@/types/post'
import { getDate } from '@/utils/date'
import * as S from './post.styles'
import { ClockSvg } from './svgs'

function listItemChildSwitch(listItemChild: ListItemChild) {
  return listItemChild.map((content, index) => {
    if ('type' in content && content.type !== 'link') {
      return contentSwitch(content, index)
    }

    return textualSwitch(content, index)
  })
}

function textualSwitch(content: Textual, index: number) {
  if ('type' in content && content.type === 'link') {
    return (
      <a
        key={index}
        href={content.href}
        target={content.openInNewTab ? '_blank' : '_self'}
        rel="noreferrer noopener"
      >
        {content.children.map((child, index) => textualSwitch(child, index))}
      </a>
    )
  }

  if ('text' in content) {
    return (
      <S.Text
        key={index}
        underline={content.underline}
        bold={content.bold}
        italic={content.italic}
      >
        {content.text}
      </S.Text>
    )
  }

  throw new Error(`Some case in textual switch isn't implemented`)
}

function contentSwitch(content: PostElements, index: number) {
  switch (content.type) {
    case 'heading-one': {
      return (
        <S.Heading1 key={index}>
          {content.children.map((textual, index) => textualSwitch(textual, index))}
        </S.Heading1>
      )
    }
    case 'heading-two': {
      return (
        <S.Heading2 key={index}>
          {content.children.map((textual, index) => textualSwitch(textual, index))}
        </S.Heading2>
      )
    }
    case 'heading-three': {
      return (
        <S.Heading3 key={index}>
          {content.children.map((textual, index) => textualSwitch(textual, index))}
        </S.Heading3>
      )
    }
    case 'heading-four': {
      return (
        <S.Heading4 key={index}>
          {content.children.map((textual, index) => textualSwitch(textual, index))}
        </S.Heading4>
      )
    }
    case 'heading-five': {
      return (
        <S.Heading5 key={index}>
          {content.children.map((textual, index) => textualSwitch(textual, index))}
        </S.Heading5>
      )
    }
    case 'heading-six': {
      return (
        <S.Heading6 key={index}>
          {content.children.map((textual, index) => textualSwitch(textual, index))}
        </S.Heading6>
      )
    }
    case 'paragraph': {
      return (
        <S.Paragraph key={index}>
          {content.children.map((textual, index) => textualSwitch(textual, index))}
        </S.Paragraph>
      )
    }
    case 'numbered-list': {
      return (
        <S.OrderedList key={index}>
          {content.children.map((listItem, index) => (
            <S.ListItem key={index}>
              {listItem.children.map(listItemChild =>
                listItemChildSwitch(listItemChild.children)
              )}
            </S.ListItem>
          ))}
        </S.OrderedList>
      )
    }
    case 'bulleted-list': {
      return (
        <S.UnorderedList key={index}>
          {content.children.map((listItem, index) => (
            <S.ListItem key={index}>
              {listItem.children.map(listItemChild =>
                listItemChildSwitch(listItemChild.children)
              )}
            </S.ListItem>
          ))}
        </S.UnorderedList>
      )
    }
    case 'table': {
      return (
        <S.Table key={index}>
          <tbody>
            {content.children[0].children.map((tableRow, index) => (
              <S.Tr key={index}>
                {tableRow.children.map((tableCell, index) => (
                  <S.Th key={index}>
                    {tableCell.children.map((content, index) =>
                      contentSwitch(content, index)
                    )}
                  </S.Th>
                ))}
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
      )
    }
    case 'image': {
      return (
        <Box key={index} css={{ mb: 24, br: 8, overflow: 'hidden' }}>
          <Image
            src={content.src}
            alt={content.title}
            width={content.width}
            height={content.height}
          />
        </Box>
      )
    }
    case 'code-block': {
      return (
        <code
          dangerouslySetInnerHTML={{ __html: content.children[0].children[0].text }}
        />
      )
    }
    default: {
      throw new Error(`Some case in content switch isn't implemented`)
    }
  }
}

type PostProps = {
  data: PostData
}

export function Post({ data }: PostProps) {
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
            </div>
          </Box>
        </S.Header>
      </Section>

      <S.Content>
        <S.Container>
          {article.postContent.raw.children.map((post, index) =>
            contentSwitch(post, index)
          )}
        </S.Container>
      </S.Content>

      <LastCall />
    </>
  )
}
