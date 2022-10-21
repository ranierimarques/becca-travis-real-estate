import * as SelectPrimitive from '@radix-ui/react-select'
import React from 'react'
import * as S from './select.styles'
import * as Svg from './svgs'

type Props = React.ComponentProps<typeof SelectPrimitive.Root>

export const Root = ({ children, ...props }: Props) => {
  return (
    <SelectPrimitive.Root {...props}>
      <S.Trigger>
        <SelectPrimitive.Value placeholder="Select category" />
        <SelectPrimitive.Icon>
          <Svg.ArrowDown />
        </SelectPrimitive.Icon>
      </S.Trigger>

      <SelectPrimitive.Portal>
        <S.Content>
          <S.ScrollUpButton>
            <Svg.Arrow />
          </S.ScrollUpButton>

          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

          <S.ScrollDownButton>
            <Svg.Arrow />
          </S.ScrollDownButton>
        </S.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}

type ItemProps = React.ComponentProps<typeof S.Item>

export const Item = ({ children, ...props }: ItemProps) => {
  return (
    <S.Item {...props}>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <S.ItemIndicator>
        <Svg.CheckMark />
      </S.ItemIndicator>
    </S.Item>
  )
}
