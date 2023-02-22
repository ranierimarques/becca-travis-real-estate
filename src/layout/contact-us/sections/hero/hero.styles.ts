import { styled } from 'stitches.config'
import { Section as SectionTemplate } from '@/template'

export const Section = styled(SectionTemplate, {
  position: 'relative',

  pt: 80,

  '@bp4': {
    pt: 64,
  },
  '@bp2': {
    pt: 40,
  },
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const FormContainer = styled('div', {
  padding: '16px 40px 16px 16px',

  display: 'flex',
  alignItems: 'stretch',
  gap: 40,

  position: 'relative',

  background: '$white',

  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '16px',

  '@bp4': {
    gap: 44,

    padding: '24px 32px 32px',

    flexDirection: 'column',
    alignItems: 'center',
  },
  '@bp3': {
    gap: 32,
  },
  '@bp1': {
    margin: '0 -16px',
    padding: '24px 16px 32px',
  },
})

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',

    textAlign: 'center',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const Paragraph = styled('p', {
  marginBottom: 48,

  textAlign: 'center',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp4': {
    marginBottom: 40,
  },
  '@bp3': {
    marginBottom: 48,
  },

  '@bp2': {
    marginBottom: 40,

    fontSize: '14px',
    lineHeight: '26px',
  },
  '@bp1': {
    marginBottom: 32,
  },
})
