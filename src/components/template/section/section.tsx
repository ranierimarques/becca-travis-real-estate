import { ReactNode } from 'react'
import type * as Stitches from '@stitches/react'
import { Box } from '@/common'
import type { SectionVariants } from './section.styles'
import * as S from './section.styles'

type Props = {
  children: ReactNode
  css?: Stitches.CSS
  background?: string
  id?: string
  as?: string
} & SectionVariants

export function Section({ background, id, ...props }: Props) {
  if (background) {
    return (
      <Box css={{ bg: background }} id={id} as="section">
        <S.Section {...props} as="div" />
      </Box>
    )
  }

  return <S.Section id={id} {...props} />
}
