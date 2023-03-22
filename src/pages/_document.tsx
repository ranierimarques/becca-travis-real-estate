import { Head, Html, Main, NextScript } from 'next/document'
import { RuntimeLoader } from '@rive-app/react-canvas'
import { getCssText } from 'stitches.config'

// This downloads the newer version of rive.wasm,
// maybe cause bugs. Version 1.0.102 is stable.
export const riveWasmUrl = 'https://unpkg.com/@rive-app/canvas/rive.wasm'

RuntimeLoader.setWasmUrl(riveWasmUrl)

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
