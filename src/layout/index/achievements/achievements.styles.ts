import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',

  padding: '95px 0 105px',

  background: 'rgba(205, 209, 214, 0.1)',
})

export const Line = styled('div', {
  width: '40px',
  height: '2px',

  background: '#9D446E',
  borderRadius: '35px',
})

export const Title = styled('h2', {
  marginBottom: '100px',

  maxWidth: '750px',
  textAlign: 'center',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '#58243C',
})

export const Paragraph = styled('p', {
  maxWidth: '300px',

  border: '1px solid #CF84A7',
  borderRadius: '8px',
  padding: '24px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const Badges = styled('ul', {
  maxWidth: '320px',

  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '16px',
})

export const Badge = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',

  width: '152px',

  padding: '12px 0 12px 16px',

  boxShadow: 'inset 0 0 0 2px rgba(229, 172, 138, 0.5)',

  filter: 'drop-shadow(0px 8px 15px rgba(91, 47, 32, 0.08))',
  borderRadius: '8px',
})

export const BadgeTitle = styled('h4', {
  fontWeight: '500',
  fontSize: '32px',
  lineHeight: '40px',

  color: '$tangerine6',
})

export const BadgeDescription = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '24px',

  color: '$tangerine8',
})
