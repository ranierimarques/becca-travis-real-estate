import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

const rgbColors = {
  black: 'rgb(0, 0, 0)', // #000000
  white: 'rgb(255, 255, 255)', // #ffffff

  offWhite1: 'rgb(255, 245, 245)', // #FFF5F5
  offWhite2: 'rgb(246, 246, 248)', // #F6F6F8

  magenta1: 'rgb(157, 68, 110)', // #9D446E
  magenta2: 'rgb(192, 109, 148)', // #C06D94
  magenta3: 'rgb(207, 132, 167)', // #CF84A7
  magenta4: 'rgb(220, 157, 187)', // #DC9DBB
  magenta5: 'rgb(232, 183, 206)', // #E8B7CE
  magenta6: 'rgb(88, 36, 60)', // #58243C
  magenta7: 'rgb(105, 44, 73)', // #692C49
  magenta8: 'rgb(123, 52, 85)', // #7B3455
  magenta9: 'rgb(140, 60, 98)', // #8C3C62

  tangerine1: 'rgb(254, 161, 102)', // #FEA166
  tangerine2: 'rgb(251, 182, 147)', // #FBB693
  tangerine3: 'rgb(250, 194, 168)', // #FAC2A8
  tangerine4: 'rgb(250, 207, 188)', // #FACFBC
  tangerine5: 'rgb(250, 220, 208)', // #FADCD0
  tangerine6: 'rgb(91, 47, 32)', // #5B2F20
  tangerine7: 'rgb(127, 65, 36)', // #7F4124
  tangerine8: 'rgb(197, 126, 89)', // #C57E59
  tangerine9: 'rgb(229, 172, 138)', // #E5AC8A
  tangerine10: 'rgb(245, 222, 208)', // #F5DED0

  green1: 'rgb(131, 207, 119)', // #83CF77
  green2: 'rgb(110, 187, 90)', // #6EBB5A
  green3: 'rgb(91, 163, 65)', // #5BA341
  green4: 'rgb(79, 89, 75)', // #4F594B

  red1: 'rgb(247, 150, 170)', // #F796AA
  red2: 'rgb(211, 93, 110)', // #D35D6E
  red3: 'rgb(189, 62, 89)', // #BD3E59

  blue1: 'rgb(66, 160, 255)', // #42A0FF
  blue2: 'rgb(58, 138, 217)', // #3A8AD9

  yellow1: 'rgb(237, 218, 90)', // #EDDA5A
  yellow2: 'rgb(217, 188, 58)', // #D9BC3A
  yellow3: 'rgb(179, 154, 32)', // #B39A20
  yellow4: 'rgb(255, 244, 186)', // #FFF4BA

  gray1: 'rgb(51, 48, 62)', // #33303E
  gray2: 'rgb(78, 75, 89)', // #4E4B59
  gray3: 'rgb(95, 92, 107)', // #5F5C6B
  gray4: 'rgb(122, 119, 134)', // #7A7786
  gray5: 'rgb(140, 138, 151)', // #8C8A97

  grayW1: 'rgb(41, 57, 74)', // #29394A
  grayW2: 'rgb(71, 85, 103)', // #475567
  grayW3: 'rgb(81, 92, 107)', // #515C6B
  grayW4: 'rgb(88, 100, 116)', // #586474
  grayW5: 'rgb(124, 137, 153)', // #7C8999
  grayW6: 'rgb(156, 168, 183)', // #9CA8B7
  grayW7: 'rgb(166, 174, 184)', // #A6AEB8
  grayW8: 'rgb(205, 209, 214)', // #CDD1D6
  grayW9: 'rgb(227, 229, 232)', // #E3E5E8
  grayW10: 'rgb(246, 246, 248)', // #F6F6F8

  details1: 'rgb(15, 20, 26)', // #0F141A
}

const basicColors = Object.entries(rgbColors).reduce(
  (previousValue, currentValue) => ({
    ...previousValue,
    [`${currentValue[0]}Rgb`]: currentValue[1].replace(/rgb\((.+?)\)/, '$1'),
  }),
  {}
)

export const { styled, getCssText, globalCss, css, keyframes } = createStitches({
  theme: {
    colors: {
      ...rgbColors,
      ...basicColors,
    },
  },
  utils: {
    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),

    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
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

    bg: (value: Stitches.PropertyValue<'background'>) => ({
      background: value,
    }),

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
