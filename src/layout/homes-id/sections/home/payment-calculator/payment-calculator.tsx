import Image from 'next/image'
import { graphic } from '../images'
import * as S from './payment-calculator.styles'

const inputs = [
  {
    name: 'property_price',
    label: 'Property Price',
    placeholder: '$320,000.00',
    type: 'number',
    required: false,
  },
  {
    name: 'down_payment',
    label: 'Down payment',
    placeholder: '$64,000.00',
    type: 'number',
    required: false,
  },
  {
    name: 'length_of_mortgage',
    label: 'Length of Mortgage',
    placeholder: '30 Years',
    type: 'number',
    required: false,
  },
  {
    name: 'annual_interest_rate',
    label: 'Annual Interest Rate',
    placeholder: '4%',
    type: 'number',
    required: false,
  },
]

export function PaymentCalculator() {
  return (
    <S.Container>
      <S.Title>Payment calculator</S.Title>
      <Image src={graphic} alt="graphic" />

      <S.Form action="">
        {inputs.map((input, index) => (
          <S.InputWrapper key={index}>
            <S.Input {...input} />
          </S.InputWrapper>
        ))}
      </S.Form>
    </S.Container>
  )
}
