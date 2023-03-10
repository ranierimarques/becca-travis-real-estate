import { styled } from 'stitches.config'
import { Section as SectionTemplate } from '@/template'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  height: 'calc(100vh - 110px)',
})

export const Section = styled(SectionTemplate, {
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
          '@bp4': {
            height: 'calc(100vh + 180px)',
          },
          '@bp2': {
            height: 'calc(100vh + 150px)',
          },
        },
      },
    },
  },
})
