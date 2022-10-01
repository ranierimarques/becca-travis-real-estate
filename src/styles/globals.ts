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

  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    margin: 0,
    '-webkit-tap-highlight-color': 'transparent',

    padding: 0,
    background: 'none',
    border: 0,
    outline: 'none',
    listStyle: 'none',
    textDecoration: 'none',
  },

  'html, body, #__next': {
    height: '100%',
  },

  'html:focus-within': {
    scrollBehavior: 'smooth',
  },

  body: {
    lineHeight: '1.5',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: `'IBM Plex Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`,
  },

  '#__next': {
    isolation: 'isolate',
  },

  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
})
