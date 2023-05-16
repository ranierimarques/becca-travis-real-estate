import { Section } from '@/template'
import { Content, ListItemChild, TermsData, Textual } from '@/types/terms'
import * as S from './terms.styles'

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

function contentSwitch(content: Content, index: number) {
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
    default: {
      throw new Error(`Some case in content switch isn't implemented`)
    }
  }
}

type TermsProps = {
  terms: TermsData
}

export function Terms({ terms }: TermsProps) {
  const termPage = terms.utils[0]

  return (
    <Section hasMaxWidth css={{ pt: 60, pb: 60 }}>
      <S.PageTitle>{termPage.pageTitle}</S.PageTitle>
      {termPage.content.raw.children.map((content, index) =>
        contentSwitch(content, index)
      )}
    </Section>
  )
}
