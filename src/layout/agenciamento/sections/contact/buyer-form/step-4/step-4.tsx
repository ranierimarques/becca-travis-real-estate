import { useFormContext } from 'react-hook-form'
import { Box, Input } from '@/common'
import * as S from './step-4.styles'

const inputs = [
  {
    name: 'first_name',
    type: 'text',
    placeholder: 'Maria',
    label: 'Nome',
    required: true,
  },
  {
    name: 'last_name',
    type: 'text',
    placeholder: 'Silva',
    label: 'Sobrenome',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'seu@email.com',
    label: 'E-mail',
    required: true,
  },
  {
    name: 'number',
    type: 'tel',
    placeholder: '+1 (000) 000-0000 ou +55 (00) 00000-0000',
    label: 'Telefone',
    required: true,
  },
] as {
  name: 'first_name' | 'last_name' | 'email' | 'number'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Step4() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext()

  return (
    <S.Container>
      <S.FormTitle>Como posso falar com você?</S.FormTitle>
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
