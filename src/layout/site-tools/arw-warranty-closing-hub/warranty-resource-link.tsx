import Link from 'next/link'

type Audience = 'buyers' | 'sellers' | 'areas'

const copy: Record<Audience, { title: string; description: string }> = {
  buyers: {
    title: 'Comparing an Alabama home warranty?',
    description:
      'Review ARW’s listed plan prices, compare a sample Alabama declaration, and decide whether to request a quote.',
  },
  sellers: {
    title: 'Preparing to list or sell a home?',
    description:
      'See ARW’s seller and buyer plan options, read the sample documents, and check what to confirm before closing.',
  },
  areas: {
    title: 'Home warranty options for Alabama properties',
    description:
      'Compare plan tiers and the questions to ask about a specific home before you enroll.',
  },
}

export function WarrantyResourceLink({ audience }: { audience: Audience }) {
  const content = copy[audience]

  return (
    <aside className="warranty-resource" aria-labelledby="warranty-resource-title">
      <div>
        <p className="eyebrow">Alabama home warranty guide</p>
        <h2 id="warranty-resource-title">{content.title}</h2>
        <p>{content.description}</p>
      </div>
      <Link href="/alabama-home-warranty">Compare plans and read the terms</Link>
      <style jsx>{`
        .warranty-resource {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin: 30px auto;
          padding: 24px 28px;
          max-width: 1160px;
          color: #352c31;
          background: #fff9f6;
          border: 1px solid #eadfe4;
          border-left: 4px solid #9d446e;
        }
        .eyebrow {
          margin: 0 0 5px;
          color: #8f3e65;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        h2 {
          margin: 0;
          color: #321223;
          font-family: Georgia, serif;
          font-size: clamp(21px, 2.5vw, 29px);
          font-weight: 500;
          line-height: 1.15;
        }
        .warranty-resource div > p:last-child {
          max-width: 700px;
          margin: 8px 0 0;
          color: #655a60;
          font-size: 14px;
          line-height: 1.6;
        }
        a {
          display: inline-flex;
          min-height: 44px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          color: #fff;
          background: #6e294d;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
          text-decoration: none;
        }
        a:hover,
        a:focus-visible {
          background: #4d1935;
        }
        a:focus-visible {
          outline: 3px solid #d997b9;
          outline-offset: 3px;
        }
        @media (max-width: 650px) {
          .warranty-resource {
            align-items: stretch;
            flex-direction: column;
            margin: 24px 18px;
            padding: 21px 19px;
          }
          a {
            width: 100%;
          }
        }
      `}</style>
    </aside>
  )
}
