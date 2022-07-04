/* eslint-disable react/display-name */
import type * as Stitches from '@stitches/react'
import Link from 'next/link'
import { forwardRef, ReactNode, Ref } from 'react'
import type { ButtonVariants } from './button.styles'
import * as S from './button.styles'

type buttonProps = {
  href?: string
  children: ReactNode
  as?: 'span' | 'a'
  css?: Stitches.CSS
} & ButtonVariants

export const Button = forwardRef(
  (
    { href, children, as, ...props }: buttonProps,
    forwardedRef: Ref<HTMLAnchorElement>
  ) => {
    if (href && !as) {
      return (
        <Link href={href} passHref>
          <S.Link {...props}>{children}</S.Link>
        </Link>
      )
    }

    if (as === 'a') {
      return (
        <S.Link href={href} ref={forwardedRef} {...props}>
          {children}
        </S.Link>
      )
    }

    if (as === 'span') {
      return <S.Span {...props}>{children}</S.Span>
    }

    return <S.Button {...props}>{children}</S.Button>
  }
)
