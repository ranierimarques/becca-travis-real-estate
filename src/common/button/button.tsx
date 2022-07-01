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
}
