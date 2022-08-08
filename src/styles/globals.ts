import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'IBM Plex Serif',
      fontStyle: 'italic',
      fontWeight: 400,
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/ibm-plex-serif/italic.woff2") format("woff2")',
    },
    {
      fontFamily: 'IBM Plex Serif',
      fontStyle: 'normal',
      fontWeight: 300,
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/ibm-plex-serif/light.woff2") format("woff2")',
    },
    {
      fontFamily: 'IBM Plex Serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/ibm-plex-serif/regular.woff2") format("woff2")',
    },
    {
      fontFamily: 'IBM Plex Serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/ibm-plex-serif/medium.woff2") format("woff2")',
    },
    {
      fontFamily: 'IBM Plex Serif',
      fontStyle: 'normal',
      fontWeight: 600,
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/ibm-plex-serif/semi-bold.woff2") format("woff2")',
    },
    {
      fontFamily: 'IBM Plex Serif',
      fontStyle: 'normal',
      fontWeight: 700,
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/ibm-plex-serif/bold.woff2") format("woff2")',
    },
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    background: 'none',
    border: 0,
    outline: 'none',
    listStyle: 'none',
    textDecoration: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-webkit-tap-highlight-color': 'transparent',
    fontFamily: `'IBM Plex Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`,
  },
  body: {
    background: '$white',
    overflowY: 'overlay',
  },
})
