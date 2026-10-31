import { FormEvent, useState } from 'react'

type ParcelResult = {
  status?: string
  error?: string
  message?: string
  matchedAddress?: string
  county?: string | null
  place?: string | null
  flood?: { status: string; zone?: string | null; description?: string | null }
  parcel?: {
    status: string
    parcelNumber?: string | null
    taxDistrict?: string | null
  }
}

const sources = {
  census: 'https://geocoding.geo.census.gov/geocoder/',
  fema: 'https://msc.fema.gov/portal/search',
  tax: 'https://www.revenue.alabama.gov/property-tax/property-tax-assessment/',
  huntsvilleSchools: 'https://www.huntsvillecityschools.org/page/enrollment/',
  madisonCitySchools: 'https://www.madisoncity.k12.al.us/school-zones-2',
  madisonCountySchools: 'https://www.mcssk12.org/our-schools/school-zones',
}

const money = (amount: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)

const positiveNumber = (input: string) => {
  const value = Number(input)
  return input.trim() && Number.isFinite(value) && value >= 0 ? value : null
}

function sourceLink(label: string, href: string) {
  return (
    <a className="lab-source-link" href={href} target="_blank" rel="noreferrer noopener">
      {label} <span aria-hidden="true">↗</span>
    </a>
  )
}

// Each card keeps its own conditional output visible without a separate page.
// eslint-disable-next-line sonarjs/cognitive-complexity
export function BuyerResearchLab({
  id = 'buyer-research-lab',
  onToolChange,
}: {
  id?: string
  onToolChange?: (tool: string) => void
}) {
  const [address, setAddress] = useState('')
  const [parcel, setParcel] = useState<ParcelResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const [assessmentRate, setAssessmentRate] = useState('10')
  const [millageA, setMillageA] = useState('')
  const [millageB, setMillageB] = useState('')
  const [askingPrice, setAskingPrice] = useState('')
  const [finishedArea, setFinishedArea] = useState('')
  const [daysListed, setDaysListed] = useState('')
  const [offerPercent, setOfferPercent] = useState(100)
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [driveTarget, setDriveTarget] = useState(30)

  const propertyValue = positiveNumber(value)
  const firstMillage = positiveNumber(millageA)
  const secondMillage = positiveNumber(millageB)
  const assessedValue =
    propertyValue === null ? null : (propertyValue * Number(assessmentRate)) / 100
  const firstTax =
    assessedValue === null || firstMillage === null
      ? null
      : (assessedValue * firstMillage) / 1000
  const secondTax =
    assessedValue === null || secondMillage === null
      ? null
      : (assessedValue * secondMillage) / 1000
  const listAmount = positiveNumber(askingPrice)
  const finishedFeet = positiveNumber(finishedArea)
  const offerAmount = listAmount === null ? null : (listAmount * offerPercent) / 100
  const mapsUrl =
    origin.trim() && destination.trim()
      ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
          origin.trim()
        )}&destination=${encodeURIComponent(destination.trim())}&travelmode=driving`
      : ''

  async function checkAddress(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (/^https?:\/\//i.test(address.trim())) {
      setParcel({
        error:
          'Copy the street address from the listing page. A listing link alone may not identify the exact parcel.',
      })
      return
    }
    setLoading(true)
    setParcel(null)
    try {
      const response = await fetch('/api/live-parcel-intel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: address.trim() }),
      })
      const data = (await response.json()) as ParcelResult
      setParcel(data)
    } catch {
      setParcel({
        error: 'The lookup is unavailable right now. Open the official sources below.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="lab" id={id} aria-labelledby={`${id}-heading`}>
      <div className="lab-intro">
        <p className="eyebrow">Try it before you contact anyone</p>
        <h2 id={`${id}-heading`}>Four checks for a smarter home search</h2>
        <p>
          Start with a real address or your own numbers. Each result stays visible here so
          you can decide what needs a closer look.
        </p>
      </div>

      <div className="lab-grid">
        <article
          className="lab-card"
          onFocusCapture={() => onToolChange?.('Public address check')}
        >
          <div className="card-photo photo-address" aria-hidden="true">
            <span>01 / Address</span>
          </div>
          <div className="card-content">
            <h3>Check an address against public maps</h3>
            <p>
              Copy the street address from Zillow, Homes.com, or a listing. See the Census
              match and any point results returned by FEMA and county GIS.
            </p>
            <form onSubmit={checkAddress} className="address-form">
              <label htmlFor={`${id}-address`}>Street address, city, state, ZIP</label>
              <input
                id={`${id}-address`}
                type="text"
                autoComplete="street-address"
                value={address}
                onChange={event => setAddress(event.target.value)}
                placeholder="305 Fountain Circle, Huntsville, AL 35801"
                minLength={8}
                maxLength={220}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Checking maps…' : 'Check public maps'}
              </button>
            </form>
            {parcel && (
              <div className="output" role="status">
                {parcel.status === 'matched' ? (
                  <>
                    <strong>{parcel.matchedAddress}</strong>
                    <span>
                      {[parcel.county, parcel.place].filter(Boolean).join(' · ') ||
                        'Jurisdiction not returned'}
                    </span>
                    <span>
                      FEMA point:{' '}
                      {parcel.flood?.status === 'point_result'
                        ? `Zone ${parcel.flood.zone || 'not specified'}`
                        : 'No single result available'}
                    </span>
                    <span>
                      Parcel:{' '}
                      {parcel.parcel?.status === 'point_candidate'
                        ? `Candidate ${parcel.parcel.parcelNumber || 'ID unavailable'}`
                        : 'Confirm in the county viewer'}
                    </span>
                  </>
                ) : (
                  <span>
                    {parcel.error || parcel.message || 'No address match returned.'}
                  </span>
                )}
              </div>
            )}
            <small className="caveat">
              The address goes to this site and the U.S. Census. An estimated street point
              is not a parcel boundary, flood determination, or tax quote.
            </small>
            <div className="source-links">
              {sourceLink('Census geocoder', sources.census)}
              {sourceLink('Confirm FEMA map', sources.fema)}
            </div>
          </div>
        </article>

        <article
          className="lab-card"
          onFocusCapture={() => onToolChange?.('Property tax comparison')}
        >
          <div className="card-photo photo-tax" aria-hidden="true">
            <span>02 / Tax comparison</span>
          </div>
          <div className="card-content">
            <h3>Compare tax assumptions</h3>
            <p>
              Enter the same property value and two millage rates from official records.
              See the unadjusted annual difference before exemptions.
            </p>
            <div className="fields two-fields">
              <label>
                <span>Property value to model</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  inputMode="decimal"
                  value={value}
                  onChange={event => setValue(event.target.value)}
                  placeholder="Enter amount"
                />
              </label>
              <label>
                <span>Assessment class to model</span>
                <select
                  value={assessmentRate}
                  onChange={event => setAssessmentRate(event.target.value)}
                >
                  <option value="10">Class III, 10%</option>
                  <option value="20">Class II, 20%</option>
                </select>
              </label>
              <label>
                <span>First millage rate</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  value={millageA}
                  onChange={event => setMillageA(event.target.value)}
                  placeholder="Enter mills"
                />
              </label>
              <label>
                <span>Second millage rate</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  inputMode="decimal"
                  value={millageB}
                  onChange={event => setMillageB(event.target.value)}
                  placeholder="Enter mills"
                />
              </label>
            </div>
            <div className="output" aria-live="polite">
              {firstTax !== null && secondTax !== null ? (
                <>
                  <span>First rate: {money(firstTax)} per year</span>
                  <span>Second rate: {money(secondTax)} per year</span>
                  <strong>
                    Difference: {money(Math.abs(firstTax - secondTax))} per year
                  </strong>
                </>
              ) : (
                <span>Enter a value and both millage rates to compare.</span>
              )}
            </div>
            <small className="caveat">
              This is a formula example. Classification, appraised value, district rates,
              exemptions, and reassessment must be confirmed for the parcel.
            </small>
            <div className="source-links">
              {sourceLink('Alabama tax formula and classes', sources.tax)}
            </div>
          </div>
        </article>

        <article
          className="lab-card"
          onFocusCapture={() => onToolChange?.('Offer scenario')}
        >
          <div className="card-photo photo-offer" aria-hidden="true">
            <span>03 / Offer scenario</span>
          </div>
          <div className="card-content">
            <h3>Put an offer scenario in context</h3>
            <p>
              Use the asking price and finished area from a listing, then adjust a
              scenario. This does not estimate market value or tell you what to offer.
            </p>
            <div className="fields two-fields">
              <label>
                <span>Asking price</span>
                <input
                  type="number"
                  min="0"
                  step="1000"
                  inputMode="decimal"
                  value={askingPrice}
                  onChange={event => setAskingPrice(event.target.value)}
                  placeholder="Enter price"
                />
              </label>
              <label>
                <span>Finished square feet</span>
                <input
                  type="number"
                  min="1"
                  step="1"
                  inputMode="numeric"
                  value={finishedArea}
                  onChange={event => setFinishedArea(event.target.value)}
                  placeholder="If verified"
                />
              </label>
              <label>
                <span>Days listed, if known</span>
                <input
                  type="number"
                  min="0"
                  step="1"
                  inputMode="numeric"
                  value={daysListed}
                  onChange={event => setDaysListed(event.target.value)}
                  placeholder="Optional"
                />
              </label>
            </div>
            <label className="slider-label">
              <span>Scenario as a share of asking price: {offerPercent}%</span>
              <input
                type="range"
                min="85"
                max="105"
                step="1"
                value={offerPercent}
                onChange={event => setOfferPercent(Number(event.target.value))}
              />
            </label>
            <div className="output" aria-live="polite">
              {listAmount !== null && listAmount > 0 && offerAmount !== null ? (
                <>
                  <strong>Scenario amount: {money(offerAmount)}</strong>
                  <span>
                    {offerPercent === 100
                      ? 'Equal to the entered asking price'
                      : `${money(Math.abs(listAmount - offerAmount))} ${
                          offerPercent < 100 ? 'below' : 'above'
                        } asking price`}
                  </span>
                  {finishedFeet !== null && finishedFeet > 0 && (
                    <span>
                      Entered asking price per finished square foot:{' '}
                      {money(listAmount / finishedFeet)}
                    </span>
                  )}
                  {positiveNumber(daysListed) !== null && daysListed !== '' && (
                    <span>
                      Days listed entered: {daysListed}. Ask about current activity.
                    </span>
                  )}
                </>
              ) : (
                <span>Enter the asking price to see a scenario.</span>
              )}
            </div>
            <small className="caveat">
              Check listing history, condition, concessions, and comparable sales with an
              agent. No local price or timing benchmark is assumed.
            </small>
          </div>
        </article>

        <article
          className="lab-card"
          onFocusCapture={() => onToolChange?.('Commute and school verification')}
        >
          <div className="card-photo photo-commute" aria-hidden="true">
            <span>04 / Location fit</span>
          </div>
          <div className="card-content">
            <h3>Plan a commute and verify schools</h3>
            <p>
              Start with your own origin and destination. Check travel time at the hour
              you would actually drive, then confirm school assignment for the exact
              address with the district.
            </p>
            <div className="fields">
              <label>
                <span>Start location or ZIP</span>
                <input
                  type="text"
                  value={origin}
                  onChange={event => setOrigin(event.target.value)}
                  placeholder="A home address or ZIP"
                  maxLength={120}
                />
              </label>
              <label>
                <span>Workplace or destination</span>
                <input
                  type="text"
                  value={destination}
                  onChange={event => setDestination(event.target.value)}
                  placeholder="Your actual workplace entrance"
                  maxLength={120}
                />
              </label>
            </div>
            <label className="slider-label">
              <span>Your one-way drive target: {driveTarget} minutes</span>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={driveTarget}
                onChange={event => setDriveTarget(Number(event.target.value))}
              />
            </label>
            <div className="output" aria-live="polite">
              <strong>Compare a route with your {driveTarget} minute target</strong>
              {mapsUrl ? (
                <a href={mapsUrl} target="_blank" rel="noreferrer noopener">
                  Open driving directions ↗
                </a>
              ) : (
                <span>Enter both locations to open a route.</span>
              )}
            </div>
            <small className="caveat">
              Directions open in Google Maps and send your entered locations there. This
              page does not calculate travel time or assign a school.
            </small>
            <div className="source-links">
              {sourceLink('Huntsville City schools', sources.huntsvilleSchools)}
              {sourceLink('Madison City schools', sources.madisonCitySchools)}
              {sourceLink('Madison County schools', sources.madisonCountySchools)}
            </div>
          </div>
        </article>
      </div>

      <div className="lab-handoff">
        <div>
          <strong>Want help turning these checks into a search plan?</strong>
          <p>
            Bring the address, source links, and your own numbers to the conversation.
          </p>
        </div>
        <a
          href={`sms:+12563189066?body=${encodeURIComponent(
            'Hi Becca, I am researching a North Alabama home and would like help checking the public records.'
          )}`}
        >
          Draft a text to Becca
        </a>
      </div>

      <style jsx>{`
        .lab {
          background: #fbf8f9;
          padding: 66px 24px 72px;
          scroll-margin-top: 80px;
        }
        .lab-intro,
        .lab-grid,
        .lab-handoff {
          margin: 0 auto;
          max-width: 1160px;
        }
        .lab-intro {
          margin-bottom: 30px;
          max-width: 760px;
          text-align: center;
        }
        .eyebrow {
          color: #8d4967;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin: 0 0 10px;
          text-transform: uppercase;
        }
        h2 {
          color: #59223f;
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 500;
          letter-spacing: -0.03em;
          line-height: 1.12;
          margin: 0;
        }
        .lab-intro > p:last-child {
          color: #655a60;
          font-size: 15px;
          line-height: 1.6;
          margin: 12px 0 0;
        }
        .lab-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .lab-card {
          background: #fff;
          border: 1px solid #eadfe4;
          border-radius: 18px;
          box-shadow: 0 12px 32px rgba(55, 29, 41, 0.05);
          min-width: 0;
          overflow: hidden;
        }
        .card-photo {
          align-items: flex-end;
          aspect-ratio: 3.4;
          background-position: center;
          background-size: cover;
          display: flex;
          padding: 14px 17px;
        }
        .photo-address {
          background-image: url('/images/real/porch.webp');
        }
        .photo-tax {
          background-image: url('/images/real/library.webp');
        }
        .photo-offer {
          background-image: url('/images/real/living-room.webp');
        }
        .photo-commute {
          background-image: url('/images/real/fireplace.webp');
        }
        .card-photo span {
          background: rgba(255, 255, 255, 0.96);
          border-radius: 999px;
          color: #59223f;
          font-size: 11px;
          font-weight: 750;
          padding: 7px 11px;
        }
        .card-content {
          padding: 25px;
        }
        h3 {
          color: #46293a;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.25;
          margin: 0;
        }
        .card-content > p {
          color: #655a60;
          font-size: 13px;
          line-height: 1.62;
          margin: 10px 0 19px;
        }
        form,
        .fields {
          display: grid;
          gap: 12px;
        }
        .fields.two-fields {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        label {
          color: #4d3b46;
          display: grid;
          font-size: 12px;
          font-weight: 700;
          gap: 6px;
          min-width: 0;
        }
        input:not([type='range']),
        select {
          background: #fff;
          border: 1px solid #d9cbd2;
          border-radius: 8px;
          color: #30272c;
          font: inherit;
          font-size: 14px;
          min-height: 44px;
          min-width: 0;
          padding: 9px 11px;
          width: 100%;
        }
        input[type='range'] {
          accent-color: #9d446e;
          cursor: pointer;
          width: 100%;
        }
        .slider-label {
          margin-top: 18px;
        }
        button {
          background: #6d294c;
          border: 1px solid #6d294c;
          border-radius: 9px;
          color: #fff;
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          min-height: 44px;
        }
        button:disabled {
          cursor: wait;
          opacity: 0.65;
        }
        input:focus-visible,
        select:focus-visible,
        button:focus-visible,
        a:focus-visible {
          outline: 3px solid #d188aa;
          outline-offset: 3px;
        }
        .output {
          background: #f8f1f4;
          border-left: 3px solid #d983a3;
          border-radius: 8px;
          color: #55464e;
          display: grid;
          font-size: 12px;
          gap: 6px;
          line-height: 1.5;
          margin-top: 18px;
          min-height: 67px;
          padding: 13px 15px;
        }
        .output strong {
          color: #562742;
          font-size: 14px;
          font-weight: 700;
          overflow-wrap: anywhere;
        }
        .output a,
        .source-links :global(.lab-source-link) {
          color: #6d294c;
          font-weight: 700;
          text-underline-offset: 3px;
        }
        .caveat {
          color: #6b6066;
          display: block;
          font-size: 11px;
          line-height: 1.55;
          margin-top: 13px;
        }
        .source-links {
          border-top: 1px solid #eee6e9;
          display: flex;
          flex-wrap: wrap;
          gap: 8px 15px;
          margin-top: 17px;
          padding-top: 14px;
        }
        .source-links a {
          font-size: 11px;
        }
        .lab-handoff {
          align-items: center;
          background: #f3e5ea;
          border-radius: 14px;
          display: flex;
          gap: 20px;
          justify-content: space-between;
          margin-top: 20px;
          padding: 22px 26px;
        }
        .lab-handoff strong {
          color: #562742;
          font-size: 17px;
        }
        .lab-handoff p {
          color: #655a60;
          font-size: 13px;
          line-height: 1.55;
          margin: 5px 0 0;
        }
        .lab-handoff > a {
          background: #6d294c;
          border-radius: 9px;
          color: #fff;
          flex: 0 0 auto;
          font-size: 13px;
          font-weight: 700;
          padding: 12px 16px;
          text-decoration: none;
        }
        @media (max-width: 760px) {
          .lab-grid {
            grid-template-columns: 1fr;
          }
          .lab-handoff {
            align-items: flex-start;
            flex-direction: column;
          }
        }
        @media (max-width: 500px) {
          .lab {
            padding: 52px 18px 56px;
          }
          .card-photo {
            aspect-ratio: 2.7;
          }
          .card-content {
            padding: 21px;
          }
          .fields.two-fields {
            grid-template-columns: 1fr;
          }
          .lab-handoff {
            padding: 19px;
          }
        }
      `}</style>
    </section>
  )
}
