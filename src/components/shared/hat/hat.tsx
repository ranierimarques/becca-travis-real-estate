import React from 'react'
import * as S from './hat.styles'

type HatProps = React.ComponentProps<typeof S.Hat>

export function Hat({ children, ...props }: HatProps) {
  if (props.variant === '2') {
    return (
      <S.Hat variant="2" {...props}>
        <S.Line /> {children}
      </S.Hat>
    )
  }

  return <S.Hat {...props}>{children}</S.Hat>
}
