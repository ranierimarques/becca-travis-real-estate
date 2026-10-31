import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Analytics } from '@vercel/analytics/react'
import { DevTools, Footer, Navbar } from '@/common'
import { AgenciamentoFooter, AgenciamentoHeader } from '@/layout/agenciamento/chrome'
import { globalStyles } from '@/styles/global'

const BuyerConcierge = dynamic(
  () =>
    import('../components/shared/buyer-concierge/buyer-concierge').then(
      module => module.BuyerConcierge
    ),
  { ssr: false }
)

const AiAssistant = dynamic(
  () =>
    import('../components/shared/ai-assistant/ai-assistant').then(
      module => module.AiAssistant
    ),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [queryClient] = useState(() => new QueryClient())
  const isPortugueseBuyerRoute = router.pathname.startsWith('/agenciamento')
  const isSellerRoute =
    router.pathname === '/listing-planner' || router.pathname === '/sell-with-us'
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {isPortugueseBuyerRoute ? <AgenciamentoHeader /> : <Navbar />}
        <Component {...pageProps} />
        {!isSellerRoute && <BuyerConcierge />}
        <Analytics />
        {isPortugueseBuyerRoute ? <AgenciamentoFooter /> : <Footer />}
        {!isSellerRoute && process.env.NEXT_PUBLIC_AI_ASSISTANT_ENABLED === 'true' && (
          <AiAssistant />
        )}
        {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && <DevTools />}
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
