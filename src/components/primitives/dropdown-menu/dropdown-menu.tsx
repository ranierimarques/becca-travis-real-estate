import React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as S from './dropdown-menu.styles'

export const Root = DropdownMenuPrimitive.Root
export const Trigger = S.Trigger
export const Group = S.Group
export const Item = S.Item

type ContentProps = React.ComponentProps<typeof S.Content>

export const Content = ({ children, ...props }: ContentProps) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <S.Content {...props}>{children}</S.Content>
    </DropdownMenuPrimitive.Portal>
  )
}

export const RadioGroup = S.RadioGroup

type RadioItemProps = React.ComponentProps<typeof S.RadioItem>

export const RadioItem = ({ children, ...props }: RadioItemProps) => {
  return (
    <S.RadioItem {...props}>
      {children}
      <DropdownMenuPrimitive.ItemIndicator>
        <S.CheckMark />
      </DropdownMenuPrimitive.ItemIndicator>
    </S.RadioItem>
  )
}

export const Arrow = S.Arrow
