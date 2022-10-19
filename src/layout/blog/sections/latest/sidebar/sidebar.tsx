import { Box } from '@common'
import { Select } from '@primitives'
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
    <Box css={{ minWidth: 280 }}>
      <div>
        <S.Title>Blog categories</S.Title>
        <Select.Root>
          <Select.Item value="1">Item 1</Select.Item>
          <Select.Item value="2">Item 2</Select.Item>
          <Select.Item value="3">Item 3</Select.Item>
          <Select.Item value="4">Item 4</Select.Item>
          <Select.Item value="5">Item 5</Select.Item>
          <Select.Item value="6">Item 6</Select.Item>
          <Select.Item value="7">Item 7</Select.Item>
          <Select.Item value="8">Item 8</Select.Item>
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
