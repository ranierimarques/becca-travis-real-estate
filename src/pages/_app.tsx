import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { DevTools, Footer, Navbar } from '@/common'
import { AgenciamentoFooter, AgenciamentoHeader } from '@/layout/agenciamento/chrome'
import { globalStyles } from '@/styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [queryClient] = useState(() => new QueryClient())
  const isPortugueseBuyerRoute = router.pathname.startsWith('/agenciamento')
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {isPortugueseBuyerRoute ? <AgenciamentoHeader /> : <Navbar />}
        <Component {...pageProps} />
        <Analytics />
        {isPortugueseBuyerRoute ? <AgenciamentoFooter /> : <Footer />}
        {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && <DevTools />}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
