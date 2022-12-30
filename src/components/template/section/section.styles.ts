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
        '@bp5': {
          paddingTop: '112px',
          paddingBottom: '96px',
        },
        '@bp4': {
          paddingTop: '96px',
          paddingBottom: '80px',
        },
      },
      '2': {
        paddingTop: '120px',
        paddingBottom: '120px',
        '@bp5': {
          paddingTop: '96px',
          paddingBottom: '104px',
        },
        '@bp4': {
          paddingTop: '72px',
          paddingBottom: '104px',
        },
        '@bp3': {
          paddingTop: '80px',
          paddingBottom: '80px',
        },
      },
      '3': {
        paddingTop: '96px',
        paddingBottom: '104px',
        '@bp5': {
          paddingTop: '88px',
          paddingBottom: '88px',
        },
        '@bp4': {
          paddingTop: '48px',
          paddingBottom: '48px',
        },
        '@bp2': {
          paddingTop: '40px',
          paddingBottom: '40px',
        },
      },
      '4': {
        paddingTop: '0',
        paddingBottom: '120px',
        '@bp5': {
          paddingTop: '0',
          paddingBottom: '64px',
        },
        '@bp4': {
          paddingTop: '0',
          paddingBottom: '48px',
        },
        '@bp1': {
          paddingTop: '0',
          paddingBottom: '40px',
        },
      },
      '5': {
        paddingTop: '0px',
        paddingBottom: '120px',
        '@bp5': {
          paddingTop: '40px',
          paddingBottom: '96px',
        },
        '@bp4': {
          paddingTop: '56px',
          paddingBottom: '80px',
        },
        '@bp3': {
          paddingTop: '32px',
          paddingBottom: '80px',
        },
        '@bp1': {
          paddingTop: '40px',
          paddingBottom: '80px',
        },
      },
      '6': {
        paddingTop: '120px',
        paddingBottom: '120px',

        '@bp5': {
          paddingTop: '96px',
          paddingBottom: '96px',
        },
        '@bp4': {
          paddingTop: '80px',
          paddingBottom: '80px',
        },
      },
      '7': {
        paddingTop: '120px',
        paddingBottom: '116px',
        '@bp5': {
          paddingTop: '80px',
          paddingBottom: '80px',
        },
        '@bp4': {
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
        maxWidth: '1184px',
        margin: '0 auto',
        px: '56px',

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
