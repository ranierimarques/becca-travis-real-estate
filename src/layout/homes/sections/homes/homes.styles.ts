import { styled } from 'stitches.config'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: 'calc(100vh - 110px)',

  '@bp4': {
    height: '100%',
  },
})

export const Section = styled('section', {
  variants: {
    visualization: {
      map: {
        display: 'flex',

        '@bp4': {
          flexDirection: 'column',
        },
        [`${Wrapper}`]: {
          maxWidth: '45%',
          minWidth: '45%',

          '@bp4': {
            maxWidth: 'none',
            minWidth: 'auto',
          },
        },
      },
      gallery: {
        [`${Wrapper}`]: {
          maxWidth: '1104px',
          margin: '0 auto',
        },
      },
    },
  },
})
