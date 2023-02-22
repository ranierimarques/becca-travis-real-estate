import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form'
import { Box, Input } from '@/common'
import * as S from './step-1.styles'

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
    name: 'street_address',
    type: 'text',
    placeholder: '14114 Lannister Lane',
    label: 'Street Address',
    required: true,
  },
  {
    name: 'state',
    type: 'text',
    placeholder: 'Alabama',
    label: 'State',
    required: true,
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'Huntsville',
    label: 'City',
    required: true,
  },
  {
    name: 'zipcode',
    type: 'text',
    placeholder: '35242',
    label: 'Zipcode',
    required: true,
  },
  {
    name: 'additional_information',
    type: 'textarea',
    placeholder: 'Write any additional information...',
    label: 'Additional information',
    required: true,
  },
] as {
  name: 'street_address' | 'state' | 'city' | 'zipcode' | 'additional_information'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Step1({ errors, register, isSubmitting }: StepProps) {
  return (
    <S.Container>
      <S.FormTitle>Property information</S.FormTitle>
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
