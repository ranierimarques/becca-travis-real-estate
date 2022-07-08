import { styled } from 'stitches.config'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',
  padding: '115px 0 160px'
})

export const Title = styled('h2', {
  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const ViewAll = styled('a', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '36px',
  color: '$magenta9',
})

export const Houses = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: 32
})

export const House = styled('li', {
  border: '1px solid #CDD1D6',
  borderRadius: '8px',
  overflow: 'hidden',

  background: '$offWhite2',
})

export const New = styled('span', {
  display: 'block',
  padding: 5,
  background: '#D35D6E',
  borderRadius: '5px',

  position: "absolute", 
  top: "16px", 
  left: "16px",
  zIndex: "2",

  fontWeight: '600',
  fontSize: '12px',
  lineHeight: '18px',
  color: '$white',
})

export const HouseInfo = styled('div', {
  padding: '14px 0 16px 16px'
})

export const Value = styled('h4', {
  marginBottom: 8,

  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$gray1',
})

export const Address = styled('p', {
  marginBottom: 14,

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray5',
})

export const Bedrooms = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray3',
})

export const Bathrooms = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray3',
})

export const SquareFeet = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray3',
})

export const VAMLS = styled('span', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '24px',
  color: '$gray6',
  opacity: '0.8',
})
