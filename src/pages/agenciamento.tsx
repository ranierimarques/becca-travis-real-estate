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
        description="Atendimento em português brasileiro para comprar imóvel no Alabama. Em outros estados, Becca ajuda a planejar a mudança e conecta você, com sua autorização, a um profissional local licenciado."
        image="/sharing-cards/og-index.jpg"
        alt="Compre casa nos Estados Unidos com atendimento em português de Becca Travis."
      />
      <NationwideBuyer />
    </>
  )
}

export default Home
