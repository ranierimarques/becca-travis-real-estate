import { AtRule } from '@stitches/react/types/css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WeightsName = any

const weightsNames: WeightsName = {
  100: 'thin',
  200: 'extra-light',
  300: 'light',
  400: 'regular',
  500: 'medium',
  600: 'semi-bold',
  700: 'bold',
  800: 'extra-bold',
  900: 'black',
}

export type Fonts = {
  fontFamily: string
  fontWeight: {
    style: 'italic' | 'normal'
    weights: number[]
  }[]
  fontDisplay: AtRule.FontDisplay
}[]

export function processFonts(fonts: Fonts) {
  type Declarations = AtRule.FontFace | AtRule.FontFace[]

  const declarations: Declarations = []
  const paths: string[] = []

  fonts.forEach(({ fontFamily, fontWeight, fontDisplay }) => {
    fontWeight.forEach(({ weights, style }) => {
      weights.forEach(weight => {
        const fontFamilyFormatted = fontFamily.replaceAll(' ', '-').toLowerCase()
        const fontStyle = style === 'italic' ? 'italic-' : ''
        const fontWeightName = weightsNames[weight] ?? 'variable'
        const fontFormat = 'woff2'

        const fontFamilyPath = `/fonts/${fontFamilyFormatted}/${fontStyle}${fontWeightName}.${fontFormat}`

        paths.push(fontFamilyPath)
        declarations.push({
          fontFamily,
          fontStyle: style,
          fontWeight: weight,
          fontDisplay,
          src: `local("${fontFamily}"), url("${fontFamilyPath}") format("${fontFormat}")`,
        })
      })
    })
  })

  return { declarations, paths }
}
