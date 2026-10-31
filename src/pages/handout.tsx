import Image from 'next/image'
import Link from 'next/link'
import { MetaSEO } from '@/common'

const checks = [
  {
    title: 'Start with the address',
    text: 'Check the parcel, city limits, county, and school assignment for the actual property. A mailing address does not tell the whole story.',
  },
  {
    title: 'Ask about the full cost',
    text: 'Review taxes, insurance, utilities, and any association fees. Ask the county how a change in ownership could affect the next tax bill.',
  },
  {
    title: 'Look beyond the listing',
    text: 'Review disclosures and inspection options, including the roof, drainage, crawlspace, and radon when appropriate for the home.',
  },
  {
    title: 'Compare the loan, not just the rate',
    text: 'Ask lenders for written Loan Estimates. Compare the rate, points, lender credits, monthly payment, and how long you expect to own the home.',
  },
  {
    title: 'Bring your questions to a new build',
    text: 'Before visiting a model home, let’s talk about representation, builder incentives, timelines, and independent inspections.',
  },
]

export default function HandoutPage() {
  return (
    <main className="handout-page">
      <MetaSEO
        canonicalPath="/handout"
        title="North Alabama Open House Buyer Guide | Becca Travis"
        description="A printable one-page guide to the questions worth asking before you buy a home in North Alabama."
        image="/images/home-inspiration/porch-and-entry.webp"
        alt="A home with a covered porch"
      />
      <div className="toolbar">
        <p>Take this guide to an open house or keep it with your notes.</p>
        <button type="button" onClick={() => window.print()}>
          Print or save as PDF
        </button>
      </div>
      <article className="sheet" aria-label="Printable North Alabama buyer guide">
        <header className="sheet-header">
          <div>
            <p className="kicker">BECCA TRAVIS · NORTH ALABAMA REAL ESTATE</p>
            <h1>Five questions to ask before you fall in love with a home.</h1>
            <p className="intro">
              A little homework now can make your next move feel a lot clearer.
            </p>
          </div>
          <div className="contact">
            <strong>Let’s talk.</strong>
            <a href="tel:+12563189066">256.318.9066</a>
            <a href="mailto:becca@beccatravis.com">becca@beccatravis.com</a>
            <a href="https://beccatravis.com">beccatravis.com</a>
          </div>
        </header>

        <div className="address-line">
          Property address <span />
        </div>
        <ol className="checks">
          {checks.map((check, index) => (
            <li key={check.title}>
              <span className="number">0{index + 1}</span>
              <div>
                <h2>{check.title}</h2>
                <p>{check.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <section className="connect" aria-label="Contact and resources">
          <div className="qr-item">
            <Image
              src="/images/handout/text-becca.png"
              alt="QR code to open a text message to Becca"
              width="110"
              height="110"
              loading="eager"
              unoptimized
            />
            <div>
              <h2>Have a question?</h2>
              <p>
                Scan to open a text to Becca. Add your question and send it when you are
                ready.
              </p>
              <a href="sms:+12563189066">Text 256.318.9066</a>
            </div>
          </div>
          <div className="qr-item">
            <Image
              src="/images/handout/property-guide.png"
              alt="QR code to open the North Alabama property research guide"
              width="110"
              height="110"
              loading="eager"
              unoptimized
            />
            <div>
              <h2>Research the address</h2>
              <p>
                Find official parcel, tax, flood map, school, and utility resources in one
                place.
              </p>
              <Link href="/north-alabama-property-research" legacyBehavior>
                <a>Open the property guide</a>
              </Link>
            </div>
          </div>
        </section>
        <p className="sources">
          Helpful starting points: FEMA Flood Map Service Center · Alabama Department of
          Revenue · Consumer Financial Protection Bureau. Find links in the online
          property guide.
        </p>
      </article>
      <style jsx>{`
        .handout-page {
          background: #f8f3f4;
          color: #3c3036;
          padding: 38px 20px 64px;
        }
        .toolbar {
          align-items: center;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          margin: 0 auto 16px;
          max-width: 816px;
        }
        .toolbar p {
          color: #655a60;
          font-size: 14px;
          line-height: 1.5;
        }
        .toolbar button {
          background: #6d294c;
          border: 0;
          border-radius: 999px;
          color: white;
          cursor: pointer;
          flex-shrink: 0;
          font: inherit;
          font-size: 13px;
          font-weight: 600;
          padding: 12px 18px;
        }
        .toolbar button:focus-visible {
          outline: 3px solid #a7567c;
          outline-offset: 3px;
        }
        .sheet {
          background: white;
          box-shadow: 0 12px 40px rgba(55, 29, 41, 0.1);
          margin: auto;
          max-width: 816px;
          padding: 48px;
        }
        .sheet-header {
          border-bottom: 1px solid #e8dce1;
          display: flex;
          gap: 28px;
          justify-content: space-between;
          padding-bottom: 22px;
        }
        .kicker {
          color: #8d4967;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          margin-bottom: 12px;
        }
        h1 {
          color: #59223f;
          font-size: 34px;
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.12;
          max-width: 510px;
        }
        .intro {
          color: #655a60;
          font-size: 13px;
          line-height: 1.5;
          margin-top: 10px;
        }
        .contact {
          display: flex;
          flex: 0 0 160px;
          flex-direction: column;
          font-size: 11px;
          gap: 4px;
          padding-top: 3px;
        }
        .contact strong {
          color: #59223f;
          font-size: 15px;
          margin-bottom: 3px;
        }
        .contact a,
        .qr-item a {
          color: #6d294c;
          text-decoration: none;
        }
        .address-line {
          align-items: center;
          color: #6f6067;
          display: flex;
          font-size: 12px;
          gap: 12px;
          margin: 20px 0;
        }
        .address-line span {
          border-bottom: 1px solid #cdbdc5;
          flex: 1;
          height: 1em;
        }
        .checks {
          display: grid;
          gap: 14px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .checks li {
          display: flex;
          gap: 14px;
        }
        .number {
          color: #b36f8f;
          flex: 0 0 26px;
          font-size: 12px;
          font-weight: 700;
          padding-top: 3px;
        }
        .checks h2,
        .qr-item h2 {
          color: #46293a;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.25;
        }
        .checks p,
        .qr-item p {
          color: #655a60;
          font-size: 12px;
          line-height: 1.5;
          margin-top: 4px;
        }
        .connect {
          background: #fbf3f6;
          display: grid;
          gap: 20px;
          grid-template-columns: 1fr 1fr;
          margin-top: 24px;
          padding: 18px;
        }
        .qr-item {
          align-items: center;
          display: flex;
          gap: 12px;
        }
        .qr-item img {
          background: white;
          flex: 0 0 82px;
          height: 82px;
          width: 82px;
        }
        .qr-item a {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          margin-top: 5px;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .sources {
          color: #786b72;
          font-size: 9px;
          line-height: 1.45;
          margin-top: 18px;
        }
        @media (max-width: 650px) {
          .toolbar,
          .sheet-header {
            align-items: flex-start;
            flex-direction: column;
          }
          .contact {
            flex-basis: auto;
          }
          .sheet {
            padding: 28px 24px;
          }
          h1 {
            font-size: 29px;
          }
          .connect {
            grid-template-columns: 1fr;
          }
        }
        @media print {
          :global(#__next > :not(.handout-page)) {
            display: none !important;
          }
          :global(body) {
            background: white !important;
          }
          .handout-page {
            background: white;
            padding: 0;
          }
          .toolbar {
            display: none;
          }
          .sheet {
            box-shadow: none;
            max-width: none;
            padding: 0;
          }
          .sheet-header {
            flex-direction: row;
          }
          .contact {
            flex: 0 0 160px;
          }
          .connect {
            grid-template-columns: 1fr 1fr;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .checks li,
          .qr-item {
            break-inside: avoid;
          }
        }
      `}</style>
      <style jsx global>{`
        @page {
          size: letter;
          margin: 0.35in;
        }
      `}</style>
    </main>
  )
}
