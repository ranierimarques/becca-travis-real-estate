import { processFonts } from './helpers/fonts'

export const { fontFace, fontPaths } = processFonts([
  {
    fontFamily: 'IBM Plex Serif',
    fontWeight: [
      { style: 'normal', weights: [300, 400, 500, 600, 700] },
      { style: 'italic', weights: [400] },
    ],
    fontDisplay: 'fallback',
  },
])
