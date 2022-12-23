import { Flex } from '@/common'
import { UseFormRegister } from 'react-hook-form'
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

type inputType = {
  name:
    | 'propertyPrice'
    | 'downPayment'
    | 'lengthOfMortgageInYears'
    | 'annualInterestRateInPercentage'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Calculator({ register }: CalculatorProps) {
  const inputs: inputType = [
    {
      name: 'propertyPrice',
      label: 'Property Price',
      placeholder: '$320,000.00',
      type: 'text',
      required: false,
    },
    {
      name: 'downPayment',
      label: 'Down payment',
      placeholder: '$64,000.00',
      type: 'text',
      required: false,
    },
    {
      name: 'lengthOfMortgageInYears',
      label: 'Length of Mortgage',
      placeholder: '30 Years',
      type: 'text',
      required: false,
    },
    {
      name: 'annualInterestRateInPercentage',
      label: 'Annual Interest Rate',
      placeholder: '4%',
      type: 'text',
      required: false,
    },
  ]

  return (
    <S.Form>
      {inputs.map((input, index) => (
        <S.Label key={index}>
          {input.label}
          {input.name === 'downPayment' ? (
            <Flex css={{ gap: 16 }}>
              <S.InputWrapper css={{ w: 172 }}>
                <S.Input {...input} {...register(input.name)} />
              </S.InputWrapper>
              <S.InputWrapper css={{ w: 100 }}>
                <S.Input
                  {...register('downPaymentPercentage')}
                  placeholder="20%"
                  type="text"
                />
              </S.InputWrapper>
            </Flex>
          ) : (
            <S.InputWrapper>
              <S.Input {...input} {...register(input.name)} />
            </S.InputWrapper>
          )}
        </S.Label>
      ))}
    </S.Form>
  )
}
