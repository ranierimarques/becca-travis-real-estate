import { styled } from 'stitches.config'

export const TableContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 32,

  '@bp4': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@bp3': {
    gridTemplateColumns: '1fr',
  },

  variants: {
    onlyTwoLevels: {
      true: {
        gridTemplateColumns: '1fr 1fr',

        '@bp3': {
          gridTemplateColumns: '1fr',
        },
      },
    },
    onlyOneLevel: {
      true: {
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  color: '$magenta6',

  textAlign: 'center',

  marginBottom: 12,

  '@bp4': {
    marginBottom: 24,

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

export const Description = styled('span', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '32px',
  color: '$gray2',

  textAlign: 'center',

  display: 'block',

  marginBottom: 40,

  '@bp2': {
    lineHeight: '26px',
  },
  '@bp1': {
    fontSize: '14px',
    marginBottom: 32,
  },
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const SchoolsTable = styled('div', {
  width: '100%',
})

export const SchoolCategory = styled('h4', {
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '36px',

  color: '$gray2',

  marginBottom: 8,

  '@bp5': {
    fontSize: '20px',
    lineHeight: '30px',
  },
  '@bp1': {
    fontSize: '18px',
  },
})

export const Hr = styled('hr', {
  border: '1px solid $grayW8',
})

export const School = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  marginTop: 24,
})

export const SchoolName = styled('a', {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray3',

  maxWidth: 220,

  '&:hover': {
    textDecoration: 'underline',
  },

  '@bp5': {
    fontSize: '13px',
  },
  '@bp4': {
    fontSize: '14px',
  },
  '@bp1': {
    fontSize: '12px',
    lineHeight: '20px',
  },
})

export const SchoolInfoCard = styled('div', {
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '18px',
  color: '$gray5',

  '& span': {
    color: '$gray3',
  },
})
