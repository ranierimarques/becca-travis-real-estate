import { keyframes, styled } from 'stitches.config'

const backgroundPulse = keyframes({
  '0%': { background: 'rgba($grayW9Rgb, 0.75)' },
  '100%': { background: 'rgba($grayW9Rgb, 0.4)' },
})

export const ScrollableDiv = styled('div', {
  overflowY: 'overlay',

  '@bp4': {
    overflowY: 'visible',
  },

  '&::-webkit-scrollbar': {
    width: '10px',
  },

  '&::-webkit-scrollbar-track': {},

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
  // display: 'grid',
  // gridTemplateColumns: 'repeat(2, minmax(255px, 336px))',
  // gridAutoColumns: 'minmax(200px, 240px)',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 16,

  padding: '28px 16px 48px',

  '@bp5': {
    gridTemplateColumns: '1fr 1fr',
  },

  variants: {
    visualization: {
      map: {
        '& > li': {
          // flex: '1 1 155px',
          // maxWidth: '336px',
        },

        '@bp4': {
          display: 'none',
        },
      },
      gallery: {
        '& > li': {
          // flex: '1 1 336px',
        },
      },
    },
  },
})

export const SkeletonCard = styled('li', {
  animation: `${backgroundPulse} 1s linear infinite alternate`,
  borderRadius: 8,
  height: '300px',
})
