import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Calculator } from '.'
import * as S from './payment-calculator.styles'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Principal', 'Interest'],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: ['#D9BC3A', 'rgba(66, 160, 255, 1)'],
      cutout: '80%',
    },
  ],
}

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
  const [value, setValue] = useState(0)

  return (
    <S.Container>
      <S.Title>Payment calculator</S.Title>
      <S.Graphic>
        <S.CenterText>
          <S.Value>${value}</S.Value>
          <S.Divisor>month</S.Divisor>
        </S.CenterText>
        <Doughnut data={data} options={options} />
      </S.Graphic>
      <Calculator price={listing.price} onValue={setValue} />
    </S.Container>
  )
}
