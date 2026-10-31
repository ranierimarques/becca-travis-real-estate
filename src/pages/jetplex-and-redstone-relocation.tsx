import Link from 'next/link'
import { useState } from 'react'
import { Image, MetaSEO } from '@/common'

const destinations = [
  {
    name: 'Redstone Arsenal & NASA Marshall',
    detail:
      'Start with your assigned building and gate. NASA confirms Marshall is on Redstone Arsenal. Gate schedules and access requirements can change, so check the Army’s current visitor guidance before planning a drive.',
    sources: [
      {
        label: 'Redstone Arsenal gate and access information',
        href: 'https://home.army.mil/redstone/about/Garrison/DES/physical-security/access-control',
      },
      {
        label: 'NASA Marshall visitor information',
        href: 'https://www.nasa.gov/marshall/visit-marshall-space-flight-center/',
      },
    ],
    areas: [
      { label: 'Huntsville', href: '/communities/huntsville' },
      { label: 'South Huntsville', href: '/areas/south-huntsville' },
      { label: 'Hampton Cove', href: '/communities/hampton-cove' },
    ],
  },
  {
    name: 'Jetplex & Huntsville Airport',
    detail:
      'Jetplex Industrial Park is on the airport property and has access to I-565. Ask for your exact work address and shift before comparing homes and driving routes.',
    sources: [
      {
        label: 'Jetplex Industrial Park',
        href: 'https://www.flyhuntsville.com/jetplex-industrial-park/',
      },
    ],
    areas: [
      { label: 'Madison', href: '/areas/madison' },
      { label: 'Athens', href: '/communities/athens' },
      { label: 'Huntsville', href: '/communities/huntsville' },
    ],
  },
  {
    name: 'Cummings Research Park',
    detail:
      'Compare the route to your specific office, not just the park entrance. Ask about parking, schedules and any required campus access before you map the drive.',
    sources: [
      {
        label: 'About Cummings Research Park',
        href: 'https://cummingsresearchpark.com/about/',
      },
    ],
    areas: [
      { label: 'Village of Providence', href: '/areas/village-of-providence' },
      { label: 'Madison', href: '/areas/madison' },
      { label: 'Huntsville', href: '/communities/huntsville' },
    ],
  },
  {
    name: 'Blue Origin in Huntsville',
    detail:
      'Blue Origin says its Huntsville location manufactures and tests engines. Confirm the specific facility and entrance for your role before comparing neighborhoods.',
    sources: [
      {
        label: 'Blue Origin Huntsville careers',
        href: 'https://www.blueorigin.com/careers',
      },
      {
        label: 'Blue Origin engine facilities',
        href: 'https://www.blueorigin.com/engines',
      },
    ],
    areas: [
      { label: 'Madison', href: '/areas/madison' },
      { label: 'Huntsville', href: '/communities/huntsville' },
      { label: 'Athens', href: '/communities/athens' },
    ],
  },
]

export default function RelocationPage() {
  const [selected, setSelected] = useState(0)
  const destination = destinations[selected]
  const textMessage = `Hi Becca, I am relocating to North Alabama and would like help comparing communities near ${destination.name}.`

  return (
    <main className="relocation">
      <MetaSEO
        canonicalPath="/jetplex-and-redstone-relocation"
        title="Redstone Arsenal and Huntsville Relocation Guide | Becca Travis"
        description="Compare North Alabama communities and plan your move near Redstone Arsenal, NASA Marshall, Jetplex and Cummings Research Park."
        image="/images/areas/downtown-huntsville.webp"
        alt="Downtown Huntsville skyline and park"
      />
      <header className="hero">
        <div className="hero-inner">
          <div>
            <p className="eyebrow">North Alabama relocation</p>
            <h1>Find a home that fits your next chapter.</h1>
            <p className="intro">
              Moving for Redstone Arsenal, Jetplex, NASA Marshall or Cummings Research
              Park? Let’s look at your actual work location, your priorities and the
              places that feel like home.
            </p>
            <div className="actions">
              <a className="primary" href="#explore">
                Explore your work area
              </a>
              <Link href="/contact-us?intent=relocation">Talk with Becca</Link>
            </div>
          </div>
          <figure className="hero-photo">
            <Image
              src="/images/areas/downtown-huntsville.webp"
              alt="Downtown Huntsville skyline beside a park"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </figure>
        </div>
      </header>
      <section id="explore" className="content">
        <div className="heading">
          <p className="eyebrow">Start with your destination</p>
          <h2>Where will you work?</h2>
          <p>
            Select a location for a practical place to begin. Then compare actual
            addresses at the times you expect to travel.
          </p>
        </div>
        <div className="selector" role="group" aria-label="Choose a work area">
          {destinations.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-pressed={selected === index}
              onClick={() => setSelected(index)}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="selected" aria-live="polite">
          <div>
            <p className="eyebrow">Your starting point</p>
            <h3>{destination.name}</h3>
            <p>{destination.detail}</p>
            <div className="source-links">
              {destination.sources.map(source => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {source.label} ↗
                </a>
              ))}
            </div>
          </div>
          <div className="areas">
            <h4>Explore communities</h4>
            <p>
              These are starting points for your search. The best fit depends on the
              address and your priorities.
            </p>
            {destination.areas.map(area => (
              <Link key={area.href} href={area.href}>
                {area.label} →
              </Link>
            ))}
          </div>
        </div>
        <div className="action-row">
          <a
            className="primary"
            href={`sms:+12563189066?body=${encodeURIComponent(textMessage)}`}
          >
            Text Becca about this move
          </a>
          <span>Opens a message for you to review and send.</span>
        </div>
      </section>
      <section className="content checklist">
        <div className="heading">
          <p className="eyebrow">Make the move clearer</p>
          <h2>Three details worth checking early</h2>
        </div>
        <div className="check-grid">
          <article>
            <span>01</span>
            <h3>Test your commute</h3>
            <p>
              Map the exact home to the assigned entrance during your expected travel
              times. Allow for gate access, parking and changing schedules.
            </p>
            <a
              href="https://home.army.mil/redstone/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Check Redstone updates ↗
            </a>
          </article>
          <article>
            <span>02</span>
            <h3>Compare the full cost</h3>
            <p>
              Ask about taxes, insurance, utilities and financing for each address. Use
              written loan offers to compare actual terms.
            </p>
            <Link href="/mortgage-offer-comparison">Compare mortgage offers →</Link>
          </article>
          <article>
            <span>03</span>
            <h3>Ask about your VA benefits</h3>
            <p>
              Some eligible borrowers are exempt from the VA funding fee. Ask your lender
              to confirm your certificate of eligibility and fee status.
            </p>
            <a
              href="https://www.va.gov/housing-assistance/home-loans/funding-fee-and-closing-costs/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Read VA funding fee guidance ↗
            </a>
          </article>
        </div>
      </section>
      <section className="contact-band">
        <div>
          <h2>Let’s make your move feel manageable.</h2>
          <p>
            Tell me where you are headed and what matters to you. We can start with a few
            areas and make a plan from there.
          </p>
        </div>
        <Link className="primary" href="/contact-us?intent=relocation">
          Contact Becca
        </Link>
      </section>
      <style jsx>{`
        .relocation {
          color: #30272c;
          background: #fff;
        }
        .hero {
          background: #f8eeea;
          padding: 64px 24px;
        }
        .hero-inner {
          max-width: 1160px;
          margin: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .eyebrow {
          color: #8d4967;
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin: 0 0 14px;
        }
        h1 {
          color: #59223f;
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.08;
          font-weight: 500;
          letter-spacing: -0.04em;
          margin: 0;
        }
        .intro {
          color: #51474d;
          font-size: 17px;
          line-height: 1.7;
          margin: 20px 0 0;
        }
        .actions,
        .action-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 28px;
        }
        .actions a,
        .source-links a,
        .areas a,
        .check-grid a {
          color: #6d294c;
          font-size: 14px;
          font-weight: 600;
          text-underline-offset: 4px;
        }
        .primary {
          background: #6d294c;
          color: white !important;
          border-radius: 999px;
          display: inline-block;
          padding: 13px 19px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }
        .primary:hover {
          background: #54203b;
        }
        .hero-photo {
          position: relative;
          aspect-ratio: 1.45;
          overflow: hidden;
          border-radius: 12px;
          margin: 0;
          box-shadow: 0 18px 45px rgba(67, 35, 51, 0.12);
        }
        .content {
          max-width: 1160px;
          padding: 72px 24px;
          margin: 0 auto;
        }
        .heading {
          max-width: 740px;
          margin-bottom: 28px;
        }
        h2 {
          color: #3a2d33;
          font-size: clamp(28px, 3.3vw, 38px);
          line-height: 1.18;
          font-weight: 500;
          margin: 0;
        }
        .heading > p:not(.eyebrow),
        .selected p,
        .areas p,
        .check-grid p,
        .contact-band p {
          color: #655a60;
          font-size: 15px;
          line-height: 1.7;
          margin: 12px 0 0;
        }
        .selector {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        .selector button {
          text-align: left;
          border: 1px solid #e3d6dc;
          border-radius: 12px;
          padding: 16px;
          background: #fff;
          color: #513446;
          font-size: 14px;
          font-weight: 600;
        }
        .selector button[aria-pressed='true'] {
          background: #6d294c;
          color: #fff;
          border-color: #6d294c;
        }
        .selector button:focus-visible,
        a:focus-visible {
          outline: 3px solid #b56b90;
          outline-offset: 3px;
        }
        .selected {
          border: 1px solid #eadfe4;
          border-radius: 16px;
          padding: 30px;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          margin-top: 16px;
        }
        .selected h3 {
          font-size: 25px;
          color: #46293a;
          font-weight: 500;
          line-height: 1.25;
          margin: 0;
        }
        .source-links {
          display: flex;
          gap: 10px 20px;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        .areas {
          background: #fbf5f7;
          border-radius: 12px;
          padding: 20px;
        }
        .areas h4 {
          font-size: 17px;
          color: #46293a;
          margin: 0;
        }
        .areas a {
          display: block;
          margin-top: 13px;
        }
        .action-row span {
          color: #75676e;
          font-size: 12px;
        }
        .checklist {
          padding-top: 20px;
        }
        .check-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .check-grid article {
          border-top: 2px solid #dfc4d1;
          padding: 20px 4px;
        }
        .check-grid article > span {
          color: #99627e;
          font-size: 12px;
          font-weight: 700;
        }
        .check-grid h3 {
          color: #46293a;
          font-size: 20px;
          margin: 10px 0 0;
        }
        .check-grid a {
          display: inline-block;
          margin-top: 16px;
        }
        .contact-band {
          background: #f7eee9;
          padding: 48px max(24px, calc((100vw - 1112px) / 2));
          display: flex;
          gap: 32px;
          align-items: center;
          justify-content: space-between;
        }
        .contact-band > div {
          max-width: 700px;
        }
        @media (max-width: 800px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .selector {
            grid-template-columns: repeat(2, 1fr);
          }
          .selected {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .check-grid {
            grid-template-columns: 1fr;
          }
          .contact-band {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 560px) {
          .hero {
            padding: 44px 20px;
          }
          .content {
            padding: 50px 20px;
          }
          .selected {
            padding: 20px;
          }
          .selector button {
            padding: 13px;
          }
        }
      `}</style>
    </main>
  )
}
