import { Section as TemplateSection } from '@/template'
import { styled } from 'stitches.config'
import { Becca } from './svgs'

export const Section = styled(TemplateSection, {
  pt: 80,
  pb: 120,

  '@bp5': {
    pb: 80,
  },

  '@bp4': {
    pt: 64,
    pb: 0,
  },
})

export const Title = styled('h1', {
  margin: '8px 0 32px',

  maxWidth: '345px',
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp4': {
    textAlign: 'center',
    maxWidth: '688px',
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

export const Skills = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 24,

  marginBottom: '24px',

  '@bp2': {
    flexDirection: 'column',
  },
})

export const Skill = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: 10,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$green4',

  '@bp4': {
    fontSize: '16px',
    lineHeight: '24px',
  },
  '@bp1': {
    fontSize: '14px',
    lineHeight: '20px',
  },
})

export const Span = styled('span', {
  display: 'block',
  maxWidth: '300px',

  marginTop: '20px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',

  '@bp4': {
    textAlign: 'center',
  },

  '@bp2': {
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
  },
})

export const ImageContainer = styled('div', {
  position: 'relative',

  zIndex: 0,

  w: '100%',
  h: 384,
  maxWidth: 520,

  '@bp5': {
    maxWidth: 444,
  },
  '@bp4': {
    maxWidth: 'none',
    h: '100%',
  },
})

export const BeccaSvg = styled(Becca, {
  width: '100%',
  height: '100%',
})
