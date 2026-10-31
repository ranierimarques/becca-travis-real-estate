import { Controller, useFormContext } from 'react-hook-form'
import { Box, Input } from '@/common'
import { RadioGroupItem, RadioGroupRoot } from '@/primitives'
import * as S from './step-1.styles'

export function Step1() {
  const {
    control,
    register,
    formState: { errors, isSubmitting },
  } = useFormContext()
  return (
    <S.Container>
      <S.FormTitle>O que deseja comprar?</S.FormTitle>
      <Controller
        control={control}
        name="property_information"
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
              <RadioGroupItem label="Casa" />
              <RadioGroupItem label="Multifamiliar" />
              <RadioGroupItem label="Condomínio" />
              <RadioGroupItem label="Townhome" />
              <RadioGroupItem label="Casa móvel" />
              <RadioGroupItem label="Comercial" />
            </Box>
          </RadioGroupRoot>
        )}
      />
      <Box css={{ marginTop: 20, maxWidth: 560 }}>
        <Input
          error={errors.market_location?.message}
          register={register}
          name="market_location"
          type="text"
          label="Onde está pensando em comprar?"
          placeholder="Huntsville, Alabama ou outra região"
          required
          disabled={isSubmitting}
        />
        <p style={{ marginTop: 8, color: '#6B6267', fontSize: 12, lineHeight: '18px' }}>
          Se ainda está decidindo, conte quais estados ou regiões estão no seu radar.
        </p>
      </Box>
    </S.Container>
  )
}
