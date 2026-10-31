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
        description="Planeje em português sua compra e mudança para qualquer estado. No Alabama, atendimento local; nos demais, conexão autorizada com profissional licenciado."
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Sala de estar iluminada com lareira e janelas"
      />
      <NationwideBuyer />
    </>
  )
}

export default Home
