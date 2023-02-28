import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'jotai'
import { Footer, Navbar } from '@/common'
import { globalStyles } from '@/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
