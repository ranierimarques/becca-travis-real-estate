import Image from 'next/image'
import Link from 'next/link'
import { MetaSEO } from '@/common'
import { FaqList } from '@/layout/huntsville-faq'
import { huntsvilleFaq } from '../data/huntsville-faq'

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: huntsvilleFaq.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function HuntsvilleFaqPage() {
  const jsonLd = JSON.stringify(faqStructuredData).replace(/</g, '\\u003c')

  return (
    <main className="faq-page">
      <MetaSEO
        canonicalPath="/huntsville-faq"
        title="Huntsville Home Buying Questions | Becca Travis"
        description="Search clear, source-linked answers about North Alabama homes, property taxes, schools, inspections, VA loans, utilities, and closing."
        image="/images/areas/downtown-huntsville.webp"
        alt="Downtown Huntsville skyline beside a landscaped park pond"
      />
      <script
        id="huntsville-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      <header className="faq-hero">
        <div className="hero-inner">
          <p className="eyebrow">North Alabama buyer guide</p>
          <h1>Good questions make for a clearer move.</h1>
          <p className="intro">
            Search local answers about homes, taxes, schools, inspections, financing,
            utilities, and closing. Open a question to see the supporting sources.
          </p>
          <nav className="related-links" aria-label="Related planning pages">
            <Link href="/areas">Explore North Alabama areas</Link>
            <Link href="/planning-tools">Use the planning tools</Link>
          </nav>
        </div>
        <figure className="faq-hero-image">
          <Image
            src="/images/areas/downtown-huntsville.webp"
            alt="Downtown Huntsville skyline beside a landscaped park pond"
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 700px) 100vw, 42vw"
          />
          <figcaption>Huntsville, Alabama</figcaption>
        </figure>
      </header>

      <section className="answers-section" aria-labelledby="answers-title">
        <div className="section-heading">
          <p className="eyebrow">Local answers with sources</p>
          <h2 id="answers-title">Search buyer questions</h2>
          <p>Type a topic such as property tax, school zones, caveat emptor, VA loan, or water utilities.</p>
        </div>
        <FaqList items={huntsvilleFaq} showSearch />
      </section>

      <section className="contact-band">
        <div>
          <p className="eyebrow">Still have a question?</p>
          <h2>Ask Becca about your address.</h2>
          <p>County, schools, taxes, utilities, and inspection needs can vary by property. Bring the exact address when you are ready.</p>
        </div>
        <Link href="/contact-us">Contact Becca</Link>
      </section>

      <style jsx>{`
        .faq-page { background: #fff; color: #27232a; }
        .faq-hero { align-items: center; background: #f8e7df; display: grid; gap: 48px; grid-template-columns: minmax(0, 1fr) minmax(0, .9fr); padding: 60px max(24px, calc((100vw - 1180px) / 2)); }
        .hero-inner { margin: 0; max-width: 700px; }
        .faq-hero-image { margin: 0; min-width: 0; }
        .faq-hero-image img { aspect-ratio: 1.48; border-radius: 12px; display: block; height: auto; object-fit: cover; width: 100%; }
        .faq-hero-image figcaption { color: #655a60; font-size: 12px; line-height: 1.4; margin-top: 9px; }
        .eyebrow { color: #8d4967; font-size: 12px; font-weight: 700; letter-spacing: .12em; line-height: 1.4; margin: 0 0 14px; text-transform: uppercase; }
        h1 { color: #59223f; font-size: clamp(38px, 5vw, 60px); font-weight: 500; letter-spacing: -.035em; line-height: 1.08; margin: 0; max-width: 770px; }
        .intro { color: #51474d; font-size: 18px; line-height: 1.7; margin: 20px 0 0; max-width: 730px; }
        .related-links { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 25px; }
        .related-links a { border: 1px solid #d8bdca; border-radius: 999px; color: #6d294c; font-size: 13px; font-weight: 600; padding: 11px 15px; text-decoration: none; }
        .answers-section { margin: 0 auto; max-width: 1000px; padding: 70px 24px 82px; scroll-margin-top: 70px; }
        .section-heading { margin: 0 auto 30px; max-width: 700px; text-align: center; }
        h2 { color: #3a2d33; font-size: clamp(28px, 3.5vw, 40px); font-weight: 500; letter-spacing: -.025em; line-height: 1.15; margin: 0; }
        .section-heading > p:last-child { color: #655a60; font-size: 15px; line-height: 1.7; margin: 12px auto 0; }
        .contact-band { align-items: center; background: #f7eee9; display: flex; gap: 32px; justify-content: space-between; padding: 46px max(24px, calc((100vw - 952px) / 2)); }
        .contact-band h2 { font-size: 30px; }
        .contact-band p:last-child { color: #655a60; line-height: 1.6; margin: 10px 0 0; max-width: 650px; }
        .contact-band a { background: #6d294c; border-radius: 999px; color: #fff; flex: 0 0 auto; font-size: 14px; font-weight: 600; padding: 14px 20px; text-decoration: none; }
        @media (max-width: 700px) {
          .faq-hero { grid-template-columns: 1fr; gap: 24px; padding: 48px 20px 40px; }
          .faq-hero-image { order: 2; }
          .hero-inner { order: 1; }
          .faq-hero-image img { aspect-ratio: 1.55; }
        }
        @media (max-width: 600px) {
          .intro { font-size: 16px; }
          .answers-section { padding: 54px 20px 62px; }
          .contact-band { align-items: flex-start; flex-direction: column; padding: 36px 20px; }
        }
      `}</style>
    </main>
  )
}

