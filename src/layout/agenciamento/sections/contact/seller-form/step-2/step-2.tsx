import { useFormContext } from 'react-hook-form'
import { Box, Input } from '@/common'
import * as S from './step-2.styles'

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
  },
] as {
  name: 'street_address' | 'state' | 'city' | 'zipcode' | 'additional_information'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Step2() {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext()
  return (
    <S.Container>
      <S.FormTitle>Qual o endereço da propriedade?</S.FormTitle>
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
