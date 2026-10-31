import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MetaSEO } from '@/common'
import { Hero } from '@/layout/sell-with-us/sections'

const Page: NextPage = () => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/sell-with-us"
        title="Sell Your Home | Becca Travis"
        description="Organize your home details and next steps in a private selling plan. Talk with Becca Travis about your North Alabama sale when you are ready."
        image="/sharing-cards/og-sellers.jpg"
        alt="Discover your home's true value and sell confidently"
      />

      <section className="seller-intro">
        <div className="seller-intro-inner">
          <div className="seller-intro-copy">
            <h1>Start your home sale with a plan.</h1>
            <p>
              Get clear on your next steps before you list. Gather your home details, see
              what to verify, and bring focused questions to a conversation when you are
              ready.
            </p>
            <div className="seller-intro-actions">
              <Link href="/listing-planner" legacyBehavior>
                <a className="seller-primary">Build my selling plan</a>
              </Link>
              <a className="seller-secondary" href="#seller-request">
                I am ready to discuss selling
              </a>
            </div>
          </div>

          <aside className="seller-preview" aria-label="Listing planner benefits">
            <Image
              className="seller-preview-image"
              src="/images/listing-planner/hero.jpg"
              alt="Illustrative home preparation workspace with organized property records"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 42vw"
            />
            <div className="seller-preview-note">
              <strong>Make a plan that fits your timing.</strong>
              <span>Private planner. No contact details required.</span>
            </div>
          </aside>
        </div>
      </section>

      <div id="seller-request">
        <Hero />
      </div>

      <style jsx>{`
        .seller-intro {
          background: #ffffff;
          border-bottom: 1px solid #e3e5e8;
        }

        .seller-intro-inner {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(340px, 0.88fr);
          gap: 62px;
          align-items: center;
          width: min(calc(100% - 48px), 1200px);
          margin: 0 auto;
          padding: 74px 0 66px;
        }

        .seller-intro-copy h1 {
          max-width: 680px;
          color: #58243c;
          font-size: clamp(46px, 5.2vw, 70px);
          font-weight: 500;
          letter-spacing: -0.045em;
          line-height: 1;
        }

        .seller-intro-copy p {
          max-width: 690px;
          margin-top: 19px;
          color: #4e4b59;
          font-size: 17px;
          line-height: 1.7;
        }

        .seller-intro-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 26px;
          margin-top: 28px;
        }

        .seller-primary,
        .seller-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
        }

        .seller-primary {
          min-width: 220px;
          padding: 0 22px;
          color: #ffffff;
          background: #9d446e;
          border: 1px solid #9d446e;
        }

        .seller-primary:hover {
          background: #58243c;
          border-color: #58243c;
        }

        .seller-secondary {
          min-height: 38px;
          padding: 0 2px;
          color: #9d446e;
          border-bottom: 1px solid currentColor;
          border-radius: 0;
        }

        .seller-primary:focus-visible,
        .seller-secondary:focus-visible {
          outline: 3px solid rgba(254, 161, 102, 0.48);
          outline-offset: 3px;
        }

        .seller-preview {
          position: relative;
          min-height: 470px;
          overflow: hidden;
          background: #f6f6f8;
          border-radius: 14px;
          box-shadow: 0 20px 54px rgba(41, 57, 74, 0.15);
        }

        .seller-preview-image {
          object-fit: cover;
          object-position: 54% center;
        }

        .seller-preview-note {
          position: absolute;
          z-index: 1;
          right: 20px;
          bottom: 20px;
          display: grid;
          gap: 4px;
          min-width: 250px;
          padding: 15px 17px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.72);
          border-radius: 11px;
          box-shadow: 0 10px 28px rgba(41, 57, 74, 0.18);
          backdrop-filter: blur(10px);
        }

        .seller-preview-note strong {
          color: #58243c;
          font-size: 15px;
        }

        .seller-preview-note span {
          color: #5f5c6b;
          font-size: 12px;
        }

        #seller-request {
          scroll-margin-top: 80px;
        }

        @media (max-width: 1023px) {
          .seller-intro-inner {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 56px 0 50px;
          }

          .seller-preview {
            max-width: 680px;
            min-height: 410px;
          }
        }

        @media (max-width: 639px) {
          .seller-intro-inner {
            width: min(calc(100% - 32px), 1200px);
            padding: 40px 0 38px;
          }

          .seller-intro-copy h1 {
            font-size: clamp(40px, 12vw, 52px);
          }

          .seller-intro-copy p {
            font-size: 15px;
          }

          .seller-intro-actions {
            align-items: stretch;
            flex-direction: column;
            gap: 16px;
          }

          .seller-primary {
            width: 100%;
          }

          .seller-secondary {
            align-self: flex-start;
          }

          .seller-preview {
            min-height: 300px;
            margin: 0 -16px;
            background-position: 58% center;
            border-radius: 0;
            box-shadow: none;
          }

          .seller-preview-note {
            right: 14px;
            bottom: 14px;
            min-width: 224px;
            padding: 12px 14px;
          }
        }
      `}</style>
    </main>
  )
}

export default Page
