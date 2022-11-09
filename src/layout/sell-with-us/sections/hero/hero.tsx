import { Button, Flex, Loader } from '@common'
import { zodResolver } from '@hookform/resolvers/zod'
import { Hat } from '@shared'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import { ContactInformation, Step1, Step2, Step3 } from '.'
import * as S from './hero.styles'

const nameRegExp = /^[a-z ,.'-]+$/i
const zipcodeRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/
const currencyRegExp = /^\$?(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/

const formSchema = z.object({
  street_address: z.string().min(1, {
    message: 'Address is required',
  }),
  state: z.string().min(1, {
    message: 'State is required',
  }),
  city: z.string().min(1, {
    message: 'City is required',
  }),
  zipcode: z.string().refine(value => zipcodeRegExp.test(value), {
    message: 'Invalid Zipcode',
  }),
  additional_information: z.string().min(1, {
    message: 'Message is required',
  }),
  timeframe: z.string().min(1, {
    message: 'Timeframe is required',
  }),
  selling_price: z
    .string()
    .min(1, {
      message: 'Selling Price is required',
    })
    .refine(value => currencyRegExp.test(value), {
      message: 'Must be currency',
    }),
  first_name: z.string().refine(value => nameRegExp.test(value), {
    message: 'Invalid Name',
  }),
  last_name: z.string().refine(value => nameRegExp.test(value), {
    message: 'Invalid Name',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Invalid email',
    }),
  number: z
    .string({
      required_error: 'Number is required',
    })
    .refine(value => isValidPhoneNumber(value), {
      message: 'Invalid phone number',
    }),
  message: z.string().min(1, {
    message: 'Message is required',
  }),
})

type formSchemaType = z.infer<typeof formSchema>

const steps: Record<number, Partial<keyof formSchemaType>[]> = {
  1: ['street_address', 'state', 'city', 'zipcode', 'additional_information'],
  2: ['timeframe', 'selling_price', 'first_name', 'last_name', 'email', 'number'],
  3: ['message'],
}

export function Hero() {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })
  const [formStep, setFormStep] = useState<number>(1)
  const [openToast, setOpenToast] = useState(false)

  async function nextForm() {
    const stepIsValid = await trigger(steps[formStep])
    if (stepIsValid) {
      setFormStep(currentStep => currentStep + 1)
    }
  }

  function previousForm() {
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
    <S.Section>
      <S.Background />
      <S.Container>
        <S.Header>
          <Hat css={{ mb: 8 }}>form for sellers</Hat>
          <S.Title>We&apos;re here to serve and sell</S.Title>
          <S.Paragraph>
            Complimentary evaluation when you complete the form to sell your home
          </S.Paragraph>
        </S.Header>

        <S.FormContainer>
          <ContactInformation
            formStep={formStep}
            openToast={openToast}
            onOpenToast={setOpenToast}
            isSubmitting={isSubmitting}
          />

          <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            {formStep === 1 && (
              <Step1 errors={errors} register={register} isSubmitting={isSubmitting} />
            )}
            {formStep === 2 && (
              <Step2
                errors={errors}
                register={register}
                control={control}
                isSubmitting={isSubmitting}
              />
            )}
            {formStep === 3 && (
              <Step3 errors={errors} register={register} isSubmitting={isSubmitting} />
            )}

            <Flex align="center" justify="between">
              <S.DisclaimerText lastStep={formStep === 3}>
                <S.Disclaimer>Disclaimer:</S.Disclaimer> By entering your information and
                submitting this form, you agree to our Terms of Use and Privacy Policy and
                that you may be contacted by phone, text message and email about your
                inquiry.
              </S.DisclaimerText>

              <Flex css={{ gap: 18 }}>
                {formStep > 1 && (
                  <Button as="span" outlined onClick={previousForm} size="2">
                    Previous
                  </Button>
                )}
                {formStep < 3 && (
                  <Button as="span" onClick={nextForm} size="2">
                    Next Step
                  </Button>
                )}
                {formStep === 3 && (
                  <Button size="2" disabled={isSubmitting}>
                    {isSubmitting && <Loader />}Send your message
                  </Button>
                )}
              </Flex>
            </Flex>
          </S.Form>
        </S.FormContainer>
      </S.Container>
    </S.Section>
  )
}
