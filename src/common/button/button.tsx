<<<<<<< HEAD
import NextLink from "next/link"
import * as S from "./button.styles"

type ButtonProps = {
  children: string
  href: string
}

export function Button({ children, href }: ButtonProps) {
  return (
    <NextLink href={href} passHref>
      <S.Link>{children}</S.Link>
    </NextLink>
  )
=======
import type * as Stitches from '@stitches/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import type { ButtonVariants } from './button.styles'
import * as S from './button.styles'

type buttonProps = {
  href?: string
  children: ReactNode
  as?: 'span'
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
>>>>>>> 7e9988a7263c0eca721e5c075f331683b1b9d9a8
}
