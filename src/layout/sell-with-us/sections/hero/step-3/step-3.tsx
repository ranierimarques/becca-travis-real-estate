import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { Box, Input } from '@/common'
import * as S from './step-3.styles'

interface StepProps {
  register: UseFormRegister<{
    number: string
    street_address: string
    state: string
    city: string
    zipcode: string
    additional_information: string
    email: string
    message: string
    timeframe: string
    selling_price: string
    first_name: string
    last_name: string
  }>

  errors: FieldErrorsImpl<{
    message: string
  }>
  isSubmitting: boolean
}

const inputs = [
  {
    name: 'message',
    type: 'textarea',
    placeholder: 'Write your message...',
    label: 'Your message',
    required: true,
  },
] as {
  name: 'message'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Step3({ errors, register, isSubmitting }: StepProps) {
  return (
    <S.Container>
      <S.FormTitle>Additional details</S.FormTitle>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          width: '100%',

          '@bp4': {
            gap: 24,
          },

          '@bp2': {
            gridTemplateColumns: '1fr',

            gap: 20,
          },
        }}
      >
        {inputs.map(({ name, ...input }) => {
          return (
            <Input
              key={name}
              error={errors[name]?.message}
              register={register}
              name={name}
              disabled={isSubmitting}
              {...input}
            />
          )
        })}
      </Box>
    </S.Container>
  )
}
