import type { InferGetStaticPropsType, NextPage } from 'next'
import { MetaSEO } from '@/common'
import { getTerms } from '@/services/terms/get-terms'
import { Terms } from '@/shared'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/fraud-alert"
        title="Fraud Alert | Becca Travis"
        description="Consumer Fraud Alerts | Becca Travis"
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
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
