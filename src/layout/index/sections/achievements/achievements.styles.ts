import { styled } from 'stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',

  padding: '95px 0 105px',

  background: `rgba($colors$grayW8Rgb, 0.1)`,
})

export const Line = styled('div', {
  width: '40px',
  height: '2px',

  background: '$magenta1',
  borderRadius: '35px',
})

export const Title = styled('h2', {
  marginBottom: '101px',

  maxWidth: '847px',
  textAlign: 'center',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Paragraph = styled('p', {
  maxWidth: '300px',

  border: '1px solid $magenta3',
  borderRadius: '8px',
  padding: '24px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const Badges = styled('ul', {
  padding: '16px 17px 18px 16px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '15px',

  boxShadow: '0px 0px 0px 2px rgba($colors$tangerine10Rgb, 1)',
  filter: 'drop-shadow(0px 8px 15px rgba($colors$tangerine6Rgb, 0.08))',
  borderRadius: '8px',
})

export const Badge = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  gap: '9.007px',
})

export const BadgeDescription = styled('span', {
  maxWidth: '198px',

  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '24px',

  color: '$tangerine7',
})
