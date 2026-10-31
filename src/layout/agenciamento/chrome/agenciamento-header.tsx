import Link from 'next/link'
import Logo from '../../../components/common/navbar/svgs/logo'
import * as S from './agenciamento-header.styles'

export function AgenciamentoHeader() {
  return (
    <S.Header>
      <S.Nav aria-label="Navegação em português">
        <S.LogoLink href="/" aria-label="Página inicial de Becca Travis">
          <Logo />
        </S.LogoLink>

        <S.Links>
          <Link href="/agenciamento#planejador">Meu plano</Link>
          <Link href="/agenciamento#valor">O que recebo</Link>
          <Link href="/agenciamento#guias-por-estado">50 estados</Link>
          <Link href="/agenciamento#contato">Falar com Becca</Link>
        </S.Links>
      </S.Nav>
    </S.Header>
  )
}
