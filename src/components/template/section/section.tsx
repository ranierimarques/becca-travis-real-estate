import { Box } from '@/common'
import type * as Stitches from '@stitches/react'
import { ReactNode } from 'react'
import type { SectionVariants } from './section.styles'
import * as S from './section.styles'

type Props = {
  children: ReactNode
  css?: Stitches.CSS
  background?: string
} & SectionVariants

export function Section({ background, ...props }: Props) {
  if (background) {
    return (
      <Box css={{ bg: background }} as="section">
        <S.Section {...props} as="div" />
      </Box>
    )
  }

  return <S.Section {...props} />
}
