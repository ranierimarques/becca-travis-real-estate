import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '.gm-style .gm-style-iw-tc::after': {
    background: 'none',
    boxShadow: 'none',
  },

  '*': {
    margin: 0,
    '-webkit-tap-highlight-color': 'transparent',
  },

  'html, body, #__next': {
    height: '100%',
  },

  'html:focus-within': {
    scrollBehavior: 'smooth',
  },

  body: {
    overflowX: 'hidden',
    lineHeight: '1.5',
    '-webkit-font-smoothing': 'antialiased',
    // fontFamily: `'IBM Plex Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`,
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

  'ol, ul, menu': {
    padding: 0,
    listStyle: 'none',
  },

  'img, picture, video, canvas': {
    display: 'block',
    maxWidth: '100%',
  },

  svg: {
    display: 'block',
    minWidth: 'fit-content',
  },

  'input, button, textarea, select': {
    font: 'inherit',
    padding: 0,
    background: 'none',
    border: 0,
    outline: 'none',
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
