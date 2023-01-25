import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,

  paddingBottom: 160,

  '@bp5': {
    padding: '0 56px 160px',
  },

  '@bp4': {
    gap: 24,
    padding: '0 160px 120px',

    width: '100%',

    margin: '0 auto',
  },

  '@bp3': {
    padding: '0 32px 80px',
  },

  '@bp2': {
    padding: '0 16px 64px',
  },
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
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

export const Statistics = styled('ul', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyContent: 'space-between',

  width: '100%',
  maxWidth: 920,

  '@bp4': {
    gridTemplateColumns: 'repeat(2, 1fr)',

    gap: 32,

    height: '100%',
    maxHeight: '380px',

    width: '100%',
    maxWidth: '449px',
  },
  '@bp2': {
    maxWidth: '335px',
  },
})

export const Statistic = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,

  '@bp4': {
    '&:nth-child(2)': {
      order: 3,
    },
    '&:nth-child(4)': {
      order: 4,
    },
  },
})

export const Number = styled('span', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '36px',
  color: '$gray1',

  '@bp2': {
    fontSize: '22px',
    lineHeight: '24px',
  },
})

export const Name = styled('span', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '26px',
  color: '$gray2',

  '@bp2': {
    fontSize: '14px',
    maxWidth: '140px',
    textAlign: 'center',
  },
  '@bp1': {
    fontSize: '13px',
    maxWidth: '120px',
  },
})
