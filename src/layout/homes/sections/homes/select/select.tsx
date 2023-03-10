import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as S from './select.styles'
import * as Svg from './svgs'

type Props = React.ComponentProps<typeof SelectPrimitive.Root> & {
  placeholder: string
}

export const Root = ({ children, placeholder, ...props }: Props) => {
  return (
    <SelectPrimitive.Root {...props}>
      <S.Trigger>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <Svg.ArrowDown />
        </SelectPrimitive.Icon>
      </S.Trigger>

      <S.Content>
        <S.ScrollUpButton>
          <Svg.Arrow />
        </S.ScrollUpButton>

        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>

        <S.ScrollDownButton>
          <Svg.Arrow />
        </S.ScrollDownButton>
      </S.Content>
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
