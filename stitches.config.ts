import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import { colors, colorsRgb } from '@styles/colors'

export const { styled, getCssText, globalCss, css, keyframes } = createStitches({
  theme: {
    colors: {
      ...colors,
      ...colorsRgb,
    },
  },
  utils: {
    size: (value: Stitches.PropertyValue<'width'>) => ({ width: value, height: value }),
    w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
    h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),

    p: (value: Stitches.PropertyValue<'padding'>) => ({ padding: value }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({ margin: value }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({ marginTop: value }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({ marginRight: value }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),

    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),

    bg: (value: Stitches.PropertyValue<'background'>) => ({ background: value }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),
    pos: (value: Stitches.PropertyValue<'position'>) => ({ position: value }),
  },
})
