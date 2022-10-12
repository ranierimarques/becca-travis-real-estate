import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'
import * as S from './tooltip.styles'

type TooltipProps = React.ComponentProps<typeof S.Content> & {
  content: string
}

export const Tooltip = ({ children, content, ...props }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={300}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <S.Content sideOffset={5} side="top" align="center" {...props}>
          {content}
          <S.Arrow width={16} height={8} />
        </S.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
