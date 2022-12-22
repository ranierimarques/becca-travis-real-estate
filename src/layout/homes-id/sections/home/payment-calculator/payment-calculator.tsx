import { formatToDollar } from '@/resources/utils/currency'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Calculator } from '.'
import * as S from './payment-calculator.styles'

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

interface ListingPrice {
  price: number
}

const currencyRegExp = /^\$?(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/

const formSchema = z.object({
  propertyPrice: z.number().min(1),
  // .transform(value => `$${value}`)
  // .refine(value => currencyRegExp.test(value)),
  downPayment: z.number().min(1),
  // .refine(value => currencyRegExp.test(value)),
  downPaymentPercentage: z.string().transform(value => Number(value)),
  lengthOfMortgageInYears: z.number(),
  annualInterestRateInPercentage: z.number(),
})

type formSchemaType = z.infer<typeof formSchema>

// export type ValuesKeys =
//   | 'annual_interest_rate'
//   | 'down_payment'
//   | 'down_payment_percentage'
//   | 'length_of_mortgage'
//   | 'property_price'

export function PaymentCalculator({ price }: ListingPrice) {
  const {
    register,
    setValue,
    getFieldState,
    getValues,
    formState: { isValidating, isValid },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      propertyPrice: price,
      downPayment: price * (20 / 100),
      downPaymentPercentage: 20,
      lengthOfMortgageInYears: 30,
      annualInterestRateInPercentage: 6,
    },
  })

  const value = getValues()
  console.log(value)

  const downPaymentState = getFieldState('downPayment')
  const downPaymentPercentageState = getFieldState('downPaymentPercentage')

  console.log(downPaymentState)
  console.log(downPaymentPercentageState)

  // if (downPaymentState.isTouched && !downPaymentState.error) {
  //   setValue('downPaymentPercentage', value.propertyPrice / value.downPayment)
  // }

  // if (downPaymentPercentageState.isTouched && !downPaymentPercentageState.error) {
  //   setValue('downPayment', value.propertyPrice * (value.downPaymentPercentage / 100))
  // }

  if (
    (downPaymentState.isTouched && !downPaymentState.error) ||
    (downPaymentPercentageState.isTouched && !downPaymentPercentageState.error)
  ) {
    if (downPaymentPercentageState.isTouched && !downPaymentState.isTouched) {
      setValue('downPayment', value.propertyPrice * (value.downPaymentPercentage / 100))
    } else {
      setValue('downPaymentPercentage', value.propertyPrice / value.downPayment)
    }
  }

  const principalLoan: number =
    value.propertyPrice - (value.propertyPrice / 100) * value.downPaymentPercentage
  const monthlyInterestRate: number = value.annualInterestRateInPercentage / 100 / 12
  const numberOfPayments: number = value.lengthOfMortgageInYears * 12

  const total: number =
    principalLoan *
    ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) /
      ((1 + monthlyInterestRate) ** numberOfPayments - 1))

  const principal: number = total - (principalLoan / 100) * 0.5
  const interest: number = (principalLoan / 100) * 0.5

  const data = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [principal, interest],
        backgroundColor: ['#D9BC3A', '#42A0FF'],
        cutout: '80%',
      },
    ],
  }

  // function changeValue(key: ValuesKeys, value: number): void {
  //   setValue(oldValues => ({ ...oldValues, [key]: value }))
  // }

  return (
    <S.Container>
      <S.Title>Payment calculator</S.Title>
      <S.Graphic>
        <S.CenterText>
          <S.Value>{formatToDollar(total, 2)}</S.Value>
          <S.Divisor>month</S.Divisor>
        </S.CenterText>
        <Doughnut data={data} options={options} />
      </S.Graphic>

      <Calculator register={register} />
    </S.Container>
  )
}
