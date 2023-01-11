import { globalCss } from 'stitches.config'

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
