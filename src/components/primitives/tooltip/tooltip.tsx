import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'
import * as S from './tooltip.styles'

type TooltipProps = React.ComponentProps<typeof S.Content> & {
  content: string
  variant?: '1' | '2'
}

export const Tooltip = ({ children, content, variant, ...props }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={300}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <S.Content sideOffset={3} side="top" align="center" variant={variant} {...props}>
          {content}
          <S.Arrow width={16} height={8} variant={variant} />
        </S.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
