import { Box, Button, Flex } from '@/common'
import { Toast } from '@/primitives'
import { Hat } from '@/shared'
import { zodResolver } from '@hookform/resolvers/zod'
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
    <S.Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Header>
        <Hat css={{ mb: 8 }}>form for sellers</Hat>
        <S.Title>We&apos;re here to serve and sell</S.Title>
        <S.Paragraph>
          Complimentary evaluation when you complete the form to sell your home
        </S.Paragraph>
      </S.Header>

      <Box
        css={{
          position: 'relative',
          pb: 160,
          '@bp4': {
            pb: 120,
          },
          '@bp1': {
            pb: 80,
          },
        }}
      >
        <Box
          css={{
            background: '$white',

            position: 'absolute',
            left: '50%',

            transform: 'translate(-50%)',

            height: '100%',
            width: '100vw',
          }}
        />
        <Box
          css={{
            background: 'rgba($colors$tangerine5Rgb, 0.3)',

            position: 'absolute',
            left: '50%',

            transform: 'translate(-50%)',

            height: '10%',
            width: '100vw',
          }}
        />

        <S.FormContainer>
          <ContactInformation formStep={formStep} isSubmitting={isSubmitting} />

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
              <S.DisclaimerText lastStep={formStep === 3}>
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
                {formStep > 1 && (
                  <Button
                    type="button"
                    outlined
                    disabled={isSubmitting}
                    onClick={previousForm}
                    size="2"
                  >
                    Previous
                  </Button>
                )}
                {formStep < 3 && (
                  <Button
                    type="button"
                    onClick={nextForm}
                    size="2"
                    css={{ '@bp2': { marginLeft: 'auto' } }}
                  >
                    Next Step
                  </Button>
                )}
                {formStep === 3 && (
                  <Button
                    type="submit"
                    size="2"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    css={{
                      '@bp2': {
                        color: 'transparent',
                        '&::after': {
                          content: 'Send message',
                          color: '$white',
                          marginLeft: -128,
                        },
                      },
                    }}
                  >
                    Send your message
                  </Button>
                )}
              </Flex>
            </Flex>
          </S.Form>
        </S.FormContainer>
      </Box>
      <Toast openToast={openToast} onOpenToast={setOpenToast} form />
    </S.Section>
  )
}
