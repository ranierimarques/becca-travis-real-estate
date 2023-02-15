import { Box, Flex } from '@/common'
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
  isSubmitting: boolean
}

export function ContactInformation({ formStep, isSubmitting }: ContactInformationProps) {
  return (
    <S.Card>
      <Box css={{ p: '32px 0 0 32px', '@bp4': { p: 0 } }}>
        <S.Title>Contact information</S.Title>
        <S.Description>
          Please provide as much detailed information as possible. Thank you.
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

      <ContactInformationMobile formStep={formStep} isSubmitting={isSubmitting} />

      <S.SvgBackground />

      <S.Divisor />
    </S.Card>
  )
}

function ContactInformationMobile({ formStep, isSubmitting }: ContactInformationProps) {
  const step1Active = formStep === 1
  const step2Active = formStep === 2
  const step3Active = formStep === 3

  return (
    <S.StepsMobile>
      <S.StepMobile>
        <S.SvgContainer active={step1Active} completed={isSubmitting || formStep > 1}>
          {(isSubmitting && <Svg.Checkmark />) || formStep > 1 ? (
            <Svg.Checkmark />
          ) : (
            <Svg.House />
          )}
        </S.SvgContainer>

        <S.StepCircle active={step1Active} completed={isSubmitting || formStep > 1} />

        <S.StepName active={step1Active}>Property information</S.StepName>
      </S.StepMobile>

      <S.HrMobile active={step1Active} />

      <S.StepMobile>
        <S.SvgContainer active={step2Active} completed={isSubmitting || formStep > 2}>
          {(isSubmitting && <Svg.Checkmark />) || formStep > 2 ? (
            <Svg.Checkmark />
          ) : (
            <Svg.User />
          )}
        </S.SvgContainer>

        <S.StepCircle active={step2Active} completed={isSubmitting || formStep > 2} />

        <S.StepName active={step2Active}>About you</S.StepName>
      </S.StepMobile>

      <S.HrMobile2 active={step2Active} />

      <S.StepMobile>
        <S.SvgContainer
          active={isSubmitting ? false : step3Active}
          completed={isSubmitting}
        >
          {isSubmitting ? <Svg.Checkmark /> : <Svg.Content />}
        </S.SvgContainer>

        <S.StepCircle
          active={isSubmitting ? false : step3Active}
          completed={isSubmitting}
        />

        <S.StepName active={isSubmitting ? false : step3Active}>
          Additional details
        </S.StepName>
      </S.StepMobile>
    </S.StepsMobile>
  )
}
