import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

export const Root = DropdownMenuPrimitive.Root
export const Trigger = DropdownMenuPrimitive.Trigger
export const Arrow = DropdownMenuPrimitive.Arrow

export const Content = forwardRef(({ children, ...props }: any, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content {...props} ref={forwardedRef}>
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  )
})

export const Label = DropdownMenuPrimitive.Label
export const Item = DropdownMenuPrimitive.Item
export const Group = DropdownMenuPrimitive.Group

export const CheckboxItem = forwardRef(
  ({ icon, children, ...props }: any, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem {...props} ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>{icon}</DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    )
  }
)

export const RadioGroup = DropdownMenuPrimitive.RadioGroup

export const RadioItem = forwardRef(({ icon, children, ...props }: any, forwardedRef) => {
  return (
    <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
      {children}
      <DropdownMenuPrimitive.ItemIndicator>{icon}</DropdownMenuPrimitive.ItemIndicator>
    </DropdownMenuPrimitive.RadioItem>
  )
})

export const Separator = DropdownMenuPrimitive.Separator
