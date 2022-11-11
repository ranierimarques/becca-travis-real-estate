import { Footer, Navbar } from '@/common'
import { fontPaths } from '@/styles/fonts'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        {fontPaths.map((path, index) => (
          <link
            key={index}
            rel="preload"
            href={path}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
