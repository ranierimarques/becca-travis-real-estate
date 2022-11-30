import { formatToDollar } from '@/resources/utils/currency'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
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

interface ListingDetails {
  listing: {
    price: string
  }
}

export function PaymentCalculator({ listing }: ListingDetails) {
  const [value, setValue] = useState<number>(0)

  const price = listing.price
  const priceNumber = price.substring(1, price.length)

  const data = {
    labels: ['Principal', 'Interest'],
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ['#D9BC3A', '#42A0FF'],
        cutout: '80%',
      },
    ],
  }

  const values = {
    propertyPrice: price,
    downPayment: `$${(parseFloat(priceNumber.replace(/,/g, '')) / 100) * 20}`,
    downPaymentPercentage: '20%',
    lengthOfMortgage: '30 years',
    annualInterestRate: '6%',
  }

  const principalLoan: number =
    Number.parseInt(priceNumber.replace(/,/g, ''), 10) -
    Number.parseInt(values.downPayment.substring(1, values.downPayment.length), 10)

  const r: number =
    Number.parseInt(values.annualInterestRate.substring(0, 1), 10) / 100 / 12

  const n: number = Number.parseInt(values.lengthOfMortgage.substring(0, 2), 10) * 12

  const total = principalLoan * ((r * (1 + r) ** n) / ((1 + r) ** n - 1))

  return (
    <S.Container>
      <S.Title>Payment calculator</S.Title>
      <S.Graphic>
        <S.CenterText>
          <S.Value>
            {value !== 0 ? formatToDollar(value, 2) : formatToDollar(total, 2)}
          </S.Value>
          <S.Divisor>month</S.Divisor>
        </S.CenterText>
        <Doughnut data={data} options={options} />
      </S.Graphic>
      <Calculator price={listing.price} onValue={setValue} />
    </S.Container>
  )
}
