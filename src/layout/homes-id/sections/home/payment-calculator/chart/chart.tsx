import { useRef } from 'react'
import { ArcElement, ChartData, Chart as ChartJS, ChartOptions, Tooltip } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Control, useWatch } from 'react-hook-form'
import { formatToDollar } from '@/resources/utils/currency'
import {
  FormSchemaTypeInput,
  FormSchemaTypeOutput,
  formSchema,
} from '../payment-calculator'
import * as S from './chart.styles'

ChartJS.register(ArcElement, Tooltip)

const chartOptions: ChartOptions<'doughnut'> = {
  cutout: '80%',
  plugins: {
    tooltip: {
      backgroundColor: '#5F5C6B',
      cornerRadius: 5,
      padding: {
        y: 4,
        x: 8,
      },
      boxPadding: 6,
      usePointStyle: true,
      bodySpacing: 30,
      bodyFont: {
        size: 12,
      },
      callbacks: {
        label: context => `${context.label}: ${formatToDollar(context.raw as number, 2)}`,
        title: () => '',
      },
    },
  },
}

function getMortgageCalculationResults({
  propertyPrice,
  downPayment,
  annualInterestRate,
  lengthOfMortgageInYears,
}: FormSchemaTypeOutput) {
  const loan = propertyPrice - downPayment
  const monthlyInterestRateInPercentage = annualInterestRate / 100 / 12
  const numberOfPayments = lengthOfMortgageInYears * 12

  const numerator =
    monthlyInterestRateInPercentage *
    Math.pow(1 + monthlyInterestRateInPercentage, numberOfPayments)
  const denominator = Math.pow(1 + monthlyInterestRateInPercentage, numberOfPayments) - 1

  const rateIsZero = monthlyInterestRateInPercentage === 0
  const payment = rateIsZero ? loan / numberOfPayments : loan * (numerator / denominator)

  const interest = loan * monthlyInterestRateInPercentage
  const principal = payment - interest

  return { principal, interest, payment }
}

interface ChartProps {
  control: Control<FormSchemaTypeInput>
}

export function Chart({ control }: ChartProps) {
  const resultsRef = useRef({ data: [0, 0], monthlyPayment: 0 })
  const values = useWatch({ control })

  // WARNING: Understanding the code below requires advanced knowledge of React.
  // This code works perfectly and guarantees the highest possible performance of updating chart data.
  // However, reading and writing Refs during rendering is not a recommended practice.
  // So this code might break in a major React update.
  const parsed = formSchema.safeParse({ ...values })

  if (parsed.success) {
    const { interest, principal, payment } = getMortgageCalculationResults(parsed.data)
    resultsRef.current = { data: [interest, principal], monthlyPayment: payment }
  }

  const chartData: ChartData<'doughnut', number[], string> = {
    labels: ['Interest', 'Principal'],
    datasets: [
      {
        data: resultsRef.current.data,
        backgroundColor: ['#42A0FF', '#D9BC3A'],
      },
    ],
  }

  return (
    <S.Graphic>
      <S.CenterText>
        <S.Value>{formatToDollar(resultsRef.current.monthlyPayment, 2)}</S.Value>
        <S.Divisor>month</S.Divisor>
      </S.CenterText>
      <Doughnut data={chartData} options={chartOptions} />
    </S.Graphic>
  )
}
