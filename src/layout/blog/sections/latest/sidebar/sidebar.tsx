import { Box } from '@common'
import { SetStateAction } from 'react'
import { ArrowDownSvg } from '../svgs'
import * as S from './sidebar.styles'

interface SidebarProps {
  uniqueTags: string[]
  mostPopularTags: string[]
  activeCategory: string
  setActiveCategory: React.Dispatch<SetStateAction<string>>
}

export function Sidebar({
  activeCategory,
  setActiveCategory,
  uniqueTags,
  mostPopularTags,
}: SidebarProps) {
  return (
    <div>
      <div>
        <S.Title>Blog categories</S.Title>
        <S.DropdownWrapper>
          <S.DropdownInput type="text" placeholder="Select category" readOnly />
          <ArrowDownSvg />
        </S.DropdownWrapper>
      </div>

      <Box css={{ mt: 32 }}>
        <S.Title>Most popular</S.Title>
        <ul>
          <S.List>
            <S.CategoryButton
              onClick={() => setActiveCategory('View all')}
              active={activeCategory === 'View all'}
            >
              View all
            </S.CategoryButton>
          </S.List>
          {mostPopularTags.map(category => (
            <S.List key={category}>
              <S.CategoryButton
                onClick={() => setActiveCategory(category)}
                active={activeCategory === category}
              >
                {category}
              </S.CategoryButton>
            </S.List>
          ))}
        </ul>
      </Box>
    </div>
  )
}
