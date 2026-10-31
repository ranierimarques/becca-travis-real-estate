import Head from 'next/head'
import { useRouter } from 'next/router'

interface MetaSEOProps {
  title: string
  description: string
  image: string
  alt: string
  canonicalPath?: string
  noindex?: boolean
  locale?: string
}

const environment = process.env.NEXT_PUBLIC_VERCEL_ENV
const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL

const url = environment === 'production' ? 'beccatravis.com' : vercelURL
const fullURL = `${url ? 'https://' + url : 'http://localhost:3000'}`

export function MetaSEO({
  title,
  description,
  image,
  alt,
  canonicalPath,
  noindex = false,
  locale = 'en_US',
}: MetaSEOProps) {
  const { asPath } = useRouter()
  const path = (canonicalPath || asPath).split(/[?#]/)[0] || '/'
  const pageURL = fullURL + (path === '/' ? '' : path.replace(/\/$/, ''))
  const imagePath = /^https?:\/\//i.test(image) ? image : fullURL + image
  const preventIndexing = noindex || environment === 'preview'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={imagePath} />
      <meta property="og:url" content={pageURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Becca Travis" />
      <meta property="og:image" content={imagePath} />
      <meta property="og:image:secure_url" content={imagePath} />
      <meta property="og:image:alt" content={alt} />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={pageURL} />
      <meta
        name="robots"
        content={
          preventIndexing
            ? 'noindex, nofollow'
            : 'max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        }
      />
    </Head>
  )
}
