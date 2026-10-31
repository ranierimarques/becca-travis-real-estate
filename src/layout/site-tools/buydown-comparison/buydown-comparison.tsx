import Link from 'next/link'
import { useMemo, useState } from 'react'

const benchmarkUrl = 'https://www.freddiemac.com/pmms/archive'
const subsidyGuidanceUrl =
  'https://sf.freddiemac.com/working-with-us/origination-underwriting/mortgage-products/mortgages-with-temporary-subsidy-buydown-plans'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const months = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 })

function safeNumber(value: number, minimum = 0) {
  return Number.isFinite(value) ? Math.max(value, minimum) : minimum
}

function monthlyPrincipalAndInterest(
  principal: number,
  annualRate: number,
  termYears: number
) {
  const termMonths = Math.max(Math.round(termYears * 12), 1)
  const monthlyRate = safeNumber(annualRate) / 1200

  if (principal <= 0) return 0
  if (monthlyRate === 0) return principal / termMonths

  return (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -termMonths)
}

type NumberInputProps = {
  label: string
  value: number
  onChange: (value: number) => void
  prefix?: string
  suffix?: string
  min?: number
  max?: number
  step?: number
  help?: string
}

function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max,
  step = 1,
  help,
}: NumberInputProps) {
  return (
    <>
      <label className="field">
        <span className="field-label">{label}</span>
        <span className="input-shell">
          {prefix && <span aria-hidden="true">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={event => onChange(Number(event.target.value))}
          />
          {suffix && <span aria-hidden="true">{suffix}</span>}
        </span>
        {help && <small>{help}</small>}
      </label>
      <style jsx>{`
        .field {
          display: grid;
          gap: 7px;
          min-width: 0;
          color: #51474c;
          font-size: 12px;
          font-weight: 650;
        }
        .input-shell {
          display: flex;
          align-items: center;
          min-height: 44px;
          overflow: hidden;
          color: #746970;
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 8px;
        }
        .input-shell:focus-within {
          border-color: #9d446e;
          box-shadow: 0 0 0 3px rgba(157, 68, 110, 0.13);
        }
        .input-shell > span {
          padding: 0 0 0 10px;
          font-size: 12px;
          white-space: nowrap;
        }
        .input-shell > span:last-child {
          padding: 0 10px 0 2px;
        }
        input {
          min-width: 0;
          width: 100%;
          height: 42px;
          padding: 9px 7px;
          color: #30272c;
          background: transparent;
          border: 0;
          font: inherit;
          font-size: 14px;
        }
        input:focus {
          outline: 0;
        }
        small {
          color: #786d73;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.4;
        }
      `}</style>
    </>
  )
}

export function BuydownComparison() {
  const [homePrice, setHomePrice] = useState(450000)
  const [downPayment, setDownPayment] = useState(90000)
  const [termYears, setTermYears] = useState(30)
  const [noteRate, setNoteRate] = useState(7.24)
  const [temporaryYearOneRate, setTemporaryYearOneRate] = useState(5.24)
  const [temporaryYearTwoRate, setTemporaryYearTwoRate] = useState(6.24)
  const [permanentRate, setPermanentRate] = useState(7.24)
  const [permanentCost, setPermanentCost] = useState(0)
  const [permanentCredit, setPermanentCredit] = useState(0)
  const [holdYears, setHoldYears] = useState(5)

  const comparison = useMemo(() => {
    const price = safeNumber(homePrice)
    const down = Math.min(safeNumber(downPayment), price)
    const principal = Math.max(price - down, 0)
    const term = Math.max(safeNumber(termYears, 1), 1)
    const holdMonths = Math.max(Math.round(safeNumber(holdYears, 1) * 12), 1)
    const standard = monthlyPrincipalAndInterest(principal, noteRate, term)
    const yearOne = monthlyPrincipalAndInterest(principal, temporaryYearOneRate, term)
    const yearTwo = monthlyPrincipalAndInterest(principal, temporaryYearTwoRate, term)
    const permanent = monthlyPrincipalAndInterest(principal, permanentRate, term)
    const firstYearRelief = Math.max(standard - yearOne, 0)
    const secondYearRelief = Math.max(standard - yearTwo, 0)
    const temporarySubsidy = firstYearRelief * 12 + secondYearRelief * 12
    const temporaryReliefInHold =
      firstYearRelief * Math.min(holdMonths, 12) +
      secondYearRelief * Math.min(Math.max(holdMonths - 12, 0), 12)
    const permanentMonthlySavings = standard - permanent
    const effectivePermanentCost = Math.max(
      safeNumber(permanentCost) - safeNumber(permanentCredit),
      0
    )
    const permanentGrossSavings = permanentMonthlySavings * holdMonths
    const permanentNetSavings = permanentGrossSavings - effectivePermanentCost
    const breakEvenMonths =
      permanentMonthlySavings > 0
        ? effectivePermanentCost / permanentMonthlySavings
        : null

    return {
      principal,
      holdMonths,
      standard,
      yearOne,
      yearTwo,
      permanent,
      temporarySubsidy,
      temporaryReliefInHold,
      permanentMonthlySavings,
      permanentNetSavings,
      breakEvenMonths,
    }
  }, [
    downPayment,
    holdYears,
    homePrice,
    noteRate,
    permanentCost,
    permanentCredit,
    permanentRate,
    temporaryYearOneRate,
    temporaryYearTwoRate,
    termYears,
  ])

  const decisionNote = (() => {
    if (comparison.principal <= 0) {
      return 'Enter a home price above the down payment to compare loan payments.'
    }
    if (comparison.permanentMonthlySavings <= 0) {
      return 'The permanent scenario does not lower principal and interest at the rates entered.'
    }
    if (comparison.breakEvenMonths === 0) {
      return 'The entered credit covers the permanent buydown cost, so there is no borrower-paid break-even period in this estimate.'
    }
    if (
      comparison.breakEvenMonths !== null &&
      comparison.breakEvenMonths <= comparison.holdMonths
    ) {
      return `The entered permanent cost is recovered in about ${months.format(
        comparison.breakEvenMonths
      )} months, within the selected hold period.`
    }
    if (comparison.breakEvenMonths !== null) {
      return `The entered permanent cost takes about ${months.format(
        comparison.breakEvenMonths
      )} months to recover, beyond the selected hold period.`
    }
    return 'Enter a permanent rate below the note rate to calculate a break-even period.'
  })()

  return (
    <section id="buydown-comparison" className="buydown-section">
      <div className="section-intro">
        <p className="eyebrow">Mortgage cost comparison</p>
        <h2>Compare payment relief with your own loan quotes.</h2>
        <p>
          Model a temporary 2-1 subsidy beside a permanent rate reduction. Every field is
          editable, so you can match the figures on written Loan Estimates instead of
          relying on an advertised headline rate.
        </p>
      </div>

      <div className="workspace">
        <form className="controls" onSubmit={event => event.preventDefault()}>
          <div className="control-heading">
            <span>01</span>
            <div>
              <h3>Your assumptions</h3>
              <p>Nothing entered here is sent or saved.</p>
            </div>
          </div>

          <div className="field-grid">
            <NumberInput
              label="Home price"
              value={homePrice}
              onChange={setHomePrice}
              prefix="$"
              step={5000}
            />
            <NumberInput
              label="Down payment"
              value={downPayment}
              onChange={setDownPayment}
              prefix="$"
              step={1000}
            />
            <NumberInput
              label="Loan term"
              value={termYears}
              onChange={setTermYears}
              suffix="years"
              min={1}
              max={40}
            />
            <NumberInput
              label="Expected hold period"
              value={holdYears}
              onChange={setHoldYears}
              suffix="years"
              min={1}
              max={40}
            />
          </div>

          <div className="rate-block">
            <h4>Temporary 2-1 scenario</h4>
            <div className="field-grid rate-fields">
              <NumberInput
                label="Note rate"
                value={noteRate}
                onChange={setNoteRate}
                suffix="%"
                step={0.01}
                max={25}
              />
              <NumberInput
                label="Year 1 payment rate"
                value={temporaryYearOneRate}
                onChange={setTemporaryYearOneRate}
                suffix="%"
                step={0.01}
                max={25}
              />
              <NumberInput
                label="Year 2 payment rate"
                value={temporaryYearTwoRate}
                onChange={setTemporaryYearTwoRate}
                suffix="%"
                step={0.01}
                max={25}
              />
            </div>
          </div>

          <div className="rate-block">
            <h4>Permanent scenario</h4>
            <div className="field-grid rate-fields">
              <NumberInput
                label="Permanent rate"
                value={permanentRate}
                onChange={setPermanentRate}
                suffix="%"
                step={0.01}
                max={25}
              />
              <NumberInput
                label="Buydown cost"
                value={permanentCost}
                onChange={setPermanentCost}
                prefix="$"
                step={100}
              />
              <NumberInput
                label="Credit toward cost"
                value={permanentCredit}
                onChange={setPermanentCredit}
                prefix="$"
                step={100}
              />
            </div>
          </div>
        </form>

        <div className="results" aria-live="polite">
          <div className="results-heading">
            <div>
              <p className="eyebrow">Payment view</p>
              <h3>{currency.format(comparison.principal)} estimated loan</h3>
            </div>
            <span className="benchmark">Benchmark: 7.24% · Oct. 29, 2026</span>
          </div>

          <div
            className="payment-table"
            role="table"
            aria-label="Principal and interest comparison"
          >
            <div className="table-row table-head" role="row">
              <span role="columnheader">Scenario</span>
              <span role="columnheader">Monthly P&amp;I</span>
            </div>
            <div className="table-row" role="row">
              <span role="cell">Note-rate payment</span>
              <strong role="cell">{currency.format(comparison.standard)}</strong>
            </div>
            <div className="table-row" role="row">
              <span role="cell">Temporary year 1</span>
              <strong role="cell">{currency.format(comparison.yearOne)}</strong>
            </div>
            <div className="table-row" role="row">
              <span role="cell">Temporary year 2</span>
              <strong role="cell">{currency.format(comparison.yearTwo)}</strong>
            </div>
            <div className="table-row permanent-row" role="row">
              <span role="cell">Permanent-rate payment</span>
              <strong role="cell">{currency.format(comparison.permanent)}</strong>
            </div>
          </div>

          <div className="summary-grid">
            <article>
              <span>Temporary subsidy needed</span>
              <strong>{currency.format(comparison.temporarySubsidy)}</strong>
              <p>
                Estimated funds needed to support the entered year-one and year-two
                payments.
              </p>
            </article>
            <article>
              <span>Temporary relief in hold period</span>
              <strong>{currency.format(comparison.temporaryReliefInHold)}</strong>
              <p>
                Payment difference during the first 24 months, limited to your hold
                period.
              </p>
            </article>
            <article>
              <span>Permanent net savings</span>
              <strong>{currency.format(comparison.permanentNetSavings)}</strong>
              <p>
                Entered-period P&amp;I savings less the permanent cost not covered by a
                credit.
              </p>
            </article>
          </div>

          <div className="decision-note">
            <span>What the inputs say</span>
            <p>{decisionNote}</p>
          </div>

          <div className="source-note">
            <p>
              The 7.24% context is Freddie Mac&apos;s national weekly average for the week
              ending October 29, 2026—not a quote or rate available to every borrower.
              Freddie Mac guidance also notes that borrowers with an eligible temporary
              subsidy buydown are qualified at the note rate.
            </p>
            <div>
              <a href={benchmarkUrl} target="_blank" rel="noreferrer">
                Freddie Mac rate archive ↗
              </a>
              <a href={subsidyGuidanceUrl} target="_blank" rel="noreferrer">
                Temporary subsidy guidance ↗
              </a>
            </div>
          </div>

          <div className="handoff">
            <div>
              <strong>Have written lender scenarios to compare?</strong>
              <p>
                Bring the matching Loan Estimates. Becca can help organize the real-estate
                questions around them, while your lender confirms the loan terms.
              </p>
            </div>
            <Link
              className="handoff-link"
              href="/contact-us?intent=mortgage-cost-comparison"
            >
              Ask Becca about your plan
            </Link>
          </div>
        </div>
      </div>

      <p className="disclosure">
        Educational estimate only. Figures show principal and interest and exclude taxes,
        insurance, mortgage insurance, HOA dues, fees, and other costs. Program
        eligibility, credits, points, qualification, and final terms must be confirmed
        with a licensed lender using current written disclosures.
      </p>

      <style jsx>{`
        .buydown-section {
          scroll-margin-top: 76px;
          padding: 82px max(24px, calc((100vw - 1160px) / 2));
          color: #332b30;
          background: #fff;
        }
        .section-intro {
          max-width: 760px;
          margin: 0 auto 34px;
          text-align: center;
        }
        .eyebrow {
          margin: 0 0 10px;
          color: #8d4967;
          font-size: 12px;
          font-weight: 750;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          color: #58243c;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.08;
        }
        .section-intro > p:last-child {
          max-width: 690px;
          margin: 16px auto 0;
          color: #665c62;
          font-size: 16px;
          line-height: 1.7;
        }
        .workspace {
          display: grid;
          grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr);
          overflow: hidden;
          border: 1px solid #e5dbe0;
          border-radius: 18px;
          box-shadow: 0 18px 52px rgba(55, 29, 41, 0.08);
        }
        .controls {
          padding: 30px;
          background: #fbf7f8;
          border-right: 1px solid #e8dfe3;
        }
        .control-heading {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .control-heading > span {
          display: grid;
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          place-items: center;
          color: #fff;
          background: #9d446e;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 750;
        }
        h3 {
          margin: 0;
          color: #3a3035;
          font-size: 22px;
          font-weight: 650;
          line-height: 1.25;
        }
        .control-heading p {
          margin: 4px 0 0;
          color: #756a70;
          font-size: 12px;
        }
        .field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px;
        }
        .field {
          display: grid;
          gap: 7px;
          min-width: 0;
          color: #51474c;
          font-size: 12px;
          font-weight: 650;
        }
        .input-shell {
          display: flex;
          align-items: center;
          min-height: 44px;
          overflow: hidden;
          color: #746970;
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 8px;
        }
        .input-shell:focus-within {
          border-color: #9d446e;
          box-shadow: 0 0 0 3px rgba(157, 68, 110, 0.13);
        }
        .input-shell > span {
          padding: 0 0 0 10px;
          font-size: 12px;
          white-space: nowrap;
        }
        .input-shell > span:last-child {
          padding: 0 10px 0 2px;
        }
        input {
          min-width: 0;
          width: 100%;
          height: 42px;
          padding: 9px 7px;
          color: #30272c;
          background: transparent;
          border: 0;
          font: inherit;
          font-size: 14px;
        }
        input:focus {
          outline: 0;
        }
        .field small {
          color: #786d73;
          font-size: 10px;
          font-weight: 400;
          line-height: 1.4;
        }
        .rate-block {
          padding-top: 22px;
          margin-top: 23px;
          border-top: 1px solid #e6dde1;
        }
        h4 {
          margin: 0 0 13px;
          color: #5f2a46;
          font-size: 13px;
          font-weight: 750;
        }
        .rate-fields {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .results {
          min-width: 0;
          padding: 32px;
          background: #fff;
        }
        .results-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }
        .results-heading .eyebrow {
          margin-bottom: 7px;
        }
        .benchmark {
          flex: 0 0 auto;
          padding: 7px 10px;
          color: #6c3b54;
          background: #f5e9ef;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
        }
        .payment-table {
          margin-top: 24px;
          border: 1px solid #e8dfe3;
          border-radius: 12px;
          overflow: hidden;
        }
        .table-row {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 18px;
          align-items: center;
          padding: 14px 17px;
          color: #62575d;
          border-top: 1px solid #eee7ea;
          font-size: 13px;
        }
        .table-row:first-child {
          border-top: 0;
        }
        .table-row strong {
          color: #342a2f;
          font-size: 16px;
          font-weight: 700;
        }
        .table-head {
          color: #756a70;
          background: #fbf8f9;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .permanent-row {
          background: #f7eef2;
        }
        .permanent-row strong {
          color: #6d294c;
        }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 16px;
        }
        .summary-grid article {
          padding: 17px;
          background: #fbf8f9;
          border: 1px solid #eee4e8;
          border-radius: 11px;
        }
        .summary-grid span,
        .decision-note span {
          display: block;
          color: #7f5268;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.06em;
          line-height: 1.45;
          text-transform: uppercase;
        }
        .summary-grid strong {
          display: block;
          margin-top: 8px;
          color: #55223c;
          font-size: 23px;
          font-weight: 650;
          letter-spacing: -0.02em;
        }
        .summary-grid p {
          margin: 8px 0 0;
          color: #756a70;
          font-size: 11px;
          line-height: 1.5;
        }
        .decision-note {
          margin-top: 16px;
          padding: 18px 20px;
          background: #fff8f3;
          border-left: 3px solid #d8997e;
        }
        .decision-note p {
          margin: 6px 0 0;
          color: #51464c;
          font-size: 14px;
          line-height: 1.55;
        }
        .source-note {
          margin-top: 18px;
          padding-top: 17px;
          border-top: 1px solid #e9e1e4;
        }
        .source-note p {
          margin: 0;
          color: #71666c;
          font-size: 11px;
          line-height: 1.6;
        }
        .source-note div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 10px;
        }
        .source-note a {
          color: #6d294c;
          font-size: 11px;
          font-weight: 700;
          text-underline-offset: 3px;
        }
        .handoff {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid #e9e1e4;
        }
        .handoff strong {
          color: #4b3440;
          font-size: 13px;
        }
        .handoff p {
          max-width: 470px;
          margin: 5px 0 0;
          color: #70656a;
          font-size: 11px;
          line-height: 1.55;
        }
        .handoff :global(.handoff-link) {
          display: inline-flex;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          min-height: 43px;
          padding: 0 16px;
          color: #fff;
          background: #9d446e;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }
        .handoff :global(.handoff-link:hover) {
          background: #58243c;
        }
        .handoff :global(.handoff-link:focus-visible) {
          outline: 3px solid rgba(216, 153, 126, 0.5);
          outline-offset: 3px;
        }
        .disclosure {
          max-width: 950px;
          margin: 17px auto 0;
          color: #756b70;
          font-size: 11px;
          line-height: 1.6;
          text-align: center;
        }
        @media (max-width: 940px) {
          .workspace {
            grid-template-columns: 1fr;
          }
          .controls {
            border-right: 0;
            border-bottom: 1px solid #e8dfe3;
          }
        }
        @media (max-width: 640px) {
          .buydown-section {
            padding: 60px 18px;
          }
          .workspace {
            border-radius: 13px;
          }
          .controls,
          .results {
            padding: 22px 18px;
          }
          .field-grid,
          .rate-fields,
          .summary-grid {
            grid-template-columns: 1fr;
          }
          .results-heading {
            display: grid;
          }
          .benchmark {
            justify-self: start;
          }
          .table-row {
            padding: 13px;
          }
          .summary-grid {
            gap: 9px;
          }
          .handoff {
            align-items: flex-start;
            flex-direction: column;
          }
          .handoff :global(.handoff-link) {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
