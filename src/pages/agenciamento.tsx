import type { NextPage } from 'next'
import { MetaSEO } from '@/common'
import { NationwideBuyer } from '@/layout/agenciamento/nationwide-buyer'

const Home: NextPage = () => {
  return (
    <>
      <MetaSEO
        canonicalPath="/agenciamento"
        locale="pt_BR"
        title="Comprar Casa nos EUA em Português | Becca Travis"
        description="Planeje sua compra e mudança para qualquer estado dos EUA em português. Compare destinos, custos, visitas à distância e a conexão profissional local."
        image="/sharing-cards/og-index.jpg"
        alt="Compre casa nos Estados Unidos com atendimento em português de Becca Travis."
      />
      <NationwideBuyer />
    </>
  )
}

export default Home
