import { useMemo, useState } from 'react'
import * as S from './payment-estimator.styles'

interface PaymentEstimatorProps {
  communityName: string
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function amount(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

export function PaymentEstimator({ communityName }: PaymentEstimatorProps) {
  const [price, setPrice] = useState('400000')
  const [downPaymentPercent, setDownPaymentPercent] = useState('20')
  const [annualRate, setAnnualRate] = useState('6.25')
  const [termYears, setTermYears] = useState('30')
  const [annualPropertyTax, setAnnualPropertyTax] = useState('')
  const [annualInsurance, setAnnualInsurance] = useState('')
  const [monthlyHoa, setMonthlyHoa] = useState('')

  const estimate = useMemo(() => {
    const homePrice = amount(price)
    const downPercent = Math.min(100, amount(downPaymentPercent))
    const monthlyRate = amount(annualRate) / 100 / 12
    const payments = Math.max(1, amount(termYears) * 12)
    const loan = homePrice * (1 - downPercent / 100)
    const principalAndInterest =
      monthlyRate === 0
        ? loan / payments
        : (loan * (monthlyRate * Math.pow(1 + monthlyRate, payments))) /
          (Math.pow(1 + monthlyRate, payments) - 1)
    const propertyTax = amount(annualPropertyTax) / 12
    const insurance = amount(annualInsurance) / 12
    const hoa = amount(monthlyHoa)

    return {
      principalAndInterest,
      propertyTax,
      insurance,
      hoa,
      total: principalAndInterest + propertyTax + insurance + hoa,
    }
  }, [
    annualInsurance,
    annualPropertyTax,
    annualRate,
    downPaymentPercent,
    monthlyHoa,
    price,
    termYears,
  ])

  return (
    <S.Container aria-labelledby="community-payment-title">
        <S.Intro>
          <S.Eyebrow>Plan with your numbers</S.Eyebrow>
          <S.Title id="community-payment-title">
            Estimate a home payment in {communityName}
          </S.Title>
          <S.Description>
            Enter a price and your lender&apos;s rate. Add property tax, insurance, and
            HOA amounts from the specific home for a more complete estimate.
          </S.Description>
        </S.Intro>

        <S.Panel>
          <S.Fields>
            <S.Field>
              <S.Label htmlFor="estimate-price">Home price ($)</S.Label>
              <S.Input
                id="estimate-price"
                inputMode="decimal"
                min="0"
                onChange={event => setPrice(event.target.value)}
                type="number"
                value={price}
              />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="estimate-down">Down payment (%)</S.Label>
              <S.Input
                id="estimate-down"
                max="100"
                min="0"
                onChange={event => setDownPaymentPercent(event.target.value)}
                type="number"
                value={downPaymentPercent}
              />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="estimate-rate">Annual interest rate (%)</S.Label>
              <S.Input
                id="estimate-rate"
                max="100"
                min="0"
                onChange={event => setAnnualRate(event.target.value)}
                step="0.01"
                type="number"
                value={annualRate}
              />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="estimate-term">Loan term (years)</S.Label>
              <S.Input
                id="estimate-term"
                max="50"
                min="1"
                onChange={event => setTermYears(event.target.value)}
                type="number"
                value={termYears}
              />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="estimate-tax">Annual property tax ($)</S.Label>
              <S.Input
                id="estimate-tax"
                inputMode="decimal"
                min="0"
                onChange={event => setAnnualPropertyTax(event.target.value)}
                placeholder="Enter from tax record"
                type="number"
                value={annualPropertyTax}
              />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="estimate-insurance">
                Annual homeowners insurance ($)
              </S.Label>
              <S.Input
                id="estimate-insurance"
                inputMode="decimal"
                min="0"
                onChange={event => setAnnualInsurance(event.target.value)}
                placeholder="Enter quote"
                type="number"
                value={annualInsurance}
              />
            </S.Field>
            <S.Field>
              <S.Label htmlFor="estimate-hoa">Monthly HOA ($)</S.Label>
              <S.Input
                id="estimate-hoa"
                inputMode="decimal"
                min="0"
                onChange={event => setMonthlyHoa(event.target.value)}
                placeholder="Enter if applicable"
                type="number"
                value={monthlyHoa}
              />
            </S.Field>
          </S.Fields>

          <S.Results aria-live="polite">
            <S.ResultHeading>Monthly estimate from entered figures</S.ResultHeading>
            <S.Total>{currency.format(estimate.total)}</S.Total>
            <S.Breakdown>
              <S.Row>
                <span>Principal and interest</span>
                <span>{currency.format(estimate.principalAndInterest)}</span>
              </S.Row>
              <S.Row>
                <span>Property tax</span>
                <span>{currency.format(estimate.propertyTax)}</span>
              </S.Row>
              <S.Row>
                <span>Homeowners insurance</span>
                <span>{currency.format(estimate.insurance)}</span>
              </S.Row>
              <S.Row>
                <span>HOA</span>
                <span>{currency.format(estimate.hoa)}</span>
              </S.Row>
            </S.Breakdown>
          </S.Results>
        </S.Panel>

        <S.Note>
          Illustrative estimate only. The starting price, rate, and term are editable
          examples, not a local market statistic, loan offer, or quote. Blank tax,
          insurance, and HOA fields are excluded from the monthly total. Those costs vary
          by property and are not automatically looked up; mortgage insurance and other
          costs are also not included.
        </S.Note>
    </S.Container>
  )
}
