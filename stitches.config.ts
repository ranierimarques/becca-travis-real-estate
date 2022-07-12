import { createStitches } from '@stitches/react'

const rgbColors = {
  blackRgb: '0, 0, 0', // #000000
  whiteRgb: '255, 255, 255', // #ffffff

  offWhite1Rgb: '255, 245, 245', // #FFF5F5
  offWhite2Rgb: '246, 246, 248', // #F6F6F8

  magenta1Rgb: '157, 68, 110', // #9D446E
  magenta2Rgb: '192, 109, 148', // #C06D94
  magenta3Rgb: '207, 132, 167', // #CF84A7
  magenta4Rgb: '220, 157, 187', // #DC9DBB
  magenta5Rgb: '232, 183, 206', // #E8B7CE
  magenta6Rgb: '88, 36, 60', // #58243C
  magenta7Rgb: '105, 44, 73', // #692C49
  magenta8Rgb: '123, 52, 85', // #7B3455
  magenta9Rgb: '140, 60, 98', // #8C3C62

  tangerine1Rgb: '254, 161, 102', // #FEA166
  tangerine2Rgb: '251, 182, 147', // #FBB693
  tangerine3Rgb: '250, 194, 168', // #FAC2A8
  tangerine4Rgb: '250, 207, 188', // #FACFBC
  tangerine5Rgb: '250, 220, 208', // #FADCD0
  tangerine6Rgb: '91, 47, 32', // #5B2F20
  tangerine7Rgb: '127, 65, 36', // #7F4124
  tangerine8Rgb: '197, 126, 89', // #C57E59
  tangerine9Rgb: '229, 172, 138', // #E5AC8A
  tangerine10Rgb: '245, 222, 208', // #F5DED0

  green1Rgb: '131, 207, 119', // #83CF77
  green2Rgb: '110, 187, 90', // #6EBB5A
  green3Rgb: '91, 163, 65', // #5BA341
  green4Rgb: '79, 89, 75', // #4F594B

  red1Rgb: '247, 150, 170', // #F796AA
  red2Rgb: '211, 93, 110', // #D35D6E
  red3Rgb: '189, 62, 89', // #BD3E59

  yellow1Rgb: '237, 218, 90', // #EDDA5A
  yellow2Rgb: '217, 188, 58', // #D9BC3A
  yellow3Rgb: '179, 154, 32', // #B39A20

  gray1Rgb: '51, 48, 62', // #33303E
  gray2Rgb: '78, 75, 89', // #4E4B59
  gray3Rgb: '95, 92, 107', // #5F5C6B
  gray4Rgb: '122, 119, 134', // #7A7786
  gray5Rgb: '140, 138, 151', // #8C8A97

  grayW1Rgb: '41, 57, 74', // #29394A
  grayW2Rgb: '71, 85, 103', // #475567
  grayW3Rgb: '81, 92, 107', // #515C6B
  grayW4Rgb: '88, 100, 116', // #586474
  grayW5Rgb: '124, 137, 153', // #7C8999
  grayW6Rgb: '156, 168, 183', // #9CA8B7
  grayW7Rgb: '166, 174, 184', // #A6AEB8
  grayW8Rgb: '205, 209, 214', // #CDD1D6
  grayW9Rgb: '227, 229, 232', // #E3E5E8
  grayW10Rgb: '246, 246, 248', // #F6F6F8
}

const basicColors = Object.entries(rgbColors).reduce(
  (previousValue, currentValue) => ({
    ...previousValue,
    [currentValue[0].replace('Rgb', '')]: `rgb(${currentValue[1]})`,
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
})
