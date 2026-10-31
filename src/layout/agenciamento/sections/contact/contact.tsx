import { Flex } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import { Forms } from '.'
import * as S from './contact.styles'

export function Contact() {
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
          <Hat css={{ marginBottom: 8 }}>Comece em português</Hat>

          <S.Title>Conte onde você quer comprar</S.Title>
        </Flex>
        <S.Paragraph>
          Alabama ou qualquer outro estado: compartilhe seu destino, orçamento e prazo. Eu
          vou entender seus planos e organizar o próximo passo com você.
        </S.Paragraph>
      </Flex>
      <Forms buyerFirst />
    </Section>
  )
}
