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
    hasMaxWidth: {
      true: {
        maxWidth: '1072px',
        margin: '0 auto',
      },
    },
    padding: {
      '1': {
        padding: '112px 0 120px',
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
    },
  },
})

export type SectionVariants = Stitches.VariantProps<typeof Section>
