import { styled } from 'stitches.config'
import { Section as TemplateSection } from '@/template'

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

export const Highlights = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: 24,
  width: '100%',
  padding: '28px',
  marginTop: 24,
  background: 'rgba($colors$tangerine5Rgb, 0.2)',
  borderRadius: 8,
  '& div': { display: 'flex', flexDirection: 'column', gap: 8 },
  '& strong': { color: '$magenta6', fontSize: 18 },
  '& span': { color: '$gray2', fontSize: 15, lineHeight: '24px' },
  '@bp3': { gridTemplateColumns: '1fr', gap: 20 },
})
