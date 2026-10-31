import type { InferGetStaticPropsType, NextPage } from 'next'
import { MetaSEO } from '@/common'
import { getTerms } from '@/services/terms/get-terms'
import { Terms } from '@/shared'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/fair-housing-statement"
        title="Fair Housing Statement | Becca Travis"
        description="Fair Housing Disclosure | Becca Travis"
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
      />

      <Terms terms={data} />
    </main>
  )
}

export async function getStaticProps() {
  const data = await getTerms('fair-housing-statement')

  return {
    props: {
      data,
    },
  }
}

export default Page
