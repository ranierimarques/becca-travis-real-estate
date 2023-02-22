import { useEffect, useState } from 'react'
import useThrottle from '@/resources/hooks/useThrottle'
import * as S from './table-of-contents.styles'

const TOP_OFFSET = 110

export function getTabContainers(): NodeListOf<Element> {
  return document.querySelectorAll('[data-tab-container]')
}

export function useTocHighlight() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const throttle = useThrottle(100)

  useEffect(() => {
    function updateActiveLink() {
      const pageHeight = document.body.scrollHeight
      const scrollPosition = window.scrollY + window.innerHeight
      const tabContainers = getTabContainers()

      if (scrollPosition >= 0 && pageHeight - scrollPosition <= TOP_OFFSET) {
        // Scrolled to bottom of page.
        setCurrentIndex(tabContainers.length - 1)
        return
      }

      let index = -1
      while (index < tabContainers.length - 1) {
        const tabContainer = tabContainers[index + 1]
        const { top } = tabContainer.getBoundingClientRect()

        if (top >= TOP_OFFSET) {
          break
        }
        index += 1
      }

      setCurrentIndex(Math.max(index, 0))
    }

    const throttledUpdateActiveLink = () => throttle(updateActiveLink)

    document.addEventListener('scroll', throttledUpdateActiveLink)
    document.addEventListener('resize', throttledUpdateActiveLink)

    updateActiveLink()

    return () => {
      document.removeEventListener('scroll', throttledUpdateActiveLink)
      document.removeEventListener('resize', throttledUpdateActiveLink)
    }
  }, [throttle])

  return {
    currentIndex,
  }
}

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

export function TableOfContents() {
  const { currentIndex } = useTocHighlight()

  return (
    <S.Container>
      <S.PageIndex>
        {pageIndex.map((section, index) => (
          <S.Li key={section.name} active={index === currentIndex}>
            <S.Content href={`#${section.href}`} replace scroll={false}>
              {section.name}
            </S.Content>
            <S.ActiveHr />
          </S.Li>
        ))}
      </S.PageIndex>
    </S.Container>
  )
}
