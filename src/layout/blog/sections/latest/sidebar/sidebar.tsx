import { Box } from '@/common'
import { Select } from '@/primitives'
import { SetStateAction } from 'react'
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
    <Box css={{ minWidth: 280 }}>
      <div>
        <S.Title>Blog categories</S.Title>
        <Select.Root onValueChange={value => setActiveCategory(value)}>
          <Select.Item value="View all">View all</Select.Item>
          {uniqueTags.map((tag, index) => (
            <Select.Item key={index} value={tag}>
              {tag}
            </Select.Item>
          ))}
        </Select.Root>
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
    </Box>
  )
}
