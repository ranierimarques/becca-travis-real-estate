import { Flex } from '@/common'
import { formatToDollar } from '@/resources/utils/currency'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as S from './calculator.styles'

interface CalculatorProps {
  price: string
  onValue: (value: number) => void
}

const currencyRegExp = /^\$?(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/

const formSchema = z.object({
  property_price: z
    .string()
    .min(1)
    .refine(value => currencyRegExp.test(value)),
  down_payment: z
    .string()
    .min(1)
    .refine(value => currencyRegExp.test(value)),
  down_payment_percentage: z.string(),
  length_of_mortgage: z.string(),
  annual_interest_rate: z.string(),
})

type formSchemaType = z.infer<typeof formSchema>

export function Calculator({ price, onValue }: CalculatorProps) {
  const priceNumber = Number(price.replace(/[^0-9.-]+/g, ''))

  const {
    register,
    reset,
    getFieldState,
    watch,
    formState,
    formState: { isValidating, isValid, touchedFields },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      property_price: formatToDollar(priceNumber, 2),
      down_payment: formatToDollar(priceNumber * (20 / 100), 2),
      down_payment_percentage: '20%',
      length_of_mortgage: '30 Years',
      annual_interest_rate: '6%',
    },
  })

  const fieldState = getFieldState('property_price')
  console.log(fieldState)
  const data = watch()

  useEffect(() => {
    if (!isValid && !isValidating) {
      console.log(isValid)
      console.log(isValidating)
      reset({
        property_price: formatToDollar(priceNumber, 2),
        down_payment: formatToDollar(priceNumber * (20 / 100), 2),
        down_payment_percentage: '0%',
        length_of_mortgage: '1 Year',
        annual_interest_rate: '0%',
      })
    }
  }, [formState, data, isValidating, isValid, reset, priceNumber])

  const inputs = [
    {
      name: 'property_price',
      label: 'Property Price',
      placeholder: '$320,000.00',
      type: 'text',
      required: false,
    },
    {
      name: 'down_payment',
      label: 'Down payment',
      placeholder: '$64,000.00',
      type: 'text',
      required: false,
    },
    {
      name: 'length_of_mortgage',
      label: 'Length of Mortgage',
      placeholder: '30 Years',
      type: 'text',
      required: false,
    },
    {
      name: 'annual_interest_rate',
      label: 'Annual Interest Rate',
      placeholder: '4%',
      type: 'text',
      required: false,
    },
  ] as {
    name:
      | 'property_price'
      | 'down_payment'
      | 'length_of_mortgage'
      | 'annual_interest_rate'
    type: string
    placeholder: string
    label: string
    required: boolean
    defaultValue: string
  }[]

  return (
    <S.Form>
      {inputs.map((input, index) => {
        if (input.name === 'down_payment') {
          return (
            <S.Label key={index}>
              {input.label}
              <Flex css={{ gap: 16 }}>
                <S.InputWrapper css={{ w: 172 }}>
                  <S.Input {...input} {...register(input.name)} />
                </S.InputWrapper>
                <S.InputWrapper css={{ w: 100 }}>
                  <S.Input
                    {...register('down_payment_percentage')}
                    placeholder="20%"
                    type="text"
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
                <S.Input {...input} {...register(input.name)} />
              </S.InputWrapper>
            </S.Label>
          )
        }
      })}
    </S.Form>
  )
}
