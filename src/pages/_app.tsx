import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { DevTools, Footer, Navbar } from '@/common'
import { globalStyles } from '@/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
        <Footer />
        {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && <DevTools />}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
