import type { NextPage } from 'next'
import Head from 'next/head'
import { MetaSEO } from '@/common'
import { ListingPlanner } from '@/layout/listing-planner'
import { listingPlannerFaq } from '@/layout/listing-planner/listing-planner-content'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://beccatravis.com/#website',
      url: 'https://beccatravis.com',
      name: 'Becca Travis Real Estate',
      inLanguage: 'en-US',
      publisher: { '@id': 'https://beccatravis.com/#becca-travis' },
    },
    {
      '@type': 'Person',
      '@id': 'https://beccatravis.com/#becca-travis',
      name: 'Becca Travis',
      url: 'https://beccatravis.com',
      sameAs: [
        'https://www.facebook.com/beccatravisrealestate/',
        'https://www.instagram.com/beccatravisrealestate/',
        'https://www.linkedin.com/in/beccatravis/',
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://beccatravis.com/listing-planner#page',
      url: 'https://beccatravis.com/listing-planner',
      name: 'Home Selling Planner and Listing Description | Becca Travis',
      description:
        'Organize your home details, see what to verify, preview listing copy, and print a seller preparation checklist.',
      inLanguage: 'en-US',
      isPartOf: { '@id': 'https://beccatravis.com/#website' },
      mainEntity: { '@id': 'https://beccatravis.com/listing-planner#app' },
      primaryImageOfPage: {
        '@id': 'https://beccatravis.com/listing-planner#primary-image',
      },
      breadcrumb: { '@id': 'https://beccatravis.com/listing-planner#breadcrumb' },
    },
    {
      '@type': 'ImageObject',
      '@id': 'https://beccatravis.com/listing-planner#primary-image',
      contentUrl: 'https://beccatravis.com/images/listing-planner/hero.jpg',
      url: 'https://beccatravis.com/images/listing-planner/hero.jpg',
      width: 1800,
      height: 1200,
      caption: 'A home preparation workspace with organized property records.',
      representativeOfPage: true,
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://beccatravis.com/listing-planner#app',
      name: 'Home Selling Planner',
      url: 'https://beccatravis.com/listing-planner',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      browserRequirements: 'JavaScript and local browser storage',
      description:
        'A private worksheet that organizes homeowner supplied property facts, a listing description preview, and a preparation checklist.',
      featureList: [
        'Listing description preview from entered facts',
        'Property details to verify',
        'Wording review',
        'Printable preparation checklist',
        'Private browser storage',
      ],
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      publisher: { '@id': 'https://beccatravis.com/#becca-travis' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://beccatravis.com/listing-planner#faq',
      mainEntity: listingPlannerFaq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://beccatravis.com/listing-planner#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://beccatravis.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Home selling planner',
          item: 'https://beccatravis.com/listing-planner',
        },
      ],
    },
  ],
}

const Page: NextPage = () => {
  return (
    <>
      <MetaSEO
        canonicalPath="/listing-planner"
        title="Home Selling Planner and Listing Description | Becca Travis"
        description="Organize your home details, see what to verify, preview listing copy, and print a preparation checklist. No contact details required."
        image="/images/listing-planner/hero.jpg"
        alt="Home selling planner by Becca Travis"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <ListingPlanner />
    </>
  )
}

export default Page
