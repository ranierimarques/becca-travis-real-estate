import { Flex } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import { Forms } from '.'
import * as S from './contact.styles'

export function Contact() {
  return (
    <Section hasMaxWidth css={{ paddingBottom: 120, paddingTop: 60 }}>
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
        css={{ paddingBottom: 72, '@bp4': { gap: 16 }, '@bp2': { ai: 'center' } }}
      >
        <Flex
          direction="column"
          align={{
            '@initial': 'start',
            '@bp2': 'center',
          }}
        >
          <Hat css={{ marginBottom: 8 }}>Entre em contato conosco</Hat>

          <S.Title>Te ajudamos no processo de compra e venda de imóveis</S.Title>
        </Flex>
        <S.Paragraph>
          Comprar uma casa em Alabama pode ser uma experiência emocionante. Vou guiá-lo(a)
          em cada etapa do processo, desde a busca pelo imóvel até o fechamento do
          negócio.
        </S.Paragraph>
      </Flex>
      <Forms />
    </Section>
  )
}
