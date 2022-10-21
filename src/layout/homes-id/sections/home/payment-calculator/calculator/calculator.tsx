import { Flex } from '@common'
import { useState } from 'react'
import * as S from './calculator.styles'

interface CalculatorProps {
  price: string
  onValue: (value: number) => void
}

export function Calculator({ price, onValue }: CalculatorProps) {
  const [values, setValues] = useState({
    propertyPrice: price,
    downPayment: price,
    downPaymentPercentage: '20%',
    lengthOfMortgage: '30 years',
    annualInterestRate: '6%',
  })

  const inputs = [
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
      value: price,
    },
    {
      name: 'lengthOfMortgage',
      label: 'Length of Mortgage',
      placeholder: '30 Years',
      type: 'text',
      required: false,
    },
    {
      name: 'annualInterestRate',
      label: 'Annual Interest Rate',
      placeholder: '4%',
      type: 'text',
      required: false,
    },
  ]

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    console.log(values)
  }

  return (
    <S.Form action="">
      {inputs.map((input, index) => {
        if (input.name === 'downPayment') {
          return (
            <S.Label key={index}>
              {input.label}
              <Flex css={{ gap: 16 }}>
                <S.InputWrapper css={{ w: 172 }}>
                  <S.Input {...input} onChange={onChange} value={values[input.name]} />
                </S.InputWrapper>
                <S.InputWrapper css={{ w: 100 }}>
                  <S.Input
                    name="downPaymentPercentage"
                    placeholder="20%"
                    type="text"
                    onChange={onChange}
                    value={values.downPaymentPercentage}
                  />
                </S.InputWrapper>
              </Flex>
            </S.Label>
          )
        } else {
          return (
            <S.Label key={index}>
              {input.label}
              <S.InputWrapper>
                <S.Input
                  {...input}
                  onChange={onChange}
                  value={values[input.name as never]}
                />
              </S.InputWrapper>
            </S.Label>
          )
        }
      })}
    </S.Form>
  )
}
