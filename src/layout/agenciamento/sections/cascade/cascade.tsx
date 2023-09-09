import { Image } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './cascade.styles'
import * as Img from './images'

export function Cascade() {
  return (
    <Section hasMaxWidth>
      <S.SectionContainer>
        <S.Container>
          <S.TextContainer>
            <Hat variant="2">SERVIÇO EXCLUSIVO</Hat>
            <S.Title>Conexão internacional</S.Title>
            <S.Paragraph>
              Entendemos a importância de ter um corretor que fale a sua língua. Em
              parceria com a renomada Coldwell Banker, oferecemos um serviço exclusivo de
              conexão com corretores que falam português ou espanhol em todo o país.
            </S.Paragraph>
          </S.TextContainer>

          <S.ImageContainer>
            <Image src={Img.tour} alt="Image of a house" />
          </S.ImageContainer>
        </S.Container>

        <S.Container>
          <S.ImageContainer middle>
            <Image src={Img.house} alt="Image of a house" />
          </S.ImageContainer>

          <S.TextContainer>
            <Hat variant="2">PROFISSIONAIS</Hat>
            <S.Title>Corretores ideais</S.Title>
            <S.Paragraph>
              Confie em nós para encontrar o corretor perfeito, oferecendo suporte
              completo para que você se sinta confortável e confiante em cada etapa. Entre
              em contato hoje e descubra como podemos ajudá-lo a alcançar seus objetivos
              imobiliários nos Estados Unidos.
            </S.Paragraph>
          </S.TextContainer>
        </S.Container>

        <S.Container>
          <S.TextContainer>
            <Hat variant="2">oportunidade única</Hat>
            <S.Title>Financiamento simplificado</S.Title>
            <S.Paragraph>
              Comprar imóvel nos EUA é possível mesmo com menos de 1 ano de residência.
              Oferecemos financiamentos em parceria com credores usando histórico de
              crédito no Credco Credit Rating. Aproveite essa oportunidade e venha para
              Alabama.
            </S.Paragraph>
          </S.TextContainer>

          <S.ImageContainer>
            <Image src={Img.keys} alt="Image of a house" />
          </S.ImageContainer>
        </S.Container>
      </S.SectionContainer>
    </Section>
  )
}
