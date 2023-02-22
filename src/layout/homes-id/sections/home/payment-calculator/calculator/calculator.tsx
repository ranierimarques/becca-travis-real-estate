import { UseFormRegister } from 'react-hook-form'
import { Flex } from '@/common'
import * as S from './calculator.styles'

interface CalculatorProps {
  register: UseFormRegister<{
    propertyPrice: number
    downPayment: number
    downPaymentPercentage: number
    lengthOfMortgageInYears: number
    annualInterestRateInPercentage: number
  }>
}

export function Calculator({ register }: CalculatorProps) {
  return (
    <S.Form>
      <S.Label>
        Property Price
        <S.InputWrapper>
          <S.Input placeholder="$320,000.00" {...register('propertyPrice')} />
        </S.InputWrapper>
      </S.Label>
      <S.Label>
        Down payment
        <Flex css={{ gap: 16 }}>
          <S.InputWrapper css={{ w: 172 }}>
            <S.Input placeholder="$64,000.00" {...register('downPayment')} />
          </S.InputWrapper>
          <S.InputWrapper css={{ w: 100 }}>
            <S.Input placeholder="20%" {...register('downPaymentPercentage')} />
          </S.InputWrapper>
        </Flex>
      </S.Label>
      <S.Label>
        Length of Mortgage
        <S.InputWrapper>
          <S.Input placeholder="30 Years" {...register('lengthOfMortgageInYears')} />
        </S.InputWrapper>
      </S.Label>
      <S.Label>
        Annual Interest Rate
        <S.InputWrapper>
          <S.Input placeholder="4%" {...register('annualInterestRateInPercentage')} />
        </S.InputWrapper>
      </S.Label>
    </S.Form>
  )
}
