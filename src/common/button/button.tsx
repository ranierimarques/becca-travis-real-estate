/* eslint-disable react/display-name */
import type * as Stitches from "@stitches/react"
import Link from "next/link"
import { forwardRef, ReactNode } from "react"
import type { ButtonVariants } from "./button.styles"
import * as S from "./button.styles"

type ref = HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement

type buttonProps = {
  children: ReactNode
  href?: string
  as?: "span" | "a"
  target?: "_blank" | "_self"
  css?: Stitches.CSS
} & ButtonVariants

type anchorRef = React.ForwardedRef<HTMLAnchorElement>
type buttonRef = React.ForwardedRef<HTMLButtonElement>
type spanRef = React.ForwardedRef<HTMLSpanElement>

export const Button = forwardRef<ref, buttonProps>(
  ({ href, children, as, target, ...props }, forwardedRef) => {
    if (href && !as) {
      return (
        <Link href={href} passHref>
          <S.Link {...props} ref={forwardedRef as anchorRef}>
            {children}
          </S.Link>
        </Link>
      )
    }

    if (as === "a") {
      return (
        <S.Link
          {...props}
          href={href}
          target={target}
          ref={forwardedRef as anchorRef}
        >
          {children}
        </S.Link>
      )
    }

    if (as === "span") {
      return (
        <S.Span {...props} ref={forwardedRef as spanRef}>
          {children}
        </S.Span>
      )
    }

    return (
      <S.Button {...props} ref={forwardedRef as buttonRef}>
        {children}
      </S.Button>
    )
  }
)
