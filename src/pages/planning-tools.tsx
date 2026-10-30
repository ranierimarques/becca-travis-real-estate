import Link from 'next/link'
import { useMemo, useState } from 'react'
import { MetaSEO } from '@/common'

const tools = [
  [
    'Monthly payment estimator',
    'Estimate principal and interest from a price, down payment, rate and term. Taxes, insurance and HOA are separate inputs.',
  ],
  [
    'Home affordability planner',
    'Set a monthly housing budget and compare it with your expected payment.',
  ],
  [
    'Down payment comparison',
    'Compare cash down, loan amount and estimated monthly principal and interest across two scenarios.',
  ],
  [
    'Mortgage offer comparison',
    'Record lender quotes side by side, including rate, points, fees and lock period.',
  ],
  [
    'Cash to close worksheet',
    'List down payment, lender fees, prepaid items, credits and funds already paid.',
  ],
  [
    'Home tour scorecard',
    'Compare homes against your own priorities and leave notes after each visit.',
  ],
  [
    'Inspection question list',
    'Prepare questions for a qualified home inspector and track items to follow up on.',
  ],
  [
    'Offer terms worksheet',
    'Organize price, financing, contingencies, dates and questions for your agent.',
  ],
  [
    'Rent or buy comparison',
    'Compare your own rent, ownership costs, time horizon and assumptions.',
  ],
  ['Moving budget', 'Plan a move with editable cost categories and a running total.'],
  [
    'Moving timeline',
    'Create a dated list for packing, address updates, utilities and move day.',
  ],
  [
    'Utility setup checklist',
    'Track utility and service providers to contact for your new address.',
  ],
  [
    'Home maintenance calendar',
    'Keep seasonal reminders for routine maintenance and service records.',
  ],
  [
    'Seller preparation checklist',
    'Organize repairs, documents, staging and questions before listing.',
  ],
  [
    'Property visit notes',
    'Save address specific observations, questions and follow up items locally.',
  ],
] as const

const actionItems = [
  ['Record down payment A', 'Record down payment B', 'Compare estimated payments'],
  ['Record lender and rate', 'Record points and fees', 'Confirm rate lock expiration'],
  ['List down payment', 'List fees and prepaid items', 'Record credits and funds paid'],
  ['Note what works well', 'Record questions', 'List follow up items'],
  [
    'Prepare questions for inspector',
    'Record inspector findings',
    'Track items for specialist review',
  ],
  ['Record proposed price', 'Review contingencies with agent', 'Confirm key dates'],
  ['Record current rent', 'Estimate ownership expenses', 'Write down time horizon'],
  ['Estimate movers', 'List packing and travel costs', 'Add storage or other expenses'],
  ['Set packing start date', 'Update address and services', 'Confirm move day details'],
  [
    'List providers to contact',
    'Record service start dates',
    'Save confirmation numbers',
  ],
  ['Review seasonal maintenance', 'Record recent service', 'Set a reminder to follow up'],
  [
    'Gather property documents',
    'List preparation tasks',
    'Write questions for your agent',
  ],
  ['Record property address', 'Note observations', 'List follow up questions'],
]

const money = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0)

export default function PlanningToolsPage() {
  const [price, setPrice] = useState(350000)
  const [down, setDown] = useState(70000)
  const [rate, setRate] = useState(6.5)
  const [years, setYears] = useState(30)
  const [active, setActive] = useState(0)
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const [notes, setNotes] = useState('')
  const payment = useMemo(() => {
    const principal = Math.max(price - down, 0)
    const monthlyRate = rate / 1200
    const months = years * 12
    return monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months)
  }, [price, down, rate, years])

  return (
    <main style={{ color: '#27232a' }}>
      <MetaSEO
        canonicalPath="/planning-tools"
        title="Free Home Buying and Selling Tools | Becca Travis"
        description="Use free home buying and selling planners, worksheets and checklists. Calculations use your inputs and are for planning only."
        image="/sharing-cards/og-index.jpg"
        alt="Free home buying and selling planning tools"
      />
      <section style={{ background: 'rgba(232, 156, 127, .16)', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: 'auto' }}>
          <h1
            style={{
              fontSize: 'clamp(34px, 5vw, 52px)',
              fontWeight: 500,
              color: '#6d294c',
            }}
          >
            Make your next move with a clear plan
          </h1>
          <p style={{ maxWidth: 700, lineHeight: 1.8, fontSize: 18 }}>
            Fifteen free worksheets and calculators to help you organize a home search,
            compare options and prepare for a move. Your entries stay in this browser and
            are not sent to Becca.
          </p>
        </div>
      </section>
      <section style={{ maxWidth: 1000, margin: 'auto', padding: '40px 24px 80px' }}>
        <p style={{ lineHeight: 1.7 }}>
          Choose a tool to open it. Calculators are estimates based only on the numbers
          you enter. Mortgage payment estimates exclude taxes, insurance, mortgage
          insurance, HOA fees and lender charges unless you account for them separately.
          Confirm costs and loan terms with licensed providers.
        </p>
        <div style={{ display: 'grid', gap: 12, marginTop: 28 }}>
          {tools.map(([title, description], index) => (
            <details
              key={title}
              open={active === index}
              onToggle={event => {
                if ((event.currentTarget as HTMLDetailsElement).open) setActive(index)
              }}
              style={{ borderBottom: '1px solid #e7dce1', padding: '12px 4px' }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  color: '#6d294c',
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {String(index + 1).padStart(2, '0')}. {title}
              </summary>
              <p style={{ maxWidth: 760, lineHeight: 1.7 }}>{description}</p>
              {index === 0 ? (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
                    gap: 16,
                    maxWidth: 800,
                  }}
                >
                  {(
                    [
                      ['Home price', price, setPrice],
                      ['Down payment', down, setDown],
                      ['Annual interest rate (%)', rate, setRate],
                      ['Loan term (years)', years, setYears],
                    ] as const
                  ).map(([label, value, setter]) => (
                    <label key={label} style={{ display: 'grid', gap: 6, fontSize: 14 }}>
                      {label}
                      <input
                        type="number"
                        min="0"
                        value={value}
                        onChange={event => setter(Number(event.target.value))}
                        style={{
                          padding: 12,
                          border: '1px solid #b8aab1',
                          borderRadius: 4,
                          fontSize: 16,
                        }}
                      />
                    </label>
                  ))}
                  <p
                    aria-live="polite"
                    style={{ gridColumn: '1 / -1', fontSize: 20, color: '#6d294c' }}
                  >
                    Estimated monthly principal and interest:{' '}
                    <strong>{money(payment)}</strong>
                  </p>
                </div>
              ) : (
                <div style={{ maxWidth: 800 }}>
                  {(
                    actionItems[index - 1] || [
                      'Set a clear priority',
                      'Record important details',
                      'Write the next action',
                    ]
                  ).map(item => {
                    const key = `${index}:${item}`
                    return (
                      <label key={key} style={{ display: 'block', padding: '8px 0' }}>
                        <input
                          type="checkbox"
                          checked={Boolean(checked[key])}
                          onChange={event =>
                            setChecked({ ...checked, [key]: event.target.checked })
                          }
                        />{' '}
                        {item}
                      </label>
                    )
                  })}
                  <label style={{ display: 'grid', gap: 8, marginTop: 12 }}>
                    Private notes for this visit or plan
                    <textarea
                      value={notes}
                      onChange={event => setNotes(event.target.value)}
                      rows={4}
                      style={{
                        padding: 12,
                        border: '1px solid #b8aab1',
                        borderRadius: 4,
                        font: 'inherit',
                      }}
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    style={{
                      marginTop: 12,
                      padding: '10px 16px',
                      color: '#6d294c',
                      background: 'white',
                      border: '1px solid #6d294c',
                      borderRadius: 4,
                      cursor: 'pointer',
                    }}
                  >
                    Print this worksheet
                  </button>
                </div>
              )}
            </details>
          ))}
        </div>
        <p style={{ marginTop: 36, fontSize: 14, lineHeight: 1.7 }}>
          Planning tools are educational aids, not loan offers, tax or legal advice,
          property inspections or guarantees. Information stays in your browser unless you
          choose to contact Becca separately.
        </p>
        <Link href="/contact-us" style={{ color: '#6d294c', fontWeight: 600 }}>
          Have questions about your move? Contact Becca
        </Link>
      </section>
      <style jsx global>{`
        @media print {
          header,
          nav,
          footer,
          button {
            display: none !important;
          }
          body {
            color: #111;
          }
        }
      `}</style>
    </main>
  )
}
