import { Footer, Navbar } from '@/common'
import { globalStyles } from '@/styles/global'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'jotai'
import type { AppProps } from 'next/app'
import { useState } from 'react'

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
