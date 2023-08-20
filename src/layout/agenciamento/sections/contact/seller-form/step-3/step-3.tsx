import { Controller, useFormContext } from 'react-hook-form'
import { Box } from '@/common'
import { RadioGroupItem, RadioGroupRoot } from '@/primitives'
import * as S from './step-3.styles'

export function Step3() {
  const { control } = useFormContext()
  return (
    <S.Container>
      <S.FormTitle>Em quanto tempo você pretende vender?</S.FormTitle>
      <Controller
        control={control}
        name="timeframe"
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
              <RadioGroupItem label="Menos de 2 semanas" />
              <RadioGroupItem label="2-4 Semanas" />
              <RadioGroupItem label="1-2 Meses" />
              <RadioGroupItem label="2-4 Meses" />
              <RadioGroupItem label="4-6 Meses" />
              <RadioGroupItem label="6+ Meses" />
            </Box>
          </RadioGroupRoot>
        )}
      />
    </S.Container>
  )
}
