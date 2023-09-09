import { Box, Flex } from '@/common'
import * as Svg from '../../svgs'
import * as S from './steps-information.styles'

const steps = [
  {
    name: 'Informações da venda',
    description: 'Propriedades a venda',
    svg: <Svg.House />,
  },
  {
    name: 'Endereço',
    description: 'Endereço da propriedade',
    svg: <Svg.Pin />,
  },
  {
    name: 'Tempo de venda',
    description: 'Property information',
    svg: <Svg.Calendar />,
  },
  {
    name: 'Orçamento',
    description: 'Property information',
    svg: <Svg.Currency />,
  },
  {
    name: 'Informações de envio',
    description: 'Property information',
    svg: <Svg.Send />,
  },
]

interface StepsInformationProps {
  formStep: number
  isSubmitting: boolean
}

export function StepsInformation({ formStep, isSubmitting }: StepsInformationProps) {
  return (
    <S.Card>
      <Box css={{ p: '32px 0 0 32px', '@bp4': { p: 0 } }}>
        <S.Title>Quero vender</S.Title>
        <S.Description>
          Escolha a opção de acordo com os seus interesses e preencha o formulário
        </S.Description>
      </Box>

      <S.Steps>
        {steps.map((step, index) => {
          const stepShouldBeActive = !isSubmitting && formStep === index + 1
          const stepShouldBeCompleted = formStep > index + 1

          return (
            <>
              <S.Step key={index} active={stepShouldBeActive}>
                <S.SvgContainer
                  active={stepShouldBeActive}
                  completed={isSubmitting || stepShouldBeCompleted}
                >
                  {(isSubmitting && <Svg.Checkmark />) || stepShouldBeCompleted ? (
                    <Svg.Checkmark />
                  ) : (
                    step.svg
                  )}
                </S.SvgContainer>

                <Flex direction="column">
                  <S.StepName active={stepShouldBeActive}>{step.name}</S.StepName>
                  <S.StepDescription>{step.description}</S.StepDescription>
                </Flex>
              </S.Step>
              {steps.length > index + 1 && (
                <S.Hr active={!isSubmitting && stepShouldBeActive} />
              )}
            </>
          )
        })}
      </S.Steps>

      <StepInformationMobile formStep={formStep} isSubmitting={isSubmitting} />

      <S.SvgBackground />

      <S.Divisor />
    </S.Card>
  )
}

function StepInformationMobile({ formStep, isSubmitting }: StepsInformationProps) {
  return (
    <S.StepsMobile>
      {steps.map((step, index) => {
        const stepShouldBeActive = !isSubmitting && formStep === index + 1
        const stepShouldBeCompleted = formStep > index + 1

        return (
          <>
            <S.StepMobile key={index}>
              <S.SvgContainer
                active={stepShouldBeActive}
                completed={isSubmitting || stepShouldBeCompleted}
              >
                {(isSubmitting && <Svg.Checkmark />) || stepShouldBeCompleted ? (
                  <Svg.Checkmark />
                ) : (
                  step.svg
                )}
              </S.SvgContainer>

              <Flex direction="column">
                <S.StepName active={stepShouldBeActive}>{step.name}</S.StepName>
                <S.StepDescription>{step.description}</S.StepDescription>
              </Flex>
            </S.StepMobile>
            {steps.length > index + 1 && (
              <S.Hr active={!isSubmitting && stepShouldBeActive} />
            )}
          </>
        )
      })}
    </S.StepsMobile>
  )
}
