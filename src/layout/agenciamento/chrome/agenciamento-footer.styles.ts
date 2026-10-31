import { styled } from 'stitches.config'

export const Footer = styled('footer', {
  background: '#2f1d28',
  color: 'rgba(255, 255, 255, 0.76)',
  padding: '54px 56px 26px',

  '@bp3': {
    padding: '44px 24px 24px',
  },

  '@bp1': {
    padding: '38px 20px 22px',
  },
})

export const FooterGrid = styled('div', {
  display: 'grid',
  gap: 64,
  gridTemplateColumns: '1.6fr 1fr 1fr',
  margin: '0 auto',
  maxWidth: 1072,

  '@bp3': {
    gap: 38,
    gridTemplateColumns: '1.3fr 1fr 1fr',
  },

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@bp1': {
    gap: 30,
    gridTemplateColumns: '1fr',
  },
})

export const Brand = styled('div', {
  maxWidth: 390,

  '& a': {
    display: 'inline-flex',
  },

  '& svg': {
    height: 34,
    width: 158,

    '& path': {
      fill: '#fffaf8',
    },
  },

  '& p': {
    fontSize: 14,
    lineHeight: 1.75,
    marginTop: 18,
  },

  '@bp2': {
    gridColumn: '1 / -1',
  },

  '@bp1': {
    gridColumn: 'auto',
  },
})

export const LinkGroup = styled('div', {
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,

  '& strong': {
    color: '#fffaf8',
    fontSize: 14,
    marginBottom: 5,
  },

  '& a': {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 13,
    lineHeight: 1.45,
    textDecoration: 'none',

    '&:hover, &:focus-visible': {
      color: '#f2b08d',
      outline: 'none',
    },
  },
})

export const Legal = styled('div', {
  alignItems: 'center',
  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
  display: 'flex',
  fontSize: 11,
  gap: 24,
  justifyContent: 'space-between',
  margin: '42px auto 0',
  maxWidth: 1072,
  paddingTop: 22,

  '& nav': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px 18px',
  },

  '& a': {
    color: 'inherit',
    textDecoration: 'none',

    '&:hover, &:focus-visible': {
      color: '#fffaf8',
      outline: 'none',
    },
  },

  '@bp2': {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
})
