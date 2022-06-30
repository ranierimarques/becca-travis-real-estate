import * as S from './hat.styles'

type hatProps = {
  children: string
}

export function Hat({ children }: hatProps) {
  return <S.Container>{children}</S.Container>
}
