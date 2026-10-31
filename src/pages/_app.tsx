import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
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

const professionalIdentity = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://beccatravis.com/#becca-travis',
  name: 'Becca Travis',
  url: 'https://beccatravis.com',
  jobTitle: 'Associate Broker',
  worksFor: {
    '@type': 'RealEstateAgent',
    name: 'Coldwell Banker First',
  },
  identifier: {
    '@type': 'PropertyValue',
    name: 'Alabama real estate license',
    value: '000126941-1',
    url: 'https://arec.alabama.gov/apps/LicenseSearch/Home/Details/131571',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [queryClient] = useState(() => new QueryClient())
  const isPortugueseBuyerRoute = router.pathname.startsWith('/agenciamento')
  const isSellerRoute =
    router.pathname === '/listing-planner' || router.pathname === '/sell-with-us'
  const hasFocusedBuyerTools =
    router.pathname === '/areas' ||
    router.pathname === '/planning-tools' ||
    router.pathname === '/north-alabama-property-research'
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <script
            id="becca-professional-identity"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalIdentity) }}
          />
        </Head>
        {isPortugueseBuyerRoute ? <AgenciamentoHeader /> : <Navbar />}
        <Component {...pageProps} />
        {!isSellerRoute && !hasFocusedBuyerTools && <BuyerConcierge />}
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
