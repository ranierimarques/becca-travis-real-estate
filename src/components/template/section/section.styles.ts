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
        paddingTop: '112px',
        paddingBottom: '120px',
        '@bp4': {
          paddingTop: '112px',
          paddingBottom: '96px',
        },
        '@bp3': {
          paddingTop: '96px',
          paddingBottom: '80px',
        },
      },
      '2': {
        paddingTop: '120px',
        paddingBottom: '120px',
      },
      '3': {
        paddingTop: '96px',
        paddingBottom: '104px',
      },
      '4': {
        paddingTop: '0',
        paddingBottom: '116px',

        '@bp4': {
          padding: '48px 24px',
        },
        '@bp1': {
          padding: '40px 16px',
        },
      },
      '5': {
        paddingTop: '160px',
        paddingBottom: '160px',
      },
      '6': {
        paddingTop: '160px',
        paddingBottom: '120px',
      },
      '7': {
        paddingTop: '120px',
        paddingBottom: '116px',
        '@bp4': {
          paddingTop: '80px',
          paddingBottom: '80px',
        },
        '@bp3': {
          paddingTop: '64px',
          paddingBottom: '80px',
        },
        '@bp1': {
          paddingTop: '56px',
          paddingBottom: '80px',
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
