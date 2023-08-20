import { Controller, useFormContext } from 'react-hook-form'
import { Box } from '@/common'
import { RadioGroupItem, RadioGroupRoot } from '@/primitives'
import * as S from './step-4.styles'

export function Step4() {
  const { control } = useFormContext()
  return (
    <S.Container>
      <S.FormTitle>Qual é o seu orçamento para a venda?</S.FormTitle>
      <Controller
        control={control}
        name="selling_price"
        render={({ field }) => (
          <RadioGroupRoot onValueChange={field.onChange} {...field}>
            <Box
              css={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 16,
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
              <RadioGroupItem label="Abaixo de 300k" />
              <RadioGroupItem label="350k-450k" />
              <RadioGroupItem label="450k-600k" />
              <RadioGroupItem label="600k-900k" />
              <RadioGroupItem label="900k-1.5M" />
              <RadioGroupItem label="1.5M+" />
            </Box>
          </RadioGroupRoot>
        )}
      />
    </S.Container>
  )
}
