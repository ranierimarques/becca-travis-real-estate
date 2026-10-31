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
      name: 'Free Home Listing Description Planner | Becca Travis',
      description:
        'Organize verified property facts, create a factual first listing description draft, and print a seller preparation plan without sharing contact details.',
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
      name: 'Factual Home Listing Planner',
      url: 'https://beccatravis.com/listing-planner',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web browser',
      browserRequirements: 'JavaScript and local browser storage',
      description:
        'A browser only worksheet that turns homeowner supplied property facts into a working listing description draft and preparation checklist.',
      featureList: [
        'Factual property description draft',
        'Missing fact and source checklist',
        'Fair housing wording review',
        'Printable seller preparation plan',
        'Browser only storage',
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
          name: 'Listing description planner',
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
        title="Free Home Listing Description Planner | Becca Travis"
        description="Organize verified property facts, create a factual first listing description draft, and print a seller preparation plan. No contact details required."
        image="/images/listing-planner/hero.jpg"
        alt="Factual home listing description planner by Becca Travis"
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
