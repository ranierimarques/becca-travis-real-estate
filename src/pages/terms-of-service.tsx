import type { InferGetStaticPropsType, NextPage } from 'next'
import { MetaSEO } from '@/common'
import { getTerms } from '@/services/terms/get-terms'
import { Terms } from '@/shared'

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <main>
      <MetaSEO
        canonicalPath="/terms-of-service"
        title="Terms of Service | Becca Travis"
        description="Terms of Service | Becca Travis"
        image="/images/home-inspiration/living-room-fireplace.webp"
        alt="Bright living room with a fireplace and windows"
      />

      <Terms terms={data} />
    </main>
  )
}

export async function getStaticProps() {
  const data = await getTerms('terms-of-service')

  return {
    props: {
      data,
    },
  }
}

export default Page
