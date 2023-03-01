import { InputHTMLAttributes } from 'react'
import { RegisterOptions, useFormContext } from 'react-hook-form'
import { Box } from '@/common'
import { calculatorFormDataInput } from '../payment-calculator'
import * as S from './input.styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  field: keyof calculatorFormDataInput
  label: string
  options: RegisterOptions
}

export function Input({ field, label, options, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<calculatorFormDataInput>()

  const error = errors[field]

  return (
    <S.Label showError={!!error}>
      <div>
        {label} <S.Asterisk>*</S.Asterisk>
      </div>
      <S.InputWrapper>
        <S.Input {...props} {...register(field, options)} />
        <S.Warning />
      </S.InputWrapper>
      {error && <S.ErrorMessage>{error.message}</S.ErrorMessage>}
    </S.Label>
  )
}

interface InputDoubleProps {
  one: InputProps
  two: Omit<InputProps, 'label'>
}

export function InputDouble({ one, two }: InputDoubleProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<calculatorFormDataInput>()
  const { field: fieldOne, options: optionsOne, label: labelOne, ...propsOne } = one
  const { field: fieldTwo, options: optionsTwo, ...propsTwo } = two

  const errorOne = errors[fieldOne]
  const errorTwo = errors[fieldTwo]

  return (
    <Box css={{ display: 'grid', gridTemplateColumns: '2fr 1fr', columnGap: 16 }}>
      <S.Label showError={!!errorOne}>
        <div>
          {labelOne} <S.Asterisk>*</S.Asterisk>
        </div>
        <S.InputWrapper>
          <S.Input {...propsOne} {...register(fieldOne, optionsOne)} />
          <S.Warning />
        </S.InputWrapper>
      </S.Label>
      <S.Label showError={!!errors.downPaymentPercentage} css={{ mt: 20 }}>
        <S.InputWrapper>
          <S.Input {...propsTwo} {...register(fieldTwo, optionsTwo)} />
          <S.Warning />
        </S.InputWrapper>
      </S.Label>
      <Box css={{ mt: 4, gridColumn: 'span 2' }}>
        {errorOne ? (
          <S.ErrorMessage>{errorOne.message}</S.ErrorMessage>
        ) : (
          errorTwo && <S.ErrorMessage>{errorTwo.message}</S.ErrorMessage>
        )}
      </Box>
    </Box>
  )
}
