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
        [`${Wrapper}`]: {
          maxWidth: '45%',
          minWidth: '45%',
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
