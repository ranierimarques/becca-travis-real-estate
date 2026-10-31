import { Flex } from '@/common'
import type { RelocationPlan } from '@/layout/agenciamento/relocation-plan'
import { Hat } from '@/shared'
import { Section } from '@/template'
import { Forms } from '.'
import * as S from './contact.styles'

export function Contact({
  relocationPlan,
  defaultState,
  defaultCity,
}: {
  relocationPlan?: RelocationPlan
  defaultState?: string
  defaultCity?: string
}) {
  return (
    <Section hasMaxWidth css={{ paddingBottom: 84, paddingTop: 76 }}>
      <Flex
        direction={{
          '@initial': 'row',
          '@bp4': 'column',
        }}
        align={{
          '@initial': 'end',
          '@bp4': 'start',
        }}
        justify="between"
        css={{ paddingBottom: 48, '@bp4': { gap: 16 }, '@bp2': { ai: 'center' } }}
      >
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp2': 'center',
          }}
        >
          <Hat css={{ marginBottom: 8 }}>Seu plano continua aqui</Hat>

          <S.Title>Conte onde você quer chegar</S.Title>
        </Flex>
        <S.Paragraph>
          Complete destino, prazo, orçamento e tipo de imóvel. Suas escolhas do planejador
          seguem com a solicitação. No Alabama, posso ajudar diretamente com a compra. Nos
          demais estados, elas preparam a apresentação autorizada a um profissional
          licenciado no destino.
        </S.Paragraph>
      </Flex>
      <Forms
        buyerFirst
        relocationPlan={relocationPlan}
        defaultState={defaultState}
        defaultCity={defaultCity}
      />
    </Section>
  )
}
