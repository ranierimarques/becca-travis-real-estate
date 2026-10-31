import Link from 'next/link'
import { styled } from 'stitches.config'

export const Section = styled('section', {
  background: '#fffaf8',
  borderBottom: '1px solid rgba(92, 48, 69, 0.1)',
  borderTop: '1px solid rgba(92, 48, 69, 0.1)',
  padding: '84px 0',

  '@bp3': {
    padding: '64px 0',
  },
})

export const Container = styled('div', {
  margin: '0 auto',
  maxWidth: 1184,
  paddingLeft: 56,
  paddingRight: 56,
  width: '100%',

  '@bp4': {
    paddingLeft: 40,
    paddingRight: 40,
  },

  '@bp3': {
    paddingLeft: 24,
    paddingRight: 24,
  },

  '@bp1': {
    paddingLeft: 18,
    paddingRight: 18,
  },
})

export const HeadingRow = styled('div', {
  alignItems: 'end',
  display: 'grid',
  gap: 40,
  gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 390px)',
  marginBottom: 48,

  '@bp3': {
    alignItems: 'stretch',
    gap: 24,
    gridTemplateColumns: '1fr',
    marginBottom: 36,
  },
})

export const Heading = styled('div', {
  '& span': {
    color: '$magenta1',
    display: 'block',
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: '0.14em',
    marginBottom: 12,
    textTransform: 'uppercase',
  },

  '& h2': {
    color: '#3f2734',
    fontFamily: '$heading',
    fontSize: 'clamp(34px, 4vw, 52px)',
    fontWeight: 500,
    letterSpacing: '-0.035em',
    lineHeight: 1.05,
    margin: 0,
    maxWidth: 700,
  },

  '& p': {
    color: '#765d69',
    fontSize: 17,
    lineHeight: 1.65,
    margin: '18px 0 0',
    maxWidth: 720,
  },
})

export const Search = styled('label', {
  display: 'block',

  '& span': {
    color: '#543747',
    display: 'block',
    fontSize: 13,
    fontWeight: 800,
    marginBottom: 8,
  },

  '& input': {
    background: '$white',
    border: '1px solid rgba(92, 48, 69, 0.2)',
    borderRadius: 8,
    color: '#3f2734',
    fontSize: 16,
    minHeight: 52,
    padding: '0 16px',
    transition: 'border-color 160ms ease, box-shadow 160ms ease',
    width: '100%',

    '&:focus': {
      borderColor: '$magenta1',
      boxShadow: '0 0 0 3px rgba(158, 67, 110, 0.13)',
      outline: 'none',
    },
  },
})

export const Regions = styled('div', {
  display: 'grid',
  gap: 42,
})

export const Region = styled('section', {
  '& h3': {
    alignItems: 'center',
    color: '#533346',
    display: 'flex',
    fontSize: 14,
    fontWeight: 800,
    gap: 12,
    letterSpacing: '0.1em',
    margin: '0 0 16px',
    textTransform: 'uppercase',

    '&::after': {
      background: 'rgba(92, 48, 69, 0.13)',
      content: '',
      flex: 1,
      height: 1,
    },
  },
})

export const Grid = styled('div', {
  display: 'grid',
  gap: 10,
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',

  '@bp4': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },

  '@bp3': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },

  '@bp1': {
    gridTemplateColumns: '1fr',
  },
})

export const StateLink = styled(Link, {
  alignItems: 'center',
  background: '$white',
  border: '1px solid rgba(92, 48, 69, 0.12)',
  borderRadius: 7,
  color: '#492e3d',
  display: 'grid',
  gap: 12,
  gridTemplateColumns: '38px 1fr auto',
  minHeight: 68,
  padding: '10px 13px',
  textDecoration: 'none',
  transition: 'border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease',

  '&:hover, &:focus-visible': {
    borderColor: 'rgba(158, 67, 110, 0.45)',
    boxShadow: '0 10px 24px rgba(66, 31, 48, 0.09)',
    outline: 'none',
    transform: 'translateY(-2px)',
  },

  '& > strong': {
    alignItems: 'center',
    background: '#f8e7e1',
    borderRadius: 6,
    color: '$magenta1',
    display: 'flex',
    fontSize: 11,
    height: 38,
    justifyContent: 'center',
    letterSpacing: '0.04em',
  },

  '& > span': {
    display: 'grid',
    gap: 2,

    '& strong': {
      fontSize: 14,
      lineHeight: 1.25,
    },

    '& small': {
      color: '#8b7480',
      fontSize: 11,
    },
  },

  '& > em': {
    color: '$magenta1',
    fontSize: 18,
    fontStyle: 'normal',
  },
})

export const Empty = styled('p', {
  background: '$white',
  border: '1px solid rgba(92, 48, 69, 0.12)',
  borderRadius: 8,
  color: '#765d69',
  margin: 0,
  padding: 24,
})

export const PlannerCallout = styled('div', {
  alignItems: 'center',
  background: '#4a283c',
  borderRadius: 10,
  color: '$white',
  display: 'flex',
  gap: 32,
  justifyContent: 'space-between',
  marginTop: 44,
  padding: '28px 32px',

  '@bp2': {
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: 20,
    padding: 24,
  },

  '& strong': {
    display: 'block',
    fontFamily: '$heading',
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.2,
  },

  '& span': {
    color: '#efdde5',
    display: 'block',
    fontSize: 14,
    lineHeight: 1.55,
    marginTop: 6,
  },

  '& a': {
    background: '#f5c7b6',
    borderRadius: 6,
    color: '#3e2432',
    flexShrink: 0,
    fontSize: 14,
    fontWeight: 800,
    padding: '14px 18px',
    textDecoration: 'none',
  },
})
