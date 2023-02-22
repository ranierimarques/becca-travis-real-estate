import React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as S from './tooltip.styles'

type TooltipProps = React.ComponentProps<typeof S.Content> & {
  content: string
  variant?: '1' | '2'
  align?: 'start' | 'center' | 'end'
  alignOffset?: number
}

export const Tooltip = ({
  children,
  content,
  variant,
  align = 'center',
  alignOffset = 0,
  ...props
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={300}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <S.Content
          sideOffset={3}
          alignOffset={alignOffset}
          side="top"
          align={align}
          variant={variant}
          {...props}
        >
          {content}
          <S.Arrow width={16} height={8} variant={variant} />
        </S.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
