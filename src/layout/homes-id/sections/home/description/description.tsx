import { Box } from '@/common'
import * as S from './description.styles'

export function Description() {
  return (
    <Box
      id="description"
      data-tab-container
      css={{ scrollMarginTop: 100, marginBottom: 64 }}
    >
      <S.Title>Description</S.Title>
      <S.Description>
        Perfect, hard to find investment opportunity in a prime location. 2 story full
        brick building, concrete and steel construction. 11,000 square feet. Can be Retail
        or office. 80% updated in the last 5 years. For sale and for lease near the
        intersection of Drake Ave and L&amp;N Drive. Convenient to The Parkway, Wal-Mart
        Super Center, Parkway Place Mall, Whole Foods/The Shops at Merchants Walk, and
        more.
      </S.Description>
    </Box>
  )
}
