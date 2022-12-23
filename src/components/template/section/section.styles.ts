import type * as Stitches from '@stitches/react'
import { styled } from 'stitches.config'

export const Section = styled('section', {
  variants: {
    direction: {
      vertical: {
        position: 'relative',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      horizontal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    padding: {
      '1': {
        padding: '112px 0 120px',
        '@bp4': {
          padding: '112px 0 96px',
        },
        '@bp3': {
          padding: '96px 0 80px',
        },
      },
      '2': {
        padding: '120px 0 120px',
      },
      '3': {
        padding: '96px 0 104px',
      },
      '4': {
        padding: '0 0 116px',
      },
      '5': {
        padding: '160px 0 160px',
      },
      '6': {
        padding: '160px 0 120px',
      },
      '7': {
        padding: '120px 0 116px',
        '@bp4': {
          padding: '80px 0 80px',
        },
        '@bp3': {
          padding: '64px 0 80px',
        },
        '@bp1': {
          padding: '56px 0 80px',
        },
      },
    },
    hasMaxWidth: {
      true: {
        maxWidth: '1200px',
        margin: '0 auto',
        px: '64px',

        '@bp4': {
          px: '40px',
        },
        '@bp3': {
          px: '32px',
        },
        '@bp2': {
          px: '24px',
        },
        '@bp1': {
          px: '16px',
        },
      },
    },
  },
})

export type SectionVariants = Stitches.VariantProps<typeof Section>
