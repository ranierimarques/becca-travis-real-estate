import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import { MetaSEO } from '@/common'
import { FaqPreview } from '@/layout/faq-preview'
import { WarrantyResourceLink } from '@/layout/site-tools/arw-warranty-closing-hub/warranty-resource-link'
import { BuydownComparison } from '@/layout/site-tools/buydown-comparison/buydown-comparison'
import { EstatePropertyOrganizer } from '@/layout/site-tools/estate-property-organizer/estate-property-organizer'
import { InfrastructureExplorer } from '@/layout/site-tools/infrastructure-explorer/infrastructure-explorer'
import { SmartConcessionOptimizer } from '@/layout/site-tools/smart-concession-optimizer/smart-concession-optimizer'
import { BuyerResearchLab } from '../components/shared/buyer-research-lab/buyer-research-lab'
import { huntsvilleFaq } from '../data/huntsville-faq'

type Category = 'Buying' | 'Moving' | 'Homeownership' | 'Selling'
type CalculatorMode = 'payment' | 'buyer-cash' | 'seller-net'

interface Worksheet {
  title: string
  category: Category
  description: string
  steps: string[]
}

const worksheets: Worksheet[] = [
  {
    title: 'Home affordability planner',
    category: 'Buying',
    description: 'Set a monthly comfort range and list the costs you want to include.',
    steps: [
      'Write your comfortable monthly range',
      'List recurring housing costs',
      'Record questions for your lender',
    ],
  },
  {
    title: 'Down payment comparison',
    category: 'Buying',
    description: 'Compare two down payment options and the questions each one raises.',
    steps: [
      'Record option A and option B',
      'Compare cash kept in reserve',
      'Ask your lender for matching written estimates',
    ],
  },
  {
    title: 'Mortgage offer comparison',
    category: 'Buying',
    description:
      'Keep lender quotes side by side, including rate, points, fees, and lock period.',
    steps: [
      'Record lender and quote date',
      'List points, fees, and lock expiration',
      'Confirm the same loan type and assumptions',
    ],
  },
  {
    title: 'Cash to close worksheet',
    category: 'Buying',
    description:
      'Organize the funds, credits, and prepaid items behind a written estimate.',
    steps: [
      'List down payment and lender fees',
      'Add prepaid items and credits',
      'Confirm funds already paid',
    ],
  },
  {
    title: 'Home tour scorecard',
    category: 'Buying',
    description: 'Compare homes against your own priorities after each visit.',
    steps: ['Note what works well', 'Record open questions', 'List follow-up items'],
  },
  {
    title: 'Inspection question list',
    category: 'Buying',
    description:
      'Prepare questions for an independent inspector and track specialist follow-up.',
    steps: [
      'Prepare questions for the inspector',
      'Record inspection findings',
      'Track items for specialist review',
    ],
  },
  {
    title: 'Offer terms worksheet',
    category: 'Buying',
    description:
      'Organize price, financing, dates, and questions before discussing an offer.',
    steps: [
      'Record proposed price and financing',
      'List dates and contingencies to discuss',
      'Review the written terms with your agent',
    ],
  },
  {
    title: 'Rent or buy comparison',
    category: 'Buying',
    description:
      'Compare your rent, ownership costs, and time horizon using your own assumptions.',
    steps: [
      'Record current rent and recurring costs',
      'Estimate ownership costs with your lender',
      'Write down your expected time horizon',
    ],
  },
  {
    title: 'Moving budget',
    category: 'Moving',
    description:
      'Plan a move with editable cost categories and a running list of questions.',
    steps: [
      'Estimate movers or truck rental',
      'List packing and travel costs',
      'Add storage and other expenses',
    ],
  },
  {
    title: 'Moving timeline',
    category: 'Moving',
    description:
      'Create a dated list for packing, address updates, utilities, and move day.',
    steps: [
      'Set a packing start date',
      'Update addresses and services',
      'Confirm move day details',
    ],
  },
  {
    title: 'Utility setup checklist',
    category: 'Moving',
    description:
      'Track which providers to contact and confirm service for the exact address.',
    steps: [
      'Verify providers by property address',
      'Record service start dates',
      'Save confirmation details',
    ],
  },
  {
    title: 'Home maintenance calendar',
    category: 'Homeownership',
    description: 'Keep seasonal reminders for routine maintenance and service records.',
    steps: [
      'Review seasonal maintenance',
      'Record recent service',
      'Set reminders for follow-up',
    ],
  },
  {
    title: 'Seller preparation checklist',
    category: 'Selling',
    description:
      'Organize repairs, documents, photography, and questions before listing.',
    steps: [
      'Gather property documents',
      'List preparation tasks',
      'Write questions for your agent',
    ],
  },
  {
    title: 'Property visit notes',
    category: 'Buying',
    description: 'Keep address-specific observations and follow-up questions together.',
    steps: [
      'Record the property address',
      'Note observations from the visit',
      'List questions to verify',
    ],
  },
]

const categories = ['All tools', 'Buying', 'Moving', 'Homeownership', 'Selling'] as const
type CategoryFilter = typeof categories[number]
type PlannerValues = {
  calculator: CalculatorMode
  price: number
  down: number
  rate: number
  years: number
  monthlyTax: number
  monthlyInsurance: number
  monthlyHoa: number
  buyerFees: number
  buyerPrepaids: number
  earnestMoney: number
  buyerCredits: number
  buyerOther: number
  salePrice: number
  mortgagePayoff: number
  commission: number
  sellerClosing: number
  sellerCredits: number
  sellerProrations: number
  sellerOther: number
  category: CategoryFilter
  search: string
  openWorksheet: string | null
  checked: Record<string, boolean>
  notes: Record<string, string>
}

interface StoredPlanner {
  version: 1
  savedAt: string
  values: PlannerValues
}

const plannerStorageKey = 'becca-planning-tools:v1'
const defaultPlannerValues: PlannerValues = {
  calculator: 'payment',
  price: 350000,
  down: 70000,
  rate: 6.5,
  years: 30,
  monthlyTax: 0,
  monthlyInsurance: 0,
  monthlyHoa: 0,
  buyerFees: 4500,
  buyerPrepaids: 2500,
  earnestMoney: 2500,
  buyerCredits: 0,
  buyerOther: 0,
  salePrice: 400000,
  mortgagePayoff: 250000,
  commission: 0,
  sellerClosing: 0,
  sellerCredits: 0,
  sellerProrations: 0,
  sellerOther: 0,
  category: 'All tools',
  search: '',
  openWorksheet: null,
  checked: {},
  notes: {},
}

const worksheetTitles = new Set(worksheets.map(item => item.title))
const worksheetStepKeys = new Set(
  worksheets.flatMap(item => item.steps.map(step => `${item.title}:${step}`))
)
const calculatorModes: CalculatorMode[] = ['payment', 'buyer-cash', 'seller-net']

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function boundedNumber(
  value: Record<string, unknown>,
  key: string,
  fallback: number,
  max = 1_000_000_000
) {
  const candidate = value[key]
  return typeof candidate === 'number' && Number.isFinite(candidate)
    ? Math.min(Math.max(candidate, 0), max)
    : fallback
}

function sanitizeChecked(value: unknown): Record<string, boolean> {
  const source = isRecord(value) ? value : {}
  const checked: Record<string, boolean> = {}
  worksheetStepKeys.forEach(key => {
    if (typeof source[key] === 'boolean') checked[key] = source[key] as boolean
  })
  return checked
}

function sanitizeNotes(value: unknown): Record<string, string> {
  const source = isRecord(value) ? value : {}
  const notes: Record<string, string> = {}
  worksheetTitles.forEach(title => {
    if (typeof source[title] === 'string')
      notes[title] = (source[title] as string).slice(0, 5000)
  })
  return notes
}

function sanitizePlannerValues(value: unknown): PlannerValues | null {
  if (!isRecord(value)) return null

  return {
    calculator: calculatorModes.includes(value.calculator as CalculatorMode)
      ? (value.calculator as CalculatorMode)
      : 'payment',
    price: boundedNumber(value, 'price', defaultPlannerValues.price),
    down: boundedNumber(value, 'down', defaultPlannerValues.down),
    rate: boundedNumber(value, 'rate', defaultPlannerValues.rate, 100),
    years: boundedNumber(value, 'years', defaultPlannerValues.years, 100),
    monthlyTax: boundedNumber(value, 'monthlyTax', 0),
    monthlyInsurance: boundedNumber(value, 'monthlyInsurance', 0),
    monthlyHoa: boundedNumber(value, 'monthlyHoa', 0),
    buyerFees: boundedNumber(value, 'buyerFees', defaultPlannerValues.buyerFees),
    buyerPrepaids: boundedNumber(
      value,
      'buyerPrepaids',
      defaultPlannerValues.buyerPrepaids
    ),
    earnestMoney: boundedNumber(value, 'earnestMoney', defaultPlannerValues.earnestMoney),
    buyerCredits: boundedNumber(value, 'buyerCredits', 0),
    buyerOther: boundedNumber(value, 'buyerOther', 0),
    salePrice: boundedNumber(value, 'salePrice', defaultPlannerValues.salePrice),
    mortgagePayoff: boundedNumber(
      value,
      'mortgagePayoff',
      defaultPlannerValues.mortgagePayoff
    ),
    commission: boundedNumber(value, 'commission', 0),
    sellerClosing: boundedNumber(value, 'sellerClosing', 0),
    sellerCredits: boundedNumber(value, 'sellerCredits', 0),
    sellerProrations: boundedNumber(value, 'sellerProrations', 0),
    sellerOther: boundedNumber(value, 'sellerOther', 0),
    category: categories.includes(value.category as CategoryFilter)
      ? (value.category as CategoryFilter)
      : 'All tools',
    search: typeof value.search === 'string' ? value.search.slice(0, 120) : '',
    openWorksheet:
      typeof value.openWorksheet === 'string' && worksheetTitles.has(value.openWorksheet)
        ? value.openWorksheet
        : null,
    checked: sanitizeChecked(value.checked),
    notes: sanitizeNotes(value.notes),
  }
}

function parseStoredPlanner(value: unknown): StoredPlanner | null {
  if (!isRecord(value) || value.version !== 1) return null
  const values = sanitizePlannerValues(value.values)
  if (!values) return null
  return {
    version: 1,
    savedAt:
      typeof value.savedAt === 'string' ? value.savedAt : new Date(0).toISOString(),
    values,
  }
}

const planningFaq = [
  huntsvilleFaq[3],
  huntsvilleFaq[6],
  huntsvilleFaq[8],
  huntsvilleFaq[9],
]
const calculatorTitles: Record<CalculatorMode, string> = {
  payment: 'Monthly housing cost calculator',
  'buyer-cash': 'Buyer cash to close calculator',
  'seller-net': 'Seller proceeds calculator',
}

const money = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0)

interface NumberFieldProps {
  label: string
  value: number
  onChange: (value: number) => void
  min?: number
  step?: number
  hint?: string
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  step = 1,
  hint,
}: NumberFieldProps) {
  return (
    <label className="number-field">
      <span>{label}</span>
      <input
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
      />
      {hint && <small>{hint}</small>}
    </label>
  )
}

export default function PlanningToolsPage() {
  const [calculator, setCalculator] = useState<CalculatorMode>('payment')
  const [price, setPrice] = useState(350000)
  const [down, setDown] = useState(70000)
  const [rate, setRate] = useState(6.5)
  const [years, setYears] = useState(30)
  const [monthlyTax, setMonthlyTax] = useState(0)
  const [monthlyInsurance, setMonthlyInsurance] = useState(0)
  const [monthlyHoa, setMonthlyHoa] = useState(0)
  const [buyerFees, setBuyerFees] = useState(4500)
  const [buyerPrepaids, setBuyerPrepaids] = useState(2500)
  const [earnestMoney, setEarnestMoney] = useState(2500)
  const [buyerCredits, setBuyerCredits] = useState(0)
  const [buyerOther, setBuyerOther] = useState(0)
  const [salePrice, setSalePrice] = useState(400000)
  const [mortgagePayoff, setMortgagePayoff] = useState(250000)
  const [commission, setCommission] = useState(0)
  const [sellerClosing, setSellerClosing] = useState(0)
  const [sellerCredits, setSellerCredits] = useState(0)
  const [sellerProrations, setSellerProrations] = useState(0)
  const [sellerOther, setSellerOther] = useState(0)
  const [category, setCategory] = useState<typeof categories[number]>('All tools')
  const [search, setSearch] = useState('')
  const [openWorksheet, setOpenWorksheet] = useState<string | null>(null)
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [researchTool, setResearchTool] = useState<string | null>(null)
  const [storageReady, setStorageReady] = useState(false)
  const [storageWritable, setStorageWritable] = useState(false)
  const [saveStatus, setSaveStatus] = useState('Checking this device for a saved plan…')

  const applyPlannerValues = useCallback((values: PlannerValues) => {
    setCalculator(values.calculator)
    setPrice(values.price)
    setDown(values.down)
    setRate(values.rate)
    setYears(values.years)
    setMonthlyTax(values.monthlyTax)
    setMonthlyInsurance(values.monthlyInsurance)
    setMonthlyHoa(values.monthlyHoa)
    setBuyerFees(values.buyerFees)
    setBuyerPrepaids(values.buyerPrepaids)
    setEarnestMoney(values.earnestMoney)
    setBuyerCredits(values.buyerCredits)
    setBuyerOther(values.buyerOther)
    setSalePrice(values.salePrice)
    setMortgagePayoff(values.mortgagePayoff)
    setCommission(values.commission)
    setSellerClosing(values.sellerClosing)
    setSellerCredits(values.sellerCredits)
    setSellerProrations(values.sellerProrations)
    setSellerOther(values.sellerOther)
    setCategory(values.category)
    setSearch(values.search)
    setOpenWorksheet(values.openWorksheet)
    setChecked(values.checked)
    setNotes(values.notes)
  }, [])

  const plannerValues = useMemo<PlannerValues>(
    () => ({
      calculator,
      price,
      down,
      rate,
      years,
      monthlyTax,
      monthlyInsurance,
      monthlyHoa,
      buyerFees,
      buyerPrepaids,
      earnestMoney,
      buyerCredits,
      buyerOther,
      salePrice,
      mortgagePayoff,
      commission,
      sellerClosing,
      sellerCredits,
      sellerProrations,
      sellerOther,
      category,
      search,
      openWorksheet,
      checked,
      notes,
    }),
    [
      calculator,
      price,
      down,
      rate,
      years,
      monthlyTax,
      monthlyInsurance,
      monthlyHoa,
      buyerFees,
      buyerPrepaids,
      earnestMoney,
      buyerCredits,
      buyerOther,
      salePrice,
      mortgagePayoff,
      commission,
      sellerClosing,
      sellerCredits,
      sellerProrations,
      sellerOther,
      category,
      search,
      openWorksheet,
      checked,
      notes,
    ]
  )

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(plannerStorageKey)
      if (saved === null) {
        setStorageWritable(true)
        setSaveStatus('Autosave is ready on this device.')
      } else {
        const restored = parseStoredPlanner(JSON.parse(saved))
        if (restored) {
          applyPlannerValues(restored.values)
          setStorageWritable(true)
          setSaveStatus('Saved plan restored from this device.')
        } else {
          setStorageWritable(false)
          setSaveStatus(
            'A saved plan could not be read. Import a backup or reset this device’s planner.'
          )
        }
      }
    } catch {
      setStorageWritable(false)
      setSaveStatus(
        'This browser could not read the saved plan. You can still download or import a backup.'
      )
    }
    setStorageReady(true)
  }, [applyPlannerValues])

  useEffect(() => {
    if (!storageReady || !storageWritable) return
    setSaveStatus('Saving on this device…')
    const timer = window.setTimeout(() => {
      const snapshot: StoredPlanner = {
        version: 1,
        savedAt: new Date().toISOString(),
        values: plannerValues,
      }
      try {
        window.localStorage.setItem(plannerStorageKey, JSON.stringify(snapshot))
        setSaveStatus('Saved on this device.')
      } catch {
        setSaveStatus('Autosave is unavailable. Download a backup to keep your plan.')
      }
    }, 350)
    return () => window.clearTimeout(timer)
  }, [plannerValues, storageReady, storageWritable])

  const downloadBackup = () => {
    const snapshot: StoredPlanner = {
      version: 1,
      savedAt: new Date().toISOString(),
      values: plannerValues,
    }
    const file = new Blob([JSON.stringify(snapshot, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'becca-planning-tools-backup.json'
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
    setSaveStatus('Backup downloaded to your device.')
  }

  const importBackup = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    event.target.value = ''
    if (file.size > 1_000_000) {
      setSaveStatus('That backup is too large to import. Choose a file under 1 MB.')
      return
    }
    try {
      const imported = parseStoredPlanner(JSON.parse(await file.text()))
      if (!imported) throw new Error('Unsupported backup format')
      applyPlannerValues(imported.values)
      setStorageWritable(true)
      setSaveStatus('Backup loaded. Saving this plan on your device…')
    } catch {
      setSaveStatus('That backup could not be read. Your current plan is unchanged.')
    }
  }

  const resetPlanner = () => {
    if (
      !window.confirm(
        'Clear this device’s saved plan and reset all calculator and worksheet entries?'
      )
    )
      return
    try {
      window.localStorage.removeItem(plannerStorageKey)
      applyPlannerValues(defaultPlannerValues)
      setStorageWritable(true)
      setSaveStatus('Planner reset. Your default workspace will save on this device.')
    } catch {
      setSaveStatus(
        'This browser could not clear its saved plan. Your current entries are unchanged.'
      )
    }
  }

  const principalAndInterest = useMemo(() => {
    const principal = Math.max(price - down, 0)
    const monthlyRate = Math.max(rate, 0) / 1200
    const months = Math.max(Math.round(years * 12), 1)
    return monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months)
  }, [price, down, rate, years])

  const monthlyTotal = principalAndInterest + monthlyTax + monthlyInsurance + monthlyHoa
  const buyerCashToClose = Math.max(
    0,
    down + buyerFees + buyerPrepaids + buyerOther - earnestMoney - buyerCredits
  )
  const sellerNet =
    salePrice -
    mortgagePayoff -
    commission -
    sellerClosing -
    sellerCredits -
    sellerProrations -
    sellerOther

  const visibleWorksheets = worksheets.filter(item => {
    const matchesCategory = category === 'All tools' || item.category === category
    const query = search.trim().toLowerCase()
    const matchesSearch =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })
  const activePlanningTool = researchTool || openWorksheet || calculatorTitles[calculator]
  const monthlyShare = (value: number) =>
    monthlyTotal > 0 ? Math.min(100, (Math.max(0, value) / monthlyTotal) * 100) : 0

  return (
    <main className="planning-page">
      <MetaSEO
        canonicalPath="/planning-tools"
        title="Home Planning, Seller Credit & Warranty Tools | Becca Travis"
        description="Run North Alabama home-planning estimates, compare seller-credit scenarios, and review current ARW home warranty resources with Becca Travis."
        image="/images/areas/downtown-huntsville.webp"
        alt="Downtown Huntsville park pond and skyline"
      />

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">North Alabama home planning</p>
            <h1>Plan your next move with clear numbers.</h1>
            <p className="hero-description">
              Use the calculators to organize your first estimate, then take the questions
              that matter into a conversation with your lender, inspector, or agent.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#calculators">
                Explore the calculators
              </a>
              <a className="text-link" href="/alabama-home-warranty">
                Compare warranty plans
              </a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Choose a planning path">
            <div className="hero-photo">
              <Image
                src="/images/areas/downtown-huntsville.webp"
                alt="Downtown Huntsville park pond and skyline"
                fill
                priority
                sizes="(max-width: 820px) 100vw, (max-width: 1160px) 32vw, 368px"
              />
              <span>North Alabama planning studio</span>
            </div>
            <div className="hero-choices">
              <a href="#calculators">
                <b>01</b>
                <span>Run the numbers</span>
              </a>
              <a href="#smart-concession-optimizer">
                <b>02</b>
                <span>Plan seller credits</span>
              </a>
              <a href="/alabama-home-warranty">
                <b>03</b>
                <span>Compare warranty plans</span>
              </a>
            </div>
          </aside>
        </div>
      </header>

      <nav className="jump-nav" aria-label="Planning tools page navigation">
        <a href="#interactive-checks">Address and local checks</a>
        <a href="#calculators">Calculators</a>
        <a href="#buydown-comparison">Rate comparison</a>
        <a href="#smart-concession-optimizer">Seller credits</a>
        <a href="/alabama-home-warranty">Warranty</a>
        <a href="#infrastructure-explorer">Infrastructure</a>
        <a href="#estate-property-organizer">Estate property</a>
        <a href="#worksheets">Worksheets</a>
        <Link href="/north-alabama-property-research" legacyBehavior>
          <a>Property research guide</a>
        </Link>
        <Link href="/mortgage-offer-comparison" legacyBehavior>
          <a>Compare mortgage offers</a>
        </Link>
        <Link href="/north-alabama-closing-checklist" legacyBehavior>
          <a>Closing checklist</a>
        </Link>
        <a href="#local-answers">North Alabama answers</a>
      </nav>

      <section className="planner-savebar" aria-label="Save and back up your plan">
        <div className="planner-save-copy">
          <strong>Your private planning workspace</strong>
          <p aria-live="polite">{saveStatus}</p>
        </div>
        <div className="planner-save-actions">
          <button type="button" onClick={downloadBackup}>
            Download backup
          </button>
          <label className="import-backup-button">
            Import backup
            <input type="file" accept="application/json,.json" onChange={importBackup} />
          </label>
          <button type="button" className="reset-plan-button" onClick={resetPlanner}>
            Reset plan
          </button>
        </div>
        <p className="planner-save-privacy">
          Autosaved only in this browser profile. Your plan is not sent to Becca. Anyone
          with access to this browser profile may be able to view it.
        </p>
      </section>

      <BuyerResearchLab id="interactive-checks" onToolChange={setResearchTool} />

      <section id="calculators" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Start with an estimate</p>
          <h2>Three useful numbers for your next conversation</h2>
          <p>
            Example amounts are prefilled for the calculators. Replace them with your own
            written estimates. Results are not lender quotes, tax bills, title estimates,
            or payoff statements.
          </p>
        </div>

        <div className="calculator-shell">
          <div className="calculator-tabs" role="group" aria-label="Choose a calculator">
            <button
              type="button"
              className={calculator === 'payment' ? 'active' : ''}
              aria-pressed={calculator === 'payment'}
              onClick={() => {
                setCalculator('payment')
                setResearchTool(null)
              }}
            >
              Monthly payment
            </button>
            <button
              type="button"
              className={calculator === 'buyer-cash' ? 'active' : ''}
              aria-pressed={calculator === 'buyer-cash'}
              onClick={() => {
                setCalculator('buyer-cash')
                setResearchTool(null)
              }}
            >
              Buyer cash to close
            </button>
            <button
              type="button"
              className={calculator === 'seller-net' ? 'active' : ''}
              aria-pressed={calculator === 'seller-net'}
              onClick={() => {
                setCalculator('seller-net')
                setResearchTool(null)
              }}
            >
              Seller net proceeds
            </button>
          </div>

          {calculator === 'payment' && (
            <div className="calculator-grid">
              <div className="calculator-inputs">
                <h3>Monthly housing estimate</h3>
                <p>
                  Principal and interest are calculated from the loan details. Add your
                  own estimates for the other monthly costs.
                </p>
                <div className="fields-grid">
                  <NumberField
                    label="Home price"
                    value={price}
                    onChange={setPrice}
                    step={5000}
                  />
                  <NumberField
                    label="Down payment"
                    value={down}
                    onChange={setDown}
                    step={1000}
                  />
                  <NumberField
                    label="Annual interest rate (%)"
                    value={rate}
                    onChange={setRate}
                    step={0.01}
                  />
                  <NumberField
                    label="Loan term (years)"
                    value={years}
                    onChange={setYears}
                    min={1}
                    step={1}
                  />
                  <NumberField
                    label="Estimated monthly property tax"
                    value={monthlyTax}
                    onChange={setMonthlyTax}
                    step={25}
                    hint="Use a parcel-specific estimate."
                  />
                  <NumberField
                    label="Estimated monthly homeowners insurance"
                    value={monthlyInsurance}
                    onChange={setMonthlyInsurance}
                    step={25}
                  />
                  <NumberField
                    label="Monthly HOA or association dues"
                    value={monthlyHoa}
                    onChange={setMonthlyHoa}
                    step={25}
                  />
                </div>
              </div>
              <aside className="result-card" aria-live="polite">
                <span className="result-label">Estimated monthly total</span>
                <strong className="result-value">{money(monthlyTotal)}</strong>
                <div className="payment-visual" aria-hidden="true">
                  <span className="payment-visual-label">
                    Monthly estimate at a glance
                  </span>
                  <div className="payment-stack">
                    <span
                      className="payment-principal"
                      style={{ width: `${monthlyShare(principalAndInterest)}%` }}
                    />
                    <span
                      className="payment-tax"
                      style={{ width: `${monthlyShare(monthlyTax)}%` }}
                    />
                    <span
                      className="payment-insurance"
                      style={{ width: `${monthlyShare(monthlyInsurance)}%` }}
                    />
                    <span
                      className="payment-hoa"
                      style={{ width: `${monthlyShare(monthlyHoa)}%` }}
                    />
                  </div>
                </div>
                <div className="result-lines">
                  <span>
                    Principal and interest <b>{money(principalAndInterest)}</b>
                  </span>
                  <span>
                    Property tax <b>{money(monthlyTax)}</b>
                  </span>
                  <span>
                    Homeowners insurance <b>{money(monthlyInsurance)}</b>
                  </span>
                  <span>
                    HOA or association <b>{money(monthlyHoa)}</b>
                  </span>
                </div>
                <p>
                  Mortgage insurance, utilities, maintenance, and lender charges are not
                  included.
                </p>
              </aside>
            </div>
          )}

          {calculator === 'buyer-cash' && (
            <div className="calculator-grid">
              <div className="calculator-inputs">
                <h3>Buyer cash to close</h3>
                <p>
                  Start with a written estimate and enter the amounts you want to track.
                  This is a planning worksheet, not a title quote.
                </p>
                <div className="fields-grid">
                  <NumberField
                    label="Down payment"
                    value={down}
                    onChange={setDown}
                    step={1000}
                  />
                  <NumberField
                    label="Lender and settlement fees"
                    value={buyerFees}
                    onChange={setBuyerFees}
                    step={100}
                  />
                  <NumberField
                    label="Prepaids and escrow deposits"
                    value={buyerPrepaids}
                    onChange={setBuyerPrepaids}
                    step={100}
                  />
                  <NumberField
                    label="Earnest money already paid"
                    value={earnestMoney}
                    onChange={setEarnestMoney}
                    step={100}
                  />
                  <NumberField
                    label="Credits applied at closing"
                    value={buyerCredits}
                    onChange={setBuyerCredits}
                    step={100}
                  />
                  <NumberField
                    label="Other amount to include"
                    value={buyerOther}
                    onChange={setBuyerOther}
                    step={100}
                  />
                </div>
              </div>
              <aside className="result-card" aria-live="polite">
                <span className="result-label">Estimated funds still needed</span>
                <strong className="result-value">{money(buyerCashToClose)}</strong>
                <div className="result-lines">
                  <span>
                    Down payment and costs{' '}
                    <b>{money(down + buyerFees + buyerPrepaids + buyerOther)}</b>
                  </span>
                  <span>
                    Earnest money and credits <b>{money(earnestMoney + buyerCredits)}</b>
                  </span>
                </div>
                <p>
                  Confirm the final amount, timing, and wiring instructions directly with
                  your closing provider.
                </p>
              </aside>
            </div>
          )}

          {calculator === 'seller-net' && (
            <div className="calculator-grid">
              <div className="calculator-inputs">
                <h3>Seller net proceeds estimate</h3>
                <p>
                  Use your current payoff and written cost estimates. Commission is
                  negotiable, so no percentage or fee is prefilled.
                </p>
                <div className="fields-grid">
                  <NumberField
                    label="Expected sale price"
                    value={salePrice}
                    onChange={setSalePrice}
                    step={5000}
                  />
                  <NumberField
                    label="Current mortgage payoff"
                    value={mortgagePayoff}
                    onChange={setMortgagePayoff}
                    step={1000}
                  />
                  <NumberField
                    label="Negotiated commission amount"
                    value={commission}
                    onChange={setCommission}
                    step={250}
                    hint="Enter the amount from your agreement."
                  />
                  <NumberField
                    label="Title and closing costs"
                    value={sellerClosing}
                    onChange={setSellerClosing}
                    step={100}
                  />
                  <NumberField
                    label="Seller credits or agreed repairs"
                    value={sellerCredits}
                    onChange={setSellerCredits}
                    step={100}
                  />
                  <NumberField
                    label="Tax, HOA, or other prorations"
                    value={sellerProrations}
                    onChange={setSellerProrations}
                    step={100}
                  />
                  <NumberField
                    label="Other costs to include"
                    value={sellerOther}
                    onChange={setSellerOther}
                    step={100}
                  />
                </div>
              </div>
              <aside className="result-card" aria-live="polite">
                <span className="result-label">
                  Estimated proceeds before final settlement
                </span>
                <strong className="result-value">{money(sellerNet)}</strong>
                <div className="result-lines">
                  <span>
                    Sale price <b>{money(salePrice)}</b>
                  </span>
                  <span>
                    Payoff and entered costs{' '}
                    <b>
                      {money(
                        mortgagePayoff +
                          commission +
                          sellerClosing +
                          sellerCredits +
                          sellerProrations +
                          sellerOther
                      )}
                    </b>
                  </span>
                </div>
                <p>
                  Ask a title professional for a current settlement estimate. The payoff
                  and prorations can change before closing.
                </p>
              </aside>
            </div>
          )}
        </div>
      </section>

      <BuydownComparison />
      <SmartConcessionOptimizer />
      <WarrantyResourceLink audience="buyers" />
      <InfrastructureExplorer />
      <EstatePropertyOrganizer />

      <section id="worksheets" className="content-section worksheet-section">
        <div className="section-heading">
          <p className="eyebrow">Keep the details together</p>
          <h2>Worksheets for each step</h2>
          <p>
            Open a worksheet, check off prompts, and add notes while you plan. Print the
            page when you are ready to take your list with you.
          </p>
        </div>

        <div className="worksheet-controls">
          <label className="search-field">
            <span className="visually-hidden">Search worksheets</span>
            <input
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search worksheets"
            />
          </label>
          <div className="filter-pills" role="group" aria-label="Filter worksheets">
            {categories.map(item => (
              <button
                key={item}
                type="button"
                className={category === item ? 'selected' : ''}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {visibleWorksheets.length > 0 ? (
          <div className="worksheet-grid">
            {visibleWorksheets.map(item => {
              const isOpen = openWorksheet === item.title
              return (
                <article
                  className={'worksheet-card' + (isOpen ? ' expanded' : '')}
                  key={item.title}
                >
                  <button
                    type="button"
                    className="worksheet-toggle"
                    aria-expanded={isOpen}
                    onClick={() => {
                      setOpenWorksheet(isOpen ? null : item.title)
                      setResearchTool(null)
                    }}
                  >
                    <span className="worksheet-category">{item.category}</span>
                    <strong>{item.title}</strong>
                    <span className="worksheet-description">{item.description}</span>
                    <span className="worksheet-open">
                      {isOpen ? 'Close worksheet' : 'Open worksheet'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="worksheet-body">
                      {item.steps.map(step => {
                        const key = item.title + ':' + step
                        return (
                          <label className="check-row" key={key}>
                            <input
                              type="checkbox"
                              checked={Boolean(checked[key])}
                              onChange={event =>
                                setChecked({ ...checked, [key]: event.target.checked })
                              }
                            />
                            <span>{step}</span>
                          </label>
                        )
                      })}
                      <label className="notes-field">
                        <span>Private notes for this plan</span>
                        <textarea
                          value={notes[item.title] || ''}
                          onChange={event =>
                            setNotes({ ...notes, [item.title]: event.target.value })
                          }
                          rows={3}
                        />
                      </label>
                      <button
                        type="button"
                        className="print-button"
                        onClick={() => window.print()}
                      >
                        Print this worksheet
                      </button>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        ) : (
          <p className="no-results">
            No worksheets match that search. Try a different word or choose All tools.
          </p>
        )}
        <p className="privacy-note">
          Your entries are saved only in this browser profile and are not sent to Becca.
          Anyone with access to this profile may be able to view them. These tools are
          educational aids, not loan offers, tax or legal advice, inspections, or
          guarantees.
        </p>
      </section>

      <section className="research-promo">
        <div>
          <p className="eyebrow">Research beyond the listing</p>
          <h2>Plan the details around the home.</h2>
          <p>
            Compare written loan terms, research an exact address, and keep closing steps
            together with these free North Alabama resources.
          </p>
        </div>
        <div className="resource-links">
          <Link href="/mortgage-offer-comparison" legacyBehavior>
            <a>
              Compare mortgage offers <span aria-hidden="true">→</span>
            </a>
          </Link>
          <Link href="/north-alabama-property-research" legacyBehavior>
            <a>
              Research a property address <span aria-hidden="true">→</span>
            </a>
          </Link>
          <Link href="/north-alabama-closing-checklist" legacyBehavior>
            <a>
              Open the closing checklist <span aria-hidden="true">→</span>
            </a>
          </Link>
        </div>
      </section>

      <section id="local-answers" className="local-answers">
        <FaqPreview
          title="A few North Alabama questions to plan around"
          id="planning-questions"
          items={planningFaq}
        />
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">A useful next step</p>
          <h2>Bring this plan to Becca.</h2>
          <p>
            The selected tool, {activePlanningTool}, will be carried into your message so
            you can start with the decision that still needs a local answer.
          </p>
          <Link
            className="contact-band-copy-link"
            href="/agenciamento?origem=planning-tools#planejador"
          >
            Prefere planejar sua mudança em português?
          </Link>
        </div>
        <Link
          className="contact-button"
          href={`/contact-us?intent=planning-help&tool=${encodeURIComponent(
            activePlanningTool
          )}`}
        >
          Ask Becca about this plan
        </Link>
      </section>

      <style jsx>{`
        .planning-page {
          color: #27232a;
          background: #fff;
        }
        .hero {
          background: linear-gradient(118deg, #fbf3ef 0%, #f8e7df 58%, #f5eee9 100%);
          padding: 68px 24px 56px;
        }
        .hero-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.7fr);
          gap: 56px;
          align-items: center;
        }
        .hero-copy {
          max-width: 720px;
        }
        .eyebrow {
          color: #8d4967;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          line-height: 1.4;
          margin: 0 0 14px;
          text-transform: uppercase;
        }
        h1 {
          color: #59223f;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.06;
          margin: 0;
          max-width: 730px;
        }
        .hero-description {
          color: #51474d;
          font-size: 18px;
          line-height: 1.7;
          margin: 22px 0 0;
          max-width: 640px;
        }
        .hero-actions {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 28px;
        }
        .button,
        .contact-band a {
          border-radius: 999px;
          display: inline-flex;
          font-size: 14px;
          font-weight: 600;
          justify-content: center;
          padding: 14px 20px;
          text-decoration: none;
        }
        .button-primary {
          background: #6d294c;
          color: #fff;
        }
        .text-link {
          color: #6d294c;
          font-size: 14px;
          font-weight: 600;
          text-underline-offset: 4px;
        }
        .hero-note {
          background: #fff;
          border: 1px solid rgba(109, 41, 76, 0.12);
          border-radius: 20px;
          box-shadow: 0 20px 58px rgba(67, 35, 51, 0.12);
          overflow: hidden;
        }
        .hero-photo {
          position: relative;
          aspect-ratio: 1.7;
          width: 100%;
          overflow: hidden;
        }
        .hero-photo img {
          object-fit: cover;
        }
        .hero-photo::after {
          position: absolute;
          inset: 0;
          content: '';
          background: linear-gradient(180deg, transparent 55%, rgba(54, 17, 37, 0.72));
        }
        .hero-photo > span {
          position: absolute;
          z-index: 1;
          right: 20px;
          bottom: 18px;
          left: 20px;
          color: #fff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .hero-choices {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .hero-choices a {
          display: flex;
          min-height: 82px;
          flex-direction: column;
          justify-content: center;
          gap: 6px;
          padding: 14px;
          color: #4b3540;
          border-right: 1px solid #eadfe4;
          text-decoration: none;
        }
        .hero-choices a:last-child {
          border-right: 0;
        }
        .hero-choices a:hover {
          background: #fff5f1;
        }
        .hero-choices b {
          color: #9d446e;
          font-size: 9px;
          letter-spacing: 0.08em;
        }
        .hero-choices span {
          font-size: 10px;
          font-weight: 800;
          line-height: 1.3;
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
        .planner-savebar {
          align-items: center;
          background: #fbf8f9;
          border-bottom: 1px solid #eee6e9;
          display: grid;
          gap: 8px 24px;
          grid-template-columns: minmax(220px, 1fr) auto;
          margin: 0 auto;
          padding: 18px max(24px, calc((100vw - 1112px) / 2));
        }
        .planner-save-copy strong {
          color: #3d3036;
          display: block;
          font-size: 14px;
        }
        .planner-save-copy p {
          color: #655a60;
          font-size: 12px;
          line-height: 1.5;
          margin: 4px 0 0;
        }
        .planner-save-actions {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .planner-save-actions button,
        .import-backup-button {
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 999px;
          color: #5d2844;
          cursor: pointer;
          display: inline-flex;
          font: inherit;
          font-size: 12px;
          font-weight: 600;
          justify-content: center;
          min-height: 40px;
          padding: 10px 14px;
          position: relative;
        }
        .planner-save-actions button:hover,
        .import-backup-button:hover {
          background: #f4e8ee;
          border-color: #caa9b8;
        }
        .planner-save-actions button:focus-visible,
        .import-backup-button:focus-within {
          outline: 3px solid rgba(141, 73, 103, 0.25);
          outline-offset: 2px;
        }
        .import-backup-button input {
          cursor: pointer;
          height: 100%;
          inset: 0;
          opacity: 0;
          position: absolute;
          width: 100%;
        }
        .planner-save-actions .reset-plan-button {
          color: #685d63;
        }
        .planner-save-privacy {
          color: #776b71;
          font-size: 11px;
          grid-column: 1 / -1;
          line-height: 1.5;
          margin: 0;
        }
        .content-section {
          margin: 0 auto;
          max-width: 1160px;
          padding: 76px 24px;
          scroll-margin-top: 70px;
        }
        .section-heading {
          margin: 0 auto 34px;
          max-width: 740px;
          text-align: center;
        }
        h2 {
          color: #3a2d33;
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin: 0;
        }
        .section-heading > p:last-child {
          color: #655a60;
          font-size: 16px;
          line-height: 1.7;
          margin: 14px auto 0;
        }
        .calculator-shell {
          background: #fff;
          border: 1px solid #eadfe4;
          border-radius: 20px;
          box-shadow: 0 14px 45px rgba(55, 29, 41, 0.06);
          overflow: hidden;
        }
        .calculator-tabs {
          background: #fbf8f9;
          border-bottom: 1px solid #eee6e9;
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 12px;
        }
        .calculator-tabs button,
        .filter-pills button {
          background: transparent;
          border: 1px solid transparent;
          border-radius: 999px;
          color: #62545c;
          cursor: pointer;
          flex: 0 0 auto;
          font: inherit;
          font-size: 13px;
          padding: 10px 15px;
        }
        .calculator-tabs button.active {
          background: #6d294c;
          color: #fff;
        }
        .calculator-grid {
          display: grid;
          gap: 32px;
          grid-template-columns: minmax(0, 1.35fr) minmax(270px, 0.65fr);
          padding: 32px;
        }
        .calculator-inputs h3 {
          color: #3c3036;
          font-size: 22px;
          font-weight: 600;
          margin: 0;
        }
        .calculator-inputs > p {
          color: #685d63;
          font-size: 14px;
          line-height: 1.65;
          margin: 9px 0 22px;
          max-width: 640px;
        }
        .fields-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .number-field {
          color: #51464c;
          display: grid;
          font-size: 13px;
          font-weight: 600;
          gap: 7px;
        }
        .number-field input,
        .search-field input,
        .notes-field textarea {
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 8px;
          color: #30272c;
          font: inherit;
          min-height: 44px;
          padding: 10px 12px;
          width: 100%;
        }
        .number-field input:focus,
        .search-field input:focus,
        .notes-field textarea:focus {
          border-color: #8d4967;
          outline: 3px solid rgba(141, 73, 103, 0.13);
        }
        .number-field small {
          color: #776b71;
          font-size: 11px;
          font-weight: 400;
        }
        .result-card {
          align-self: stretch;
          background: #f8f1f4;
          border: 1px solid #efdee6;
          border-radius: 16px;
          padding: 26px;
        }
        .result-label {
          color: #6d294c;
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          line-height: 1.5;
          text-transform: uppercase;
        }
        .result-value {
          color: #5b2341;
          display: block;
          font-size: clamp(34px, 4vw, 46px);
          font-weight: 500;
          letter-spacing: -0.04em;
          line-height: 1.15;
          margin: 10px 0 20px;
        }
        .payment-visual {
          display: grid;
          gap: 8px;
          margin: -4px 0 16px;
        }
        .payment-visual-label {
          color: #655a60;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .payment-stack {
          background: #f0e8ec;
          border-radius: 999px;
          display: flex;
          height: 12px;
          overflow: hidden;
          width: 100%;
        }
        .payment-stack span {
          display: block;
          min-width: 0;
          transition: width 180ms ease;
        }
        .payment-principal {
          background: #6d294c;
        }
        .payment-tax {
          background: #d87092;
        }
        .payment-insurance {
          background: #e8a486;
        }
        .payment-hoa {
          background: #8e9f78;
        }
        .result-lines {
          border-bottom: 1px solid #e5d3dc;
          border-top: 1px solid #e5d3dc;
          display: grid;
          gap: 12px;
          padding: 16px 0;
        }
        .result-lines span {
          color: #62565d;
          display: flex;
          font-size: 13px;
          gap: 12px;
          justify-content: space-between;
        }
        .result-lines b {
          color: #3c3036;
          font-weight: 600;
          white-space: nowrap;
        }
        .result-card > p {
          color: #6a5c64;
          font-size: 12px;
          line-height: 1.6;
          margin: 16px 0 0;
        }
        .worksheet-section {
          padding-top: 34px;
        }
        .research-promo {
          align-items: center;
          background: #fff;
          border: 1px solid #eadfe4;
          border-radius: 16px;
          box-shadow: 0 10px 32px rgba(55, 29, 41, 0.045);
          display: flex;
          gap: 30px;
          justify-content: space-between;
          margin: 0 auto 54px;
          max-width: 1112px;
          padding: 27px 30px;
        }
        .research-promo .eyebrow {
          margin-bottom: 8px;
        }
        .research-promo h2 {
          font-size: 24px;
        }
        .research-promo p:not(.eyebrow) {
          color: #655a60;
          font-size: 14px;
          line-height: 1.65;
          margin: 8px 0 0;
          max-width: 700px;
        }
        .resource-links {
          display: grid;
          flex: 0 0 auto;
          gap: 9px;
        }
        .resource-links a {
          color: #6d294c;
          font-size: 13px;
          font-weight: 700;
          text-underline-offset: 4px;
        }
        .worksheet-controls {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 14px 22px;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .search-field {
          display: block;
          flex: 1 1 240px;
          max-width: 340px;
        }
        .filter-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .filter-pills button {
          border-color: #e6dbe0;
        }
        .filter-pills button.selected {
          background: #f4e8ee;
          border-color: #d9b9c8;
          color: #5d2844;
        }
        .worksheet-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .worksheet-card {
          background: #fff;
          border: 1px solid #e9dfe3;
          border-radius: 14px;
          overflow: hidden;
        }
        .worksheet-card.expanded {
          border-color: #caa9b8;
          box-shadow: 0 10px 30px rgba(72, 39, 54, 0.06);
          grid-column: span 2;
        }
        .worksheet-toggle {
          background: transparent;
          border: 0;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          min-height: 174px;
          padding: 20px;
          text-align: left;
          width: 100%;
        }
        .worksheet-category {
          color: #8d4967;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .worksheet-toggle strong {
          color: #3d3036;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.35;
          margin-top: 12px;
        }
        .worksheet-description {
          color: #6a5f65;
          font-size: 13px;
          line-height: 1.55;
          margin-top: 8px;
        }
        .worksheet-open {
          color: #6d294c;
          font-size: 12px;
          font-weight: 700;
          margin-top: auto;
          padding-top: 16px;
        }
        .worksheet-body {
          border-top: 1px solid #eee5e9;
          padding: 16px 20px 20px;
        }
        .check-row {
          align-items: flex-start;
          color: #51464c;
          display: flex;
          font-size: 13px;
          gap: 10px;
          line-height: 1.5;
          padding: 7px 0;
        }
        .check-row input {
          accent-color: #6d294c;
          margin-top: 3px;
        }
        .notes-field {
          color: #51464c;
          display: grid;
          font-size: 12px;
          font-weight: 600;
          gap: 8px;
          margin-top: 14px;
        }
        .notes-field textarea {
          min-height: 86px;
          resize: vertical;
        }
        .print-button {
          background: #fff;
          border: 1px solid #6d294c;
          border-radius: 999px;
          color: #6d294c;
          cursor: pointer;
          font: inherit;
          font-size: 12px;
          font-weight: 600;
          margin-top: 12px;
          padding: 10px 14px;
        }
        .privacy-note,
        .no-results {
          color: #6b6065;
          font-size: 13px;
          line-height: 1.65;
          margin: 22px 0 0;
        }
        .local-answers {
          background: #fbf8f9;
          padding: 8px 0 18px;
          scroll-margin-top: 70px;
        }
        .contact-band {
          align-items: center;
          background: #f7eee9;
          display: flex;
          gap: 36px;
          justify-content: space-between;
          margin-top: 30px;
          padding: 48px max(24px, calc((100vw - 1112px) / 2));
        }
        .contact-band h2 {
          font-size: 30px;
        }
        .contact-band p:last-child {
          color: #655a60;
          line-height: 1.6;
          margin: 10px 0 0;
          max-width: 620px;
        }
        .contact-band .contact-button {
          background: #6d294c;
          color: #fff;
          flex: 0 0 auto;
        }
        .contact-band .contact-band-copy-link {
          color: #6d294c;
          display: inline-block;
          font-size: 13px;
          font-weight: 600;
          margin-top: 12px;
          text-underline-offset: 4px;
        }
        .visually-hidden {
          clip: rect(0, 0, 0, 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
        @media (max-width: 820px) {
          .hero-inner,
          .calculator-grid {
            grid-template-columns: 1fr;
          }
          .hero-inner {
            gap: 32px;
          }
          .worksheet-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .worksheet-card.expanded {
            grid-column: span 2;
          }
          .research-promo {
            align-items: flex-start;
            flex-direction: column;
            margin: 0 24px 48px;
          }
        }
        @media (max-width: 560px) {
          .hero {
            padding: 52px 20px 38px;
          }
          .hero-description {
            font-size: 16px;
          }
          .jump-nav {
            justify-content: flex-start;
          }
          .planner-savebar {
            grid-template-columns: 1fr;
            padding: 16px 18px;
            scroll-margin-top: 56px;
          }
          .planner-save-actions {
            width: 100%;
          }
          .planner-save-actions button,
          .import-backup-button {
            flex: 1 1 auto;
          }
          .planner-save-privacy {
            grid-column: auto;
          }
          .content-section {
            padding: 54px 18px;
          }
          .calculator-grid {
            gap: 22px;
            padding: 20px;
          }
          .fields-grid,
          .worksheet-grid {
            grid-template-columns: 1fr;
          }
          .worksheet-card.expanded {
            grid-column: span 1;
          }
          .contact-band {
            align-items: flex-start;
            flex-direction: column;
            padding: 36px 20px;
          }
          .research-promo {
            margin: 0 18px 42px;
            padding: 22px 20px;
          }
          .hero-choices {
            grid-template-columns: 1fr;
          }
          .hero-choices a {
            min-height: 58px;
            border-right: 0;
            border-bottom: 1px solid #eadfe4;
          }
          .hero-choices a:last-child {
            border-bottom: 0;
          }
        }
        @media print {
          .hero,
          .jump-nav,
          .planner-savebar,
          .calculator-shell,
          .worksheet-controls,
          .contact-band,
          .print-button {
            display: none !important;
          }
          .worksheet-card:not(.expanded) {
            display: none !important;
          }
          .worksheet-card.expanded {
            box-shadow: none;
            grid-column: span 3;
          }
        }
      `}</style>
    </main>
  )
}
