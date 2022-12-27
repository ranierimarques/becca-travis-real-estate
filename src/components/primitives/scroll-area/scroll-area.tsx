import React from 'react'
import * as S from './scroll-area.styles'

type TooltipProps = React.ComponentProps<typeof S.Root>

export const ScrollArea = ({ children, ...props }: TooltipProps) => {
  return (
    <S.Root scrollHideDelay={0} {...props}>
      <S.Viewport onScroll={props.onScroll}>{children}</S.Viewport>
      <S.Scrollbar orientation="vertical">
        <S.Thumb />
      </S.Scrollbar>
    </S.Root>
  )
}
