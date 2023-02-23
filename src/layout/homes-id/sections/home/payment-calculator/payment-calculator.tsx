import { ChangeEvent, FocusEvent } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Box } from '@/common'
import { formatToDollar, formatToPercent } from '@/resources/utils/currency'
import { Chart } from '.'
import * as S from './payment-calculator.styles'

const extractNumbersRegex = /[^0-9.-]+/g

function removeFormat(value: string) {
  return Number.parseInt(value.replace(extractNumbersRegex, ''), 10)
}

function removeFormatFloat(value: string) {
  return Number.parseFloat(value.replace(extractNumbersRegex, ''))
}

function isValidNumber(value: string) {
  return !isNaN(Number(value.replace(extractNumbersRegex, '')))
}

function isValidNumberFloat(value: string) {
  return !isNaN(Number.parseFloat(value.replace(extractNumbersRegex, '')))
}

export const formSchema = z
  .object({
    propertyPrice: z
      .string()
      .min(1, 'This field is required')
      .refine(isValidNumber, value => ({
        message: `'${value}' is not a valid number`,
      }))
      .transform(value => removeFormat(value))
      .refine(value => value >= 5_000, {
        message: 'Property price must be greater than or equal to 5,000',
      })
      .refine(value => value <= 1_000_000_000, {
        message: 'Property price must be less than or equal to 1,000,000,000',
      }),
    downPayment: z
      .string()
      .min(1, 'This field is required')
      .refine(isValidNumber, value => ({
        message: `'${value}' is not a valid number`,
      }))
      .transform(value => removeFormat(value))
      .refine(value => value >= 0, {
        message: 'Down payment must be greater than or equal to 0',
      }),
    downPaymentPercentage: z
      .string()
      .min(1, 'This field is required')
      .refine(isValidNumber, value => ({
        message: `'${value}' is not a valid number`,
      }))
      .transform(value => removeFormatFloat(value))
      .refine(value => value >= 0, {
        message: 'Down payment percent must be greater than or equal to 0',
      })
      .refine(value => value < 100, {
        message: 'Down payment percent must be less than 100',
      }),
    lengthOfMortgageInYears: z
      .string()
      .min(1, 'This field is required')
      .refine(isValidNumberFloat, value => ({
        message: `'${value}' is not a valid number`,
      }))
      .transform(value => Number.parseFloat(value.replaceAll(',', '')))
      .refine(value => value > 0, {
        message: 'Length of Mortgage must be greater than 0 years',
      })
      .refine(value => value < 50, {
        message: 'Length of Mortgage must be less than 50 years',
      }),
    annualInterestRateInPercentage: z
      .string()
      .min(1, 'This field is required')
      .refine(isValidNumber, value => ({
        message: `'${value}' is not a valid number`,
      }))
      .transform(value => removeFormatFloat(value))
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

export type FormSchemaTypeInput = z.input<typeof formSchema>
export type FormSchemaTypeOutput = z.output<typeof formSchema>

interface PaymentCalculatorProps {
  price: number
}

export function PaymentCalculator({ price }: PaymentCalculatorProps) {
  const defaultValues = {
    propertyPrice: formatToDollar(price),
    downPayment: formatToDollar(price * 0.2),
    downPaymentPercentage: '20%',
    lengthOfMortgageInYears: '30 years',
    annualInterestRateInPercentage: '6%',
  }
  const {
    register,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm<FormSchemaTypeInput>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues,
  })

  function handlePropertyPriceChange(event: ChangeEvent<HTMLInputElement>) {
    const { downPaymentPercentage } = getValues()
    const percent = removeFormat(downPaymentPercentage) / 100
    const downPayment = removeFormat(event.target.value) * percent

    const parsed = formSchema.safeParse({
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

    const parsed = formSchema.safeParse({
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
    const percent = removeFormat(event.target.value) / removeFormat(propertyPrice)

    const parsed = formSchema.safeParse({
      ...defaultValues,
      downPayment: event.target.value,
      propertyPrice,
    })

    if (parsed.success) {
      setValue('downPaymentPercentage', formatToPercent(percent), {
        shouldValidate: true, // Clean up old errors
      })
    }
  }

  function handleDownPaymentBlur(event: FocusEvent<HTMLInputElement>) {
    const { propertyPrice } = getValues()

    const parsed = formSchema.safeParse({
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
    const percent = removeFormatFloat(event.target.value) / 100
    const downPayment = removeFormat(propertyPrice) * percent

    const parsed = formSchema.safeParse({
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
    const percent = Number.parseFloat(event.target.value.replaceAll(',', '')) / 100
    const downPayment = removeFormat(propertyPrice) * percent

    const parsed = formSchema.safeParse({
      ...defaultValues,
      propertyPrice,
      downPayment: downPayment.toString(),
      downPaymentPercentage: event.target.value,
    })

    if (parsed.success) {
      event.target.value = formatToPercent(parsed.data.downPaymentPercentage / 100)
    }
  }

  function handleLengthOfMortgageInYearsBlur(event: FocusEvent<HTMLInputElement>) {
    const parsed = formSchema.safeParse({
      ...defaultValues,
      lengthOfMortgageInYears: event.target.value,
    })

    if (parsed.success) {
      const yearsCount = parsed.data.lengthOfMortgageInYears === 1 ? 'year' : 'years'
      event.target.value = `${parsed.data.lengthOfMortgageInYears} ${yearsCount}`
    }
  }

  function handleAnnualInterestRateInPercentagesBlur(
    event: FocusEvent<HTMLInputElement>
  ) {
    const parsed = formSchema.safeParse({
      ...defaultValues,
      annualInterestRateInPercentage: event.target.value,
    })

    if (parsed.success) {
      event.target.value = formatToPercent(
        parsed.data.annualInterestRateInPercentage / 100
      )
    }
  }

  return (
    <S.Container>
      <S.Title>Payment calculator</S.Title>
      <Chart control={control} />

      <S.Form>
        <S.Label showError={!!errors.propertyPrice}>
          <div>
            Property Price <S.Asterisk>*</S.Asterisk>
          </div>
          <S.InputWrapper>
            <S.Input
              placeholder="$320,000.00"
              {...register('propertyPrice', {
                onChange: handlePropertyPriceChange,
                onBlur: handlePropertyPriceBlur,
              })}
            />
            <S.Warning />
          </S.InputWrapper>
          {errors.propertyPrice && (
            <S.ErrorMessage>{errors.propertyPrice.message}</S.ErrorMessage>
          )}
        </S.Label>

        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: '172px 100px',
            columnGap: 16,
          }}
        >
          <S.Label showError={!!errors.downPayment}>
            <div>
              Down payment <S.Asterisk>*</S.Asterisk>
            </div>
            <S.InputWrapper>
              <S.Input
                placeholder="$64,000.00"
                {...register('downPayment', {
                  onChange: handleDownPaymentChange,
                  onBlur: handleDownPaymentBlur,
                })}
              />
              <S.Warning />
            </S.InputWrapper>
          </S.Label>
          <S.Label showError={!!errors.downPaymentPercentage} css={{ mt: 20 }}>
            <S.InputWrapper>
              <S.Input
                placeholder="20%"
                {...register('downPaymentPercentage', {
                  onChange: handleDownPaymentPercentageChange,
                  onBlur: handleDownPaymentPercentageBlur,
                })}
              />
              <S.Warning />
            </S.InputWrapper>
          </S.Label>
          <Box css={{ mt: 4, gridColumn: 'span 2' }}>
            {errors.downPayment ? (
              <S.ErrorMessage>{errors.downPayment.message}</S.ErrorMessage>
            ) : (
              errors.downPaymentPercentage && (
                <S.ErrorMessage>{errors.downPaymentPercentage.message}</S.ErrorMessage>
              )
            )}
          </Box>
        </Box>

        <S.Label showError={!!errors.lengthOfMortgageInYears}>
          <div>
            Length of Mortgage <S.Asterisk>*</S.Asterisk>
          </div>
          <S.InputWrapper>
            <S.Input
              placeholder="30 Years"
              {...register('lengthOfMortgageInYears', {
                onBlur: handleLengthOfMortgageInYearsBlur,
              })}
            />
            <S.Warning />
          </S.InputWrapper>
          {errors.lengthOfMortgageInYears && (
            <S.ErrorMessage>{errors.lengthOfMortgageInYears.message}</S.ErrorMessage>
          )}
        </S.Label>

        <S.Label showError={!!errors.annualInterestRateInPercentage}>
          <div>
            Annual Interest Rate <S.Asterisk>*</S.Asterisk>
          </div>
          <S.InputWrapper>
            <S.Input
              placeholder="4%"
              {...register('annualInterestRateInPercentage', {
                onBlur: handleAnnualInterestRateInPercentagesBlur,
              })}
            />
            <S.Warning />
          </S.InputWrapper>
          {errors.annualInterestRateInPercentage && (
            <S.ErrorMessage>
              {errors.annualInterestRateInPercentage.message}
            </S.ErrorMessage>
          )}
        </S.Label>
      </S.Form>
    </S.Container>
  )
}
