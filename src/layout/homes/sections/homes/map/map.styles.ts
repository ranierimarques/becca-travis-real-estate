import { css, keyframes, styled } from 'stitches.config'

const backgroundPulse = keyframes({
  '0%': { background: 'rgba($grayW9Rgb, 0.75)' },
  '100%': { background: 'rgba($grayW9Rgb, 0.4)' },
})

export const containerStyle = css({
  width: '100%',
  // height: 'calc(100vh - 110px)',

  variants: {
    variant: {
      1: {
        height: 500,
      },
    },
  },
})

export const Skeleton = styled('div', containerStyle, {
  animation: `${backgroundPulse} 1s linear infinite alternate`,
})
