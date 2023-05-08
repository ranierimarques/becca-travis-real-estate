import type { InferGetStaticPropsType, NextPage } from 'next'
import { MetaSEO } from '@/common'
import { getTerms } from '@/services/terms/get-terms'
import { Terms } from '@/shared'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <main>
      <MetaSEO
        title="Fraud Alert | Becca Travis"
        description="Consumer Fraud Alerts | Becca Travis"
        image="/sharing-cards/og-index.jpg"
        alt="Feel at home before finding the perfect property."
      />

      <Terms terms={data} />
    </main>
  )
}

export async function getStaticProps() {
  const data = await getTerms('fraud-alert')

  return {
    props: {
      data,
    },
  }
}

export default Page
