import Link from 'next/link'
import { useEffect, useState } from 'react'
import * as S from './table-of-contents.styles'

const pageIndex = [
  {
    name: 'Description',
    href: 'description',
  },
  {
    name: 'Features',
    href: 'features',
  },
  {
    name: 'Ask a Question',
    href: 'ask-a-question',
  },
  {
    name: 'Related Properties',
    href: 'related-properties',
  },
]

function useActiveId(itemIds: string[]) {
  const [activeId, setActiveId] = useState(`test`)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )
    itemIds.forEach(id => {
      observer.observe(document.getElementById(id) as Element)
    })
    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id) as Element)
      })
    }
  }, [itemIds])
  return activeId
}

export function TableOfContents() {
  const items = ['description', 'features', 'ask-a-question', 'related-properties']

  const activeItems = useActiveId(items)
  console.log(activeItems)
  return (
    <S.Container>
      <S.PageIndex>
        {pageIndex.map(section => (
          <S.Li key={section.name}>
            <Link href={`#${section.href}`} passHref>
              <S.Content active={section.href === activeItems}>{section.name}</S.Content>
            </Link>
            <S.ActiveHr active={section.href === activeItems} />
          </S.Li>
        ))}
      </S.PageIndex>
      <hr />
    </S.Container>
  )
}
