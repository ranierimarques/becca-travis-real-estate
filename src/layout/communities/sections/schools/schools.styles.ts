import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  maxWidth: 1072,
  margin: '0 auto 120px',

  scrollMarginTop: 32,
})

export const Title = styled('h3', {
  fontWeight: 500,
  fontSize: '32px',
  lineHeight: '48px',
  color: '#58243C',

  marginBottom: 12,
})

export const Community = styled('span', {
  textTransform: 'capitalize',
})

export const Description = styled('span', {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '32px',
  textAlign: 'center',
  color: '#4E4B59',

  marginBottom: 78,
})

export const SchoolsTable = styled('div', {})

export const SchoolCategory = styled('h4', {
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '36px',

  color: '#4E4B59',

  marginBottom: 8,
})

export const SchoolsList = styled('ul', {})

export const Hr = styled('hr', {
  border: '1px solid $grayW8',
})

export const School = styled('li', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: 336,

  marginTop: 24,
})

export const SchoolName = styled('a', {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '24px',
  color: '#5F5C6B',

  '&:hover': {
    textDecoration: 'underline',
  },
})

export const SchoolInfoCard = styled('div', {
  background: '#F6F6F8',
  borderRadius: '4px',
  padding: '2px 6px',

  width: 'fit-content',

  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '18px',
  color: '#8C8A97',

  '& span': {
    color: '$gray3',
  },
})
