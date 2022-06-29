import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
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
    fontFamily: `'IBM Plex Serif', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;`,
  },
  body: {
    background: '#FFFFFF',
  },
  html: {
    colorScheme: 'dark',
  },
})
