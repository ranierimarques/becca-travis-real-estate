import { styled } from 'stitches.config'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: 'calc(100vh - 110px)',
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
            height: 'auto',
          },
        },
      },
      gallery: {
        [`${Wrapper}`]: {
          maxWidth: '1184px',
          margin: '0 auto',
          px: '40px',

          '@bp4': {
            px: '24px',
            height: 'calc(100vh + 180px)',
          },
          '@bp3': {
            px: '16px',
          },
          '@bp2': {
            px: '8px',
            height: 'calc(100vh + 150px)',
          },
          '@bp1': {
            px: '0',
          },
        },
      },
    },
  },
})
