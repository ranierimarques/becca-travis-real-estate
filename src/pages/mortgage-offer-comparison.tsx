import Link from 'next/link'
import { useMemo, useState } from 'react'
import { MetaSEO } from '@/common'

type LoanOffer = {
  label: string
  noteRate: number
  hasTemporaryBuydown: boolean
  yearOneRate: number
  yearTwoRate: number
  upfrontCosts: number
  lenderCredits: number
}

const initialOffer = (label: string): LoanOffer => ({
  label,
  noteRate: 0,
  hasTemporaryBuydown: false,
  yearOneRate: 0,
  yearTwoRate: 0,
  upfrontCosts: 0,
  lenderCredits: 0,
})

function monthlyPayment(principal: number, annualRate: number, months: number) {
  const monthlyRate = Math.max(annualRate, 0) / 1200
  if (!principal || !months) return 0
  if (!monthlyRate) return principal / months
  return (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months)
}

function makeOfferSchedule(offer: LoanOffer, principal: number, termMonths: number) {
  const notePayment = monthlyPayment(principal, offer.noteRate, termMonths)
  const yearOnePayment = offer.hasTemporaryBuydown
    ? monthlyPayment(principal, offer.yearOneRate, termMonths)
    : notePayment
  const yearTwoPayment = offer.hasTemporaryBuydown
    ? monthlyPayment(principal, offer.yearTwoRate, termMonths)
    : notePayment
  const monthlyCosts: number[] = [offer.upfrontCosts - offer.lenderCredits]
  let balance = principal
  let buyerPayments = 0
  let estimatedSubsidy = 0

  for (let month = 1; month <= termMonths; month += 1) {
    const interest = balance * (Math.max(offer.noteRate, 0) / 1200)
    const principalPaid = Math.min(balance, Math.max(0, notePayment - interest))
    balance = Math.max(0, balance - principalPaid)

    const buyerPayment =
      month <= 12 ? yearOnePayment : month <= 24 ? yearTwoPayment : notePayment
    buyerPayments += buyerPayment
    if (offer.hasTemporaryBuydown && month <= 24) {
      estimatedSubsidy += Math.max(0, notePayment - buyerPayment)
    }

    monthlyCosts.push(
      buyerPayments + balance - principal + offer.upfrontCosts - offer.lenderCredits
    )
  }

  return {
    notePayment,
    yearOnePayment,
    yearTwoPayment,
    monthlyCosts,
    estimatedSubsidy,
  }
}

const money = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0)

interface OfferEditorProps {
  offer: LoanOffer
  onChange: (offer: LoanOffer) => void
}

type NumericOfferField =
  | 'noteRate'
  | 'yearOneRate'
  | 'yearTwoRate'
  | 'upfrontCosts'
  | 'lenderCredits'

function OfferEditor({ offer, onChange }: OfferEditorProps) {
  const updateNumber = (field: NumericOfferField, value: string) =>
    onChange({ ...offer, [field]: value === '' ? 0 : Number(value) })

  return (
    <fieldset className="offer-editor">
      <legend>{offer.label}</legend>
      <div className="offer-fields">
        <label className="field">
          <span>Interest rate on the note (%)</span>
          <input
            type="number"
            min="0"
            max="30"
            step="0.01"
            placeholder="Enter quoted rate"
            value={offer.noteRate || ''}
            onChange={event => updateNumber('noteRate', event.target.value)}
            inputMode="decimal"
          />
        </label>

        <label className="field">
          <span>Points and lender costs ($)</span>
          <input
            type="number"
            min="0"
            step="100"
            value={offer.upfrontCosts}
            onChange={event => updateNumber('upfrontCosts', event.target.value)}
            inputMode="decimal"
          />
        </label>

        <label className="field">
          <span>Lender credits ($)</span>
          <input
            type="number"
            min="0"
            step="100"
            value={offer.lenderCredits}
            onChange={event => updateNumber('lenderCredits', event.target.value)}
            inputMode="decimal"
          />
        </label>
      </div>

      <label className="check-control">
        <input
          type="checkbox"
          checked={offer.hasTemporaryBuydown}
          onChange={event =>
            onChange({ ...offer, hasTemporaryBuydown: event.target.checked })
          }
        />
        <span>This offer includes a temporary payment buydown</span>
      </label>

      {offer.hasTemporaryBuydown && (
        <div className="offer-fields temporary-fields">
          <label className="field">
            <span>Year 1 payment rate (%)</span>
            <input
              type="number"
              min="0"
              max="30"
              step="0.01"
              placeholder="Enter quoted rate"
              value={offer.yearOneRate || ''}
              onChange={event => updateNumber('yearOneRate', event.target.value)}
              inputMode="decimal"
            />
          </label>
          <label className="field">
            <span>Year 2 payment rate (%)</span>
            <input
              type="number"
              min="0"
              max="30"
              step="0.01"
              placeholder="Enter quoted rate"
              value={offer.yearTwoRate || ''}
              onChange={event => updateNumber('yearTwoRate', event.target.value)}
              inputMode="decimal"
            />
          </label>
        </div>
      )}
    </fieldset>
  )
}

export default function MortgageOfferComparisonPage() {
  const [principal, setPrincipal] = useState(350000)
  const [termYears, setTermYears] = useState(30)
  const [holdYears, setHoldYears] = useState(5)
  const [offerA, setOfferA] = useState<LoanOffer>(initialOffer('Offer A'))
  const [offerB, setOfferB] = useState<LoanOffer>(initialOffer('Offer B'))

  const termMonths = Math.max(12, Math.min(40 * 12, Math.round(termYears * 12)))
  const holdMonths = Math.max(1, Math.min(termMonths, Math.round(holdYears * 12)))
  const scheduleA = useMemo(
    () => makeOfferSchedule(offerA, principal, termMonths),
    [offerA, principal, termMonths]
  )
  const scheduleB = useMemo(
    () => makeOfferSchedule(offerB, principal, termMonths),
    [offerB, principal, termMonths]
  )
  const canCompare = offerA.noteRate > 0 && offerB.noteRate > 0
  const costA = scheduleA.monthlyCosts[holdMonths]
  const costB = scheduleB.monthlyCosts[holdMonths]
  const lowerCostOffer = costA <= costB ? offerA.label : offerB.label
  const difference = Math.abs(costA - costB)
  const breakEvenMonth = canCompare
    ? scheduleB.monthlyCosts.findIndex(
        (cost, month) => cost <= scheduleA.monthlyCosts[month]
      )
    : -1

  return (
    <main className="comparison-page">
      <MetaSEO
        canonicalPath="/mortgage-offer-comparison"
        title="Compare Mortgage Offers and Rate Buydowns | Becca Travis"
        description="Compare two written mortgage offers using your loan amount, rates, points, credits, and planned time in the home. Free North Alabama buyer tool."
        image="/images/areas/downtown-huntsville.webp"
        alt="Downtown Huntsville park pond and skyline"
      />

      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">A free buyer tool</p>
          <h1>Compare the loan, not just the rate.</h1>
          <p>
            Put two written offers side by side. Include points, lender credits, and a
            temporary payment buydown to see how the costs may change over the time you
            expect to own the home.
          </p>
          <a className="primary-link" href="#offer-inputs">
            Compare your offers
          </a>
        </div>
      </header>

      <nav className="jump-nav" aria-label="Mortgage comparison page navigation">
        <a href="#offer-inputs">Enter offer details</a>
        <a href="#comparison-results">Compare the results</a>
        <a href="#questions">Questions for your lender</a>
      </nav>

      <section id="offer-inputs" className="section">
        <div className="section-heading">
          <h2>Start with the same loan amount and term</h2>
          <p>
            Use the figures on each lender’s Loan Estimate. The example loan amount is a
            starting value only. Rates are blank until you enter your current quotes.
          </p>
        </div>

        <div className="shared-inputs">
          <label className="field">
            <span>Loan amount ($)</span>
            <input
              type="number"
              min="1"
              step="5000"
              value={principal}
              onChange={event => setPrincipal(Math.max(0, Number(event.target.value)))}
            />
          </label>
          <label className="field">
            <span>Loan term (years)</span>
            <input
              type="number"
              min="1"
              max="40"
              step="1"
              value={termYears}
              onChange={event =>
                setTermYears(Math.max(1, Math.min(40, Number(event.target.value))))
              }
            />
          </label>
          <label className="field">
            <span>How long you expect to keep this loan (years)</span>
            <input
              type="number"
              min="1"
              max="40"
              step="1"
              value={holdYears}
              onChange={event =>
                setHoldYears(Math.max(1, Math.min(40, Number(event.target.value))))
              }
            />
          </label>
        </div>

        <div className="offer-grid">
          <OfferEditor offer={offerA} onChange={setOfferA} />
          <OfferEditor offer={offerB} onChange={setOfferB} />
        </div>

        <div className="privacy-note">
          Your entries stay in this page. They are not saved or sent to Becca.
        </div>
      </section>

      <section id="comparison-results" className="section results-section">
        <div className="section-heading">
          <h2>See the estimated cost over your hold period</h2>
          <p>
            The comparison estimates principal and interest only, then adds the points and
            lender costs you entered and subtracts the entered lender credits.
          </p>
        </div>

        {canCompare ? (
          <div className="results-panel" aria-live="polite">
            <div className="results-summary">
              <div>
                <span className="result-label">
                  Estimated interest and upfront cost at {holdYears} years
                </span>
                <strong>{money(costA)}</strong>
                <span>{offerA.label}</span>
              </div>
              <div>
                <span className="result-label">
                  Estimated interest and upfront cost at {holdYears} years
                </span>
                <strong>{money(costB)}</strong>
                <span>{offerB.label}</span>
              </div>
            </div>

            <div className="result-note">
              <strong>
                {lowerCostOffer} is lower by {money(difference)} under these inputs.
              </strong>
              {breakEvenMonth >= 0 ? (
                <p>
                  {offerB.label} reaches or beats {offerA.label} in this estimate around{' '}
                  {breakEvenMonth === 0
                    ? 'the start of the loan'
                    : `${breakEvenMonth} ${breakEvenMonth === 1 ? 'month' : 'months'}`}
                  .
                </p>
              ) : (
                <p>
                  {offerB.label} does not reach or beat {offerA.label} in this estimate.
                </p>
              )}
            </div>

            <div className="payment-table-wrap">
              <table className="payment-table">
                <caption>Estimated monthly principal and interest payments</caption>
                <thead>
                  <tr>
                    <th scope="col">Offer</th>
                    <th scope="col">Year 1</th>
                    <th scope="col">Year 2</th>
                    <th scope="col">Full note rate</th>
                    <th scope="col">Estimated temporary subsidy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { offer: offerA, schedule: scheduleA },
                    { offer: offerB, schedule: scheduleB },
                  ].map(row => (
                    <tr key={row.offer.label}>
                      <th scope="row">{row.offer.label}</th>
                      <td>{money(row.schedule.yearOnePayment)}</td>
                      <td>{money(row.schedule.yearTwoPayment)}</td>
                      <td>{money(row.schedule.notePayment)}</td>
                      <td>
                        {row.offer.hasTemporaryBuydown
                          ? money(row.schedule.estimatedSubsidy)
                          : 'No temporary buydown entered'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="method-note">
              For a temporary buydown, this estimate assumes the loan balance follows the
              full note rate while a seller or lender funds the difference between the
              note payment and the lower payment for up to two years. Actual program terms
              and funding amounts vary. Confirm the schedule with your lender.
            </p>
          </div>
        ) : (
          <p className="empty-results">
            Enter an interest rate for both offers to see the comparison.
          </p>
        )}
      </section>

      <section id="questions" className="section questions-section">
        <div>
          <h2>Questions to ask before you choose</h2>
          <ul>
            <li>
              Are both estimates for the same loan amount, type, term, and lock period?
            </li>
            <li>
              What points, lender costs, and lender credits are included in each quote?
            </li>
            <li>
              If there is a temporary buydown, who funds it and what is the payment after
              it ends?
            </li>
            <li>
              How much cash is due at closing, and what is the APR on each Loan Estimate?
            </li>
            <li>
              What would change if you sell, refinance, or pay the loan off earlier than
              planned?
            </li>
          </ul>
          <p>
            The Consumer Financial Protection Bureau recommends comparing Loan Estimates
            from multiple lenders. Use the same assumptions when you compare, then ask
            your lender to explain any difference.
          </p>
          <a
            href="https://www.consumerfinance.gov/owning-a-home/compare/"
            target="_blank"
            rel="noreferrer noopener"
          >
            CFPB guide to comparing loan offers <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.consumerfinance.gov/owning-a-home/loan-estimate/"
            target="_blank"
            rel="noreferrer noopener"
          >
            CFPB Loan Estimate explainer <span aria-hidden="true">↗</span>
          </a>
        </div>
        <aside>
          <strong>Before you act</strong>
          <p>
            This is an educational estimate, not a loan offer, approval, or financial
            advice. It excludes mortgage insurance, taxes, homeowners insurance, HOA dues,
            escrow, and other closing charges. Ask a licensed mortgage professional to
            confirm the math and all written terms.
          </p>
          <Link href="/planning-tools" legacyBehavior>
            <a>Open the other free planning tools</a>
          </Link>
        </aside>
      </section>

      <style jsx>{`
        .comparison-page {
          background: #fff;
          color: #30272c;
        }
        .hero {
          background: linear-gradient(120deg, #fbf2ee, #f6e8e1 62%, #fbf7f4);
          padding: 70px 24px 62px;
        }
        .hero-inner {
          margin: 0 auto;
          max-width: 980px;
          text-align: center;
        }
        .eyebrow {
          color: #8d4967;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.11em;
          margin: 0 0 14px;
          text-transform: uppercase;
        }
        h1 {
          color: #59223f;
          font-size: clamp(38px, 5vw, 58px);
          font-weight: 500;
          letter-spacing: -0.04em;
          line-height: 1.06;
          margin: 0;
        }
        .hero-inner > p:not(.eyebrow) {
          color: #51474d;
          font-size: 17px;
          line-height: 1.7;
          margin: 20px auto 26px;
          max-width: 730px;
        }
        .primary-link {
          background: #6d294c;
          border-radius: 999px;
          color: white;
          display: inline-flex;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 19px;
          text-decoration: none;
        }
        .jump-nav {
          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid #eee6e9;
          border-top: 1px solid #eee6e9;
          display: flex;
          gap: 30px;
          justify-content: center;
          overflow-x: auto;
          padding: 14px 20px;
          position: sticky;
          top: 0;
          z-index: 5;
        }
        .jump-nav a {
          color: #604252;
          flex: 0 0 auto;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
        }
        .section {
          margin: 0 auto;
          max-width: 1160px;
          padding: 64px 24px;
          scroll-margin-top: 70px;
        }
        .section-heading {
          margin: 0 auto 28px;
          max-width: 760px;
          text-align: center;
        }
        h2 {
          color: #3a2d33;
          font-size: clamp(28px, 3.5vw, 38px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin: 0;
        }
        .section-heading p {
          color: #655a60;
          font-size: 15px;
          line-height: 1.7;
          margin: 12px auto 0;
        }
        .shared-inputs,
        .offer-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .offer-grid {
          gap: 20px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 24px;
        }
        .offer-editor {
          border: 1px solid #eadfe4;
          border-radius: 15px;
          margin: 0;
          min-width: 0;
          padding: 22px;
        }
        .offer-editor legend {
          color: #59223f;
          font-size: 19px;
          font-weight: 600;
          padding: 0 8px;
        }
        .offer-fields {
          display: grid;
          gap: 15px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .temporary-fields {
          margin-top: 16px;
        }
        .field {
          color: #51464c;
          display: grid;
          font-size: 13px;
          font-weight: 600;
          gap: 7px;
          min-width: 0;
        }
        .field input {
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 8px;
          color: #30272c;
          font: inherit;
          min-height: 44px;
          padding: 10px 12px;
          width: 100%;
        }
        .field input:focus,
        .check-control input:focus-visible {
          border-color: #8d4967;
          outline: 3px solid rgba(141, 73, 103, 0.16);
        }
        .check-control {
          align-items: flex-start;
          color: #51464c;
          display: flex;
          font-size: 13px;
          gap: 10px;
          line-height: 1.5;
          margin-top: 20px;
        }
        .check-control input {
          accent-color: #6d294c;
          height: 18px;
          margin: 1px 0 0;
          width: 18px;
        }
        .privacy-note {
          color: #655a60;
          font-size: 12px;
          margin-top: 18px;
          text-align: center;
        }
        .results-section {
          border-top: 1px solid #eee6e9;
        }
        .results-panel {
          border: 1px solid #eadfe4;
          border-radius: 18px;
          box-shadow: 0 14px 40px rgba(55, 29, 41, 0.05);
          padding: 28px;
        }
        .results-summary {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .results-summary > div {
          background: #faf6f8;
          border-radius: 12px;
          display: grid;
          gap: 6px;
          padding: 18px;
        }
        .results-summary strong {
          color: #59223f;
          font-size: 30px;
          font-weight: 500;
          letter-spacing: -0.03em;
        }
        .results-summary > div > span:last-child {
          color: #655a60;
          font-size: 13px;
        }
        .result-label {
          color: #6d294c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.5;
          text-transform: uppercase;
        }
        .result-note {
          background: #f7f0f3;
          border-left: 3px solid #8d4967;
          margin: 20px 0;
          padding: 16px 18px;
        }
        .result-note strong {
          color: #59223f;
          font-size: 15px;
        }
        .result-note p {
          color: #655a60;
          font-size: 13px;
          line-height: 1.6;
          margin: 6px 0 0;
        }
        .payment-table-wrap {
          overflow-x: auto;
        }
        .payment-table {
          border-collapse: collapse;
          min-width: 720px;
          width: 100%;
        }
        .payment-table caption {
          color: #3a2d33;
          font-size: 15px;
          font-weight: 600;
          padding: 0 0 12px;
          text-align: left;
        }
        .payment-table th,
        .payment-table td {
          border-bottom: 1px solid #eee6e9;
          font-size: 13px;
          padding: 12px 10px;
          text-align: left;
        }
        .payment-table thead th {
          color: #6d294c;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .payment-table tbody th {
          color: #392d33;
          font-weight: 600;
        }
        .method-note,
        .empty-results {
          color: #655a60;
          font-size: 13px;
          line-height: 1.7;
          margin: 18px 0 0;
        }
        .empty-results {
          background: #faf6f8;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .questions-section {
          border-top: 1px solid #eee6e9;
          display: grid;
          gap: 50px;
          grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
        }
        .questions-section h2 {
          font-size: 30px;
        }
        .questions-section ul {
          color: #51474d;
          display: grid;
          gap: 12px;
          line-height: 1.65;
          margin: 20px 0;
          padding-left: 20px;
        }
        .questions-section > div > p,
        .questions-section aside p {
          color: #655a60;
          font-size: 14px;
          line-height: 1.7;
        }
        .questions-section > div > a,
        .questions-section aside a {
          color: #6d294c;
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          margin: 8px 20px 0 0;
          text-underline-offset: 4px;
        }
        .questions-section aside {
          align-self: start;
          background: #faf6f8;
          border-radius: 14px;
          padding: 22px;
        }
        .questions-section aside strong {
          color: #59223f;
          font-size: 17px;
        }
        .questions-section aside p {
          font-size: 13px;
        }
        @media (max-width: 760px) {
          .hero {
            padding: 52px 20px;
          }
          .jump-nav {
            justify-content: flex-start;
          }
          .section {
            padding: 48px 20px;
          }
          .shared-inputs {
            grid-template-columns: 1fr;
          }
          .offer-grid,
          .questions-section {
            grid-template-columns: 1fr;
          }
          .offer-fields {
            grid-template-columns: 1fr;
          }
          .results-panel {
            padding: 18px;
          }
          .results-summary {
            grid-template-columns: 1fr;
          }
        }
        @media print {
          .hero,
          .jump-nav,
          .questions-section aside,
          .primary-link {
            display: none;
          }
          .section {
            padding: 16px 0;
          }
          .offer-editor,
          .results-panel {
            break-inside: avoid;
            box-shadow: none;
          }
        }
      `}</style>
      <style jsx global>{`
        .comparison-page .offer-editor {
          border: 1px solid #eadfe4;
          border-radius: 15px;
          margin: 0;
          min-width: 0;
          padding: 22px;
        }
        .comparison-page .offer-editor legend {
          color: #59223f;
          font-size: 19px;
          font-weight: 600;
          padding: 0 8px;
        }
        .comparison-page .offer-editor .offer-fields {
          display: grid;
          gap: 15px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .comparison-page .offer-editor .temporary-fields {
          margin-top: 16px;
        }
        .comparison-page .offer-editor .field {
          color: #51464c;
          display: grid;
          font-size: 13px;
          font-weight: 600;
          gap: 7px;
          min-width: 0;
        }
        .comparison-page .offer-editor .field input {
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 8px;
          color: #30272c;
          font: inherit;
          min-height: 44px;
          padding: 10px 12px;
          width: 100%;
        }
        .comparison-page .offer-editor .field input:focus {
          border-color: #8d4967;
          outline: 3px solid rgba(141, 73, 103, 0.16);
        }
        .comparison-page .offer-editor .check-control {
          align-items: flex-start;
          color: #51464c;
          display: flex;
          font-size: 13px;
          gap: 10px;
          line-height: 1.5;
          margin-top: 20px;
        }
        .comparison-page .offer-editor .check-control input {
          accent-color: #6d294c;
          height: 18px;
          margin: 1px 0 0;
          width: 18px;
        }
        @media (max-width: 760px) {
          .comparison-page .offer-editor .offer-fields {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
