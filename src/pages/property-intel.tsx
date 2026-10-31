import Link from 'next/link'
import { useState } from 'react'
import { MetaSEO } from '@/common'

type Result = {
  status?: string
  error?: string
  message?: string
  matchedAddress?: string
  county?: string | null
  place?: string | null
  latitude?: number
  longitude?: number
  flood?: { status: string; zone?: string | null; description?: string | null }
  parcel?: {
    status: string
    parcelNumber?: string | null
    taxDistrict?: string | null
    taxYear?: number | null
  }
  caveat?: string
}

// Each source status needs its own clear message for visitors.
// eslint-disable-next-line sonarjs/cognitive-complexity
export default function PropertyIntel() {
  const [address, setAddress] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)
  async function lookup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const response = await fetch('/api/live-parcel-intel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      })
      setResult(await response.json())
    } catch {
      setResult({
        error:
          'The lookup is temporarily unavailable. Please try again or use the official links below.',
      })
    } finally {
      setLoading(false)
    }
  }
  return (
    <main className="intel">
      <MetaSEO
        canonicalPath="/property-intel"
        title="North Alabama Address Research | Becca Travis"
        description="Start an address research check with Census location estimates, FEMA flood map data and local property records."
        image="/images/home-inspiration/porch-and-entry.webp"
        alt="A home with a covered porch"
      />
      <section className="hero">
        <div className="inner">
          <p className="kicker">North Alabama buyer tools</p>
          <h1>Start with an address.</h1>
          <p>
            Look up an estimated location and see what official maps show nearby. Bring
            the results to your agent and confirm the exact property before making
            decisions.
          </p>
        </div>
      </section>
      <section className="body">
        <form onSubmit={lookup} className="form">
          <label htmlFor="address">Street address, city, state and ZIP</label>
          <div className="input-row">
            <input
              id="address"
              value={address}
              onChange={event => setAddress(event.target.value)}
              minLength={8}
              maxLength={220}
              placeholder="123 Main St, Huntsville, AL 35801"
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Checking sources…' : 'Check address'}
            </button>
          </div>
          <p>
            Your address is submitted to this site and the U.S. Census geocoder. Its
            estimated coordinates are sent to FEMA and, for supported counties, county GIS.
          </p>
        </form>
        {result && (
          <section className="results" aria-live="polite">
            {(result.error || result.message) && (
              <p className="notice">{result.error || result.message}</p>
            )}
            {result.status === 'matched' && (
              <>
                <h2>What we found</h2>
                <p className="notice">{result.caveat}</p>
                <div className="grid">
                  <article>
                    <h3>Census address match</h3>
                    <strong>{result.matchedAddress}</strong>
                    <p>
                      {result.county || 'County unavailable'}
                      {result.place ? ` · ${result.place}` : ''}
                    </p>
                    <p>
                      Estimated coordinates: {result.latitude?.toFixed(5)},{' '}
                      {result.longitude?.toFixed(5)}
                    </p>
                  </article>
                  <article>
                    <h3>FEMA map at estimated point</h3>
                    {result.flood?.status === 'point_result' ? (
                      <>
                        <strong>Zone {result.flood.zone || 'not specified'}</strong>
                        <p>
                          {result.flood.description ||
                            'No additional description returned.'}
                        </p>
                      </>
                    ) : (
                      <p>
                        {result.flood?.status === 'no_data'
                          ? 'No mapped zone was returned for this point. That does not mean no flood risk.'
                          : 'A single flood zone could not be returned for this point.'}
                      </p>
                    )}
                    <a
                      href="https://msc.fema.gov/portal/search"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Confirm in FEMA’s map center ↗
                    </a>
                  </article>
                  <article>
                    <h3>County parcel at estimated point</h3>
                    {result.parcel?.status === 'point_candidate' ? (
                      <>
                        <strong>
                          Unverified candidate:{' '}
                          {result.parcel.parcelNumber || 'number unavailable'}
                        </strong>
                        <p>
                          This parcel intersects the estimated point and may be a
                          different property. Confirm by street address in official
                          records.
                        </p>
                        {result.parcel.taxDistrict && (
                          <p>
                            Candidate tax district: {result.parcel.taxDistrict}
                            {result.parcel.taxYear ? ` · ${result.parcel.taxYear}` : ''}
                          </p>
                        )}
                      </>
                    ) : (
                      <p>
                        {result.parcel?.status === 'outside_coverage'
                          ? 'A county parcel service is not connected for this area.'
                          : result.parcel?.status === 'no_candidate'
                          ? 'No parcel intersected the estimated point. Use the official viewer to search the address.'
                          : 'A single parcel candidate is unavailable.'}
                      </p>
                    )}
                    <a
                      href="https://maps.huntsvilleal.gov/propertydetail/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Open Huntsville property viewer ↗
                    </a>
                  </article>
                </div>
                <p className="footnote">
                  Mapped flood zones and tax boundaries can cross a property. An estimated
                  street point cannot determine the status of a whole parcel or building.
                  Ask the responsible county, a surveyor, insurance professional or lender
                  about the exact property.
                </p>
              </>
            )}
          </section>
        )}
        <div className="links">
          <Link href="/north-alabama-property-research">
            Explore the complete property research guide →
          </Link>
          <Link href="/contact-us?intent=property-research">
            Ask Becca about an address →
          </Link>
        </div>
      </section>
      <style jsx>{`
        .intel {
          color: #30272c;
          background: white;
        }
        .hero {
          background: #f8eeea;
          padding: 56px 24px;
        }
        .inner,
        .body {
          max-width: 1100px;
          margin: 0 auto;
        }
        .kicker {
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 12px;
          font-weight: 700;
          color: #8d4967;
        }
        h1 {
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.1;
          font-weight: 500;
          color: #59223f;
          margin: 12px 0;
        }
        .inner > p:last-child {
          max-width: 720px;
          color: #51474d;
          font-size: 16px;
          line-height: 1.7;
        }
        .body {
          padding: 48px 24px 72px;
        }
        .form {
          background: #fbf7f9;
          border: 1px solid #eadfe4;
          padding: 26px;
          border-radius: 16px;
        }
        label {
          display: block;
          font-size: 14px;
          color: #46293a;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .input-row {
          display: flex;
          gap: 12px;
        }
        input {
          flex: 1;
          width: 100%;
          min-width: 0;
          border: 1px solid #b9a6b0;
          border-radius: 8px;
          background: white;
          padding: 12px 14px;
          font-size: 16px;
        }
        button {
          border: 0;
          border-radius: 999px;
          background: #6d294c;
          color: white;
          font-weight: 700;
          padding: 12px 22px;
        }
        button:disabled {
          opacity: 0.6;
          cursor: wait;
        }
        input:focus-visible,
        button:focus-visible,
        a:focus-visible {
          outline: 3px solid #b56b90;
          outline-offset: 3px;
        }
        .form p,
        .footnote {
          color: #6a5c64;
          font-size: 13px;
          line-height: 1.6;
          margin: 12px 0 0;
        }
        .results {
          margin-top: 40px;
        }
        h2 {
          font-size: 30px;
          color: #46293a;
          font-weight: 500;
        }
        .notice {
          background: #f8f1f4;
          border-left: 3px solid #995a7a;
          padding: 14px;
          color: #51474d;
          font-size: 14px;
          line-height: 1.6;
          margin: 16px 0;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        article {
          border: 1px solid #eadfe4;
          border-radius: 12px;
          padding: 20px;
        }
        h3 {
          font-size: 17px;
          color: #46293a;
          margin: 0 0 12px;
        }
        article p {
          color: #655a60;
          font-size: 14px;
          line-height: 1.6;
          margin: 10px 0;
        }
        article a,
        .links a {
          color: #6d294c;
          font-size: 14px;
          font-weight: 600;
          display: inline-block;
          margin-top: 10px;
          text-underline-offset: 3px;
        }
        .links {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 32px;
        }
        @media (max-width: 760px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .input-row {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  )
}
