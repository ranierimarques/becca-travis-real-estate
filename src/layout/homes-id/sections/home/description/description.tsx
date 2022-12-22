import { Box } from '@/common'
import * as S from './description.styles'

interface DescriptionProps {
  publicRemarks: string
}

export function Description({ publicRemarks }: DescriptionProps) {
  return (
    <Box
      id="description"
      data-tab-container
      css={{ scrollMarginTop: 100, marginBottom: 64 }}
    >
      <S.Title>Description</S.Title>
      <S.Description>{publicRemarks}</S.Description>
    </Box>
  )
}
