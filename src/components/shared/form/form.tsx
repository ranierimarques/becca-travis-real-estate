import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import { Box, Button, Input } from '@/common'
import { getLeadAttribution } from '@/services/leads/get-lead-attribution'
import * as S from './form.styles'

const nameRegExp = /^[\p{L}\p{M} ,.'\u2019-]+$/u

const formSchema = z.object({
  first_name: z.string().refine(value => nameRegExp.test(value), {
    message: 'Invalid Name',
  }),
  last_name: z
    .string()
    .optional()
    .refine(value => !value || nameRegExp.test(value), {
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
    .string()
    .optional()
    .refine(value => !value || isValidPhoneNumber(value), {
      message: 'Invalid phone number',
    }),
  message: z.string().min(1, {
    message: 'Message is required',
  }),
})

type formSchemaType = z.infer<typeof formSchema>

interface FormProps {
  onOpenToast?: (value: boolean) => void
  askAQuestion?: boolean
  initialMessage?: string
  formSource?: string
}

const inputs = [
  {
    name: 'first_name',
    type: 'text',
    placeholder: 'Michael',
    label: 'First Name',
    required: true,
  },
  {
    name: 'last_name',
    type: 'text',
    placeholder: 'Scott',
    label: 'Last Name (optional)',
    required: false,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    label: 'Email',
    required: true,
  },
  {
    name: 'number',
    type: 'tel',
    placeholder: '(000) 000-0000',
    label: 'Phone (optional)',
    required: false,
  },
  {
    name: 'message',
    type: 'textarea',
    placeholder: 'Write your message...',
    label: 'Your message',
    required: true,
  },
] as {
  name: 'number' | 'email' | 'first_name' | 'last_name' | 'message'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Form({
  onOpenToast,
  askAQuestion,
  initialMessage,
  formSource = 'General contact page',
}: FormProps) {
  const [submitError, setSubmitError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (initialMessage) setValue('message', initialMessage)
  }, [initialMessage, setValue])

  const onSubmit: SubmitHandler<formSchemaType> = async (values: formSchemaType) => {
    setSubmitError(false)
    setSubmitted(false)
    try {
      const result = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          subject: 'New Contact Form',
          from_name: 'Becca Travis Website',
          form_source: formSource,
          ...values,
          ...getLeadAttribution(),
        }),
      })
      const response = await result.json()
      if (!result.ok || response.success !== true) throw new Error('Submission failed')
      setSubmitted(true)
      onOpenToast?.(true)
      reset()
    } catch {
      setSubmitError(true)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {!askAQuestion && <S.FormTitle>Send me a message</S.FormTitle>}
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          marginBottom: 56,
          width: '100%',

          '@bp5': {
            marginBottom: 48,
          },
          '@bp4': {
            marginBottom: 32,
            gap: 24,
          },
          '@bp2': {
            gap: 20,
            marginBottom: 24,
            gridTemplateColumns: '1fr',
          },
        }}
      >
        {inputs.map(({ name, ...input }) => {
          return (
            <Input
              key={name}
              error={errors[name]?.message}
              {...input}
              register={register}
              control={control}
              name={name}
              disabled={isSubmitting}
            />
          )
        })}
      </Box>

      {submitError && (
        <p role="alert">
          Your message could not be sent. Please try again or call{' '}
          <a href="tel:+12563189066">256 318 9066</a>.
        </p>
      )}
      {submitted && <p role="status">Thank you. Your message has been sent.</p>}
      <S.DisclaimerContainer askAQuestion>
        <S.DisclaimerText askAQuestion>
          <S.Disclaimer>Disclaimer:</S.Disclaimer> By entering your information and
          submitting this form, you agree to our Terms of Use and Privacy Policy and that
          you may be contacted by phone, text message and email about your inquiry.
        </S.DisclaimerText>

        <Button
          size="2"
          askAQuestion
          loading={isSubmitting}
          disabled={isSubmitting}
          css={{
            '@bp4': {
              alignSelf: 'flex-end',
            },
          }}
        >
          Send your message
        </Button>
      </S.DisclaimerContainer>
    </S.Form>
  )
}
