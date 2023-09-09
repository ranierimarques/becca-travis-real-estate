import { Hat } from '@/shared'
import { Section } from '@/template'
import * as S from './experience.styles'
import * as Svg from './svgs'

export function Experience() {
  return (
    <Section
      id="experience"
      direction="vertical"
      padding="1"
      hasMaxWidth
      css={{ textAlign: 'center' }}
    >
      <Hat>Becca travis</Hat>
      <S.Title>Experiência no setor imobiliário</S.Title>
      <S.Description>
        Becca Travis, graduada pela renomada Florida State University, possui vasta
        experiência no mercado <br /> imobiliário de Huntsville e Madison (Alabama) e pode
        te ajudar a encontrar o imóvel perfeito
      </S.Description>

      <S.Cards>
        <S.Card css={{ gridArea: 'card1' }}>
          <S.SvgContainer>
            <Svg.Strategy />
          </S.SvgContainer>

          <S.CardContent>
            <S.CardTitle>Estratégia</S.CardTitle>
            <S.CardDescription>
              Serviço excepcional e personalizado para ajudar os clientes a encontrar o
              imóvel perfeito
            </S.CardDescription>
          </S.CardContent>
        </S.Card>

        <S.Card css={{ gridArea: 'card2' }}>
          <S.SvgContainer>
            <Svg.Trustworthy />
          </S.SvgContainer>

          <S.CardContent>
            <S.CardTitle>Confiança</S.CardTitle>
            <S.CardDescription>
              Experiência internacional no mercado imobiliário para alcançar objetivos com
              eficiência
            </S.CardDescription>
          </S.CardContent>
        </S.Card>

        <S.Card cardXL>
          <S.CardContent>
            <S.CardTitle>Parceria</S.CardTitle>
            <S.CardDescription cardXL>
              Becca será sua parceira e melhor escolha na hora de comprar ou vender
              imóveis no estado do Alabama
            </S.CardDescription>
          </S.CardContent>
          <S.SvgContainer>
            <Svg.Partnership />
          </S.SvgContainer>
        </S.Card>

        <S.Card banner>
          <S.SvgContainer>
            <Svg.Dedication />
          </S.SvgContainer>

          <S.CardContent>
            <S.CardTitle>Dedicação</S.CardTitle>
            <S.CardDescription>
              Fornecer um serviço de qualidade e compreendendo as preferências e
              requisitos dos compradores
            </S.CardDescription>
          </S.CardContent>
        </S.Card>
      </S.Cards>
    </Section>
  )
}
