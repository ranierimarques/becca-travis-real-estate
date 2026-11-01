import Head from 'next/head'
import { MetaSEO } from '@/common'
import { ArwWarrantyClosingHub } from '@/layout/site-tools/arw-warranty-closing-hub/arw-warranty-closing-hub'

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beccatravis.com/' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Alabama Home Warranty Plans',
      item: 'https://beccatravis.com/alabama-home-warranty',
    },
  ],
}

const reviewItems = [
  {
    title: 'Service-call fee',
    text: 'Confirm what you pay when a technician visit is requested and whether that fee changes by service type.',
  },
  {
    title: 'Limits and exclusions',
    text: 'Check the per-item and total limits, excluded conditions, maintenance requirements, and any optional coverage.',
  },
  {
    title: 'Start date and eligibility',
    text: 'Ask ARW when the plan begins for this transaction and whether the property and items meet its requirements.',
  },
  {
    title: 'Claims and service network',
    text: 'Read how to request service, how contractors are assigned, and what the agreement says about repair or replacement.',
  },
  {
    title: 'The exact issued documents',
    text: 'Compare the final declaration and terms—not a sample PDF or a plan name—before deciding what to buy.',
  },
]

const questions = [
  {
    question: 'How much does an ARW home warranty plan cost?',
    answer:
      'ARW’s real-estate plan page listed Home Essential at $600 per year, Home Complete at $750 per year, and Home Premier at $850 per year when checked November 1, 2026. Its Listing Advantage seller option was listed at $800 per year. These are published plan prices, not a quote for a particular property. Confirm the current price and availability with ARW using the property ZIP code.',
  },
  {
    question: 'What is included in the ARW plans?',
    answer:
      'ARW describes its plans as covering core systems, plumbing, and appliances under the applicable plan terms. Its page lists additional items for Home Complete and higher coverage limits for Home Premier. The official agreement controls covered items, limits, service fees, exclusions, and optional coverage.',
  },
  {
    question: 'Does a home warranty cover an older HVAC system?',
    answer:
      'This page cannot determine coverage for a specific system. Ask ARW to review the actual age, condition, maintenance history, and plan exclusions for the property, then get the answer in writing before enrolling.',
  },
  {
    question: 'Is a home warranty the same as homeowners insurance?',
    answer:
      'No. Review a home-service plan and a homeowners insurance policy separately. Each has its own provider, purpose, limits, conditions, and exclusions. Ask the relevant provider or a licensed insurance professional about the exact protection you need.',
  },
  {
    question: 'Can Becca enroll me or handle a warranty claim?',
    answer:
      'No. Becca is not ARW Home, the warranty provider, or claims administrator. Use ARW’s official site for a quote, enrollment, plan documents, and service requests. Becca can help organize questions related to a real-estate transaction.',
  },
]

export default function AlabamaHomeWarrantyPage() {
  return (
    <main className="warranty-guide-page">
      <MetaSEO
        canonicalPath="/alabama-home-warranty"
        title="Alabama Home Warranty Plans: Compare ARW Prices | Becca Travis"
        description="Compare ARW home warranty plans in Alabama: listed annual prices, buyer and seller options, a sample declaration, and questions to ask before requesting a quote."
        image="/images/real/contemporary-exterior.webp"
        alt="Contemporary home exterior"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
      </Head>

      <ArwWarrantyClosingHub />

      <section className="buyer-guide" aria-labelledby="compare-heading">
        <header className="guide-heading">
          <p className="eyebrow">Alabama home warranty buying guide</p>
          <h2 id="compare-heading">What to compare before choosing a plan</h2>
          <p>
            A home warranty decision starts with the property and the written plan. For a
            home in Huntsville, Madison, or elsewhere in Alabama, ask ARW to confirm the
            ZIP code, current price, covered items, service-call fee, and claim process
            for the exact address.
          </p>
        </header>

        <div className="review-list">
          {reviewItems.map((item, index) => (
            <article className="review-row" key={item.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <section className="buyer-seller-note" aria-labelledby="buyer-seller-heading">
          <div>
            <p className="eyebrow">Buying or selling?</p>
            <h2 id="buyer-seller-heading">The right questions depend on the transaction.</h2>
          </div>
          <p>
            Buyers can compare the plan with the home&apos;s inspection findings, existing
            manufacturer coverage, and maintenance records. Sellers can ask how any
            listing-period option works, what the buyer receives at closing, and how the
            amount and terms will appear in the transaction paperwork. Get those details
            from ARW and your closing team in writing.
          </p>
        </section>

        <section className="faq-section" aria-labelledby="faq-heading">
          <div className="faq-heading">
            <p className="eyebrow">Home warranty questions</p>
            <h2 id="faq-heading">Answers before you request a quote</h2>
          </div>
          <div className="faq-list">
            {questions.map(item => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="guide-cta">
          <div>
            <h2>Ready to compare ARW&apos;s plans?</h2>
            <p>Check the official documents and request a current quote directly from ARW.</p>
          </div>
          <a
            href="https://arwhome.com/real-estate-pro/realtor-home-warranty-plans"
            target="_blank"
            rel="noreferrer"
          >
            Get a quote from ARW ↗
          </a>
        </div>
      </section>

      <style jsx>{`
        .buyer-guide {
          max-width: 1160px;
          margin: 0 auto;
          padding: 8px 24px 90px;
          color: #352c31;
        }
        .guide-heading {
          max-width: 760px;
          margin: 0 auto 35px;
          text-align: center;
        }
        .eyebrow {
          margin: 0 0 9px;
          color: #8f3e65;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          color: #321223;
          font-family: Georgia, serif;
          font-size: clamp(28px, 3.2vw, 40px);
          font-weight: 500;
          letter-spacing: -0.025em;
          line-height: 1.12;
        }
        .guide-heading > p:last-child,
        .buyer-seller-note > p,
        .guide-cta p {
          margin: 13px 0 0;
          color: #655a60;
          font-size: 15px;
          line-height: 1.7;
        }
        .review-list {
          border-top: 1px solid #eadfe4;
        }
        .review-row {
          display: grid;
          grid-template-columns: 54px minmax(185px, 0.55fr) 1fr;
          align-items: start;
          gap: 18px;
          padding: 19px 0;
          border-bottom: 1px solid #eadfe4;
        }
        .review-row > span {
          color: #9d446e;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }
        .review-row h3 {
          margin: 0;
          color: #432f39;
          font-size: 16px;
          line-height: 1.4;
        }
        .review-row p {
          max-width: 680px;
          margin: 0;
          color: #655a60;
          font-size: 14px;
          line-height: 1.65;
        }
        .buyer-seller-note {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 45px;
          align-items: start;
          margin: 52px 0;
          padding: 30px 0;
          border-top: 1px solid #eadfe4;
          border-bottom: 1px solid #eadfe4;
        }
        .buyer-seller-note > p {
          margin-top: 0;
        }
        .faq-section {
          padding: 38px 0 52px;
        }
        .faq-heading {
          max-width: 720px;
          margin-bottom: 22px;
        }
        .faq-list {
          border-top: 1px solid #eadfe4;
        }
        details {
          padding: 18px 0;
          border-bottom: 1px solid #eadfe4;
        }
        summary {
          color: #432f39;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.45;
        }
        summary:focus-visible {
          outline: 3px solid #d997b9;
          outline-offset: 4px;
        }
        details p {
          max-width: 900px;
          margin: 12px 0 0;
          color: #655a60;
          font-size: 14px;
          line-height: 1.7;
        }
        .guide-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 14px;
          padding: 25px 28px;
          color: #fff;
          background: #321223;
        }
        .guide-cta h2 {
          color: #fff;
          font-size: clamp(24px, 2.8vw, 32px);
        }
        .guide-cta p {
          margin-top: 6px;
          color: #eadde4;
        }
        .guide-cta a {
          display: inline-flex;
          min-height: 46px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          color: #321223;
          background: #ffd4c4;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
        }
        .guide-cta a:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 3px;
        }
        @media (max-width: 700px) {
          .buyer-guide {
            padding: 8px 20px 60px;
          }
          .review-row {
            grid-template-columns: 36px 1fr;
            gap: 8px 14px;
          }
          .review-row p {
            grid-column: 2;
          }
          .buyer-seller-note {
            grid-template-columns: 1fr;
            gap: 10px;
            margin: 38px 0;
          }
          .guide-cta {
            align-items: stretch;
            flex-direction: column;
            padding: 23px 20px;
          }
          .guide-cta a {
            width: 100%;
          }
        }
      `}</style>
    </main>
  )
}
