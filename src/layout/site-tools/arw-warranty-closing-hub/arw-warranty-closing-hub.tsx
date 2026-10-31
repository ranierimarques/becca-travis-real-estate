import Link from 'next/link'
import { FormEvent, useEffect, useMemo, useState } from 'react'

type PlanId = 'essential' | 'complete' | 'premier'
type ContactMethod = 'email' | 'text' | 'call'
type Journey = 'buyer' | 'seller' | 'listing' | 'exploring'

const officialPlanUrl = 'https://arwhome.com/real-estate-pro/realtor-home-warranty-plans'
const officialBrochureUrl =
  'https://arwhome.com/hubfs/Real%20Estate%20Images/ARWH-ProPlanBrochure-rev08.08.25_1542.pdf'
const officialPortalUrl = 'https://pro.arwhome.com/'
const sampleDeclarationUrl = '/docs/arw-home-essential-sample-alabama-coverage.pdf'
const draftKey = 'becca-warranty-closing-draft-v1'

const plans: Array<{
  id: PlanId
  name: string
  price: number
  position: string
  prompt: string
}> = [
  {
    id: 'essential',
    name: 'Home Essential',
    price: 600,
    position: 'Core plan to compare',
    prompt: 'Start here when you want to review the core systems and appliances first.',
  },
  {
    id: 'complete',
    name: 'Home Complete',
    price: 750,
    position: 'Expanded plan to compare',
    prompt:
      'Compare this tier when broader current-plan coverage matters to the household.',
  },
  {
    id: 'premier',
    name: 'Home Premier',
    price: 850,
    position: 'Broadest listed tier to compare',
    prompt:
      'Review this tier when you want the broadest current real-estate plan comparison.',
  },
]

const initialDetails = {
  name: '',
  journey: 'exploring' as Journey,
  propertyAddress: '',
  closingDate: '',
  notes: '',
}

function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length < 4) return digits
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

function emailSuggestion(value: string) {
  const normalized = value.trim().toLowerCase()
  const [local, domain] = normalized.split('@')
  if (!local || !domain) return ''
  const fixes: Record<string, string> = {
    'gamil.com': 'gmail.com',
    'gmial.com': 'gmail.com',
    'gmail.co': 'gmail.com',
    'yahoo.co': 'yahoo.com',
    'outlok.com': 'outlook.com',
    'hotmai.com': 'hotmail.com',
  }
  return fixes[domain] ? `${local}@${fixes[domain]}` : ''
}

export function ArwWarrantyClosingHub() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('complete')
  const [hvacAge, setHvacAge] = useState(10)
  const [squareFeet, setSquareFeet] = useState(2200)
  const [systems, setSystems] = useState({
    hvac: true,
    plumbing: false,
    electrical: false,
    appliances: true,
  })
  const [step, setStep] = useState<'contact' | 'details' | 'done'>('contact')
  const [contactMethod, setContactMethod] = useState<ContactMethod>('email')
  const [zip, setZip] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [details, setDetails] = useState(initialDetails)
  const [requestId, setRequestId] = useState('')
  const [savedPlan, setSavedPlan] = useState<PlanId | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState('')
  const [draftRestored, setDraftRestored] = useState(false)

  const plan = plans.find(item => item.id === selectedPlan) || plans[1]
  const suggestion = emailSuggestion(email)

  const reviewFocus = useMemo(() => {
    const selectedSystems = Object.values(systems).filter(Boolean).length
    const score =
      (hvacAge >= 15 ? 2 : hvacAge >= 8 ? 1 : 0) +
      (squareFeet >= 3000 ? 1 : 0) +
      selectedSystems
    if (score >= 5) {
      return {
        label: 'Detailed comparison',
        copy: 'Compare all three current plan documents and itemized limits before selecting a tier.',
        plan: 'premier' as PlanId,
      }
    }
    if (score >= 3) {
      return {
        label: 'Focused comparison',
        copy: 'Compare Home Complete with the adjacent tiers, especially for the systems you marked.',
        plan: 'complete' as PlanId,
      }
    }
    return {
      label: 'Core comparison',
      copy: 'Start with Home Essential, then confirm whether a broader tier adds value for this home.',
      plan: 'essential' as PlanId,
    }
  }, [hvacAge, squareFeet, systems])

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(draftKey)
      if (!saved) return
      const parsed = JSON.parse(saved) as typeof initialDetails
      setDetails(current => ({ ...current, ...parsed }))
      setDraftRestored(true)
    } catch {
      window.sessionStorage.removeItem(draftKey)
    }
  }, [])

  useEffect(() => {
    if (step !== 'details') return
    window.sessionStorage.setItem(draftKey, JSON.stringify(details))
  }, [details, step])

  function toggleSystem(key: keyof typeof systems) {
    setSystems(current => ({ ...current, [key]: !current[key] }))
  }

  async function postLead(stage: 'plan_request' | 'closing_details') {
    const planForSubmission =
      stage === 'closing_details' && savedPlan ? savedPlan : selectedPlan
    const response = await fetch('/api/warranty-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        stage,
        requestId: requestId || undefined,
        plan: planForSubmission,
        zip,
        email,
        phone,
        contactMethod,
        consent,
        website: honeypot,
        planning: {
          hvacAge,
          squareFeet,
          systems: Object.entries(systems)
            .filter(([, selected]) => selected)
            .map(([key]) => key),
          comparisonFocus: reviewFocus.label,
        },
        ...(stage === 'closing_details' ? details : {}),
      }),
    })
    const payload = (await response.json()) as {
      ok?: boolean
      requestId?: string
      message?: string
    }
    if (!response.ok || !payload.ok) {
      throw new Error(
        payload.message || 'Your request could not be saved yet. Please try again.'
      )
    }
    return payload
  }

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError('')
    if (!consent) {
      setFormError('Please check the consent box before asking Becca to follow up.')
      return
    }
    if (contactMethod === 'email' && !email.trim()) {
      setFormError('Enter the email address Becca should use.')
      return
    }
    if (
      (contactMethod === 'text' || contactMethod === 'call') &&
      phone.replace(/\D/g, '').length !== 10
    ) {
      setFormError('Enter a 10-digit phone number for a text or call.')
      return
    }
    setSubmitting(true)
    try {
      const payload = await postLead('plan_request')
      setRequestId(payload.requestId || '')
      setSavedPlan(selectedPlan)
      setStep('details')
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  async function submitDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setFormError('')
    try {
      await postLead('closing_details')
      window.sessionStorage.removeItem(draftKey)
      setStep('done')
    } catch (error) {
      setFormError(
        error instanceof Error
          ? `${error.message} Your unfinished details remain in this browser tab for a retry.`
          : 'Please try again. Your unfinished details remain in this browser tab.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  function skipDetails() {
    window.sessionStorage.removeItem(draftKey)
    setStep('done')
  }

  return (
    <section id="arw-warranty-closing-hub" className="warranty-section">
      <div className="warranty-hero">
        <div className="hero-photo">
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/listing-planner/hero.jpg"
            aria-label="Becca Travis introducing the home buying and selling experience"
          >
            <source src="/dream-home.mp4" type="video/mp4" />
            Your browser does not support the video. You can still use every planning tool
            below.
          </video>
          <div className="hero-shade" />
          <div className="photo-caption">
            <span>Real home. Real documents. Clear next step.</span>
            <strong>Warranty planning without the fine-print fog.</strong>
          </div>
        </div>
        <div className="hero-copy">
          <div className="partner-line">
            <span>ARW Home partner resources</span>
            <a href={officialPlanUrl} target="_blank" rel="noreferrer">
              Visit ARW Home ↗
            </a>
          </div>
          <p className="eyebrow">Home warranty + closing readiness</p>
          <h2>Compare the plan. Read the sample. Then decide.</h2>
          <p>
            See current listed prices, flag the home systems you want to discuss, and send
            Becca one clear plan request. Coverage begins only under ARW&apos;s issued
            contract and declaration—not from this page.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#warranty-plan-builder">
              Build my comparison
            </a>
            <a href={sampleDeclarationUrl} target="_blank" rel="noreferrer">
              View sample Alabama coverage PDF
            </a>
          </div>
          <p className="sample-note">
            <strong>Sample only:</strong> ARW provided this Home Essential sample
            declaration for Alabama planning. It is not your contract or proof of
            coverage. A funded order&apos;s issued declaration and terms control.
          </p>
        </div>
      </div>

      <div id="warranty-plan-builder" className="hub-grid">
        <div className="comparison-panel">
          <div className="panel-heading">
            <span>01</span>
            <div>
              <p className="eyebrow">Current plan comparison</p>
              <h3>Choose a tier to review</h3>
            </div>
          </div>

          <div className="plan-grid" role="radiogroup" aria-label="ARW plan to compare">
            {plans.map(item => (
              <button
                type="button"
                role="radio"
                aria-checked={selectedPlan === item.id}
                className={`plan-card ${selectedPlan === item.id ? 'selected' : ''}`}
                key={item.id}
                onClick={() => setSelectedPlan(item.id)}
              >
                <span>{item.position}</span>
                <strong>{item.name}</strong>
                <b>${item.price}</b>
                <small>currently listed plan price</small>
                <p>{item.prompt}</p>
              </button>
            ))}
          </div>

          <div className="seller-plan-note">
            <div>
              <span>Listing a home?</span>
              <strong>ARW also lists an $800 Listing Advantage seller option.</strong>
            </div>
            <a href={officialPlanUrl} target="_blank" rel="noreferrer">
              Check current seller-plan details ↗
            </a>
          </div>

          <div className="document-grid">
            <a
              className="document-card featured"
              href={sampleDeclarationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>PDF · provided by ARW representative</span>
              <strong>Sample Alabama coverage</strong>
              <p>
                Home Essential sample declaration with example limits, service-call fee,
                and sample-only markings.
              </p>
              <b>Open the sample PDF ↗</b>
            </a>
            <a
              className="document-card"
              href={officialBrochureUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Official ARW resource</span>
              <strong>Current real-estate plan brochure</strong>
              <p>
                Use ARW&apos;s official brochure to compare covered items, limits,
                exclusions, and available options.
              </p>
              <b>Open official brochure ↗</b>
            </a>
            <a
              className="document-card"
              href={officialPortalUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span>Official ARW portal</span>
              <strong>Existing customer or professional?</strong>
              <p>Use ARW Home PRO for supported order and account activity.</p>
              <b>Open ARW Home PRO ↗</b>
            </a>
          </div>
        </div>

        <aside className="systems-panel">
          <div className="panel-heading compact">
            <span>02</span>
            <div>
              <p className="eyebrow">Home-systems checklist</p>
              <h3>Focus the comparison</h3>
            </div>
          </div>

          <label className="range-field">
            <span>
              <b>HVAC age</b>
              <strong>{hvacAge} years</strong>
            </span>
            <input
              type="range"
              min="0"
              max="30"
              value={hvacAge}
              onChange={event => setHvacAge(Number(event.target.value))}
            />
          </label>
          <label className="range-field">
            <span>
              <b>Approximate size</b>
              <strong>{squareFeet.toLocaleString()} sq. ft.</strong>
            </span>
            <input
              type="range"
              min="800"
              max="5000"
              step="100"
              value={squareFeet}
              onChange={event => setSquareFeet(Number(event.target.value))}
            />
          </label>

          <div className="system-choices">
            {(Object.keys(systems) as Array<keyof typeof systems>).map(key => (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={systems[key]}
                  onChange={() => toggleSystem(key)}
                />
                <span>
                  {key === 'hvac'
                    ? 'Heating + cooling'
                    : key[0].toUpperCase() + key.slice(1)}
                </span>
              </label>
            ))}
          </div>

          <div className="focus-result" aria-live="polite">
            <span>{reviewFocus.label}</span>
            <strong>
              {plans.find(item => item.id === reviewFocus.plan)?.name} is the first tier
              to compare.
            </strong>
            <p>{reviewFocus.copy}</p>
            <button type="button" onClick={() => setSelectedPlan(reviewFocus.plan)}>
              Compare that tier
            </button>
          </div>
          <p className="calculator-disclosure">
            This checklist prioritizes document review. It does not estimate breakdown
            risk, repair cost, eligibility, or whether a specific item is covered.
          </p>
        </aside>
      </div>

      <div className="closing-grid">
        <div className="conversation-panel">
          <p className="eyebrow">Closing conversation</p>
          <h3>Four questions to settle in writing</h3>
          <ol>
            <li>
              <span>1</span>
              <p>Which exact ARW plan and optional items are being considered?</p>
            </li>
            <li>
              <span>2</span>
              <p>
                Who will pay, when is payment due, and how will it appear in the
                settlement file?
              </p>
            </li>
            <li>
              <span>3</span>
              <p>
                How will the lender treat the amount under the applicable concession
                rules?
              </p>
            </li>
            <li>
              <span>4</span>
              <p>
                Which issued declaration, terms, limits, exclusions, and service-call fee
                will govern?
              </p>
            </li>
          </ol>
          <p className="legal-note">
            These are discussion prompts, not contract clauses. The lender and closing or
            legal professional should prepare or approve transaction language.
          </p>
        </div>

        <div className="lead-panel">
          <div className="lead-heading">
            <span>03</span>
            <div>
              <p className="eyebrow">Save the plan</p>
              <h3>
                {step === 'done' ? 'Your request is in.' : `Ask Becca about ${plan.name}`}
              </h3>
            </div>
          </div>

          {step === 'contact' && (
            <form onSubmit={submitContact} noValidate>
              <p className="form-intro">
                Step 1 of 2 · Send the selected plan and your preferred way to hear back.
              </p>
              <div
                className="method-row"
                role="group"
                aria-label="Preferred contact method"
              >
                {(['email', 'text', 'call'] as ContactMethod[]).map(method => (
                  <button
                    type="button"
                    className={contactMethod === method ? 'active' : ''}
                    key={method}
                    onClick={() => setContactMethod(method)}
                  >
                    {method === 'email' ? 'Email' : method === 'text' ? 'Text' : 'Call'}
                  </button>
                ))}
              </div>
              <div className="form-grid">
                <label>
                  <span>Property ZIP</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    maxLength={5}
                    value={zip}
                    onChange={event =>
                      setZip(event.target.value.replace(/\D/g, '').slice(0, 5))
                    }
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required={contactMethod === 'email'}
                  />
                  {suggestion && suggestion !== email.toLowerCase() && (
                    <button
                      className="suggestion"
                      type="button"
                      onClick={() => setEmail(suggestion)}
                    >
                      Did you mean {suggestion}?
                    </button>
                  )}
                </label>
                <label>
                  <span>Mobile phone</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={event => setPhone(normalizePhone(event.target.value))}
                    required={contactMethod !== 'email'}
                  />
                </label>
                <label className="hidden-field" aria-hidden="true">
                  <span>Website</span>
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={event => setHoneypot(event.target.value)}
                  />
                </label>
              </div>
              <label className="consent-check">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={event => setConsent(event.target.checked)}
                />
                <span>
                  I agree that Becca Travis Real Estate may contact me about this warranty
                  and real-estate request by my selected method. Consent is not a
                  condition of buying a home or a warranty. Message/data rates may apply;
                  reply STOP to texts.
                </span>
              </label>
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              <button className="submit-button" type="submit" disabled={submitting}>
                {submitting ? 'Saving securely…' : 'Save my plan and ask Becca'}
              </button>
              <p className="privacy-line">
                Nothing is sent until you press the button. Read the{' '}
                <Link href="/privacy-notice">privacy notice</Link>.
              </p>
            </form>
          )}

          {step === 'details' && (
            <form onSubmit={submitDetails}>
              <p className="form-intro">
                Step 2 of 2 · Your plan request is saved. Add any helpful closing details
                now, or skip and Becca can ask later.
              </p>
              {draftRestored && (
                <p className="draft-note">
                  Recovered the unfinished details saved in this browser tab.
                </p>
              )}
              <div className="form-grid">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    autoComplete="name"
                    value={details.name}
                    onChange={event =>
                      setDetails(current => ({ ...current, name: event.target.value }))
                    }
                  />
                </label>
                <label>
                  <span>I am…</span>
                  <select
                    value={details.journey}
                    onChange={event =>
                      setDetails(current => ({
                        ...current,
                        journey: event.target.value as Journey,
                      }))
                    }
                  >
                    <option value="exploring">Exploring options</option>
                    <option value="buyer">Buying a home</option>
                    <option value="seller">Selling a home</option>
                    <option value="listing">Preparing to list</option>
                  </select>
                </label>
                <label>
                  <span>Property address (optional)</span>
                  <input
                    type="text"
                    autoComplete="street-address"
                    value={details.propertyAddress}
                    onChange={event =>
                      setDetails(current => ({
                        ...current,
                        propertyAddress: event.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <span>Estimated closing date</span>
                  <input
                    type="date"
                    value={details.closingDate}
                    onChange={event =>
                      setDetails(current => ({
                        ...current,
                        closingDate: event.target.value,
                      }))
                    }
                  />
                </label>
                <label className="wide-field">
                  <span>What should Becca know? (optional)</span>
                  <textarea
                    maxLength={800}
                    value={details.notes}
                    onChange={event =>
                      setDetails(current => ({ ...current, notes: event.target.value }))
                    }
                  />
                </label>
              </div>
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
              <div className="detail-actions">
                <button className="submit-button" type="submit" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Send closing details'}
                </button>
                <button className="skip-button" type="button" onClick={skipDetails}>
                  Skip for now
                </button>
              </div>
              <p className="privacy-line">
                This browser tab keeps an unfinished second-step draft so you can retry
                after a connection error.
              </p>
            </form>
          )}

          {step === 'done' && (
            <div className="success-message" role="status">
              <span>✓</span>
              <strong>
                Becca received your request to discuss{' '}
                {plans.find(item => item.id === (savedPlan || selectedPlan))?.name}.
              </strong>
              <p>
                This is a consultation request—not a warranty order or coverage
                confirmation. Becca will help you review the current documents and next
                step.
              </p>
              <a href="tel:+12563189066">Need a faster answer? Call (256) 318-9066</a>
            </div>
          )}
        </div>
      </div>

      <div className="compensation-disclosure">
        <strong>Transparent partner compensation</strong>
        <p>
          ARW advertises a $100 professional service fee for qualifying plan sales when a
          separate fee agreement is in place. Becca Travis Real Estate has an ARW Home PRO
          fee agreement; whether any particular transaction qualifies and is paid is
          determined by ARW. This relationship does not change the listed plan price shown
          here. Choose a plan only after reviewing its current coverage, limits,
          exclusions, service-call fee, and alternatives.
        </p>
      </div>

      <p className="section-disclosure">
        Prices above were listed on ARW&apos;s real-estate professional page when this
        tool was prepared and may change. Becca Travis Real Estate is not the warranty
        obligor or claims administrator. Only ARW&apos;s issued contract, declaration, and
        applicable terms establish coverage. This page is educational and is not legal,
        lending, inspection, repair, or coverage advice.
      </p>

      <style jsx>{`
        .warranty-section {
          scroll-margin-top: 76px;
          padding: 82px max(24px, calc((100vw - 1160px) / 2));
          color: #352c31;
          background: #fff;
        }
        .warranty-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 470px;
          overflow: hidden;
          background: #321223;
          border-radius: 26px;
          box-shadow: 0 26px 72px rgba(54, 22, 39, 0.16);
        }
        .hero-photo {
          position: relative;
          min-height: 470px;
          overflow: hidden;
        }
        .hero-photo :global(video) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: #170b12;
        }
        .hero-shade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(30, 9, 20, 0.82), transparent 48%);
        }
        .photo-caption {
          position: absolute;
          right: 32px;
          top: 28px;
          left: 32px;
          color: #fff;
          pointer-events: none;
        }
        .photo-caption span {
          display: block;
          margin-bottom: 8px;
          color: #facdbd;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .photo-caption strong {
          display: block;
          max-width: 520px;
          font-family: Georgia, serif;
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 500;
          line-height: 1.05;
        }
        .hero-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 42px;
          color: #fff;
        }
        .partner-line {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 29px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }
        .partner-line span {
          color: #f2bda9;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .partner-line a {
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          text-underline-offset: 3px;
        }
        .eyebrow {
          margin: 0 0 9px;
          color: #9d446e;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .hero-copy .eyebrow {
          color: #efb8a4;
        }
        h2 {
          max-width: 560px;
          margin: 0;
          color: #fff;
          font-family: Georgia, serif;
          font-size: clamp(36px, 4.5vw, 57px);
          font-weight: 500;
          letter-spacing: -0.035em;
          line-height: 1.02;
        }
        .hero-copy > p:not(.eyebrow):not(.sample-note) {
          margin: 18px 0 0;
          color: #eadde4;
          font-size: 14px;
          line-height: 1.75;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 18px;
          margin-top: 25px;
        }
        .hero-actions a {
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          text-underline-offset: 4px;
        }
        .hero-actions .primary-action {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          color: #42152f;
          background: #ffd4c4;
          border-radius: 999px;
          text-decoration: none;
        }
        .sample-note {
          margin: 21px 0 0;
          padding: 13px 15px;
          color: #d8c8d0;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 11px;
          font-size: 9px;
          line-height: 1.55;
        }
        .sample-note strong {
          color: #ffd4c4;
        }
        .hub-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 18px;
          margin-top: 24px;
        }
        .comparison-panel,
        .systems-panel,
        .conversation-panel,
        .lead-panel {
          padding: 27px;
          background: #fff;
          border: 1px solid #e8dce2;
          border-radius: 20px;
          box-shadow: 0 15px 45px rgba(55, 29, 41, 0.07);
        }
        .systems-panel {
          background: #fff9f6;
        }
        .panel-heading,
        .lead-heading {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 22px;
        }
        .panel-heading > span,
        .lead-heading > span {
          display: grid;
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          place-items: center;
          color: #fff;
          background: #9d446e;
          border-radius: 50%;
          font-size: 10px;
          font-weight: 900;
        }
        .panel-heading.compact {
          margin-bottom: 19px;
        }
        h3 {
          margin: 0;
          color: #432f39;
          font-size: 23px;
          line-height: 1.2;
        }
        .plan-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .plan-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          align-items: flex-start;
          padding: 18px 15px;
          color: #4e4047;
          background: #fcf9fa;
          border: 1px solid #eadfe4;
          border-radius: 14px;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }
        .plan-card:hover,
        .plan-card:focus-visible {
          border-color: #b7668d;
          outline: 0;
        }
        .plan-card.selected {
          background: #fff5f1;
          border-color: #9d446e;
          box-shadow: inset 0 3px 0 #9d446e;
        }
        .plan-card > span {
          min-height: 25px;
          color: #9d446e;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .plan-card > strong {
          color: #422e39;
          font-size: 14px;
        }
        .plan-card > b {
          margin-top: 10px;
          color: #6e294d;
          font-size: 27px;
        }
        .plan-card > small {
          color: #8b7c83;
          font-size: 8px;
          text-transform: uppercase;
        }
        .plan-card > p {
          margin: 13px 0 0;
          color: #70646a;
          font-size: 9px;
          line-height: 1.55;
        }
        .seller-plan-note {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin-top: 12px;
          padding: 14px 16px;
          background: #f8eff3;
          border-radius: 12px;
        }
        .seller-plan-note span {
          display: block;
          color: #9d446e;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .seller-plan-note strong {
          display: block;
          margin-top: 3px;
          color: #4a3841;
          font-size: 11px;
        }
        .seller-plan-note a {
          flex: 0 0 auto;
          color: #6e294d;
          font-size: 9px;
          font-weight: 800;
        }
        .document-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 12px;
        }
        .document-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 16px;
          color: inherit;
          background: #fff;
          border: 1px solid #e9dfe3;
          border-radius: 13px;
          text-decoration: none;
        }
        .document-card.featured {
          background: #4b1837;
          border-color: #4b1837;
        }
        .document-card span {
          color: #9d446e;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }
        .document-card strong {
          margin-top: 7px;
          color: #43313a;
          font-size: 12px;
          line-height: 1.35;
        }
        .document-card p {
          flex: 1;
          margin: 8px 0 13px;
          color: #766a70;
          font-size: 9px;
          line-height: 1.5;
        }
        .document-card b {
          color: #6e294d;
          font-size: 9px;
        }
        .document-card.featured span,
        .document-card.featured p {
          color: #d9c4ce;
        }
        .document-card.featured strong,
        .document-card.featured b {
          color: #ffd4c4;
        }
        .range-field {
          display: grid;
          gap: 10px;
          margin-top: 16px;
        }
        .range-field > span {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          color: #6b5c64;
          font-size: 10px;
        }
        .range-field strong {
          color: #55223f;
        }
        .range-field input {
          width: 100%;
          accent-color: #8d2f60;
        }
        .system-choices {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
          margin-top: 20px;
        }
        .system-choices label {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 10px;
          background: #fff;
          border: 1px solid #e7d9df;
          border-radius: 10px;
          color: #54464d;
          font-size: 9px;
          font-weight: 700;
          cursor: pointer;
        }
        .system-choices input {
          accent-color: #8d2f60;
        }
        .focus-result {
          margin-top: 17px;
          padding: 18px;
          color: #fff;
          background: linear-gradient(145deg, #40152f, #6c2850);
          border-radius: 14px;
        }
        .focus-result span {
          color: #f1bba8;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .focus-result strong {
          display: block;
          margin-top: 7px;
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.25;
        }
        .focus-result p {
          margin: 8px 0 0;
          color: #e3d3db;
          font-size: 9px;
          line-height: 1.55;
        }
        .focus-result button {
          margin-top: 13px;
          padding: 9px 13px;
          color: #44172f;
          background: #ffd4c4;
          border: 0;
          border-radius: 999px;
          font: inherit;
          font-size: 9px;
          font-weight: 900;
          cursor: pointer;
        }
        .calculator-disclosure {
          margin: 13px 0 0;
          color: #7d6e76;
          font-size: 8px;
          line-height: 1.55;
        }
        .closing-grid {
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 18px;
          margin-top: 18px;
        }
        .conversation-panel ol {
          display: grid;
          gap: 10px;
          padding: 0;
          margin: 21px 0 0;
          list-style: none;
        }
        .conversation-panel li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .conversation-panel li span {
          display: grid;
          flex: 0 0 27px;
          width: 27px;
          height: 27px;
          place-items: center;
          color: #fff;
          background: #9d446e;
          border-radius: 50%;
          font-size: 9px;
          font-weight: 900;
        }
        .conversation-panel li p {
          margin: 4px 0 0;
          color: #62565d;
          font-size: 10px;
          line-height: 1.5;
        }
        .legal-note {
          margin: 18px 0 0;
          padding: 13px;
          color: #6e6067;
          background: #fff8f4;
          border-left: 3px solid #d8997e;
          font-size: 8px;
          line-height: 1.55;
        }
        .lead-panel {
          color: #fff;
          background: #351124;
          border-color: #351124;
        }
        .lead-heading .eyebrow {
          color: #f0b9a5;
        }
        .lead-heading h3 {
          color: #fff;
        }
        .form-intro {
          margin: 0 0 15px;
          color: #d9c8d0;
          font-size: 10px;
          line-height: 1.55;
        }
        .method-row {
          display: inline-flex;
          padding: 3px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
        }
        .method-row button {
          min-width: 68px;
          padding: 8px 12px;
          color: #d9c6cf;
          background: transparent;
          border: 0;
          border-radius: 999px;
          font: inherit;
          font-size: 9px;
          font-weight: 800;
          cursor: pointer;
        }
        .method-row button.active {
          color: #42162f;
          background: #ffd4c4;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
          margin-top: 15px;
        }
        .form-grid label {
          display: grid;
          gap: 6px;
          color: #e5d6dd;
          font-size: 9px;
          font-weight: 800;
        }
        .form-grid input,
        .form-grid select,
        .form-grid textarea {
          width: 100%;
          min-height: 43px;
          padding: 9px 11px;
          color: #352a30;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 9px;
          box-sizing: border-box;
          font: inherit;
          font-size: 11px;
        }
        .form-grid input:focus,
        .form-grid select:focus,
        .form-grid textarea:focus {
          outline: 3px solid rgba(255, 212, 196, 0.32);
        }
        .form-grid textarea {
          min-height: 76px;
          resize: vertical;
        }
        .wide-field {
          grid-column: 1/-1;
        }
        .hidden-field {
          position: absolute;
          left: -10000px;
        }
        .suggestion {
          padding: 0;
          color: #ffd4c4;
          background: none;
          border: 0;
          font: inherit;
          font-size: 8px;
          text-align: left;
          text-decoration: underline;
          cursor: pointer;
        }
        .consent-check {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-top: 14px;
          color: #d5c3cc;
          font-size: 8px;
          line-height: 1.55;
          cursor: pointer;
        }
        .consent-check input {
          flex: 0 0 auto;
          margin-top: 2px;
          accent-color: #f5bda8;
        }
        .form-error,
        .draft-note {
          margin: 12px 0 0;
          padding: 10px 12px;
          color: #fff;
          background: rgba(255, 101, 101, 0.16);
          border: 1px solid rgba(255, 147, 147, 0.4);
          border-radius: 9px;
          font-size: 9px;
          line-height: 1.45;
        }
        .draft-note {
          color: #ddf7e9;
          background: rgba(47, 151, 105, 0.18);
          border-color: rgba(105, 220, 166, 0.35);
        }
        .submit-button,
        .skip-button {
          min-height: 44px;
          padding: 0 17px;
          border-radius: 999px;
          font: inherit;
          font-size: 10px;
          font-weight: 900;
          cursor: pointer;
        }
        .submit-button {
          margin-top: 15px;
          color: #43162f;
          background: #ffd4c4;
          border: 1px solid #ffd4c4;
        }
        .submit-button:disabled {
          cursor: wait;
          opacity: 0.65;
        }
        .skip-button {
          margin-top: 15px;
          color: #ffd4c4;
          background: transparent;
          border: 1px solid rgba(255, 212, 196, 0.45);
        }
        .detail-actions {
          display: flex;
          gap: 9px;
        }
        .privacy-line {
          margin: 10px 0 0;
          color: #bfaeb7;
          font-size: 8px;
          line-height: 1.5;
        }
        .privacy-line :global(a) {
          color: #ffd4c4;
        }
        .success-message {
          padding: 24px;
          text-align: center;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 14px;
        }
        .success-message > span {
          display: grid;
          width: 38px;
          height: 38px;
          margin: 0 auto 12px;
          place-items: center;
          color: #42162f;
          background: #ffd4c4;
          border-radius: 50%;
          font-weight: 900;
        }
        .success-message strong {
          color: #fff;
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 500;
        }
        .success-message p {
          margin: 10px auto;
          color: #dccbd3;
          font-size: 10px;
          line-height: 1.55;
        }
        .success-message a {
          color: #ffd4c4;
          font-size: 10px;
          font-weight: 800;
        }
        .compensation-disclosure {
          display: grid;
          grid-template-columns: 0.28fr 0.72fr;
          gap: 24px;
          margin-top: 18px;
          padding: 21px 24px;
          color: #4f4048;
          background: #fff6f2;
          border: 1px solid #ecdcd4;
          border-radius: 14px;
        }
        .compensation-disclosure strong {
          color: #6e294d;
          font-size: 11px;
        }
        .compensation-disclosure p {
          margin: 0;
          color: #71636a;
          font-size: 9px;
          line-height: 1.65;
        }
        .section-disclosure {
          max-width: 980px;
          margin: 17px auto 0;
          color: #7b7075;
          font-size: 8px;
          line-height: 1.65;
          text-align: center;
        }
        @media (max-width: 980px) {
          .warranty-hero,
          .hub-grid,
          .closing-grid {
            grid-template-columns: 1fr;
          }
          .hero-photo {
            min-height: 390px;
          }
        }
        @media (max-width: 700px) {
          .warranty-section {
            padding: 60px 18px;
          }
          .warranty-hero {
            border-radius: 18px;
          }
          .hero-photo {
            min-height: 310px;
          }
          .photo-caption {
            right: 20px;
            bottom: 20px;
            left: 20px;
          }
          .hero-copy {
            padding: 27px 22px;
          }
          .comparison-panel,
          .systems-panel,
          .conversation-panel,
          .lead-panel {
            padding: 21px 17px;
            border-radius: 15px;
          }
          .plan-grid,
          .document-grid,
          .form-grid,
          .compensation-disclosure {
            grid-template-columns: 1fr;
          }
          .plan-card > span {
            min-height: 0;
          }
          .seller-plan-note {
            align-items: flex-start;
            flex-direction: column;
          }
          .system-choices {
            grid-template-columns: 1fr 1fr;
          }
          .detail-actions {
            flex-direction: column;
          }
          .detail-actions button {
            width: 100%;
          }
          .compensation-disclosure {
            gap: 8px;
          }
        }
      `}</style>
    </section>
  )
}
