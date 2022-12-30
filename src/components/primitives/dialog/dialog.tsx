import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import React, { useRef } from 'react'
import * as S from './dialog.styles'
import { Cross } from './svgs'

type RootProps = React.ComponentProps<typeof DialogPrimitive.Root>

export const Root = ({ children, ...props }: RootProps) => {
  return <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
}

export const Trigger = DialogPrimitive.Trigger

type ContentProps = React.ComponentProps<typeof S.Content> & {
  overlay?: boolean
  title: string
  description: string | undefined
}

export const Content = ({
  children,
  overlay = true,
  title,
  description,
  ...props
}: ContentProps) => {
  const { variant } = props
  const contentRef = useRef<HTMLDivElement>(null)

  function onOpenAutoFocus(event: Event) {
    event.preventDefault()
    contentRef.current?.focus()
  }

  const ariaDescribedby = !description ? { 'aria-describedby': undefined } : {}

  return (
    <DialogPrimitive.Portal>
      {overlay && <S.Overlay />}
      <S.ContentWrapper>
        <S.Content
          onOpenAutoFocus={onOpenAutoFocus}
          ref={contentRef}
          {...ariaDescribedby}
          {...props}
        >
          <VisuallyHidden.Root asChild>
            <DialogPrimitive.Title>{title}</DialogPrimitive.Title>
          </VisuallyHidden.Root>
          {description && (
            <VisuallyHidden.Root asChild>
              <DialogPrimitive.Description>{description}</DialogPrimitive.Description>
            </VisuallyHidden.Root>
          )}

          {children}

          <S.Close variant={variant} aria-label="Close">
            <Cross />
          </S.Close>
        </S.Content>
      </S.ContentWrapper>
    </DialogPrimitive.Portal>
  )
}
