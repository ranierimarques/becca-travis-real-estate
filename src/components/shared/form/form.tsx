import { Box, Button, Flex, Input, Loader } from '@/common'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import * as S from './form.styles'

const nameRegExp = /^[a-z ,.'-]+$/i

const formSchema = z.object({
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

interface FormProps {
  onOpenToast?: (value: boolean) => void
  noTitle?: boolean
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
    label: 'Last Name',
    required: true,
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
    label: 'Number',
    required: true,
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

export function Form({ onOpenToast, noTitle }: FormProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState,
    formState: { errors, isSubmitting },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState, reset])

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

    if (result.status === 200 && onOpenToast) {
      onOpenToast(true)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {!noTitle && <S.FormTitle>Send me a message</S.FormTitle>}
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          marginBottom: 56,
          width: '100%',
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

      <Flex align="center" justify="between">
        <S.DisclaimerText>
          <S.Disclaimer>Disclaimer:</S.Disclaimer> By entering your information and
          submitting this form, you agree to our Terms of Use and Privacy Policy and that
          you may be contacted by phone, text message and email about your inquiry.
        </S.DisclaimerText>

        <Button size="2" disabled={isSubmitting}>
          {isSubmitting && <Loader />} Send your message
        </Button>
      </Flex>
    </S.Form>
  )
}
