import { keyframes, styled } from 'stitches.config'

const backgroundPulse = keyframes({
  '0%': { background: 'rgba($grayW9Rgb, 0.75)' },
  '100%': { background: 'rgba($grayW9Rgb, 0.4)' },
})

export const Houses = styled('ul', {
  // display: 'grid',
  // gridTemplateColumns: 'repeat(2, minmax(255px, 336px))',
  // gridAutoColumns: 'minmax(200px, 240px)',

  display: 'flex',
  gap: 16,
  flexWrap: 'wrap',

  padding: '28px 16px 48px',

  variants: {
    visualization: {
      map: {
        '& > li': {
          flex: '1 1 155px',
          // maxWidth: '336px',
        },
      },
      gallery: {
        '& > li': {
          flex: '1 1 336px',
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
