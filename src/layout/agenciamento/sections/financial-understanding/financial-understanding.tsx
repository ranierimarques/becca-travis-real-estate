import { useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { Flex } from '@/common'
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
    range: {
      max: 2,
    },
    slides: {
      perView: 4,
      spacing: 32,
    },
    breakpoints: {
      '(max-width: 1279px)': {
        slides: { perView: 3.5, spacing: 24 },
      },
      '(max-width: 1023px)': {
        slides: { perView: 2.5, spacing: 24 },
        range: {
          max: 4,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide === (instanceRef.current?.slides.length ?? 1) - 1

  function handlePreviousSlide() {
    instanceRef.current?.prev()
  }

  function handleNextSlide() {
    instanceRef.current?.next()
  }

  return (
    <Section hasMaxWidth as="div" css={{ pt: 100 }}>
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
        css={{ paddingBottom: 72, '@bp4': { gap: 32 } }}
      >
        <Flex direction="column" align="start">
          <Hat css={{ marginBottom: 8 }}>Entendimento Financeiro</Hat>

          <S.Title>Custos comuns ao comprar uma casa em Alabama</S.Title>
          <S.Paragraph>
            Entendemos a importância de ter um corretor que fale a sua língua. Em parceria
            com a renomada Coldwell.
          </S.Paragraph>
        </Flex>
        {loaded && instanceRef.current && (
          <Flex
            align="center"
            justify="between"
            css={{ gap: 112, '@bp4': { gap: 0, w: '100%' } }}
          >
            <S.Index variant={currentSlide + 1} />
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
            </Flex>
          </Flex>
        )}
      </Flex>
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
    </Section>
  )
}
