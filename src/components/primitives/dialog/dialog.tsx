import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef, useRef } from 'react'

export const Content = forwardRef(({ children, ...props }: any, forwardedRef) => {
  const contentRef = useRef<HTMLDivElement>(null)

  function onOpenAutoFocus(event: Event) {
    event.preventDefault()
    contentRef.current?.focus()
  }

  return (
    <DialogPrimitive.Content
      onOpenAutoFocus={onOpenAutoFocus}
      {...props}
      ref={contentRef}
    >
      {children}
    </DialogPrimitive.Content>
  )
})

export const Root = DialogPrimitive.Root
export const Trigger = DialogPrimitive.Trigger
export const Portal = DialogPrimitive.Portal
export const Overlay = DialogPrimitive.Overlay
export const Title = DialogPrimitive.Title
export const Description = DialogPrimitive.Description
export const Close = DialogPrimitive.Close
