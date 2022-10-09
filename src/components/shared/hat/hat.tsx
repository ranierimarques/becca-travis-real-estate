import type * as Stitches from '@stitches/react'
import { ReactNode } from 'react'
import * as S from './hat.styles'

interface HatTypes {
  children: ReactNode
  variant?: '1' | '2'
  css?: Stitches.CSS
}

export function Hat({ variant, children, ...props }: HatTypes) {
  if (variant === '2') {
    return (
      <S.Hat variant="2" {...props}>
        <S.Line /> {children}
      </S.Hat>
    )
  }

  return <S.Hat {...props}>{children}</S.Hat>
}
