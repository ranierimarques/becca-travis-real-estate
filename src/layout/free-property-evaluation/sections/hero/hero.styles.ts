import { styled } from 'stitches.config'
import { Section as SectionTemplate } from '@/template'

export const Section = styled(SectionTemplate, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  paddingTop: 64,
  paddingBottom: 64,

  '@bp2': {
    paddingTop: 40,
    paddingBottom: 40,
  },
})

export const Title = styled('h1', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp3': {
    fontSize: '30px',
    lineHeight: '42px',

    textAlign: 'center',
  },
})

export const Paragraph = styled('p', {
  marginBottom: 32,

  textAlign: 'center',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp5': {
    marginBottom: 24,

    maxWidth: '600px',

    '& br': {
      display: 'none',
    },
  },
  '@bp4': {
    marginBottom: 32,
    maxWidth: 'none',
  },
  '@bp3': {
    marginBottom: 24,
  },
})

export const KeepExploring = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 8,

  padding: 0,

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$magenta6',

  opacity: '60%',

  backgroundColor: 'transparent',

  transition: 'opacity .15s cubic-bezier(.4,0,.2,1)',

  '&:hover': {
    opacity: '100%',
  },
})
