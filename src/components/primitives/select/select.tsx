import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import * as S from './select.styles'
import * as Svg from './svgs'

type Props = React.ComponentProps<typeof SelectPrimitive.Root> & {
  community?: boolean
  category?: string
}

export const Root = ({ children, community, category, ...props }: Props) => {
  return (
    <SelectPrimitive.Root {...props}>
      <S.Trigger community={community}>
        <SelectPrimitive.Value placeholder={community ? category : 'Select category'} />
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
