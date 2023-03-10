import { keyframes, styled } from 'stitches.config'

const backgroundPulse = keyframes({
  '0%': { background: 'rgba($grayW9Rgb, 0.75)' },
  '100%': { background: 'rgba($grayW9Rgb, 0.4)' },
})

export const ScrollableDiv = styled('div', {
  overflowY: 'overlay',

  '&::-webkit-scrollbar': {
    width: '10px',

    '@media (any-pointer: coarse)': {
      display: 'none',
    },
  },

  '&::-webkit-scrollbar-thumb': {
    border: '2px solid rgba($colors$blackRgb, 0)',
    backgroundClip: 'padding-box',
    backgroundColor: '$grayW8',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: 'rgba($colors$grayW7Rgb, 0.8)',
  },

  '&::-webkit-scrollbar-button:single-button:vertical:decrement': {
    height: '28px',
  },

  '&::-webkit-scrollbar-button:single-button:vertical:increment': {
    height: '48px',
  },
})

export const Houses = styled('ul', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 16,

  '@bp5': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@bp2': {
    gridTemplateColumns: '1fr',
  },

  variants: {
    visualization: {
      map: {
        padding: '28px 16px 48px',

        '@bp4': {
          display: 'none',

          '+ div': {
            display: 'none',
          },
        },
      },
      gallery: {
        padding: '28px 0 48px',
      },
    },
  },
})

export const SkeletonCard = styled('li', {
  animation: `${backgroundPulse} 1s linear infinite alternate`,
  borderRadius: 8,
  height: '300px',
})
