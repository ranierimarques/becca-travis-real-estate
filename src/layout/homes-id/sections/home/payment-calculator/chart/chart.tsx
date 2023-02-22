import { useEffect, useRef } from 'react'
import { ArcElement, ChartData, Chart as ChartJS, ChartOptions, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Control, useWatch } from 'react-hook-form'
import { formatToDollar } from '@/resources/utils/currency'
import { FormSchemaType, formSchema } from '../payment-calculator'
import * as S from './chart.styles'

ChartJS.register(ArcElement, Tooltip)

const chartOptions: ChartOptions<'doughnut'> = {
  cutout: '80%',
  plugins: {
    tooltip: {
      padding: 8,
      boxPadding: 4,
      usePointStyle: true,
      callbacks: {
        label: context => formatToDollar(context.raw as number, 2),
      },
    },
  },
}

interface ChartProps {
  control: Control<FormSchemaType>
}

export function Chart({ control }: ChartProps) {
  const actualRef = useRef({ data: [0, 0], monthlyPayment: 0 })
  const values = useWatch({ control })

  const parsed = formSchema.safeParse({ ...values })

  if (parsed.success) {
    const {
      propertyPrice,
      downPayment,
      annualInterestRateInPercentage,
      lengthOfMortgageInYears,
    } = parsed.data

    const principalLoan = propertyPrice - downPayment
    const r = annualInterestRateInPercentage / 100 / 12 // Monthly interest rate
    const n = lengthOfMortgageInYears * 12 // Total number of payments
    const numerator = r * Math.pow(1 + r, n)
    const denominator = Math.pow(1 + r, n) - 1

    const monthlyPayment =
      annualInterestRateInPercentage === 0
        ? principalLoan / n
        : principalLoan * (numerator / denominator)

    const principal =
      monthlyPayment - (principalLoan / 100) * (annualInterestRateInPercentage / 12)
    const interest = (principalLoan / 100) * (annualInterestRateInPercentage / 12)

    actualRef.current = { data: [interest, principal], monthlyPayment }
  }

  const chartData: ChartData<'doughnut', number[], string> = {
    labels: ['Interest', 'Principal'],
    datasets: [
      {
        data: actualRef.current.data,
        backgroundColor: ['#42A0FF', '#D9BC3A'],
      },
    ],
  }

  return (
    <S.Graphic>
      <S.CenterText>
        <S.Value>{formatToDollar(actualRef.current.monthlyPayment, 2)}</S.Value>
        <S.Divisor>month</S.Divisor>
      </S.CenterText>
      <Doughnut data={chartData} options={chartOptions} />
    </S.Graphic>
  )
}
