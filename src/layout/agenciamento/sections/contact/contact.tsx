import { Flex } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import { Forms } from '.'
import * as S from './contact.styles'

export function Contact() {
  return (
    <Section hasMaxWidth css={{ paddingBottom: 120 }}>
      <Flex align="end" justify="between" css={{ paddingBottom: 72 }}>
        <div>
          <Hat css={{ marginBottom: 8 }}>Entre em contato conosco</Hat>

          <S.Title>Te ajudamos no processo de compra e venda de imóveis</S.Title>
        </div>
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
