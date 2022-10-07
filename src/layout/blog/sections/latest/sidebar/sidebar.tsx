import { Box } from '@common'
import { useState } from 'react'
import { ArrowDownSvg } from '../svgs'
import * as S from './sidebar.styles'

const categories = [
  'View all',
  'Huntsville',
  'Athens',
  'Decatur',
  'Harvest',
  'Haptom Cove',
  'Meridianville',
]

export function Sidebar() {
  const [activeCategory, setActiveCategory] = useState('View all')

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
          {categories.map(category => (
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
