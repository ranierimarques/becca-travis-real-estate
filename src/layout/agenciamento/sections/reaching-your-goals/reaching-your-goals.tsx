import { useState } from 'react'
import { Box, Flex, Image } from '@/common'
import { Contact, Hat } from '@/shared'
import { Section } from '@/template'
import * as Img from './images'
import * as S from './reaching-your-goals.styles'
import * as Svg from './svgs'

const sell = {
  title: 'Te ajudamos a vender a sua propriedade em Alabama',
  paragraphs: {
    1: 'Venda sua casa com sucesso! Contrate um agente experiente e licenciado no mercado imobiliário de Alabama para garantir uma venda tranquila e lucrativa. Esqueça o estresse na hora de vender sua propriedade, conte com a gente!',
    2: 'Oferecemos análise de mercado, precificação precisa, melhorias estratégicas e marketing eficaz. Contate-nos para realizar a sua avaliação.',
  },
  cards: [
    {
      image: <Svg.Star />,
      title: 'Nossos benefícios',
      paragraph:
        'Encontre a propriedade perfeita, com vasta experiência, garantimos uma compra bem-sucedida nos EUA.',
    },
    {
      image: <Svg.Chart />,
      title: 'Controle de expectativas',
      paragraph:
        'Consultoria completa em todas as etapas da compra, com especialistas em várias áreas.',
    },
    {
      image: <Svg.Pin />,
      title: 'Importância da localização',
      paragraph:
        'Parceiro confiável com atendimento personalizado e orientação completa. Invista nos EUA conosco.',
    },
  ],
}

const buy = {
  title: 'Te ajudamos a adquirir uma propriedade em Alabama',
  paragraphs: {
    1: 'Procurando casa nos EUA? Becca Travis Imóveis é a escolha certa! Oferecemos serviços personalizados em português, inglês e espanhol. Equipe qualificada, parcerias com especialistas jurídicos, contábeis, construtores e mais.',
    2: 'Consultoria imobiliária, financiamento, administração, assessoria jurídica, reforma e decoração. Várias opções de imóveis. Realize seu sonho! Contate-nos.',
  },
  cards: [
    {
      image: <Svg.House />,
      title: 'Propriedade perfeita',
      paragraph:
        'Encontre a propriedade perfeita, com vasta experiência, garantimos uma compra bem-sucedida nos EUA.',
    },
    {
      image: <Svg.User />,
      title: 'Parceiro imobiliário confiável',
      paragraph:
        'Parceiro confiável com atendimento personalizado e orientação completa. Invista nos EUA conosco.',
    },
    {
      image: <Svg.Circles />,
      title: 'Serviços completos',
      paragraph:
        'Consultoria completa em todas as etapas da compra, com especialistas em várias áreas. ',
    },
  ],
}

export function ReachingYourGoals() {
  const [buying, setBuying] = useState(true)

  return (
    <Section hasMaxWidth direction="vertical">
      <S.Container>
        <Flex direction="column" align="center" css={{ paddingBottom: 88 }}>
          <Hat css={{ marginBottom: 8 }}>Parceria Renomada</Hat>

          <S.SectionTitle>Alcançando seus objetivos</S.SectionTitle>
          <S.SectionParagraph>
            Entendemos a importância de ter um corretor que fale a sua língua. Em parceria
            com a renomada Coldwell Banker, <br /> oferecemos um serviço exclusivo de
            conexão com corretores que falam português ou espanhol em todo o país.
          </S.SectionParagraph>

          <S.SwitchContainer>
            <S.SwitchButton onClick={() => setBuying(true)} active={buying}>
              Quero comprar
            </S.SwitchButton>
            <S.SwitchButton onClick={() => setBuying(false)} active={!buying}>
              Quero vender
            </S.SwitchButton>
          </S.SwitchContainer>
        </Flex>

        <Flex
          direction={{
            '@initial': 'row',
            '@bp2': 'column',
          }}
          align="center"
          justify="between"
          css={{ '@bp5': { gap: 54 }, '@bp4': { gap: 32 } }}
        >
          <Flex
            direction="column"
            align={{
              '@initial': 'start',
              '@bp2': 'center',
            }}
            css={{ gap: 48 }}
          >
            <S.Title>
              Te ajudamos a{' '}
              {buying ? (
                <>
                  <em>adquirir</em> uma
                </>
              ) : (
                <>
                  <em>vender</em> a sua
                </>
              )}{' '}
              propriedade em Alabama
            </S.Title>
            <Contact>
              <S.TalkWithBecca type="button">
                <S.Avatar>
                  <Image src={Img.becca} alt="picture of Becca" quality={100} />
                </S.Avatar>
                Conversar com Becca Travis
              </S.TalkWithBecca>
            </Contact>
          </Flex>

          <Flex direction="column" css={{ gap: 8 }}>
            <S.Paragraph>
              {buying
                ? `Procurando casa nos EUA? Becca Travis Imóveis é a escolha certa!
                Oferecemos serviços personalizados em português, inglês e espanhol. Equipe
                qualificada, parcerias com especialistas jurídicos, contábeis,
                construtores e mais.`
                : `Venda sua casa com sucesso! Contrate um agente experiente e licenciado no mercado imobiliário de Alabama para garantir uma venda tranquila e lucrativa. Esqueça o estresse na hora de vender sua propriedade, conte com a gente!`}
            </S.Paragraph>
            <S.Paragraph bold>
              {buying
                ? `Consultoria imobiliária, financiamento, administração, assessoria
                jurídica, reforma e decoração. Várias opções de imóveis. Realize seu
                sonho! Contate-nos.`
                : `Oferecemos análise de mercado, precificação precisa, melhorias estratégicas e marketing eficaz. Contate-nos para realizar a sua avaliação.`}
            </S.Paragraph>
          </Flex>
        </Flex>

        <S.Divider />

        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 32,
            '@bp5': { gap: 24 },
            '@bp4': { gridTemplateColumns: '1fr 1fr', gap: 32 },
            '@bp2': { gridTemplateColumns: '1fr', gap: 32 },
          }}
        >
          {buying &&
            buy.cards.map(card => (
              <S.Card key={card.title}>
                {card.image}
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardParagraph>{card.paragraph}</S.CardParagraph>
              </S.Card>
            ))}
          {!buying &&
            sell.cards.map(card => (
              <S.Card key={card.title}>
                {card.image}
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardParagraph>{card.paragraph}</S.CardParagraph>
              </S.Card>
            ))}
        </Box>
      </S.Container>
    </Section>
  )
}
