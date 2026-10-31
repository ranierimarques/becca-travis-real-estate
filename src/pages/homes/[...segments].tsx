import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type Props = { removed: boolean }

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const segments = params?.segments
  const firstSegment = Array.isArray(segments) ? segments[0] : segments

  if (typeof firstSegment === 'string' && /^69179ef9/i.test(firstSegment)) {
    res.statusCode = 410
    res.setHeader('X-Robots-Tag', 'noindex, nofollow')
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
    return { props: { removed: true } }
  }

  return { redirect: { destination: '/homes', permanent: false } }
}

export default function HomeUnavailable({ removed }: Props) {
  if (!removed) return null

  return (
    <main style={{ maxWidth: 680, margin: '80px auto', padding: '0 24px' }}>
      <Head>
        <title>Listing removed | Becca Travis</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <h1>This listing is no longer available</h1>
      <p>Use the current home search options or ask Becca for help finding a home.</p>
      <Link href="/homes">Explore your home search options</Link>
    </main>
  )
}
