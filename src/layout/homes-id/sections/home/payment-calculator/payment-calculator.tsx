import { ChangeEvent, FocusEvent } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formatToDollar, formatToPercent } from '@/resources/utils/currency'
import { Chart, Input, InputDouble } from '.'
import * as S from './payment-calculator.styles'

const extractNumbersRegex = /[^0-9.-]+/g

function removeFormat(value: string) {
  return Number(value.replace(extractNumbersRegex, ''))
}

const baseSchema = z.string().min(1, 'This field is required').transform(removeFormat)

export const calculatorFormValidationSchema = z
  .object({
    propertyPrice: baseSchema
      .refine(value => value >= 5_000, {
        message: 'Property price must be greater than or equal to 5,000',
      })
      .refine(value => value <= 1_000_000_000, {
        message: 'Property price must be less than or equal to 1,000,000,000',
      }),
    downPayment: baseSchema.refine(value => value >= 0, {
      message: 'Down payment must be greater than or equal to 0',
    }),
    downPaymentPercentage: baseSchema
      .refine(value => value >= 0, {
        message: 'Down payment percent must be greater than or equal to 0',
      })
      .refine(value => value < 100, {
        message: 'Down payment percent must be less than 100',
      }),
    lengthOfMortgageInYears: baseSchema
      .refine(value => value > 0, {
        message: 'Length of Mortgage must be greater than 0 years',
      })
      .refine(value => value < 50, {
        message: 'Length of Mortgage must be less than 50 years',
      }),
    annualInterestRate: baseSchema
      .refine(value => value >= 0, {
        message: 'Rate must be greater than or equal to 0',
      })
      .refine(value => value <= 100, {
        message: 'Rate must be less than or equal to 100',
      }),
  })
  .refine(value => value.downPayment < value.propertyPrice, {
    message: 'The down payment amount must be less than the property price',
    path: ['downPayment'],
  })

export type calculatorFormDataInput = z.input<typeof calculatorFormValidationSchema>
export type calculatorFormDataOutput = z.output<typeof calculatorFormValidationSchema>

interface PaymentCalculatorProps {
  price: number
}

export function PaymentCalculator({ price }: PaymentCalculatorProps) {
  const defaultValues = {
    propertyPrice: formatToDollar(price),
    downPayment: formatToDollar(price * 0.2),
    downPaymentPercentage: '20%',
    lengthOfMortgageInYears: '30 years',
    annualInterestRate: '6%',
  }
  const calculatorForm = useForm<calculatorFormDataInput>({
    resolver: zodResolver(calculatorFormValidationSchema),
    mode: 'onChange',
    defaultValues,
  })

  const { setValue, control, getValues } = calculatorForm

  function handlePropertyPriceChange(event: ChangeEvent<HTMLInputElement>) {
    const { downPaymentPercentage } = getValues()
    const percent = removeFormat(downPaymentPercentage) / 100
    const downPayment = removeFormat(event.target.value) * percent

    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      downPayment: formatToDollar(downPayment),
      propertyPrice: event.target.value,
    })

    if (parsed.success) {
      const downPaymentRounded = Math.round(downPayment)

      setValue('downPayment', formatToDollar(downPaymentRounded), {
        shouldValidate: true, // Clean up old errors
      })
    }
  }

  function handlePropertyPriceBlur(event: FocusEvent<HTMLInputElement>) {
    const { downPaymentPercentage } = getValues()
    const percent = removeFormat(downPaymentPercentage) / 100
    const downPayment = removeFormat(event.target.value) * percent

    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      downPayment: formatToDollar(downPayment),
      propertyPrice: event.target.value,
    })

    if (parsed.success) {
      event.target.value = formatToDollar(parsed.data.propertyPrice)
    }
  }

  function handleDownPaymentChange(event: ChangeEvent<HTMLInputElement>) {
    const { propertyPrice } = getValues()

    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      downPayment: event.target.value,
      propertyPrice,
    })

    if (parsed.success) {
      const percent = parsed.data.downPayment / parsed.data.propertyPrice

      setValue('downPaymentPercentage', formatToPercent(percent * 100), {
        shouldValidate: true, // Clean up old errors
      })
    }
  }

  function handleDownPaymentBlur(event: FocusEvent<HTMLInputElement>) {
    const { propertyPrice } = getValues()

    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      downPayment: event.target.value,
      propertyPrice,
    })

    if (parsed.success) {
      event.target.value = formatToDollar(parsed.data.downPayment)
    }
  }

  function handleDownPaymentPercentageChange(event: ChangeEvent<HTMLInputElement>) {
    const { propertyPrice } = getValues()
    const percent = removeFormat(event.target.value) / 100
    const downPayment = removeFormat(propertyPrice) * percent

    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      propertyPrice,
      downPayment: downPayment.toString(),
      downPaymentPercentage: event.target.value,
    })

    if (parsed.success) {
      setValue('downPayment', formatToDollar(downPayment), {
        shouldValidate: true, // Clean up old errors
      })
    }
  }

  function handleDownPaymentPercentageBlur(event: FocusEvent<HTMLInputElement>) {
    const { propertyPrice } = getValues()
    const percent = removeFormat(event.target.value) / 100
    const downPayment = removeFormat(propertyPrice) * percent

    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      propertyPrice,
      downPayment: downPayment.toString(),
      downPaymentPercentage: event.target.value,
    })

    if (parsed.success) {
      event.target.value = formatToPercent(parsed.data.downPaymentPercentage)
    }
  }

  function handleLengthOfMortgageInYearsBlur(event: FocusEvent<HTMLInputElement>) {
    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      lengthOfMortgageInYears: event.target.value,
    })

    if (parsed.success) {
      const yearsCount = parsed.data.lengthOfMortgageInYears === 1 ? 'year' : 'years'
      event.target.value = `${parsed.data.lengthOfMortgageInYears} ${yearsCount}`
    }
  }

  function handleAnnualInterestRateBlur(event: FocusEvent<HTMLInputElement>) {
    const parsed = calculatorFormValidationSchema.safeParse({
      ...defaultValues,
      annualInterestRate: event.target.value,
    })

    if (parsed.success) {
      event.target.value = formatToPercent(parsed.data.annualInterestRate)
    }
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Payment calculator</S.Title>
        <Chart control={control} />
      </S.Header>

      <S.Form>
        <FormProvider {...calculatorForm}>
          <Input
            label="Property Price"
            field="propertyPrice"
            placeholder="$320,000.00"
            options={{
              onChange: handlePropertyPriceChange,
              onBlur: handlePropertyPriceBlur,
            }}
          />

          <InputDouble
            one={{
              label: 'Down payment',
              field: 'downPayment',
              placeholder: '$64,000.00',
              options: {
                onChange: handleDownPaymentChange,
                onBlur: handleDownPaymentBlur,
              },
            }}
            two={{
              field: 'downPaymentPercentage',
              placeholder: '20%',
              options: {
                onChange: handleDownPaymentPercentageChange,
                onBlur: handleDownPaymentPercentageBlur,
              },
            }}
          />

          <Input
            label="Length of Mortgage"
            field="lengthOfMortgageInYears"
            placeholder="30 Years"
            options={{ onBlur: handleLengthOfMortgageInYearsBlur }}
          />

          <Input
            label="Annual Interest Rate"
            field="annualInterestRate"
            placeholder="4%"
            options={{ onBlur: handleAnnualInterestRateBlur }}
          />
        </FormProvider>
      </S.Form>
    </S.Container>
  )
}
