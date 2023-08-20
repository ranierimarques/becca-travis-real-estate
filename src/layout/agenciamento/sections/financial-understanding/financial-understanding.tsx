import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Box, Flex } from '@/common'
import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './financial-understanding.styles'
import * as Svg from './svgs'

const cards = [
  {
    image: <Svg.Cash />,
    title: 'Taxa de Originação do Empréstimo',
    paragraph:
      'Geralmente corresponde a cerca de 1% do valor total do empréstimo e é cobrado pelo processamento do empréstimo hipotecário.',
  },
  {
    image: <Svg.Shield />,
    title: 'Pesquisa e Seguro de Título',
    paragraph:
      'Cobertura do custo de avaliação da casa para determinar seu valor de mercado, normalmente entre $300 e $400.',
  },
  {
    image: <Svg.Flag />,
    title: 'Taxa de Avaliação',
    paragraph:
      'Taxas relacionadas à pesquisa do título para garantir que o vendedor tenha o direito legal de vender a propriedade e o seguro de título.',
  },
  {
    image: <Svg.Pin />,
    title: 'Taxas de Registro',
    paragraph:
      'Taxas cobradas pelo condado para registrar a nova escritura e hipoteca, geralmente em torno de $100.',
  },
  {
    image: <Svg.Money />,
    title: 'Despesas Pré-pagas',
    paragraph:
      'Custos pagos no fechamento para configurar a conta de depósito, incluindo impostos sobre a propriedade.',
  },
  {
    image: <Svg.Invoice />,
    title: 'Imposto de Transferência',
    paragraph:
      'Imposto calculado com base no valor da transação imobiliária e pago sobre a transferência de propriedade.',
  },
]

export function FinancialUnderstanding() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    drag: false,
    slides: {
      perView: 4,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const isFirstSlide = currentSlide === 0
  const isLastSlide =
    currentSlide === (instanceRef.current?.track.details.slides.length || 1) - 1

  function handlePreviousSlide() {
    instanceRef.current?.prev()
  }

  function handleNextSlide() {
    console.log(instanceRef.current)
    instanceRef.current?.next()
  }

  return (
    <>
      <Section hasMaxWidth as="div" css={{ pt: 100 }}>
        <Flex align="end" justify="between" css={{ paddingBottom: 72 }}>
          <Flex direction="column" align="start">
            <Hat css={{ marginBottom: 8 }}>Entendimento Financeiro</Hat>

            <S.Title>Custos comuns ao comprar uma casa em Alabama</S.Title>
            <S.Paragraph>
              Entendemos a importância de ter um corretor que fale a sua língua. Em
              parceria com a renomada Coldwell.
            </S.Paragraph>
          </Flex>
          {loaded && instanceRef.current && (
            <Flex align="center" css={{ gap: 8 }}>
              <S.Skip
                direction="left"
                onClick={handlePreviousSlide}
                disabled={isFirstSlide}
              >
                <Svg.Arrow />
              </S.Skip>

              <S.Skip onClick={handleNextSlide} disabled={isLastSlide}>
                <Svg.Arrow />
              </S.Skip>

              {/* <S.Index>
            {currentSlide + 1} {media && `/ ${media.length}`}
          </S.Index> */}
            </Flex>
          )}
        </Flex>
      </Section>
      <Box css={{ maxWidth: '1184px', margin: '0 0 0 auto', padding: 0 }}>
        <S.Cards ref={sliderRef} className="keen-slider">
          {cards.map(card => (
            <div className="keen-slider__slide" key={card.title}>
              <S.Card>
                {card.image}
                <S.CardTitle>{card.title}</S.CardTitle>
                <S.CardParagraph>{card.paragraph}</S.CardParagraph>
              </S.Card>
            </div>
          ))}
        </S.Cards>
      </Box>
    </>
  )
}
