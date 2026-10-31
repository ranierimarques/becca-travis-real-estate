import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import { Button, Flex } from '@/common'
import {
  getRelocationJourneyStage,
  getRelocationTiming,
} from '@/layout/agenciamento/relocation-plan'
import type { RelocationPlan } from '@/layout/agenciamento/relocation-plan'
import { Toast } from '@/primitives'
import { getLeadAttribution } from '@/services/leads/get-lead-attribution'
import { Step1, Step2, Step3, Step4, StepsInformation } from '.'
import * as S from './buyer-form.styles'

const nameRegExp = /^[\p{L}\p{M} ,.'\u2019-]+$/u

const formSchema = z.object({
  market_location: z
    .string()
    .trim()
    .min(2, 'Informe a cidade, o estado ou a região que está considerando.')
    .max(120, 'Use até 120 caracteres.'),
  property_information: z.enum([
    'casa',
    'multifamiliar',
    'condomínio',
    'townhome',
    'casa móvel',
    'comercial',
  ]),
  timeframe: z.enum([
    'menos de 2 semanas',
    '2-4 semanas',
    '1-2 meses',
    '2-4 meses',
    '4-6 meses',
    '6+ meses',
  ]),
  buying_price: z.enum([
    'abaixo de 300k',
    '350k-450k',
    '450k-600k',
    '600k-900k',
    '900k-1.5m',
    '1.5m+',
  ]),
  first_name: z
    .string()
    .min(1, 'Informe seu nome.')
    .refine(value => nameRegExp.test(value), 'Confira o nome informado.'),
  last_name: z
    .string()
    .min(1, 'Informe seu sobrenome.')
    .refine(value => nameRegExp.test(value), 'Confira o sobrenome informado.'),
  email: z.string().min(1, 'Informe seu e-mail.').email('Digite um e-mail válido.'),
  number: z
    .string({ required_error: 'Informe seu telefone.' })
    .refine(value => isValidPhoneNumber(value), 'Digite um telefone válido.'),
  destination_stage: z.string().optional(),
  move_window: z.string().optional(),
  property_goal: z.string().optional(),
  budget_band: z.string().optional(),
  remote_visit_plan: z.string().optional(),
  home_to_sell: z.string().optional(),
  relocation_priority: z.string().optional(),
})

type formSchemaType = z.infer<typeof formSchema>

const steps: Record<number, Partial<keyof formSchemaType>[]> = {
  1: ['market_location', 'property_information'],
  2: ['timeframe'],
  3: ['buying_price'],
  4: ['first_name', 'last_name', 'email', 'number'],
}

export function BuyerForm({
  setForm,
  relocationPlan,
  defaultState,
  defaultCity,
}: {
  setForm: (arg: 'select-screen' | 'selling' | 'buying') => void
  relocationPlan?: RelocationPlan
  defaultState?: string
  defaultCity?: string
}) {
  const [formStep, setFormStep] = useState(1)
  const [openToast, setOpenToast] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)

  const buyerForm = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const {
    handleSubmit,
    trigger,
    reset,
    register,
    setValue,
    watch,
    formState: { isSubmitting },
  } = buyerForm

  const { market_location, property_information, timeframe, buying_price } = watch()

  const isLastStep = formStep === 4

  useEffect(() => {
    setValue('destination_stage', relocationPlan?.destinationStage)
    setValue('move_window', relocationPlan?.moveWindow)
    setValue('property_goal', relocationPlan?.propertyGoal)
    setValue('budget_band', relocationPlan?.budgetBand)
    setValue('remote_visit_plan', relocationPlan?.remoteVisitPlan)
    setValue('home_to_sell', relocationPlan?.homeToSell)
    setValue('relocation_priority', relocationPlan?.priority)
  }, [relocationPlan, setValue])

  useEffect(() => {
    const selectedMarket = [defaultCity, defaultState].filter(Boolean).join(', ')
    if (selectedMarket) setValue('market_location', selectedMarket)
  }, [defaultCity, defaultState, setValue])

  const isEnumButtonDisabled: Record<number, boolean> = {
    1: !property_information || !market_location?.trim(),
    2: !timeframe,
    3: !buying_price,
  }

  async function nextForm() {
    const stepIsValid = await trigger(steps[formStep])
    if (stepIsValid) {
      setFormStep(currentStep => currentStep + 1)
    }
  }

  function previousForm() {
    if (formStep === 1) {
      setForm('select-screen')
      return
    }
    if (!isSubmitting) {
      setFormStep(currentStep => currentStep - 1)
    }
  }

  const onSubmit: SubmitHandler<formSchemaType> = async values => {
    setSubmissionError(false)

    try {
      const result = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          subject: 'Novo plano de compra e mudança',
          from_name: 'Becca Travis Website',
          ...values,
          form_source: 'Formulário detalhado de compra em português',
          form_version: 'relocation_detailed_v2',
          journey_stage: getRelocationJourneyStage(relocationPlan),
          follow_up_timing: getRelocationTiming(relocationPlan),
          ...getLeadAttribution(),
        }),
      })
      const response = await result.json()

      if (result.ok && response.success) {
        setFormStep(1)
        setOpenToast(true)
        reset()
      } else {
        setSubmissionError(true)
      }
    } catch {
      setSubmissionError(true)
    }
  }

  return (
    <Flex
      direction={{
        '@initial': 'row',
        '@bp4': 'column',
      }}
      css={{ h: 520, '@bp4': { padding: '24px 32px', h: '100%' } }}
    >
      <StepsInformation isSubmitting={isSubmitting} formStep={formStep} />
      <FormProvider {...buyerForm}>
        <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <input type="hidden" {...register('destination_stage')} />
          <input type="hidden" {...register('move_window')} />
          <input type="hidden" {...register('property_goal')} />
          <input type="hidden" {...register('budget_band')} />
          <input type="hidden" {...register('remote_visit_plan')} />
          <input type="hidden" {...register('home_to_sell')} />
          <input type="hidden" {...register('relocation_priority')} />
          {formStep === 1 && <Step1 />}
          {formStep === 2 && <Step2 />}
          {formStep === 3 && <Step3 />}
          {formStep === 4 && <Step4 />}
          {submissionError && (
            <S.SubmissionError role="alert">
              Não foi possível enviar agora. Tente novamente em instantes.
            </S.SubmissionError>
          )}

          <Flex
            direction={{
              '@initial': 'row',
              '@bp4': 'column',
            }}
            align="center"
            justify="between"
            css={{
              '@bp4': {
                gap: 32,
              },
              '@bp3': {
                gap: 24,
              },
              '@bp2': {
                gap: 32,
              },
            }}
          >
            <S.DisclaimerText lastStep={formStep === 4}>
              <S.Disclaimer>Aviso:</S.Disclaimer> Ao enviar seus dados, você concorda com
              os{' '}
              <S.DisclaimerLink href="/terms-of-service">Termos de Uso</S.DisclaimerLink>{' '}
              e a{' '}
              <S.DisclaimerLink href="/privacy-notice">
                Política de Privacidade
              </S.DisclaimerLink>{' '}
              e aceita receber contato por telefone, mensagem de texto ou e-mail sobre
              esta solicitação.
            </S.DisclaimerText>

            <Flex
              justify={{
                '@bp2': 'between',
              }}
              css={{
                gap: 18,
                '@bp4': { alignSelf: 'flex-end' },
                '@bp2': { w: '100%' },
              }}
            >
              <Button
                type="button"
                outlined
                disabled={isSubmitting}
                onClick={previousForm}
                size="2"
              >
                Voltar
              </Button>

              <Button
                key={isLastStep ? 'submit' : 'next'}
                disabled={isEnumButtonDisabled[formStep] || isSubmitting}
                type={isLastStep ? 'submit' : 'button'}
                loading={isSubmitting}
                onClick={isLastStep ? undefined : nextForm}
                size="2"
              >
                {isLastStep ? 'Enviar' : 'Continuar'}
              </Button>
            </Flex>
          </Flex>
        </S.Form>
      </FormProvider>
      <Toast
        openToast={openToast}
        onOpenToast={setOpenToast}
        form
        title="Mensagem enviada"
        description="Obrigada. Em breve vou falar com você."
      />
    </Flex>
  )
}
