import { Box, Input } from '@/common'
import { Control, FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import * as S from './step-2.styles'

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
  control: Control<{
    number: string
    message: string
    email: string
    first_name: string
    last_name: string
    street_address: string
    state: string
    city: string
    zipcode: string
    additional_information: string
    timeframe: string
    selling_price: string
  }>
  errors: FieldErrorsImpl<{
    number: string
    message: string
    street_address: string
    state: string
    city: string
    zipcode: string
    additional_information: string
    timeframe: string
    selling_price: string
    first_name: string
    last_name: string
    email: string
  }>
  isSubmitting: boolean
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
    placeholder: 'example@email.com',
    label: 'Email',
    required: true,
  },
  {
    name: 'number',
    type: 'tel',
    placeholder: '(000) 000-0000',
    label: 'Phone Number',
    required: true,
  },
  {
    name: 'timeframe',
    type: 'text',
    placeholder: '2 - 3 months',
    label: 'What is your timeframe for selling?',
    required: true,
  },
  {
    name: 'selling_price',
    type: 'text',
    placeholder: '$',
    label: 'What is your desired selling price?',
    required: true,
  },
] as {
  name: 'number' | 'email' | 'first_name' | 'last_name' | 'timeframe' | 'selling_price'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Step2({ errors, register, control, isSubmitting }: StepProps) {
  return (
    <S.Container>
      <S.FormTitle>About you</S.FormTitle>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          marginBottom: 48,
          width: '100%',
        }}
      >
        {inputs.map(({ name, ...input }) => {
          return (
            <Input
              key={name}
              error={errors[name]?.message}
              register={register}
              control={control}
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
