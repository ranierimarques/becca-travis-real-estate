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
      css={{
        scrollMarginTop: 100,
        mb: 64,
        gridArea: 'description',
        '@bp4': { mb: 56 },
        '@bp3': { mb: 48 },
        '@bp2': { mb: 40, px: 24 },
        '@bp1': { px: 16 },
      }}
    >
      <S.Title>Description</S.Title>
      <S.Description>{publicRemarks}</S.Description>
    </Box>
  )
}
