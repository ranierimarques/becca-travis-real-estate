import { globalStyles } from "@styles/globals"
import type { AppProps } from "next/app"
import { Navbar } from "src/common"

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
