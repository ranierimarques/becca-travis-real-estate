import { ReactNode, forwardRef } from 'react'
import type * as Stitches from '@stitches/react'
import { Loader } from '@/common'
import type { ButtonVariants } from './button.styles'
import * as S from './button.styles'

type ref = HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement

type buttonProps = {
  children: ReactNode
  href?: string
  as?: 'span' | 'a'
  type?: 'button' | 'submit'
  target?: '_blank' | '_self'
  css?: Stitches.CSS
  onClick?: () => void
  disabled?: boolean
} & ButtonVariants

type anchorRef = React.ForwardedRef<HTMLAnchorElement>
type buttonRef = React.ForwardedRef<HTMLButtonElement>
type spanRef = React.ForwardedRef<HTMLSpanElement>

export const Button = forwardRef<ref, buttonProps>(
  ({ href, children, as, target, ...props }, forwardedRef) => {
    const { loading } = props

    if (href && !as) {
      return (
        <S.NextLink {...props} href={href} ref={forwardedRef as anchorRef}>
          {loading && <Loader />} {children}
        </S.NextLink>
      )
    }

    if (as === 'a') {
      return (
        <S.Link
          {...props}
          href={href}
          target={target}
          rel="noreferrer noopener"
          ref={forwardedRef as anchorRef}
        >
          {loading && <Loader />} {children}
        </S.Link>
      )
    }

    if (as === 'span') {
      return (
        <S.Span {...props} ref={forwardedRef as spanRef}>
          {loading && <Loader />} {children}
        </S.Span>
      )
    }

    return (
      <S.Button {...props} ref={forwardedRef as buttonRef}>
        {loading && <Loader />} {children}
      </S.Button>
    )
  }
)
