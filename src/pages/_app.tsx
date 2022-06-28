import { globalStyles } from '@styles/globals'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}

export default MyApp
