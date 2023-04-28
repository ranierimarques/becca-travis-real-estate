import Head from 'next/head'

interface MetaSEOProps {
  title: string
  description: string
  image: string
  alt: string
}

const environment = process.env.NEXT_PUBLIC_VERCEL_ENV
const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL

const url = environment === 'production' ? 'beccatravis.com' : vercelURL
const fullURL = `${url ? 'https://' + url : 'http://localhost:3000'}`

export function MetaSEO({ title, description, image, alt }: MetaSEOProps) {
  const imagePath = fullURL + image

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={imagePath} />
      <meta property="og:url" content={fullURL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Becca Travis" />
      <meta property="og:image" content={imagePath} />
      <meta property="og:image:secure_url" content={imagePath} />
      <meta property="og:image:alt" content={alt} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={fullURL} />
      <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
    </Head>
  )
}
