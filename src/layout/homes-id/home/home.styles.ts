import { styled } from 'stitches.config'

export const Section = styled('section', {
  maxWidth: '1072px',
  margin: '0 auto',

  paddingTop: 32,
})

export const Header = styled('div', {
  marginBottom: '24px',
  background: 'rgba($colors$gray5Rgb, .03)',
  borderRadius: 8,
  padding: '16px 20px 16px 16px',
})

export const Dot = styled('div', {
  width: '5px',
  height: '5px',
  background: '#8C8A97',
  opacity: '0.5',
  borderRadius: 999,
})

export const HouseName = styled('h1', {
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '32px',
  color: '#33303E',
})

export const HousePrice = styled('span', {
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '24px',
  color: '#5BA341',
})

export const HouseStatus = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#33303E',
})

export const Status = styled('span', {
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#33303E',
})

export const ShareAndSave = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,

  padding: '6px',
  border: '1px solid #9D446E',
  borderRadius: '5px',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '#9D446E',

  '&:hover': {
    backgroundColor: 'rgba(232, 183, 206, 0.2)',
    cursor: 'pointer',
  },
})
