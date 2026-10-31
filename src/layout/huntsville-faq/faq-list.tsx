import { useMemo, useState } from 'react'
import type { FaqItem } from '../../data/huntsville-faq'
import { faqSearchText, huntsvilleFaq } from '../../data/huntsville-faq'
import * as S from './faq-list.styles'

interface FaqListProps {
  items?: FaqItem[]
  limit?: number
  showSearch?: boolean
}

export function FaqList({
  items = huntsvilleFaq,
  limit,
  showSearch = true,
}: FaqListProps) {
  const [query, setQuery] = useState('')
  const visibleItems = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    const matching = items.filter(item => {
      const words = faqSearchText(item)
        .split(/[^a-z0-9]+/)
        .filter(Boolean)
      return terms.every(term =>
        words.some(word => (term.length <= 2 ? word === term : word.startsWith(term)))
      )
    })
    return limit ? matching.slice(0, limit) : matching
  }, [items, limit, query])

  return (
    <S.FaqSection>
      {showSearch && (
        <S.SearchWrap>
          <label htmlFor="huntsville-faq-search">Search questions</label>
          <S.SearchInput
            id="huntsville-faq-search"
            type="search"
            placeholder="Try taxes, schools, VA loans, or utilities"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <S.ResultCount aria-live="polite">
            {visibleItems.length} {visibleItems.length === 1 ? 'answer' : 'answers'}
          </S.ResultCount>
        </S.SearchWrap>
      )}
      <S.List>
        {visibleItems.map(item => (
          <S.Item key={item.question}>
            <S.Question>{item.question}</S.Question>
            <S.Answer>
              <p>{item.answer}</p>
              {item.sources.length > 0 && (
                <S.Sources aria-label="Sources">
                  {item.sources.map(source => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {source.label}
                    </a>
                  ))}
                </S.Sources>
              )}
            </S.Answer>
          </S.Item>
        ))}
      </S.List>
      {visibleItems.length === 0 && (
        <S.Empty>
          No matching answers yet. Try a broader search or contact Becca with your
          question.
        </S.Empty>
      )}
    </S.FaqSection>
  )
}
