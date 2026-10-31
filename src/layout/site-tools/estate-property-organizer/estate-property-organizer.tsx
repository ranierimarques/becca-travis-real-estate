import Link from 'next/link'
import { useMemo, useState } from 'react'

const propertyProtectionActUrl =
  'https://alison.legislature.state.al.us/files/pdf/SearchableInstruments/2026RS/SB292-enr.pdf'
const propertyTaxTimelineUrl =
  'https://www.revenue.alabama.gov/faqs/what-is-the-timetable-for-property-taxes/'

type DeedStatus = 'sole' | 'multiple' | 'trust' | 'unsure'
type AuthorityStatus = 'letters' | 'trust' | 'survivorship' | 'none'
type SignerLocation = 'alabama' | 'out-of-state' | 'multiple'
type Occupancy = 'owner' | 'vacant' | 'rental' | 'unsure'
type TaxStatus = 'paid' | 'due' | 'unknown'
type PropertyStatus = 'ready' | 'cleanout' | 'repairs' | 'unsure'

type Roadmap = {
  documents: string[]
  professionals: string[]
  propertySteps: string[]
  cautions: string[]
}

type SelectFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
  options: Array<{ value: string; label: string }>
}

function SelectField({ label, value, onChange, options }: SelectFieldProps) {
  return (
    <>
      <label className="select-field">
        <span>{label}</span>
        <select value={value} onChange={event => onChange(event.target.value)}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <style jsx>{`
        .select-field {
          display: grid;
          gap: 7px;
          margin-top: 15px;
          color: #f8edf1;
          font-size: 12px;
          font-weight: 650;
        }
        select {
          width: 100%;
          min-height: 44px;
          padding: 9px 36px 9px 11px;
          color: #342a2f;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 8px;
          font: inherit;
          font-size: 13px;
        }
        select:focus {
          outline: 3px solid rgba(245, 214, 201, 0.55);
          outline-offset: 2px;
        }
      `}</style>
    </>
  )
}

function addDeedGuidance(roadmap: Roadmap, status: DeedStatus) {
  switch (status) {
    case 'trust':
      roadmap.documents.push(
        'The trust document or a certification of trust, plus any amendments and successor-trustee records'
      )
      roadmap.cautions.push(
        'A deed showing a trust does not by itself answer who can sign today. Ask the attorney and title professional to review the trust documents.'
      )
      break
    case 'multiple':
      roadmap.documents.push(
        'Records identifying every person or entity shown on the deed'
      )
      roadmap.cautions.push(
        'Multiple names on a deed can create different signing requirements. Do not assume one owner can act for everyone.'
      )
      break
    case 'unsure':
      roadmap.documents.push(
        'A current deed copy obtained from the county recording office'
      )
      roadmap.cautions.push(
        'Confirm the recorded ownership before signing a listing agreement or sales contract.'
      )
      break
    default:
      break
  }
}

function addAuthorityGuidance(roadmap: Roadmap, status: AuthorityStatus) {
  switch (status) {
    case 'letters':
      roadmap.documents.push(
        'Certified, current Letters Testamentary or Letters of Administration and the related probate case information'
      )
      break
    case 'trust':
      roadmap.documents.push(
        'Documents showing the current trustee and the trustee’s authority'
      )
      break
    case 'survivorship':
      roadmap.documents.push(
        'The deed and death certificate for professional review of any survivorship language'
      )
      roadmap.cautions.push(
        'Survivorship language must be reviewed in the actual deed. The selection here is not a title conclusion.'
      )
      break
    default:
      roadmap.cautions.push(
        'Authority to list or sell has not been established. Confirm it with an attorney and title professional before anyone signs.'
      )
  }
}

function addRemoteSignerGuidance(roadmap: Roadmap, location: SignerLocation) {
  if (location === 'alabama') return
  roadmap.documents.push(
    'Current government-issued identification for each remote signer'
  )
  roadmap.professionals.push(
    'The closing professional early, to coordinate secure identity checks, notarization, and delivery of originals if required'
  )
  roadmap.cautions.push(
    'Alabama’s Property Protection Act took effect October 1, 2026. It adds identity and ownership-record requirements in specified remote-seller situations. Share identity documents only through the secure method a verified professional provides.'
  )
}

function addOccupancyGuidance(roadmap: Roadmap, occupancy: Occupancy) {
  switch (occupancy) {
    case 'vacant':
      roadmap.propertySteps.push(
        'Tell the insurer the home is vacant and ask what inspections, winterization, or security measures are required',
        'Create a recurring property-check schedule and document each visit'
      )
      roadmap.cautions.push(
        'A vacant, non-owner-occupied, unencumbered Class III property can trigger additional settlement-agent identity verification under the Property Protection Act.'
      )
      break
    case 'rental':
      roadmap.documents.push(
        'The lease, deposit ledger, rent records, and tenant notices, if any'
      )
      roadmap.professionals.push(
        'An Alabama attorney to review the lease and any notice or possession questions before marketing'
      )
      break
    case 'unsure':
      roadmap.propertySteps.push(
        'Confirm who currently occupies or regularly checks the property'
      )
      break
    default:
      break
  }
}

function addTaxGuidance(roadmap: Roadmap, status: TaxStatus) {
  switch (status) {
    case 'due':
      roadmap.propertySteps.push(
        'Confirm the exact tax amount and payment status with the county revenue office before relying on this plan'
      )
      break
    case 'unknown':
      roadmap.propertySteps.push(
        'Verify the parcel-specific tax balance; Alabama property taxes are due October 1 and become delinquent January 1'
      )
      break
    default:
      break
  }
}

function addPropertyGuidance(roadmap: Roadmap, status: PropertyStatus) {
  switch (status) {
    case 'cleanout':
      roadmap.propertySteps.push(
        'Separate personal papers, valuables, family keepsakes, and items requiring appraisal before scheduling a cleanout'
      )
      break
    case 'repairs':
      roadmap.propertySteps.push(
        'Document condition and compare a limited-preparation option with an as-is option before approving repairs'
      )
      break
    case 'ready':
      roadmap.propertySteps.push(
        'Confirm access, keys, disclosures, and any known property records before photography or showings'
      )
      break
    default:
      roadmap.propertySteps.push(
        'Walk through the property with a trusted professional before choosing cleanout, repairs, or an as-is approach'
      )
  }
}

export function EstatePropertyOrganizer() {
  const [deedStatus, setDeedStatus] = useState<DeedStatus>('unsure')
  const [authorityStatus, setAuthorityStatus] = useState<AuthorityStatus>('none')
  const [signerLocation, setSignerLocation] = useState<SignerLocation>('alabama')
  const [occupancy, setOccupancy] = useState<Occupancy>('unsure')
  const [taxStatus, setTaxStatus] = useState<TaxStatus>('unknown')
  const [propertyStatus, setPropertyStatus] = useState<PropertyStatus>('unsure')

  const roadmap = useMemo(() => {
    const nextRoadmap: Roadmap = {
      documents: [
        'A copy of the most recent recorded deed',
        'The latest property-tax record and any mortgage or lien information you have',
        'Homeowners-insurance and utility details for the property',
      ],
      professionals: [
        'An Alabama attorney or the appropriate probate court to confirm who may act',
        'A title or closing professional to review ownership, liens, and signing requirements',
      ],
      propertySteps: [
        'Keep appropriate insurance and essential utilities in place while authority is confirmed',
        'Inventory belongings and secure keys, mail, records, and access to the home',
      ],
      cautions: [],
    }

    addDeedGuidance(nextRoadmap, deedStatus)
    addAuthorityGuidance(nextRoadmap, authorityStatus)
    addRemoteSignerGuidance(nextRoadmap, signerLocation)
    addOccupancyGuidance(nextRoadmap, occupancy)
    addTaxGuidance(nextRoadmap, taxStatus)
    addPropertyGuidance(nextRoadmap, propertyStatus)
    nextRoadmap.professionals.push(
      'A CPA or tax professional for estate, basis, income-tax, or sale-proceeds questions',
      'An insurance professional before changing coverage or leaving the home vacant'
    )

    return nextRoadmap
  }, [authorityStatus, deedStatus, occupancy, propertyStatus, signerLocation, taxStatus])

  return (
    <section id="estate-property-organizer" className="estate-section">
      <div className="section-intro">
        <p className="eyebrow">Inherited and estate property</p>
        <h2>Organize the questions before anyone signs.</h2>
        <p>
          Choose what you know today. The organizer creates a preparation roadmap without
          deciding title, probate authority, tax consequences, or who has legal power to
          sell.
        </p>
      </div>

      <div className="workspace">
        <form className="controls" onSubmit={event => event.preventDefault()}>
          <div className="control-heading">
            <span>01</span>
            <div>
              <h3>Property snapshot</h3>
              <p>Do not enter names, addresses, account numbers, or ID details.</p>
            </div>
          </div>

          <SelectField
            label="How does the deed appear to be held?"
            value={deedStatus}
            onChange={value => setDeedStatus(value as DeedStatus)}
            options={[
              { value: 'unsure', label: 'I am not sure' },
              { value: 'sole', label: 'One person' },
              { value: 'multiple', label: 'Multiple people or entities' },
              { value: 'trust', label: 'A trust' },
            ]}
          />
          <SelectField
            label="What authority document is available?"
            value={authorityStatus}
            onChange={value => setAuthorityStatus(value as AuthorityStatus)}
            options={[
              { value: 'none', label: 'None or not confirmed' },
              { value: 'letters', label: 'Probate letters' },
              { value: 'trust', label: 'Trustee documents' },
              { value: 'survivorship', label: 'Possible survivorship deed' },
            ]}
          />
          <SelectField
            label="Where are the potential signers?"
            value={signerLocation}
            onChange={value => setSignerLocation(value as SignerLocation)}
            options={[
              { value: 'alabama', label: 'All in Alabama' },
              { value: 'out-of-state', label: 'Outside Alabama' },
              { value: 'multiple', label: 'Multiple states or locations' },
            ]}
          />
          <SelectField
            label="How is the property being used?"
            value={occupancy}
            onChange={value => setOccupancy(value as Occupancy)}
            options={[
              { value: 'unsure', label: 'I am not sure' },
              { value: 'owner', label: 'Occupied by an owner or family' },
              { value: 'vacant', label: 'Vacant' },
              { value: 'rental', label: 'Rented or tenant occupied' },
            ]}
          />
          <SelectField
            label="What is known about property taxes?"
            value={taxStatus}
            onChange={value => setTaxStatus(value as TaxStatus)}
            options={[
              { value: 'unknown', label: 'Status unknown' },
              { value: 'paid', label: 'Reported current' },
              { value: 'due', label: 'A balance may be due' },
            ]}
          />
          <SelectField
            label="What does the home need next?"
            value={propertyStatus}
            onChange={value => setPropertyStatus(value as PropertyStatus)}
            options={[
              { value: 'unsure', label: 'A condition review' },
              { value: 'ready', label: 'Likely ready to prepare' },
              { value: 'cleanout', label: 'Sorting or cleanout' },
              { value: 'repairs', label: 'Repair decisions' },
            ]}
          />

          <p className="local-note">
            Selections stay in this browser page. This tool does not create an attorney,
            title, fiduciary, or agency relationship.
          </p>
        </form>

        <div className="roadmap" aria-live="polite">
          <div className="roadmap-heading">
            <div>
              <p className="eyebrow">Your preparation roadmap</p>
              <h3>Four conversations to organize</h3>
            </div>
            <span>Updated as you choose</span>
          </div>

          <article className="roadmap-card">
            <span className="number">01</span>
            <div>
              <h4>Records to gather</h4>
              <ul>
                {roadmap.documents.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="roadmap-card">
            <span className="number">02</span>
            <div>
              <h4>Professionals to ask</h4>
              <ul>
                {roadmap.professionals.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="roadmap-card">
            <span className="number">03</span>
            <div>
              <h4>Property steps</h4>
              <ul>
                {roadmap.propertySteps.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="roadmap-card caution-card">
            <span className="number">04</span>
            <div>
              <h4>Questions not to assume</h4>
              <ul>
                {roadmap.cautions.length > 0 ? (
                  roadmap.cautions.map(item => <li key={item}>{item}</li>)
                ) : (
                  <li>
                    Even when records appear straightforward, confirm current authority,
                    ownership, and signing requirements before marketing or contracting.
                  </li>
                )}
              </ul>
            </div>
          </article>

          <div className="source-box">
            <p>
              Alabama&apos;s Property Protection Act is effective October 1, 2026. Alabama
              property taxes are due October 1 and become delinquent January 1. Review the
              official text and confirm the parcel-specific facts with the responsible
              professionals.
            </p>
            <div>
              <a href={propertyProtectionActUrl} target="_blank" rel="noreferrer">
                Property Protection Act ↗
              </a>
              <a href={propertyTaxTimelineUrl} target="_blank" rel="noreferrer">
                Alabama tax timetable ↗
              </a>
            </div>
          </div>

          <div className="handoff">
            <div>
              <strong>
                Ready to discuss the property condition and sale preparation?
              </strong>
              <p>
                Becca can help organize the real-estate side after the appropriate legal
                and title professionals confirm who can act.
              </p>
            </div>
            <Link className="handoff-link" href="/contact-us?intent=estate-property">
              Ask Becca about the property
            </Link>
          </div>
        </div>
      </div>

      <p className="disclosure">
        General educational information only—not legal, probate, title, tax, insurance, or
        financial advice. Rules and facts vary. Do not sign, transfer money, send identity
        documents, clear belongings, or change coverage based only on this organizer.
      </p>

      <style jsx>{`
        .estate-section {
          scroll-margin-top: 76px;
          padding: 82px max(24px, calc((100vw - 1160px) / 2));
          color: #332b30;
          background: #f7eff2;
        }
        .section-intro {
          max-width: 760px;
          margin: 0 auto 34px;
          text-align: center;
        }
        .eyebrow {
          margin: 0 0 10px;
          color: #9d446e;
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
          grid-template-columns: minmax(290px, 0.72fr) minmax(0, 1.28fr);
          overflow: hidden;
          background: #fff;
          border: 1px solid #e0d3d9;
          border-radius: 18px;
          box-shadow: 0 18px 52px rgba(55, 29, 41, 0.09);
        }
        .controls {
          padding: 30px;
          background: #58243c;
        }
        .control-heading {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          margin-bottom: 23px;
        }
        .control-heading > span {
          display: grid;
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          place-items: center;
          color: #58243c;
          background: #f5d6c9;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 750;
        }
        .controls h3 {
          margin: 0;
          color: #fff;
          font-size: 22px;
          font-weight: 650;
        }
        .control-heading p {
          margin: 5px 0 0;
          color: #e4cfd8;
          font-size: 11px;
          line-height: 1.5;
        }
        .select-field {
          display: grid;
          gap: 7px;
          margin-top: 15px;
          color: #f8edf1;
          font-size: 12px;
          font-weight: 650;
        }
        select {
          width: 100%;
          min-height: 44px;
          padding: 9px 36px 9px 11px;
          color: #342a2f;
          background: #fff;
          border: 1px solid rgba(255, 255, 255, 0.35);
          border-radius: 8px;
          font: inherit;
          font-size: 13px;
        }
        select:focus {
          outline: 3px solid rgba(245, 214, 201, 0.55);
          outline-offset: 2px;
        }
        .local-note {
          margin: 22px 0 0;
          padding-top: 18px;
          color: #d9beca;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          font-size: 10px;
          line-height: 1.6;
        }
        .roadmap {
          min-width: 0;
          padding: 32px;
        }
        .roadmap-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e9e0e4;
        }
        .roadmap-heading h3 {
          margin: 0;
          color: #3a3035;
          font-size: 25px;
          font-weight: 650;
        }
        .roadmap-heading > span {
          padding: 7px 10px;
          color: #6c3b54;
          background: #f5e9ef;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }
        .roadmap-card {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 16px;
          padding: 22px 0;
          border-bottom: 1px solid #eee6e9;
        }
        .number {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          color: #fff;
          background: #9d446e;
          border-radius: 50%;
          font-size: 11px;
          font-weight: 750;
        }
        h4 {
          margin: 2px 0 0;
          color: #4b3440;
          font-size: 16px;
          font-weight: 750;
        }
        ul {
          display: grid;
          gap: 7px;
          padding: 0;
          margin: 11px 0 0;
          list-style: none;
        }
        li {
          position: relative;
          padding-left: 17px;
          color: #675c62;
          font-size: 12px;
          line-height: 1.55;
        }
        li::before {
          content: '✓';
          position: absolute;
          top: 0;
          left: 0;
          color: #9d446e;
          font-weight: 800;
        }
        .caution-card {
          margin: 18px -14px 0;
          padding: 20px 14px;
          background: #fff8f3;
          border: 1px solid #f0ded5;
          border-radius: 11px;
        }
        .caution-card .number {
          color: #6a3425;
          background: #f5d6c9;
        }
        .caution-card li::before {
          content: '!';
          color: #b05d3e;
        }
        .source-box {
          margin-top: 18px;
          padding: 17px 18px;
          background: #fbf8f9;
          border: 1px solid #ebe1e5;
          border-radius: 10px;
        }
        .source-box p {
          margin: 0;
          color: #6c6167;
          font-size: 11px;
          line-height: 1.6;
        }
        .source-box div {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 10px;
        }
        .source-box a {
          color: #6d294c;
          font-size: 11px;
          font-weight: 700;
          text-underline-offset: 3px;
        }
        .handoff {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e9e0e4;
        }
        .handoff strong {
          color: #4b3440;
          font-size: 14px;
        }
        .handoff p {
          max-width: 490px;
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
          min-height: 44px;
          padding: 0 17px;
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
        }
        @media (max-width: 640px) {
          .estate-section {
            padding: 60px 18px;
          }
          .workspace {
            border-radius: 13px;
          }
          .controls,
          .roadmap {
            padding: 22px 18px;
          }
          .roadmap-heading,
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
