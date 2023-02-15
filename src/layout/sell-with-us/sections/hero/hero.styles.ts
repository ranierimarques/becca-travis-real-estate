import { Section as SectionTemplate } from '@/template'
import { styled } from 'stitches.config'

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

export const Background = styled('div', {
  height: '330px',
  width: '100%',
  background: 'rgba($colors$tangerine5Rgb, 0.3)',
  position: 'absolute',
  top: 0,
  zIndex: -2,
})

export const Form = styled('form', {
  paddingTop: 24,
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@bp4': {
    gap: 32,
    paddingTop: 0,
  },
  '@bp2': {
    gap: 24,
  },
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const FormContainer = styled('div', {
  minHeight: 584,

  padding: '16px 40px 16px 16px',

  display: 'flex',
  alignItems: 'stretch',
  gap: 40,

  position: 'relative',

  background: '$white',

  boxShadow: '0 0 0 1px $colors$grayW8',
  borderRadius: '16px',

  '@bp4': {
    minHeight: 'none',

    padding: '24px 32px 32px',

    flexDirection: 'column',
    alignItems: 'center',

    gap: 0,
  },
  '@bp2': {
    padding: '24px 16px 32px',
  },
  '@bp1': {
    margin: '0 -16px',
  },
})

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '40px',
  lineHeight: '64px',
  color: '$magenta6',

  textAlign: 'center',

  '@bp5': {
    fontSize: '36px',
    lineHeight: '50px',
  },
  '@bp2': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const Paragraph = styled('p', {
  marginBottom: 40,
  maxWidth: '405px',

  textAlign: 'center',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp2': {
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
  },
})

export const DisclaimerText = styled('span', {
  maxWidth: '327px',

  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '16px',
  color: '$gray3',

  marginRight: 10,

  '@bp4': {
    marginRight: 0,

    order: 2,

    maxWidth: 'none',
  },

  variants: {
    lastStep: {
      true: {
        maxWidth: '260px',

        '@bp4': {
          maxWidth: 'none',
        },
      },
    },
  },
})

export const Disclaimer = styled('strong', {
  fontSize: '10px',
  lineHeight: '18px',
  color: '$gray1',
})
