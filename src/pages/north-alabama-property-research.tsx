import Link from 'next/link'
import { Image, MetaSEO } from '@/common'

const sources = {
  huntsvilleProperty: 'https://maps.huntsvilleal.gov/propertydetail/',
  huntsvilleGis: 'https://www.huntsvilleal.gov/development/building-construction/gis/',
  madisonGis: 'https://www.madisoncountyal.gov/departments/public-works/gis',
  madisonTax:
    'https://www.madisoncountyal.gov/departments/tax-collector/current-year-real-and-personal-proporty-tax-information',
  madisonHomestead:
    'https://www.madisoncountyal.gov/departments/tax-assessor/homestead-exemptions',
  alabamaTaxDates:
    'https://www.revenue.alabama.gov/faqs/what-is-the-timetable-for-property-taxes/',
  alabamaTaxChanges:
    'https://www.revenue.alabama.gov/property-tax/7-cap-information-hb73-act-2024-344/',
  fema: 'https://msc.fema.gov/portal/search',
  census: 'https://geocoding.geo.census.gov/geocoder/',
}

const researchSteps = [
  {
    number: '01',
    visualAction: 'Explore the property map',
    title: 'Locate the parcel and jurisdiction',
    description:
      'Search by the exact street address or parcel number. Save the parcel ID, map view, and the date you checked. A postal city name does not by itself confirm which city, county, or taxing district serves a property.',
    links: [
      { label: 'Huntsville property detail search', href: sources.huntsvilleProperty },
      { label: 'Huntsville GIS maps and data', href: sources.huntsvilleGis },
      { label: 'Madison County GIS', href: sources.madisonGis },
      { label: 'Census address geocoder', href: sources.census },
    ],
  },
  {
    number: '02',
    visualAction: 'Explore property tax dates',
    title: 'Check taxes and exemptions',
    description:
      'Look up the parcel’s current record, then ask the county assessor how a purchase or a change in ownership may affect the next assessment. Do not treat the current owner’s bill as a quote for your future taxes.',
    links: [
      { label: 'Alabama property tax dates', href: sources.alabamaTaxDates },
      {
        label: 'Alabama reassessment information for buyers',
        href: sources.alabamaTaxChanges,
      },
      { label: 'Madison County tax record search', href: sources.madisonTax },
      { label: 'Madison County homestead exemptions', href: sources.madisonHomestead },
    ],
  },
  {
    number: '03',
    visualAction: 'Open the FEMA flood map',
    title: 'Review mapped flood hazards',
    description:
      'Enter the property address in FEMA’s official map service and note the current map panel and date. A map is one part of due diligence. Ask an insurance professional about the specific structure and check grading, drainage, and prior water history with the right records and experts.',
    links: [{ label: 'FEMA Flood Map Service Center', href: sources.fema }],
  },
  {
    number: '04',
    visualAction: 'Explore school resources',
    title: 'Verify schools and service providers',
    description:
      'Confirm school assignment, water, sewer, electric, and waste service directly for the address. Boundaries and providers can change within the same named community, so verify with the responsible district or utility before making a decision.',
    links: [
      {
        label: 'North Alabama school-zone resources',
        href: '/areas#school-zones',
        internal: true,
      },
      {
        label: 'Huntsville address and utilities detail',
        href: sources.huntsvilleProperty,
      },
      { label: 'Compare North Alabama communities', href: '/areas', internal: true },
    ],
  },
]

export default function NorthAlabamaPropertyResearchPage() {
  return (
    <main className="research-page">
      <MetaSEO
        canonicalPath="/north-alabama-property-research"
        title="North Alabama Property Research Guide | Becca Travis"
        description="Use official North Alabama parcel, tax, flood, school, and utility resources to research a property address before you buy."
        image="/images/home-inspiration/porch-and-entry.webp"
        alt="Home with a broad covered porch from Becca Travis’s home inspiration collection"
      />

      <header className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">A North Alabama buyer resource</p>
            <h1>Research the address before you fall for the house.</h1>
            <p className="hero-description">
              A listing tells you what is being sold. An address search helps you ask
              better questions about the parcel, taxes, flood maps, schools, and services
              around it.
            </p>
            <div className="hero-actions">
              <Link href="/property-intel" legacyBehavior>
                <a className="primary-link">Check an address</a>
              </Link>
              <a className="primary-link" href="#research-checklist">
                Start the address checklist
              </a>
              <Link href="/planning-tools" legacyBehavior>
                <a>Open the free planning tools</a>
              </Link>
            </div>
          </div>
          <figure className="hero-image">
            <div className="photo-frame">
              <Image
                src="/images/home-inspiration/porch-and-entry.webp"
                alt="A home with a broad covered porch and welcoming front entry"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 48vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <figcaption>Home style photograph from Becca’s collection</figcaption>
          </figure>
        </div>
      </header>

      <section id="research-checklist" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">A practical research file</p>
          <h2>Four checks to make before you write an offer</h2>
          <p>
            Start with the official record for the exact property, not a neighborhood
            average. These links open public government resources. The notes you enter in
            Becca’s calculators stay in your browser and are not submitted to her.
          </p>
          <p className="source-note">
            <time dateTime="2026-10-30">
              Official resource links checked October 30, 2026
            </time>
            . Confirm property-specific details with the responsible agency before relying
            on them.
          </p>
        </div>

        <div className="research-grid">
          {researchSteps.map(step => (
            <article className="research-card" key={step.number}>
              <a
                className={`research-visual visual-${step.number}`}
                href={step.links[0].href}
                target={step.links[0].href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer noopener"
                aria-label={`${step.visualAction}${
                  step.links[0].href.startsWith('http') ? ' (opens in a new tab)' : ''
                }`}
              >
                <span>
                  {step.visualAction} <span aria-hidden="true">↗</span>
                </span>
              </a>
              <div className="card-copy">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ul>
                  {step.links.map(link =>
                    'internal' in link ? (
                      <li key={link.href}>
                        <Link href={link.href} legacyBehavior>
                          <a>{link.label}</a>
                        </Link>
                      </li>
                    ) : (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer noopener">
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside className="tax-note">
          <div>
            <p className="eyebrow">Alabama tax calendar</p>
            <h2>Save the dates, then confirm the parcel record.</h2>
            <p>
              Alabama property taxes are due October 1 and become delinquent after
              December 31. A homestead exemption must be claimed when eligible. Check the
              current rules with the county assessor for the property’s county.
            </p>
          </div>
          <a href={sources.alabamaTaxDates} target="_blank" rel="noreferrer noopener">
            Read Alabama Department of Revenue guidance <span aria-hidden="true">↗</span>
          </a>
        </aside>

        <div className="questions">
          <h2>Questions buyers often miss</h2>
          <details>
            <summary>Does the mailing city tell me the tax jurisdiction?</summary>
            <p>
              No. A postal city name is not a parcel boundary. Check the city and county
              maps, then confirm the taxing district with the assessor or tax collector.
            </p>
          </details>
          <details>
            <summary>Can I use the seller’s tax bill to estimate my future bill?</summary>
            <p>
              Use it as background only. Alabama’s Department of Revenue says buyers
              should not assume taxes will stay the same after a change in ownership. Ask
              the county assessor for a property-specific estimate.
            </p>
          </details>
          <details>
            <summary>
              Does a FEMA map showing a lower-risk zone mean a home cannot flood?
            </summary>
            <p>
              No. FEMA’s map is an important official source for mapped hazards, but it is
              not a promise that a particular home cannot flood. Review the property’s
              drainage and history, and discuss coverage with an insurance professional.
            </p>
          </details>
        </div>
      </section>

      <section className="next-steps">
        <div>
          <p className="eyebrow">Keep your research organized</p>
          <h2>Bring the right questions into your next conversation.</h2>
          <p>
            Record the address, parcel number, source links, and the date you checked each
            record. Then compare costs and neighborhoods with a clear set of assumptions.
          </p>
        </div>
        <div className="next-links">
          <Link href="/planning-tools" legacyBehavior>
            <a>Use the buyer worksheets</a>
          </Link>
          <Link href="/mortgage-offer-comparison" legacyBehavior>
            <a>Compare mortgage offers</a>
          </Link>
          <Link href="/north-alabama-closing-checklist" legacyBehavior>
            <a>Open the closing checklist</a>
          </Link>
          <Link href="/areas" legacyBehavior>
            <a>Browse areas and school-zone resources</a>
          </Link>
          <Link href="/contact-us?intent=property-research" legacyBehavior>
            <a>Ask Becca about your search</a>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .research-page {
          background: #fff;
          color: #30272c;
        }
        .hero {
          background: linear-gradient(120deg, #fbf2ee, #f6e8e1 62%, #fbf7f4);
          padding: 64px 24px 58px;
        }
        .hero-inner {
          align-items: center;
          display: grid;
          gap: 54px;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
          margin: 0 auto;
          max-width: 1160px;
        }
        .hero-copy {
          max-width: 620px;
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
        .hero-description {
          color: #51474d;
          font-size: 17px;
          line-height: 1.7;
          margin: 20px 0 0;
          max-width: 600px;
        }
        .hero-actions {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 28px;
        }
        .hero-actions a,
        .next-links a {
          color: #6d294c;
          font-size: 14px;
          font-weight: 600;
          text-underline-offset: 4px;
        }
        .hero-actions .primary-link {
          background: #6d294c;
          border-radius: 999px;
          color: #fff;
          padding: 13px 18px;
          text-decoration: none;
        }
        .hero-image {
          margin: 0;
        }
        .photo-frame {
          aspect-ratio: 1.48;
          border-radius: 12px;
          box-shadow: 0 18px 45px rgba(67, 35, 51, 0.12);
          overflow: hidden;
          position: relative;
        }
        .hero-image figcaption {
          color: #76676f;
          font-size: 11px;
          margin-top: 9px;
          text-align: right;
        }
        .content-section {
          margin: 0 auto;
          max-width: 1160px;
          padding: 72px 24px 78px;
        }
        .section-heading {
          margin: 0 auto 36px;
          max-width: 760px;
          text-align: center;
        }
        h2 {
          color: #3a2d33;
          font-size: clamp(28px, 3.3vw, 38px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.16;
          margin: 0;
        }
        .section-heading > p:last-child,
        .tax-note p:not(.eyebrow),
        .next-steps p:not(.eyebrow) {
          color: #655a60;
          font-size: 15px;
          line-height: 1.7;
          margin: 14px 0 0;
        }
        .section-heading .source-note {
          color: #7a6d74;
          font-size: 12px;
          margin-top: 9px;
        }
        .research-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .research-card {
          background: #fff;
          border: 1px solid #eadfe4;
          border-radius: 16px;
          box-shadow: 0 10px 32px rgba(55, 29, 41, 0.045);
          overflow: hidden;
        }
        .research-visual {
          align-items: flex-end;
          aspect-ratio: 1.9;
          background-size: cover;
          background-position: center;
          display: flex;
          padding: 16px;
          transition: filter 180ms ease;
        }
        .visual-01 {
          background-image: url('/images/home-inspiration/contemporary-exterior.webp');
        }
        .visual-02 {
          background-image: url('/images/home-inspiration/kitchen-and-gathering.webp');
        }
        .visual-03 {
          background-image: url('/images/home-inspiration/country-setting.webp');
        }
        .visual-04 {
          background-image: url('/images/home-inspiration/porch-and-entry.webp');
        }
        .research-visual > span {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 999px;
          box-shadow: 0 3px 14px rgba(55, 29, 41, 0.12);
          color: #59223f;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 13px;
        }
        .research-visual:hover {
          filter: brightness(0.94);
        }
        .research-visual:focus-visible {
          outline: 3px solid #6d294c;
          outline-offset: -4px;
        }
        .card-copy {
          padding: 25px;
        }
        .step-number {
          align-items: center;
          background: #f7e9ef;
          border-radius: 50%;
          color: #6d294c;
          display: inline-flex;
          font-size: 12px;
          font-weight: 700;
          height: 34px;
          justify-content: center;
          width: 34px;
        }
        .research-card h3 {
          color: #46293a;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
          margin: 17px 0 0;
        }
        .research-card p {
          color: #645961;
          font-size: 14px;
          line-height: 1.68;
          margin: 10px 0 0;
        }
        .research-card ul {
          border-top: 1px solid #eee6e9;
          display: grid;
          gap: 9px;
          list-style: none;
          margin: 18px 0 0;
          padding: 16px 0 0;
        }
        .research-card a,
        .tax-note > a {
          color: #6d294c;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.5;
          text-underline-offset: 3px;
        }
        .tax-note {
          align-items: center;
          background: #f8f1f4;
          border: 1px solid #efdee6;
          border-radius: 18px;
          display: flex;
          gap: 30px;
          justify-content: space-between;
          margin-top: 24px;
          padding: 28px 32px;
        }
        .tax-note > div {
          max-width: 700px;
        }
        .tax-note .eyebrow {
          margin-bottom: 8px;
        }
        .tax-note h2 {
          font-size: 24px;
        }
        .tax-note p:not(.eyebrow) {
          margin-top: 8px;
        }
        .tax-note > a {
          flex: 0 0 240px;
        }
        .questions {
          margin: 62px auto 0;
          max-width: 850px;
        }
        .questions h2 {
          font-size: 28px;
          margin-bottom: 18px;
        }
        .questions details {
          border-top: 1px solid #eadfe4;
          padding: 17px 2px;
        }
        .questions details:last-child {
          border-bottom: 1px solid #eadfe4;
        }
        .questions summary {
          color: #46293a;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
        }
        .questions details p {
          color: #655a60;
          font-size: 14px;
          line-height: 1.7;
          margin: 10px 0 0;
          max-width: 760px;
        }
        .next-steps {
          align-items: center;
          background: #f7eee9;
          display: flex;
          gap: 48px;
          justify-content: space-between;
          padding: 48px max(24px, calc((100vw - 1112px) / 2));
        }
        .next-steps > div:first-child {
          max-width: 700px;
        }
        .next-steps h2 {
          font-size: 30px;
        }
        .next-links {
          display: grid;
          flex: 0 0 245px;
          gap: 12px;
        }
        @media (max-width: 800px) {
          .hero-inner {
            gap: 30px;
            grid-template-columns: 1fr;
          }
          .hero-copy {
            max-width: 700px;
          }
          .hero-image {
            max-width: 680px;
          }
          .tax-note,
          .next-steps {
            align-items: flex-start;
            flex-direction: column;
          }
          .tax-note > a,
          .next-links {
            flex-basis: auto;
          }
        }
        @media (max-width: 560px) {
          .hero {
            padding: 48px 20px 38px;
          }
          .hero-description {
            font-size: 15px;
          }
          .photo-frame {
            aspect-ratio: 1.35;
          }
          .content-section {
            padding: 52px 18px 58px;
          }
          .research-grid {
            grid-template-columns: 1fr;
          }
          .card-copy {
            padding: 21px;
          }
          .tax-note {
            gap: 16px;
            padding: 23px 21px;
          }
          .questions {
            margin-top: 48px;
          }
          .next-steps {
            gap: 24px;
            padding: 38px 20px;
          }
          .next-steps h2 {
            font-size: 26px;
          }
        }
      `}</style>
    </main>
  )
}
