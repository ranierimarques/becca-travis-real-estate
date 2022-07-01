import type * as Stitches from "@stitches/react"
import Link from "next/link"
import { ReactNode } from "react"
import type { ButtonVariants } from "./button.styles"
import * as S from "./button.styles"

type buttonProps = {
  href?: string
  children: ReactNode
  as?: "span"
  css?: Stitches.CSS
} & ButtonVariants

export function Button({ href, children, as, ...props }: buttonProps) {
  if (href) {
    return (
      <Link href={href} passHref>
        <S.Link {...props}>{children}</S.Link>
      </Link>
    )
  }

  if (as) {
    return <S.Span {...props}>{children}</S.Span>
  }

  return <S.Button {...props}>{children}</S.Button>
}
