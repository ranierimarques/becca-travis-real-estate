import { processFonts, type Fonts } from './utils/fonts'

// Add/edit fonts here ↓
const fonts: Fonts = [
  {
    fontFamily: 'IBM Plex Serif',
    fontWeight: [
      { style: 'normal', weights: [300, 400, 500, 600, 700] },
      { style: 'italic', weights: [400] },
    ],
    fontDisplay: 'fallback',
  },
]

const { declarations, paths } = processFonts(fonts)

export const fontFace = { '@font-face': declarations }
export const fontPaths = paths
