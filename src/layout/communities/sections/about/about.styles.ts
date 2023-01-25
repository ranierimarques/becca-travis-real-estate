import { Section as TemplateSection } from '@/template'
import { styled } from 'stitches.config'

export const Section = styled(TemplateSection, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,

  scrollMarginTop: 32,

  paddingTop: 56,
  paddingBottom: 160,

  '@bp5': {
    paddingBottom: 88,
  },
  '@bp4': {
    paddingBottom: 120,
  },
  '@bp3': {
    paddingTop: 72,
    paddingBottom: 80,
  },
  '@bp2': {
    paddingTop: 80,
    paddingBottom: 64,
  },
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  textAlign: 'center',
  color: '$magenta6',

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp2': {
    fontSize: '22px',
    lineHeight: '32px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const Paragraph = styled('p', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '32px',
  color: '$gray2',

  '@bp2': {
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
  },
})
