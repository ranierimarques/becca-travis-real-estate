import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRightIcon,
  ClipboardCopyIcon,
  ExternalLinkIcon,
  FileTextIcon,
  LockClosedIcon,
} from '@radix-ui/react-icons'
import {
  PlannerValues,
  buildListingDraft,
  buildVerificationList,
  countDraftFacts,
  findReviewWarnings,
  initialPlannerValues,
  listingPlannerFaq,
  preparationItems,
} from './listing-planner-content'
import * as S from './listing-planner.styles'

const storageKey = 'becca-listing-planner-v1'

type StoredPlanner = {
  values: PlannerValues
  preparation: Record<string, boolean>
  notes: Record<string, string>
  finalReview: Record<string, boolean>
}

const finalReviewItems = [
  'Confirm measurements and sources',
  'Remove audience focused wording',
  'Verify dates, permits, warranties, and included items',
  'Have your agent review MLS limits and local requirements',
]

function PrinterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14h10v7H7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 12h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function fieldWarnings(
  warnings: ReturnType<typeof findReviewWarnings>,
  field: keyof PlannerValues
) {
  return warnings.filter(warning => warning.field === field)
}

export function ListingPlanner() {
  const [values, setValues] = useState<PlannerValues>(initialPlannerValues)
  const [preparation, setPreparation] = useState<Record<string, boolean>>({})
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [finalReview, setFinalReview] = useState<Record<string, boolean>>({})
  const [hydrated, setHydrated] = useState(false)
  const [liveMessage, setLiveMessage] = useState('')

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey)
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<StoredPlanner>
        if (parsed.values) setValues({ ...initialPlannerValues, ...parsed.values })
        if (parsed.preparation) setPreparation(parsed.preparation)
        if (parsed.notes) setNotes(parsed.notes)
        if (parsed.finalReview) setFinalReview(parsed.finalReview)
      }
    } catch {
      window.localStorage.removeItem(storageKey)
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    const stored: StoredPlanner = { values, preparation, notes, finalReview }
    window.localStorage.setItem(storageKey, JSON.stringify(stored))
  }, [finalReview, hydrated, notes, preparation, values])

  const warnings = useMemo(() => findReviewWarnings(values), [values])
  const draft = useMemo(() => buildListingDraft(values, warnings), [values, warnings])
  const verificationList = useMemo(
    () => buildVerificationList(values, warnings),
    [values, warnings]
  )
  const factCount = useMemo(() => countDraftFacts(values, warnings), [values, warnings])
  const ready = factCount >= 6 && warnings.length === 0 && verificationList.length <= 2
  const status = !draft ? 'Needs more facts' : ready ? 'Ready for review' : 'Early draft'

  function updateValue(field: keyof PlannerValues, value: string) {
    setValues(current => ({ ...current, [field]: value }))
    setLiveMessage('')
  }

  async function copyDraft() {
    if (!draft) return
    try {
      await navigator.clipboard.writeText(draft)
      setLiveMessage('Draft copied. Review every fact before publishing.')
    } catch {
      setLiveMessage(
        'Copy was blocked by the browser. Select the draft text and copy it manually.'
      )
    }
  }

  function printPlan() {
    setLiveMessage(
      'Print view opened. You can save the plan as a PDF from the print dialog.'
    )
    window.print()
  }

  function resetPlanner() {
    const shouldReset = window.confirm(
      'Clear the draft, checklist, and notes saved in this browser?'
    )
    if (!shouldReset) return
    setValues(initialPlannerValues)
    setPreparation({})
    setNotes({})
    setFinalReview({})
    setLiveMessage('The browser only plan was cleared.')
    window.localStorage.removeItem(storageKey)
  }

  return (
    <S.Page>
      <S.Hero>
        <S.HeroInner>
          <S.HeroCopy>
            <S.HeroTitle>Build a factual first draft for your home.</S.HeroTitle>
            <S.HeroDescription>
              Add only the facts you can verify. Your draft updates on this page and
              nothing is sent.
            </S.HeroDescription>
            <S.HeroActions>
              <S.PrimaryAnchor href="#basics">Start with the basics</S.PrimaryAnchor>
              <S.TextAnchor href="#organize">
                See what to organize <ArrowRightIcon aria-hidden="true" />
              </S.TextAnchor>
            </S.HeroActions>
          </S.HeroCopy>

          <S.HeroVisual>
            <Image
              src="/images/listing-planner/hero.jpg"
              alt="Illustrative home preparation workspace with organized property records"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 56vw"
            />
            <S.PrivacyNote aria-label="Privacy information">
              <LockClosedIcon aria-hidden="true" />
              <div>
                <strong>Private to this browser</strong>
                <p>Nothing is sent.</p>
              </div>
            </S.PrivacyNote>
          </S.HeroVisual>
        </S.HeroInner>
      </S.Hero>

      <S.ProgressBand aria-label="Listing planner sections">
        <S.Progress>
          <li>
            <S.ProgressLink href="#basics" data-active="true">
              <S.ProgressNumber>1</S.ProgressNumber>
              <span>Basics</span>
            </S.ProgressLink>
          </li>
          <li>
            <S.ProgressLink href="#features">
              <S.ProgressNumber>2</S.ProgressNumber>
              <span>Features</span>
            </S.ProgressLink>
          </li>
          <li>
            <S.ProgressLink href="#review" data-last="true">
              <S.ProgressNumber>3</S.ProgressNumber>
              <span>Review</span>
            </S.ProgressLink>
          </li>
        </S.Progress>
      </S.ProgressBand>

      <S.WorkspaceBand>
        <S.Workspace>
          <S.FormColumn>
            <S.FormSection id="basics" aria-labelledby="basics-heading">
              <S.SectionHeading id="basics-heading">
                Start with the basics
              </S.SectionHeading>
              <S.SectionDescription>
                Add the details you can support. Leave anything uncertain blank and put it
                on the verification list.
              </S.SectionDescription>

              <S.FieldGrid>
                <S.Field>
                  City or ZIP
                  <S.Input
                    value={values.cityZip}
                    onChange={event => updateValue('cityZip', event.target.value)}
                    placeholder="City or ZIP only"
                    autoComplete="postal-code"
                    maxLength={80}
                  />
                  <S.Hint>For privacy, do not enter a street address.</S.Hint>
                </S.Field>

                <S.Field>
                  Timing
                  <S.Select
                    value={values.timing}
                    onChange={event => updateValue('timing', event.target.value)}
                  >
                    <option>Just exploring</option>
                    <option>Later this year</option>
                    <option>Within 3 months</option>
                    <option>Not sure yet</option>
                  </S.Select>
                </S.Field>

                <S.Field wide>
                  Property type
                  <S.Select
                    value={values.propertyType}
                    onChange={event => updateValue('propertyType', event.target.value)}
                  >
                    <option value="">Not sure yet</option>
                    <option>Single family home</option>
                    <option>Condo</option>
                    <option>Townhome</option>
                    <option>Multiunit property</option>
                    <option>Manufactured home</option>
                    <option>Land</option>
                    <option>Other property</option>
                  </S.Select>
                </S.Field>

                <S.Field>
                  Bedrooms
                  <S.Input
                    type="number"
                    min="0"
                    max="30"
                    step="1"
                    inputMode="numeric"
                    value={values.bedrooms}
                    onChange={event => updateValue('bedrooms', event.target.value)}
                    placeholder="Enter count"
                  />
                </S.Field>

                <S.Field>
                  Bathrooms
                  <S.Input
                    type="number"
                    min="0"
                    max="30"
                    step="0.5"
                    inputMode="decimal"
                    value={values.bathrooms}
                    onChange={event => updateValue('bathrooms', event.target.value)}
                    placeholder="Enter count"
                  />
                </S.Field>

                <S.Field>
                  Finished square feet
                  <S.Input
                    inputMode="numeric"
                    value={values.squareFeet}
                    onChange={event => updateValue('squareFeet', event.target.value)}
                    placeholder="Example: 2,100"
                    maxLength={12}
                  />
                  <S.Hint>Enter finished interior area only.</S.Hint>
                </S.Field>

                <S.Field>
                  Source for square feet
                  <S.Select
                    value={values.squareFeetSource}
                    onChange={event =>
                      updateValue('squareFeetSource', event.target.value)
                    }
                  >
                    <option value="">Select a source</option>
                    <option>County property record</option>
                    <option>Appraisal</option>
                    <option>Builder plan</option>
                    <option>Survey</option>
                    <option>Owner measurement</option>
                    <option>Other written record</option>
                  </S.Select>
                </S.Field>

                <S.Field>
                  Year built
                  <S.Input
                    type="number"
                    min="1700"
                    max="2100"
                    inputMode="numeric"
                    value={values.yearBuilt}
                    onChange={event => updateValue('yearBuilt', event.target.value)}
                    placeholder="Enter year"
                  />
                </S.Field>
              </S.FieldGrid>
            </S.FormSection>

            <S.FormSection id="features" aria-labelledby="features-heading">
              <S.SectionHeading id="features-heading">
                Turn records into a cleaner draft
              </S.SectionHeading>
              <S.SectionDescription>
                Use concrete physical details. The wording review keeps flagged text out
                of the draft until you revise it.
              </S.SectionDescription>

              <S.FieldGroupHeading>Verified features</S.FieldGroupHeading>
              <S.FieldGrid>
                <S.Field wide>
                  Physical features
                  <S.Textarea
                    value={values.features}
                    onChange={event => updateValue('features', event.target.value)}
                    placeholder="Example: hardwood floors, gas fireplace, walk in pantry"
                    maxLength={600}
                  />
                  <S.Hint>
                    Separate features with commas. Avoid opinions and buyer profiles.
                  </S.Hint>
                  {fieldWarnings(warnings, 'features').map(warning => (
                    <S.FieldWarning key={warning.reason}>{warning.reason}</S.FieldWarning>
                  ))}
                </S.Field>
              </S.FieldGrid>

              <S.FieldGroupHeading>Updates and dates</S.FieldGroupHeading>
              <S.FieldGrid>
                <S.Field>
                  Updates
                  <S.Textarea
                    value={values.updates}
                    onChange={event => updateValue('updates', event.target.value)}
                    placeholder="Example: roof replacement, HVAC service"
                    maxLength={600}
                  />
                  {fieldWarnings(warnings, 'updates').map(warning => (
                    <S.FieldWarning key={warning.reason}>{warning.reason}</S.FieldWarning>
                  ))}
                </S.Field>
                <S.Field>
                  Year or years
                  <S.Input
                    value={values.updateYears}
                    onChange={event => updateValue('updateYears', event.target.value)}
                    placeholder="Example: 2021, 2024"
                    maxLength={80}
                  />
                  <S.Hint>Match each year to an update before publishing.</S.Hint>
                </S.Field>
                <S.Field wide>
                  What supports these updates?
                  <S.Textarea
                    value={values.updateVerification}
                    onChange={event =>
                      updateValue('updateVerification', event.target.value)
                    }
                    placeholder="Example: receipt dated May 2024; permit number to confirm"
                    maxLength={600}
                  />
                  <S.Hint>
                    This note stays in your plan and does not enter the draft.
                  </S.Hint>
                  {fieldWarnings(warnings, 'updateVerification').map(warning => (
                    <S.FieldWarning key={warning.reason}>{warning.reason}</S.FieldWarning>
                  ))}
                </S.Field>
              </S.FieldGrid>

              <S.FieldGroupHeading>Parking and outdoor space</S.FieldGroupHeading>
              <S.FieldGrid>
                <S.Field>
                  Parking type
                  <S.Select
                    value={values.parking}
                    onChange={event => updateValue('parking', event.target.value)}
                  >
                    <option value="">Select if known</option>
                    <option>Garage</option>
                    <option>Carport</option>
                    <option>Driveway</option>
                    <option>Assigned parking</option>
                    <option>Street parking</option>
                    <option>Other parking</option>
                  </S.Select>
                </S.Field>
                <S.Field>
                  Parking spaces
                  <S.Input
                    type="number"
                    min="0"
                    max="30"
                    step="1"
                    value={values.parkingSpaces}
                    onChange={event => updateValue('parkingSpaces', event.target.value)}
                    placeholder="Enter count"
                  />
                </S.Field>
                <S.Field>
                  Outdoor details
                  <S.Textarea
                    value={values.outdoorSpace}
                    onChange={event => updateValue('outdoorSpace', event.target.value)}
                    placeholder="Example: covered patio, fenced rear yard"
                    maxLength={400}
                  />
                  {fieldWarnings(warnings, 'outdoorSpace').map(warning => (
                    <S.FieldWarning key={warning.reason}>{warning.reason}</S.FieldWarning>
                  ))}
                </S.Field>
                <S.Field>
                  Lot size in acres
                  <S.Input
                    inputMode="decimal"
                    value={values.lotSize}
                    onChange={event => updateValue('lotSize', event.target.value)}
                    placeholder="Example: 0.25"
                    maxLength={12}
                  />
                  <S.Hint>Use a parcel record or survey and confirm the unit.</S.Hint>
                </S.Field>
              </S.FieldGrid>

              <S.FieldGroupHeading>What stays</S.FieldGroupHeading>
              <S.FieldGrid>
                <S.Field wide>
                  Items expected to remain
                  <S.Textarea
                    value={values.includedItems}
                    onChange={event => updateValue('includedItems', event.target.value)}
                    placeholder="Example: refrigerator, mounted television brackets, window coverings"
                    maxLength={500}
                  />
                  <S.Hint>
                    Confirm included and excluded items in the final written agreement.
                  </S.Hint>
                  {fieldWarnings(warnings, 'includedItems').map(warning => (
                    <S.FieldWarning key={warning.reason}>{warning.reason}</S.FieldWarning>
                  ))}
                </S.Field>
                <S.Field wide>
                  Neutral access or proximity fact
                  <S.Input
                    value={values.accessDetail}
                    onChange={event => updateValue('accessDetail', event.target.value)}
                    placeholder="Example: 0.4 miles to a named public park, verified on a map"
                    maxLength={220}
                  />
                  <S.Hint>
                    Use a named place, a measured distance, and a source. Do not rate a
                    neighborhood.
                  </S.Hint>
                  {fieldWarnings(warnings, 'accessDetail').map(warning => (
                    <S.FieldWarning key={warning.reason}>{warning.reason}</S.FieldWarning>
                  ))}
                </S.Field>
              </S.FieldGrid>
            </S.FormSection>
          </S.FormColumn>

          <S.DraftColumn aria-live="polite">
            <S.DraftCard>
              <S.DraftHeader>
                <h2>Your working draft</h2>
                <S.Status ready={ready} data-ready={ready}>
                  {status}
                </S.Status>
              </S.DraftHeader>

              <S.DraftBody>
                {draft ? (
                  <S.DraftText>
                    <strong>Property description draft</strong>
                    <p>{draft}</p>
                  </S.DraftText>
                ) : (
                  <S.EmptyState>
                    <FileTextIcon aria-hidden="true" />
                    <p>Add a few verified facts to begin your draft.</p>
                  </S.EmptyState>
                )}
              </S.DraftBody>

              <S.ButtonRow>
                <S.Button type="button" primary disabled={!draft} onClick={copyDraft}>
                  <ClipboardCopyIcon aria-hidden="true" /> Copy draft
                </S.Button>
                <S.Button type="button" onClick={printPlan}>
                  <PrinterIcon /> Print plan
                </S.Button>
              </S.ButtonRow>
              <S.LiveMessage role="status">{liveMessage}</S.LiveMessage>

              <S.Verification>
                <h3>Assumptions to verify</h3>
                <p>Missing sources and flagged wording stay visible here.</p>
                {verificationList.length ? (
                  <ul>
                    {verificationList.slice(0, 8).map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    <li>
                      Complete the final review below and have your agent check the draft.
                    </li>
                  </ul>
                )}
              </S.Verification>
            </S.DraftCard>
          </S.DraftColumn>
        </S.Workspace>
      </S.WorkspaceBand>

      <S.ReviewBand id="review" aria-labelledby="review-heading">
        <S.ReviewInner>
          <div>
            <S.SectionHeading id="review-heading">
              Check before you publish
            </S.SectionHeading>
            <S.SectionDescription>
              A final review helps keep the description specific, accurate, and neutral.
            </S.SectionDescription>
          </div>
          <S.ReviewChecks>
            {finalReviewItems.map(item => (
              <S.ReviewCheck key={item}>
                <input
                  type="checkbox"
                  checked={Boolean(finalReview[item])}
                  onChange={event =>
                    setFinalReview(current => ({
                      ...current,
                      [item]: event.target.checked,
                    }))
                  }
                />
                <span>{item}</span>
              </S.ReviewCheck>
            ))}
          </S.ReviewChecks>
          <S.ReviewHandoff>
            <div>
              <h3>Want a second set of eyes?</h3>
              <p>
                Copy your draft first. Nothing from this planner is sent when you choose
                to ask Becca about a listing plan.
              </p>
            </div>
            <S.HandoffLink href="/sell-with-us#seller-request">
              Ask about my listing plan <ArrowRightIcon aria-hidden="true" />
            </S.HandoffLink>
          </S.ReviewHandoff>
        </S.ReviewInner>
      </S.ReviewBand>

      <S.OrganizeSection id="organize" aria-labelledby="organize-heading">
        <S.OrganizeInner>
          <S.OrganizeHeader>
            <S.SectionHeading id="organize-heading">
              What to organize first
            </S.SectionHeading>
            <p>
              Use these rows as a private working list. Notes save only in this browser
              and do not become part of the description draft.
            </p>
          </S.OrganizeHeader>

          <S.PreparationList>
            {preparationItems.map(item => (
              <S.PreparationRow key={item.id}>
                <input
                  aria-label={`Mark ${item.title} complete`}
                  type="checkbox"
                  checked={Boolean(preparation[item.id])}
                  onChange={event =>
                    setPreparation(current => ({
                      ...current,
                      [item.id]: event.target.checked,
                    }))
                  }
                />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <S.Notes
                  aria-label={`Notes for ${item.title}`}
                  value={notes[item.id] || ''}
                  onChange={event =>
                    setNotes(current => ({ ...current, [item.id]: event.target.value }))
                  }
                  placeholder="Notes"
                  maxLength={800}
                />
              </S.PreparationRow>
            ))}
          </S.PreparationList>

          <S.FooterUtility>
            <p>
              This tool does not estimate value, recommend a price, or provide legal, tax,
              lending, disclosure, permit, or title advice.
            </p>
            <S.ResetButton type="button" onClick={resetPlanner}>
              Reset planner
            </S.ResetButton>
            <S.SellerLink href="/sell-with-us">
              Seller services <ArrowRightIcon aria-hidden="true" />
            </S.SellerLink>
          </S.FooterUtility>
        </S.OrganizeInner>
      </S.OrganizeSection>

      <S.SeoSection>
        <S.SeoInner>
          <h2>What makes a factual listing draft useful?</h2>
          <div>
            <p>
              A useful first draft separates physical property facts from marketing
              opinions. Record the source for measurements and dates, identify what still
              needs review, and keep included items distinct from permanent features.
            </p>
            <p>
              Housing advertising should describe the property without expressing a
              preference for who should live there. Review the official{' '}
              <a
                href="https://www.hud.gov/stat/fheo/rights-obligations"
                target="_blank"
                rel="noreferrer"
              >
                HUD fair housing guidance <ExternalLinkIcon aria-hidden="true" />
              </a>{' '}
              and ask your real estate professional to check local requirements and the
              final MLS version.
            </p>
          </div>
        </S.SeoInner>
      </S.SeoSection>

      <S.FaqSection aria-labelledby="planner-faq-heading">
        <S.FaqInner>
          <S.SectionHeading id="planner-faq-heading">
            Factual listing planner questions
          </S.SectionHeading>
          <S.FaqGrid>
            {listingPlannerFaq.map(item => (
              <S.FaqItem key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </S.FaqItem>
            ))}
          </S.FaqGrid>
        </S.FaqInner>
      </S.FaqSection>

      <style jsx global>{`
        @media print {
          body {
            overflow: visible !important;
          }

          nav,
          footer,
          .buyer-concierge,
          button,
          a[href='/sell-with-us'] {
            display: none !important;
          }

          main {
            background: #fff !important;
          }

          section,
          aside {
            break-inside: avoid;
          }
        }
      `}</style>
    </S.Page>
  )
}
