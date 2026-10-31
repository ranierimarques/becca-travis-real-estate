import type { InferGetStaticPropsType, NextPage } from 'next'
import { MetaSEO } from '@/common'
import { getTerms } from '@/services/terms/get-terms'
import { Terms } from '@/shared'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/accessibility-statement"
        title="Accessibility Statement | Becca Travis"
        description="Accessibility Assistance | Becca Travis"
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
      />

      <Terms terms={data} />
    </main>
  )
}

export async function getStaticProps() {
  const data = await getTerms('accessibility-statement')

  return {
    props: {
      data,
    },
  }
}

export default Page
