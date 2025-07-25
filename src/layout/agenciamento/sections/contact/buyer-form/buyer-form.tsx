import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import { Button, Flex } from '@/common'
import { Toast } from '@/primitives'
import { Step1, Step2, Step3, Step4, StepsInformation } from '.'
import * as S from './buyer-form.styles'

const nameRegExp = /^[a-z ,.'-]+$/i

const formSchema = z.object({
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
  first_name: z.string().refine(value => nameRegExp.test(value), 'Invalid Name'),
  last_name: z.string().refine(value => nameRegExp.test(value), 'Invalid Name'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  number: z
    .string({ required_error: 'Number is required' })
    .refine(value => isValidPhoneNumber(value), 'Invalid phone number'),
})

type formSchemaType = z.infer<typeof formSchema>

const steps: Record<number, Partial<keyof formSchemaType>[]> = {
  1: ['property_information'],
  2: ['timeframe'],
  3: ['buying_price'],
  4: ['first_name', 'last_name', 'email', 'number'],
}

export function BuyerForm({
  setForm,
}: {
  setForm: (arg: 'select-screen' | 'selling' | 'buying') => void
}) {
  const [formStep, setFormStep] = useState(1)
  const [openToast, setOpenToast] = useState(false)

  const buyerForm = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const {
    handleSubmit,
    trigger,
    reset,
    watch,
    formState: { isSubmitting },
  } = buyerForm

  const { property_information, timeframe, buying_price } = watch()

  const isLastStep = formStep === 4

  const isEnumButtonDisabled: Record<number, boolean> = {
    1: !property_information,
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

  const onSubmit: SubmitHandler<formSchemaType> = async (values: formSchemaType) => {
    const result = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        subject: 'New Buy Property Form',
        from_name: 'Becca Travis Website',
        ...values,
      }),
    })

    if (result.status === 200) {
      setFormStep(1)
      setOpenToast(true)
      reset()
    }
  }

  return (
    <Flex
      direction={{
        '@initial': 'row',
        '@bp4': 'column',
      }}
      css={{ h: 584, '@bp4': { padding: '24px 32px', h: '100%' } }}
    >
      <StepsInformation isSubmitting={isSubmitting} formStep={formStep} />
      <FormProvider {...buyerForm}>
        <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
          {formStep === 1 && <Step1 />}
          {formStep === 2 && <Step2 />}
          {formStep === 3 && <Step3 />}
          {formStep === 4 && <Step4 />}

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
              <S.Disclaimer>Disclaimer:</S.Disclaimer> By entering your information and
              submitting this form, you agree to our Terms of Use and Privacy Policy and
              that you may be contacted by phone, text message and email about your
              inquiry.
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
                onClick={nextForm}
                size="2"
              >
                {isLastStep ? 'Enviar' : 'Continuar'}
              </Button>
            </Flex>
          </Flex>
        </S.Form>
      </FormProvider>
      <Toast openToast={openToast} onOpenToast={setOpenToast} form />
    </Flex>
  )
}
