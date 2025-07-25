import { IBM_Plex_Serif, Inter } from '@next/font/google'
import { globalCss } from 'stitches.config'

const ibmPlexSerif = IBM_Plex_Serif({
  display: 'fallback',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
})

const inter = Inter({
  display: 'fallback',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    margin: 0,
    '-webkit-tap-highlight-color': 'transparent',
  },

  html: {
    '-webkit-text-size-adjust': '100%',
    fontFamily: inter.style.fontFamily,
  },

  'h1, h2, h3, h4, h5, h6': {
    fontFamily: ibmPlexSerif.style.fontFamily,
  },

  'html:focus-within': {
    scrollBehavior: 'smooth',
  },

  body: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    lineHeight: '1.5',
    '-webkit-font-smoothing': 'antialiased',

    '@bp4': {
      '&[data-overflow="true"]': {
        overflow: 'hidden',
      },
    },
  },

  '#__next': {
    isolation: 'isolate',
  },

  a: {
    outline: 'none',
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
  },

  'ol, ul, menu, li': {
    padding: 0,
    listStyle: 'none',
  },

  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },

  'img, video': {
    height: 'auto',
  },

  'input, button, textarea, select': {
    font: 'inherit',
    padding: 0,
    background: 'none',
    border: 0,
    outline: 'none',
  },

  'input[type="number"]': {
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },
  },

  textarea: {
    resize: 'vertical',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  '@media (prefers-reduced-motion)': {
    '*, *::before, *::after': {
      animationDuration: '0.001ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.001ms !important',
      scrollBehavior: 'auto !important',
    },
  },
})
