import { Footer, Navbar } from '@/common'
import { globalStyles } from '@/styles/global'
import { IBM_Plex_Serif } from '@next/font/google'
import type { AppProps } from 'next/app'

const ibmPlexSerif = IBM_Plex_Serif({
  display: 'fallback',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${ibmPlexSerif.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
