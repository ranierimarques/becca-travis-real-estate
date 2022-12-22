import type * as Stitches from '@stitches/react'
import { ReactNode } from 'react'
import type { SectionVariants } from './section.styles'
import * as S from './section.styles'

type Props = {
  children: ReactNode
  css?: Stitches.CSS
} & SectionVariants

export function Section({ children, ...props }: Props) {
  return <S.Section {...props}>{children}</S.Section>
}
