import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

type Program =
  | 'conventional-primary'
  | 'conventional-investment'
  | 'fha'
  | 'va'
  | 'manual'
type Priority = 'cash' | 'payment' | 'systems' | 'repairs'
type LeverId = 'closing' | 'buydown' | 'warranty' | 'repairs'

const fannieUrl =
  'https://selling-guide.fanniemae.com/sel/b3-4.1-02/interested-party-contributions-ipcs'
const fhaUrl = 'https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1'
const vaUrl = 'https://www.benefits.va.gov/HOMELOANS/purchaseco_loan_fee.asp'

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const leverCopy: Record<LeverId, { title: string; description: string; tag: string }> = {
  closing: {
    title: 'Closing costs and prepaids',
    description: 'Model the amount your lender says can be paid on your behalf.',
    tag: 'Cash-to-close',
  },
  buydown: {
    title: 'Temporary or permanent buydown',
    description: 'Use the written subsidy or discount-point cost from the lender.',
    tag: 'Monthly payment',
  },
  warranty: {
    title: 'Home warranty plan',
    description: 'Use a current written plan price and review its exclusions and limits.',
    tag: 'Home systems',
  },
  repairs: {
    title: 'Seller-completed repair budget',
    description:
      'Keep this conservative until the lender and contract professionals classify it.',
    tag: 'Property condition',
  },
}

const priorityScores: Record<Priority, Record<LeverId, number>> = {
  cash: { closing: 12, buydown: 5, warranty: 3, repairs: 2 },
  payment: { closing: 5, buydown: 12, warranty: 3, repairs: 2 },
  systems: { closing: 4, buydown: 3, warranty: 12, repairs: 6 },
  repairs: { closing: 3, buydown: 2, warranty: 6, repairs: 12 },
}

function safeAmount(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0
}

function conventionalCapPercent(ltv: number) {
  if (ltv > 90) return 3
  if (ltv > 75) return 6
  return 9
}

function getCapDetails({
  program,
  salePrice,
  appraisedValue,
  downPercent,
  manualPercent,
}: {
  program: Program
  salePrice: number
  appraisedValue: number
  downPercent: number
  manualPercent: number
}) {
  const estimatedLoan = salePrice * Math.max(0, 1 - safeAmount(downPercent) / 100)
  const conventionalBasis = Math.min(salePrice, appraisedValue || salePrice)
  const ltv = conventionalBasis
    ? Math.max(0, (estimatedLoan / conventionalBasis) * 100)
    : 0
  let capPercent = safeAmount(manualPercent)
  let basis = salePrice
  let capLabel = 'Manual lender-confirmed percentage'

  switch (program) {
    case 'conventional-primary':
      capPercent = conventionalCapPercent(ltv)
      basis = conventionalBasis
      capLabel = `Fannie Mae principal residence / second home · ${capPercent}% at ${ltv.toFixed(
        1
      )}% LTV`
      break
    case 'conventional-investment':
      capPercent = 2
      basis = conventionalBasis
      capLabel = 'Fannie Mae investment property · 2%'
      break
    case 'fha':
      capPercent = 6
      capLabel = 'FHA interested-party contribution reference · 6% of sales price'
      break
    case 'va':
      capPercent = 4
      basis = appraisedValue || salePrice
      capLabel = 'VA seller-concession reference · 4% of reasonable value'
      break
    default:
      break
  }

  return {
    capAmount: (basis * capPercent) / 100,
    capLabel,
    ltv,
  }
}

function NumberField({
  label,
  value,
  onChange,
  suffix,
  step = 1000,
}: {
  label: string
  value: number
  onChange: (value: number) => void
  suffix?: string
  step?: number
}) {
  return (
    <label className="number-field">
      <span>{label}</span>
      <span className="number-shell">
        {!suffix && <b aria-hidden="true">$</b>}
        <input
          type="number"
          min={0}
          step={step}
          value={value}
          onChange={event => onChange(Number(event.target.value))}
        />
        {suffix && <b aria-hidden="true">{suffix}</b>}
      </span>
      <style jsx>{`
        .number-field {
          display: grid;
          gap: 7px;
          color: #5c5056;
          font-size: 12px;
          font-weight: 700;
        }
        .number-shell {
          display: flex;
          align-items: center;
          min-height: 46px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #ddcfd6;
          border-radius: 10px;
        }
        .number-shell:focus-within {
          border-color: #9d446e;
          box-shadow: 0 0 0 3px rgba(157, 68, 110, 0.13);
        }
        b {
          padding: 0 0 0 12px;
          color: #8a7881;
          font-size: 12px;
        }
        b:last-child {
          padding: 0 12px 0 2px;
        }
        input {
          min-width: 0;
          width: 100%;
          height: 44px;
          padding: 10px 8px;
          color: #342a2f;
          background: transparent;
          border: 0;
          font: inherit;
          font-size: 14px;
        }
        input:focus {
          outline: 0;
        }
      `}</style>
    </label>
  )
}

export function SmartConcessionOptimizer() {
  const [price, setPrice] = useState(450000)
  const [appraisedValue, setAppraisedValue] = useState(450000)
  const [downPercent, setDownPercent] = useState(10)
  const [program, setProgram] = useState<Program>('conventional-primary')
  const [manualPercent, setManualPercent] = useState(3)
  const [sellerBudget, setSellerBudget] = useState(15000)
  const [priority, setPriority] = useState<Priority>('cash')
  const [enabled, setEnabled] = useState<LeverId[]>([
    'closing',
    'buydown',
    'warranty',
    'repairs',
  ])
  const [amounts, setAmounts] = useState<Record<LeverId, number>>({
    closing: 6500,
    buydown: 7200,
    warranty: 750,
    repairs: 4500,
  })
  const [repairOutsideCap, setRepairOutsideCap] = useState(false)
  const [copied, setCopied] = useState(false)

  const scenario = useMemo(() => {
    const salePrice = safeAmount(price)
    const value = safeAmount(appraisedValue)
    const { capAmount, capLabel, ltv } = getCapDetails({
      program,
      salePrice,
      appraisedValue: value,
      downPercent,
      manualPercent,
    })
    const budget = safeAmount(sellerBudget)
    const levers = (Object.keys(leverCopy) as LeverId[])
      .filter(id => enabled.includes(id))
      .map(id => ({
        id,
        amount: safeAmount(amounts[id]),
        capAmount: id === 'repairs' && repairOutsideCap ? 0 : safeAmount(amounts[id]),
      }))

    const candidates = Array.from({ length: 1 << levers.length }, (_, mask) => {
      const selected = levers.filter((_, index) => (mask & (1 << index)) !== 0)
      const sellerCost = selected.reduce((total, item) => total + item.amount, 0)
      const countedAmount = selected.reduce((total, item) => total + item.capAmount, 0)
      const score = selected.reduce(
        (total, item) => total + priorityScores[priority][item.id],
        0
      )
      return {
        selected,
        sellerCost,
        countedAmount,
        score,
        feasible: sellerCost <= budget && countedAmount <= capAmount,
      }
    })
      .filter(candidate => candidate.feasible)
      .sort((a, b) => b.score - a.score || b.sellerCost - a.sellerCost)

    const best = candidates[0] || {
      selected: [],
      sellerCost: 0,
      countedAmount: 0,
      score: 0,
      feasible: true,
    }

    return {
      ...best,
      capAmount,
      capLabel,
      budget,
      ltv,
    }
  }, [
    amounts,
    appraisedValue,
    downPercent,
    enabled,
    manualPercent,
    price,
    priority,
    program,
    repairOutsideCap,
    sellerBudget,
  ])

  const summary = [
    `Contract price: ${money.format(safeAmount(price))}`,
    `Financing preset: ${scenario.capLabel}`,
    `Planning cap: ${money.format(scenario.capAmount)}`,
    `Seller budget: ${money.format(scenario.budget)}`,
    `Suggested combination: ${
      scenario.selected.length
        ? scenario.selected.map(item => leverCopy[item.id].title).join(', ')
        : 'No selected combination fits the entered limits'
    }`,
    `Estimated seller cost: ${money.format(scenario.sellerCost)}`,
    `Amount counted in this conservative cap estimate: ${money.format(
      scenario.countedAmount
    )}`,
  ].join('\n')

  function toggleLever(id: LeverId) {
    setEnabled(current =>
      current.includes(id) ? current.filter(item => item !== id) : [...current, id]
    )
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const capUsage = scenario.capAmount
    ? Math.min((scenario.countedAmount / scenario.capAmount) * 100, 100)
    : 0

  return (
    <section id="smart-concession-optimizer" className="optimizer-section">
      <div className="media-hero">
        <div className="media-photo">
          <Image
            src="/images/listing-planner/hero.jpg"
            alt="North Alabama home prepared for a buyer planning conversation"
            fill
            sizes="(max-width: 900px) 100vw, 52vw"
          />
          <div className="photo-shade" />
          <div className="photo-note">
            <span>Numbers first. Contract review next.</span>
            <strong>Build a concession scenario you can actually discuss.</strong>
          </div>
        </div>
        <div className="media-copy">
          <div className="badge-row">
            <span>Interactive planning studio</span>
            <span>Official source links</span>
          </div>
          <p className="eyebrow">Seller concessions</p>
          <h2>Make the credits work before the contract does.</h2>
          <p>
            Enter the written costs you are comparing. The optimizer checks every selected
            combination against the seller budget and a conservative financing-cap
            estimate, then gives you one scenario to review with the lender and contract
            professionals.
          </p>
          <div className="hero-actions">
            <a href="#concession-workspace">Build my scenario</a>
            <a className="quiet-link" href="#arw-warranty-closing-hub">
              Compare warranty plans ↓
            </a>
          </div>
        </div>
      </div>

      <div id="concession-workspace" className="workspace">
        <div className="setup-panel">
          <div className="panel-heading">
            <span>01</span>
            <div>
              <p className="eyebrow">Your numbers</p>
              <h3>Set the guardrails</h3>
            </div>
          </div>

          <div className="setup-grid">
            <NumberField
              label="Contract price"
              value={price}
              onChange={setPrice}
              step={5000}
            />
            <NumberField
              label="Appraised / reasonable value"
              value={appraisedValue}
              onChange={setAppraisedValue}
              step={5000}
            />
            <NumberField
              label="Down payment"
              value={downPercent}
              onChange={setDownPercent}
              suffix="%"
              step={0.5}
            />
            <NumberField
              label="Seller budget"
              value={sellerBudget}
              onChange={setSellerBudget}
              step={500}
            />
          </div>

          <label className="select-field">
            <span>Financing guideline preset</span>
            <select
              value={program}
              onChange={event => setProgram(event.target.value as Program)}
            >
              <option value="conventional-primary">
                Conventional · primary / second home
              </option>
              <option value="conventional-investment">
                Conventional · investment property
              </option>
              <option value="fha">FHA · 6% reference</option>
              <option value="va">VA · 4% seller-concession reference</option>
              <option value="manual">Manual lender-confirmed percentage</option>
            </select>
          </label>

          {program === 'manual' && (
            <NumberField
              label="Lender-confirmed percentage"
              value={manualPercent}
              onChange={setManualPercent}
              suffix="%"
              step={0.25}
            />
          )}

          <label className="select-field priority-field">
            <span>What matters most in this scenario?</span>
            <select
              value={priority}
              onChange={event => setPriority(event.target.value as Priority)}
            >
              <option value="cash">Reduce cash needed at closing</option>
              <option value="payment">Prioritize payment relief</option>
              <option value="systems">Prioritize home-system protection</option>
              <option value="repairs">Prioritize property-condition work</option>
            </select>
          </label>

          <div className="guideline-note">
            <span>Current preset</span>
            <strong>{scenario.capLabel}</strong>
            <p>
              Planning reference: {money.format(scenario.capAmount)}. Actual allowable
              uses cannot exceed real costs and must be confirmed in the loan and
              settlement file.
            </p>
          </div>
        </div>

        <div className="lever-panel">
          <div className="panel-heading">
            <span>02</span>
            <div>
              <p className="eyebrow">What should the seller funds do?</p>
              <h3>Choose and edit the options</h3>
            </div>
          </div>

          <div className="lever-grid">
            {(Object.keys(leverCopy) as LeverId[]).map(id => {
              const active = enabled.includes(id)
              const recommended = scenario.selected.some(item => item.id === id)
              return (
                <article className={`lever-card ${active ? 'active' : ''}`} key={id}>
                  <label className="lever-choice">
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleLever(id)}
                    />
                    <span>
                      <b>{leverCopy[id].tag}</b>
                      <strong>{leverCopy[id].title}</strong>
                    </span>
                  </label>
                  <p>{leverCopy[id].description}</p>
                  <NumberField
                    label="Amount to compare"
                    value={amounts[id]}
                    onChange={value =>
                      setAmounts(current => ({ ...current, [id]: value }))
                    }
                    step={50}
                  />
                  <span className={`recommendation ${recommended ? 'included' : ''}`}>
                    {recommended
                      ? 'Included in suggested scenario'
                      : 'Not in suggested scenario'}
                  </span>
                </article>
              )
            })}
          </div>

          <label className="repair-check">
            <input
              type="checkbox"
              checked={repairOutsideCap}
              onChange={event => setRepairOutsideCap(event.target.checked)}
            />
            <span>
              <strong>Lender/closing professional confirmed the repair treatment.</strong>
              Count the seller-completed repair budget only against the seller budget—not
              this financing-concession estimate. Leave unchecked until that treatment is
              confirmed.
            </span>
          </label>
        </div>

        <aside className="result-panel" aria-live="polite">
          <p className="eyebrow">Scenario to review</p>
          <h3>
            {scenario.selected.length
              ? `${scenario.selected.length} uses fit the limits entered`
              : 'No selected combination fits yet'}
          </h3>

          <div className="meter-block">
            <div>
              <span>Conservative cap usage</span>
              <strong>
                {money.format(scenario.countedAmount)} /{' '}
                {money.format(scenario.capAmount)}
              </strong>
            </div>
            <span className="meter" aria-hidden="true">
              <i style={{ width: `${capUsage}%` }} />
            </span>
          </div>

          <div className="result-numbers">
            <div>
              <span>Estimated seller cost</span>
              <strong>{money.format(scenario.sellerCost)}</strong>
            </div>
            <div>
              <span>Budget remaining</span>
              <strong>
                {money.format(Math.max(scenario.budget - scenario.sellerCost, 0))}
              </strong>
            </div>
          </div>

          <ol className="sequence-list">
            {scenario.selected.length ? (
              scenario.selected.map(item => (
                <li key={item.id}>
                  <span>✓</span>
                  <div>
                    <strong>{leverCopy[item.id].title}</strong>
                    <small>{money.format(item.amount)}</small>
                  </div>
                </li>
              ))
            ) : (
              <li>
                <span>!</span>
                <div>
                  <strong>Adjust the seller budget, costs, or selected options.</strong>
                  <small>The tool will not force an over-limit combination.</small>
                </div>
              </li>
            )}
          </ol>

          <div className="result-actions">
            <button type="button" onClick={copySummary}>
              {copied ? 'Scenario copied' : 'Copy scenario'}
            </button>
            <Link
              href={`/contact-us?intent=concession-plan&summary=${encodeURIComponent(
                scenario.selected.map(item => leverCopy[item.id].title).join(', ')
              )}`}
            >
              Ask Becca to review it
            </Link>
          </div>
        </aside>
      </div>

      <div className="source-strip">
        <div>
          <span>Conventional</span>
          <strong>Fannie Mae 3% / 6% / 9% by LTV; 2% investment</strong>
          <a href={fannieUrl} target="_blank" rel="noreferrer">
            Read the current Selling Guide ↗
          </a>
        </div>
        <div>
          <span>FHA</span>
          <strong>Up to 6% of sales price for listed eligible uses</strong>
          <a href={fhaUrl} target="_blank" rel="noreferrer">
            Open HUD Handbook 4000.1 ↗
          </a>
        </div>
        <div>
          <span>VA</span>
          <strong>
            4% concession rule; ordinary closing-cost credits are treated separately
          </strong>
          <a href={vaUrl} target="_blank" rel="noreferrer">
            Read VA closing-cost guidance ↗
          </a>
        </div>
      </div>

      <p className="disclosure">
        Educational planning tool—not a lender approval, Loan Estimate, contract
        instruction, appraisal, or legal advice. The optimizer ranks complete combinations
        using the priority you select; it does not predict acceptance, savings, value, or
        underwriting. Ask the lender, broker, and closing professional to confirm every
        contribution and repair treatment in writing.
      </p>

      <style jsx>{`
        .optimizer-section {
          scroll-margin-top: 76px;
          padding: 82px max(24px, calc((100vw - 1160px) / 2));
          color: #332b30;
          background: linear-gradient(180deg, #fff 0%, #fff9f6 100%);
        }
        .media-hero {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          min-height: 430px;
          overflow: hidden;
          background: #f8eeea;
          border: 1px solid #eadde2;
          border-radius: 26px;
          box-shadow: 0 24px 70px rgba(55, 29, 41, 0.1);
        }
        .media-photo {
          position: relative;
          min-height: 430px;
          overflow: hidden;
        }
        .media-photo :global(img) {
          object-fit: cover;
        }
        .photo-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 42%, rgba(38, 15, 30, 0.88));
        }
        .photo-note {
          position: absolute;
          right: 30px;
          bottom: 28px;
          left: 30px;
          color: #fff;
        }
        .photo-note span {
          display: block;
          margin-bottom: 7px;
          color: #f7cdbd;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .photo-note strong {
          display: block;
          max-width: 510px;
          font-family: Georgia, serif;
          font-size: clamp(25px, 3vw, 38px);
          font-weight: 500;
          line-height: 1.08;
        }
        .media-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 42px;
        }
        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }
        .badge-row span {
          padding: 6px 10px;
          color: #6d294c;
          background: #fff;
          border: 1px solid #dfc9d3;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .eyebrow {
          margin: 0 0 9px;
          color: #9d446e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          color: #4e1f38;
          font-family: Georgia, serif;
          font-size: clamp(34px, 4vw, 54px);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.02;
        }
        .media-copy > p:not(.eyebrow) {
          margin: 18px 0 0;
          color: #62565d;
          font-size: 15px;
          line-height: 1.7;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px 20px;
          margin-top: 25px;
        }
        .hero-actions a {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          color: #fff;
          background: #8d2f60;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }
        .hero-actions .quiet-link {
          padding: 0;
          color: #6d294c;
          background: transparent;
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .workspace {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 18px;
          margin-top: 24px;
        }
        .setup-panel,
        .lever-panel,
        .result-panel {
          background: #fff;
          border: 1px solid #e9dfe3;
          border-radius: 20px;
          box-shadow: 0 14px 42px rgba(55, 29, 41, 0.06);
        }
        .setup-panel,
        .lever-panel {
          padding: 26px;
        }
        .setup-panel {
          grid-row: span 2;
        }
        .lever-panel {
          grid-column: 2;
        }
        .result-panel {
          grid-column: 2;
          padding: 27px;
          color: #fff;
          background: linear-gradient(145deg, #351124, #5b1f43);
          border-color: #5b1f43;
        }
        .panel-heading {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 22px;
        }
        .panel-heading > span {
          display: grid;
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          place-items: center;
          color: #fff;
          background: #9d446e;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 800;
        }
        h3 {
          margin: 0;
          color: #422f39;
          font-size: 23px;
          font-weight: 700;
          line-height: 1.2;
        }
        .setup-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .select-field {
          display: grid;
          gap: 7px;
          margin-top: 15px;
          color: #5c5056;
          font-size: 12px;
          font-weight: 700;
        }
        .select-field select {
          width: 100%;
          min-height: 46px;
          padding: 10px 36px 10px 11px;
          color: #342a2f;
          background: #fff;
          border: 1px solid #ddcfd6;
          border-radius: 10px;
          font: inherit;
          font-size: 13px;
        }
        .select-field select:focus {
          border-color: #9d446e;
          outline: 3px solid rgba(157, 68, 110, 0.13);
        }
        .priority-field {
          margin-bottom: 16px;
        }
        .guideline-note {
          margin-top: 20px;
          padding: 17px;
          background: #fff6f2;
          border-left: 3px solid #d8997e;
          border-radius: 0 11px 11px 0;
        }
        .guideline-note span {
          display: block;
          color: #9d446e;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .guideline-note strong {
          display: block;
          margin-top: 6px;
          color: #4c3440;
          font-size: 13px;
          line-height: 1.45;
        }
        .guideline-note p {
          margin: 7px 0 0;
          color: #6d6067;
          font-size: 11px;
          line-height: 1.55;
        }
        .lever-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .lever-card {
          display: grid;
          gap: 12px;
          padding: 18px;
          background: #fbf8f9;
          border: 1px solid #ebe2e6;
          border-radius: 15px;
          opacity: 0.7;
        }
        .lever-card.active {
          opacity: 1;
          background: #fff;
          border-color: #d9b5c6;
          box-shadow: inset 0 3px 0 #9d446e;
        }
        .lever-choice {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          cursor: pointer;
        }
        .lever-choice input {
          margin-top: 5px;
          accent-color: #8d2f60;
        }
        .lever-choice span {
          display: grid;
          gap: 4px;
        }
        .lever-choice b {
          color: #9d446e;
          font-size: 9px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .lever-choice strong {
          color: #402e37;
          font-size: 14px;
          line-height: 1.35;
        }
        .lever-card > p {
          min-height: 52px;
          margin: 0;
          color: #6d6267;
          font-size: 11px;
          line-height: 1.55;
        }
        .recommendation {
          color: #7a6d73;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .recommendation.included {
          color: #27785f;
        }
        .repair-check {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-top: 15px;
          padding: 14px;
          color: #685c62;
          background: #fffaf7;
          border: 1px solid #eeded5;
          border-radius: 12px;
          cursor: pointer;
          font-size: 10px;
          line-height: 1.55;
        }
        .repair-check input {
          margin-top: 3px;
          accent-color: #8d2f60;
        }
        .repair-check strong {
          display: block;
          margin-bottom: 2px;
          color: #4d3943;
          font-size: 11px;
        }
        .result-panel .eyebrow {
          color: #f2bba7;
        }
        .result-panel h3 {
          color: #fff;
          font-family: Georgia, serif;
          font-size: 28px;
          font-weight: 500;
        }
        .meter-block {
          margin-top: 22px;
          padding: 17px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 13px;
        }
        .meter-block > div {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          color: #dcc8d2;
          font-size: 11px;
        }
        .meter-block strong {
          color: #fff;
        }
        .meter {
          display: block;
          height: 8px;
          margin-top: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
        }
        .meter i {
          display: block;
          height: 100%;
          background: linear-gradient(90deg, #f2bba7, #fff0e8);
          border-radius: inherit;
        }
        .result-numbers {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 12px;
        }
        .result-numbers div {
          padding: 14px;
          background: rgba(255, 255, 255, 0.07);
          border-radius: 11px;
        }
        .result-numbers span {
          display: block;
          color: #d8c1cc;
          font-size: 9px;
          text-transform: uppercase;
        }
        .result-numbers strong {
          display: block;
          margin-top: 5px;
          color: #ffd4c4;
          font-size: 20px;
        }
        .sequence-list {
          display: grid;
          gap: 8px;
          padding: 0;
          margin: 15px 0 0;
          list-style: none;
        }
        .sequence-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 10px;
        }
        .sequence-list li > span {
          display: grid;
          flex: 0 0 24px;
          width: 24px;
          height: 24px;
          place-items: center;
          color: #4b1837;
          background: #f4c6b5;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 900;
        }
        .sequence-list div {
          display: flex;
          flex: 1;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
        }
        .sequence-list strong {
          color: #fff;
          font-size: 11px;
        }
        .sequence-list small {
          color: #e1cdd6;
          font-size: 10px;
          white-space: nowrap;
        }
        .result-actions {
          display: flex;
          gap: 9px;
          margin-top: 17px;
        }
        .result-actions button,
        .result-actions :global(a) {
          display: inline-flex;
          flex: 1;
          min-height: 44px;
          align-items: center;
          justify-content: center;
          padding: 0 13px;
          border-radius: 999px;
          font: inherit;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
        }
        .result-actions button {
          color: #ffd4c4;
          background: transparent;
          border: 1px solid rgba(255, 212, 196, 0.55);
        }
        .result-actions :global(a) {
          color: #4b1837;
          background: #ffd4c4;
          border: 1px solid #ffd4c4;
        }
        .source-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          margin-top: 18px;
          overflow: hidden;
          background: #e7dce1;
          border: 1px solid #e7dce1;
          border-radius: 15px;
        }
        .source-strip div {
          display: grid;
          align-content: start;
          padding: 18px;
          background: #fff;
        }
        .source-strip span {
          color: #9d446e;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .source-strip strong {
          margin-top: 7px;
          color: #493740;
          font-size: 11px;
          line-height: 1.5;
        }
        .source-strip a {
          margin-top: 10px;
          color: #6d294c;
          font-size: 10px;
          font-weight: 800;
          text-underline-offset: 3px;
        }
        .disclosure {
          max-width: 980px;
          margin: 18px auto 0;
          color: #756a70;
          font-size: 10px;
          line-height: 1.65;
          text-align: center;
        }
        @media (max-width: 980px) {
          .media-hero,
          .workspace {
            grid-template-columns: 1fr;
          }
          .media-photo {
            min-height: 360px;
          }
          .setup-panel {
            grid-row: auto;
          }
          .lever-panel,
          .result-panel {
            grid-column: 1;
          }
        }
        @media (max-width: 680px) {
          .optimizer-section {
            padding: 60px 18px;
          }
          .media-hero {
            border-radius: 18px;
          }
          .media-photo {
            min-height: 300px;
          }
          .photo-note {
            right: 20px;
            bottom: 20px;
            left: 20px;
          }
          .media-copy {
            padding: 27px 22px;
          }
          .setup-panel,
          .lever-panel,
          .result-panel {
            padding: 21px 17px;
            border-radius: 15px;
          }
          .setup-grid,
          .lever-grid,
          .result-numbers,
          .source-strip {
            grid-template-columns: 1fr;
          }
          .lever-card > p {
            min-height: 0;
          }
          .result-actions {
            flex-direction: column;
          }
          .source-strip {
            gap: 1px;
          }
        }
      `}</style>
    </section>
  )
}
