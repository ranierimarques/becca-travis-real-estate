import { useFormContext } from 'react-hook-form'
import { Box, Input } from '@/common'
import * as S from './step-4.styles'

const inputs = [
  {
    name: 'city',
    type: 'text',
    placeholder: 'Cidade onde quer comprar',
    label: 'Cidade',
    required: true,
  },
  {
    name: 'state',
    type: 'text',
    placeholder: 'Estado',
    label: 'Estado',
    required: true,
  },
  {
    name: 'first_name',
    type: 'text',
    placeholder: 'Seu nome',
    label: 'Nome',
    required: true,
  },
  {
    name: 'last_name',
    type: 'text',
    placeholder: 'Seu sobrenome',
    label: 'Sobrenome',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    label: 'E-mail',
    required: true,
  },
  {
    name: 'number',
    type: 'tel',
    placeholder: '(000) 000-0000',
    label: 'Telefone',
    required: true,
  },
] as {
  name: 'city' | 'state' | 'first_name' | 'last_name' | 'email' | 'number'
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
      <S.FormTitle>Onde você quer comprar e como podemos falar com você?</S.FormTitle>
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
