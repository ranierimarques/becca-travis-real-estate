import Link from 'next/link'
import { useState } from 'react'
import { MetaSEO } from '@/common'

const checklistSections = [
  {
    title: 'Before closing',
    items: [
      'Review your Closing Disclosure and compare it with the latest Loan Estimate.',
      'Confirm the closing date, time, location, and required identification with your closing provider.',
      'Ask your lender and closing provider for the final cash-to-close amount and approved payment method.',
      'Independently verify any wiring instructions using a trusted phone number you already have.',
      'Confirm insurance coverage, utility start dates, and service providers for the exact property address.',
      'Keep inspection reports, repair agreements, permits, and service records in one folder.',
    ],
  },
  {
    title: 'Final walk-through',
    items: [
      'Compare the home’s condition with the written agreement and any repair commitments.',
      'Check that agreed appliances and attached items remain, and note anything that differs from the agreement.',
      'Check the agreed fixtures and systems with the seller’s permission, and record questions for your agent.',
      'Confirm keys, garage remotes, access codes, and documents that will be delivered at closing.',
      'Ask your agent or closing provider how to handle an issue before signing or taking possession.',
    ],
  },
  {
    title: 'After closing',
    items: [
      'Save the signed closing package, title documents, insurance information, and lender contact details.',
      'Confirm when and where the deed will be recorded with your closing provider.',
      'Update your mailing address with the county tax office and verify the parcel account.',
      'Ask the county assessor whether you qualify for a homestead exemption and how to apply.',
      'Keep your inspection, repair, warranty, and maintenance records with the home documents.',
    ],
  },
]

const taxLinks = [
  {
    label: 'Alabama county tax offices and appraisal records',
    href: 'https://www.revenue.alabama.gov/property-tax/county-offices-appraisal-assessment-records/',
  },
  {
    label: 'Alabama property tax due dates and homestead information',
    href: 'https://www.revenue.alabama.gov/faqs/what-is-the-timetable-for-property-taxes/',
  },
  {
    label: 'Madison County GIS',
    href: 'https://www.madisoncountyal.gov/departments/public-works/gis',
  },
]

const utilityLinks = [
  {
    name: 'Huntsville Utilities',
    detail:
      'Start, stop, or transfer service. Confirm the address and required documents directly with the utility.',
    href: 'https://www.hsvutil.org/residential_services/start,_stop,_and_transfer_service.php',
  },
  {
    name: 'City of Madison provider directory',
    detail:
      'The city lists different service providers for addresses in Madison and Limestone counties.',
    href: 'https://www.madisonal.gov/299/Utilities-Other-Services',
  },
  {
    name: 'Madison Utilities',
    detail:
      'Water and wastewater service area lookup, new service, transfer, and stop requests.',
    href: 'https://madisonutilities.org/customer-service/request-new-service-setup/',
  },
  {
    name: 'Harvest-Monrovia Water and Sewer Authority',
    detail:
      'Contact the authority to check whether the property is in its service area and arrange service.',
    href: 'https://hmwater.org/',
  },
  {
    name: 'Athens Utilities',
    detail:
      'Residential service application and current requirements for Athens addresses.',
    href: 'https://athensalabama.us/506/Service-Application',
  },
]

export default function NorthAlabamaClosingChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const completedCount = Object.values(checked).filter(Boolean).length
  const totalCount = checklistSections.reduce(
    (total, section) => total + section.items.length,
    0
  )

  return (
    <main className="closing-page">
      <MetaSEO
        canonicalPath="/north-alabama-closing-checklist"
        title="North Alabama Home Closing and Utility Checklist | Becca Travis"
        description="A practical North Alabama home closing checklist for lender documents, final walk-through, utility setup, and Alabama property tax follow-up."
        image="/images/home-inspiration/porch-and-entry.webp"
        alt="Covered porch and front entry from Becca Travis’s home inspiration collection"
      />

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">North Alabama closing guide</p>
            <h1>From accepted offer to settled in.</h1>
            <p>
              Keep lender questions, the walk-through, utilities, and your first property
              tax follow-up in one practical checklist. Verify every property-specific
              detail with the professional or agency responsible for it.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#checklist">
                Start the checklist
              </a>
              <button type="button" onClick={() => window.print()}>
                Print this page
              </button>
            </div>
          </div>
          <aside className="progress-card" aria-live="polite">
            <span className="progress-label">Your checklist</span>
            <strong>
              {completedCount} of {totalCount}
            </strong>
            <p>
              Checked items stay in this page while it is open. Nothing is sent to Becca.
            </p>
            <div className="progress-track" aria-hidden="true">
              <span
                style={{
                  width: `${totalCount ? (completedCount / totalCount) * 100 : 0}%`,
                }}
              />
            </div>
          </aside>
        </div>
      </header>

      <nav className="jump-nav" aria-label="Closing checklist navigation">
        <a href="#checklist">Closing checklist</a>
        <a href="#local-utilities">Local utilities</a>
        <a href="#property-taxes">Alabama property taxes</a>
        <Link href="/north-alabama-property-research" legacyBehavior>
          <a>Property research</a>
        </Link>
      </nav>

      <section id="checklist" className="section checklist-section">
        <div className="section-heading">
          <h2>Use the agreement and your closing team as the source of truth.</h2>
          <p>
            Timelines and required steps vary by contract, lender, property, and closing
            provider. This list helps you remember what to ask and confirm.
          </p>
        </div>

        <div className="checklist-grid">
          {checklistSections.map((section, sectionIndex) => (
            <section className="checklist-group" key={section.title}>
              <span className="section-number">0{sectionIndex + 1}</span>
              <h3>{section.title}</h3>
              {section.items.map((item, itemIndex) => {
                const key = `${section.title}-${itemIndex}`
                return (
                  <label className="check-row" key={key}>
                    <input
                      type="checkbox"
                      checked={Boolean(checked[key])}
                      onChange={event =>
                        setChecked({ ...checked, [key]: event.target.checked })
                      }
                    />
                    <span>{item}</span>
                  </label>
                )
              })}
            </section>
          ))}
        </div>
      </section>

      <section id="local-utilities" className="section local-section">
        <div className="section-heading left-heading">
          <p className="eyebrow">A useful North Alabama detail</p>
          <h2>Confirm utility providers by address.</h2>
          <p>
            A community name or postal city does not identify every utility provider. The
            City of Madison, for example, lists different providers for Madison County and
            Limestone County addresses within the city. Use the official provider
            directory and confirm service for the exact property.
          </p>
        </div>
        <div className="utility-list">
          {utilityLinks.map(item => (
            <article className="utility-row" key={item.name}>
              <div>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </div>
              <a href={item.href} target="_blank" rel="noreferrer noopener">
                Open official service page <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="property-taxes" className="section tax-section">
        <div>
          <p className="eyebrow">After you take ownership</p>
          <h2>Put the county tax record on your calendar.</h2>
          <p>
            Alabama property taxes are due October 1 and are delinquent after December 31.
            A buyer should not assume the seller’s bill will predict the next bill. Check
            the parcel record with the county and ask the assessor about the applicable
            assessment and any homestead exemption.
          </p>
        </div>
        <ul>
          {taxLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer noopener">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing-next">
        <div>
          <p className="eyebrow">Keep planning with local details</p>
          <h2>Make your next question easier to answer.</h2>
          <p>
            Use Becca’s free tools to compare written loan offers or research an address
            before closing.
          </p>
        </div>
        <div className="next-links">
          <Link href="/mortgage-offer-comparison" legacyBehavior>
            <a>Compare mortgage offers</a>
          </Link>
          <Link href="/north-alabama-property-research" legacyBehavior>
            <a>Open the property research guide</a>
          </Link>
          <Link href="/contact-us?intent=closing-checklist" legacyBehavior>
            <a>Ask Becca a North Alabama question</a>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .closing-page {
          background: #fff;
          color: #30272c;
        }
        .hero {
          background: linear-gradient(120deg, #fbf2ee, #f6e8e1 62%, #fbf7f4);
          padding: 62px 24px;
        }
        .hero-inner {
          align-items: center;
          display: grid;
          gap: 64px;
          grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.6fr);
          margin: 0 auto;
          max-width: 1160px;
        }
        .hero-copy {
          max-width: 720px;
        }
        .eyebrow {
          color: #8d4967;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.11em;
          line-height: 1.4;
          margin: 0 0 14px;
          text-transform: uppercase;
        }
        h1 {
          color: #59223f;
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 500;
          letter-spacing: -0.04em;
          line-height: 1.06;
          margin: 0;
        }
        .hero-copy > p:not(.eyebrow) {
          color: #51474d;
          font-size: 17px;
          line-height: 1.7;
          margin: 20px 0 0;
          max-width: 660px;
        }
        .hero-actions {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 26px;
        }
        .hero-actions a,
        .hero-actions button {
          border: 1px solid #6d294c;
          border-radius: 999px;
          color: #6d294c;
          cursor: pointer;
          display: inline-flex;
          font: inherit;
          font-size: 13px;
          font-weight: 600;
          justify-content: center;
          padding: 12px 17px;
          text-decoration: none;
        }
        .hero-actions .primary-link {
          background: #6d294c;
          color: #fff;
        }
        .progress-card {
          background: #fff;
          border: 1px solid rgba(109, 41, 76, 0.12);
          border-radius: 16px;
          box-shadow: 0 14px 40px rgba(67, 35, 51, 0.06);
          padding: 25px;
        }
        .progress-label {
          color: #8d4967;
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .progress-card strong {
          color: #59223f;
          display: block;
          font-size: 36px;
          font-weight: 500;
          letter-spacing: -0.03em;
          margin-top: 10px;
        }
        .progress-card p {
          color: #655a60;
          font-size: 13px;
          line-height: 1.6;
          margin: 8px 0 16px;
        }
        .progress-track {
          background: #f0e6eb;
          border-radius: 999px;
          height: 8px;
          overflow: hidden;
        }
        .progress-track span {
          background: #8d4967;
          border-radius: inherit;
          display: block;
          height: 100%;
          transition: width 160ms ease;
        }
        .jump-nav {
          background: rgba(255, 255, 255, 0.96);
          border-bottom: 1px solid #eee6e9;
          border-top: 1px solid #eee6e9;
          display: flex;
          gap: 28px;
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
          padding: 68px 24px;
          scroll-margin-top: 70px;
        }
        .section-heading {
          margin: 0 auto 32px;
          max-width: 760px;
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
          font-size: 15px;
          line-height: 1.7;
          margin: 12px auto 0;
        }
        .checklist-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .checklist-group {
          border-top: 2px solid #8d4967;
          padding: 20px 4px 0;
        }
        .section-number {
          color: #ad7b91;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }
        .checklist-group h3 {
          color: #3a2d33;
          font-size: 21px;
          font-weight: 600;
          margin: 8px 0 18px;
        }
        .check-row {
          align-items: flex-start;
          border-top: 1px solid #eee6e9;
          color: #51474d;
          display: flex;
          font-size: 13px;
          gap: 11px;
          line-height: 1.6;
          padding: 13px 0;
        }
        .check-row input {
          accent-color: #6d294c;
          flex: 0 0 auto;
          height: 17px;
          margin: 2px 0 0;
          width: 17px;
        }
        .check-row input:checked + span {
          color: #8a7b82;
          text-decoration: line-through;
          text-decoration-thickness: 1px;
        }
        .local-section {
          background: #fcfafb;
          max-width: none;
          padding-left: max(24px, calc((100vw - 1112px) / 2));
          padding-right: max(24px, calc((100vw - 1112px) / 2));
        }
        .left-heading {
          margin-left: 0;
          text-align: left;
        }
        .left-heading > p:last-child {
          margin-left: 0;
          max-width: 780px;
        }
        .utility-list {
          border-top: 1px solid #e8dce2;
        }
        .utility-row {
          align-items: center;
          border-bottom: 1px solid #e8dce2;
          display: flex;
          gap: 24px;
          justify-content: space-between;
          padding: 18px 0;
        }
        .utility-row h3 {
          color: #3a2d33;
          font-size: 17px;
          font-weight: 600;
          margin: 0;
        }
        .utility-row p {
          color: #655a60;
          font-size: 13px;
          line-height: 1.6;
          margin: 5px 0 0;
          max-width: 700px;
        }
        .utility-row a,
        .tax-section a,
        .next-links a {
          color: #6d294c;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.5;
          text-underline-offset: 4px;
        }
        .utility-row a {
          flex: 0 0 auto;
        }
        .tax-section {
          align-items: center;
          display: grid;
          gap: 48px;
          grid-template-columns: minmax(0, 1.2fr) minmax(260px, 0.8fr);
        }
        .tax-section > div p:last-child {
          color: #655a60;
          font-size: 15px;
          line-height: 1.75;
          margin: 16px 0 0;
        }
        .tax-section ul {
          display: grid;
          gap: 14px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .closing-next {
          align-items: center;
          background: #f7f0f3;
          display: flex;
          gap: 32px;
          justify-content: space-between;
          padding: 38px max(24px, calc((100vw - 1112px) / 2));
        }
        .closing-next h2 {
          font-size: 27px;
        }
        .closing-next p:not(.eyebrow) {
          color: #655a60;
          font-size: 13px;
          line-height: 1.6;
          margin: 8px 0 0;
        }
        .next-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
          justify-content: flex-end;
        }
        @media (max-width: 820px) {
          .hero-inner,
          .tax-section {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .checklist-grid {
            grid-template-columns: 1fr;
          }
          .checklist-group {
            padding-top: 16px;
          }
          .closing-next {
            align-items: flex-start;
            flex-direction: column;
          }
          .next-links {
            justify-content: flex-start;
          }
        }
        @media (max-width: 620px) {
          .hero {
            padding: 48px 20px;
          }
          .jump-nav {
            justify-content: flex-start;
          }
          .section {
            padding: 48px 20px;
          }
          .utility-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }
          .local-section {
            padding-left: 20px;
            padding-right: 20px;
          }
          .closing-next {
            padding: 32px 20px;
          }
        }
        @media print {
          .hero-actions,
          .jump-nav,
          .closing-next {
            display: none;
          }
          .hero,
          .section,
          .local-section {
            padding: 18px 0;
          }
          .hero-inner {
            display: block;
          }
          .progress-card {
            margin-top: 14px;
          }
          .checklist-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .checklist-group,
          .utility-row {
            break-inside: avoid;
          }
          .check-row {
            padding: 7px 0;
          }
        }
      `}</style>
    </main>
  )
}
