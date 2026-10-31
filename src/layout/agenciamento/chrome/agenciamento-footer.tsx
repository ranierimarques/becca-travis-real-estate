import Link from 'next/link'
import Logo from '../../../components/common/navbar/svgs/logo'
import * as S from './agenciamento-footer.styles'

export function AgenciamentoFooter() {
  return (
    <S.Footer>
      <S.FooterGrid>
        <S.Brand>
          <Link href="/" aria-label="Página inicial de Becca Travis">
            <Logo />
          </Link>
          <p>
            Planejamento de compra e mudança em português, do primeiro destino ao novo
            endereço.
          </p>
        </S.Brand>

        <S.LinkGroup>
          <strong>Planeje sua compra</strong>
          <Link href="/agenciamento#planejador">Montar meu plano</Link>
          <Link href="/agenciamento#valor">O que você recebe</Link>
          <Link href="/agenciamento#guias-por-estado">Guias dos 50 estados</Link>
        </S.LinkGroup>

        <S.LinkGroup>
          <strong>Fale com Becca</strong>
          <a href="tel:+12563189066">(256) 318 9066</a>
          <a href="mailto:becca@beccatravis.com">becca@beccatravis.com</a>
          <Link href="/agenciamento#contato">Conte seus planos</Link>
        </S.LinkGroup>
      </S.FooterGrid>

      <S.Legal>
        <span>© {new Date().getFullYear()} Becca Travis Real Estate</span>
        <nav aria-label="Informações legais">
          <Link href="/privacy-notice">Privacidade</Link>
          <Link href="/terms-of-service">Termos de uso</Link>
          <Link href="/fair-housing-statement">Moradia justa</Link>
          <Link href="/accessibility-statement">Acessibilidade</Link>
        </nav>
      </S.Legal>
    </S.Footer>
  )
}
