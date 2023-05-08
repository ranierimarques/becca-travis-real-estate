import { Fragment } from 'react'
import { Section } from '@/template'
import * as S from './terms.styles'

function GetList({ content }: any) {
  return (
    <>
      {content.children.map((child: any, i: number) => {
        return <S.ListItem key={i}>{child.children[0].children[0].text}</S.ListItem>
      })}
    </>
  )
}

function contentSwitch(type: string, content: any, index: number) {
  switch (type) {
    case 'heading-one': {
      return <S.Heading1 key={index}>{content.children[0].text}</S.Heading1>
    }
    case 'heading-two': {
      return <S.Heading2 key={index}>{content.children[0].text}</S.Heading2>
    }
    case 'heading-three': {
      return <S.Heading3 key={index}>{content.children[0].text}</S.Heading3>
    }
    case 'heading-four': {
      return <S.Heading4 key={index}>{content.children[0].text}</S.Heading4>
    }
    case 'heading-five': {
      return <S.Heading5 key={index}>{content.children[0].text}</S.Heading5>
    }
    case 'heading-six': {
      return <S.Heading6 key={index}>{content.children[0].text}</S.Heading6>
    }
    case 'paragraph': {
      return <S.Paragraph key={index}>{content.children[0].text}</S.Paragraph>
    }
    case 'block-quote': {
      return <S.Blockquote key={index}>{content.children[0].text}</S.Blockquote>
    }
    case 'numbered-list': {
      return (
        <S.OrderedList key={index}>
          <GetList content={content} index={index} />
        </S.OrderedList>
      )
    }
    case 'bulleted-list': {
      return (
        <S.UnorderedList key={index}>
          <GetList content={content} index={index} />
        </S.UnorderedList>
      )
    }
    default: {
      return <Fragment key={index}>{content.children[0].text}</Fragment>
    }
  }
}

export function Terms({ data }: any) {
  return (
    <Section hasMaxWidth>
      <S.PageTitle>{data.utils[0].pageTitle}</S.PageTitle>
      {data.utils[0].content.raw.children.map((content: any, index: any) =>
        contentSwitch(content.type, content, index)
      )}
    </Section>
  )
}
