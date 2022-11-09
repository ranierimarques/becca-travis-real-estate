import { Box, Flex } from '@common'
import { Toast } from '@primitives'
import * as Svg from '../svgs'
import * as S from './contact-information.styles'

const steps = [
  {
    name: 'Property information',
    description: 'Provide property details',
    svg: <Svg.House />,
  },
  {
    name: 'About you',
    description: 'Property information',
    svg: <Svg.User />,
  },
  {
    name: 'Additional details',
    description: 'Property information',
    svg: <Svg.Content />,
  },
]

interface ContactInformationProps {
  formStep: number
  openToast: boolean
  onOpenToast: (open: boolean) => void
  isSubmitting: boolean
}

export function ContactInformation({
  formStep,
  openToast,
  onOpenToast,
  isSubmitting,
}: ContactInformationProps) {
  return (
    <S.Card>
      <Box css={{ p: '32px 0 0 32px' }}>
        <S.Title>Contact information</S.Title>
        <S.Description>
          I&apos;m ready to help you and take all your questions, get in touch!
        </S.Description>
      </Box>

      <S.Steps>
        {steps.map((step, index) => {
          const stepShouldBeActive = !isSubmitting && formStep === index + 1
          const stepShouldBeCompleted = formStep > index + 1

          return (
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
          )
        })}
        <S.Hr active={!isSubmitting && formStep === 1} />
        <S.Hr2 active={!isSubmitting && formStep > 1} />
      </S.Steps>

      <S.SvgBackground />

      <Toast openToast={openToast} onOpenToast={onOpenToast} form />
    </S.Card>
  )
}
