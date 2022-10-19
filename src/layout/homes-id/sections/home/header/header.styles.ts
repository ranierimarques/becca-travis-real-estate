import { styled } from 'stitches.config'

export const Header = styled('div', {
  marginBottom: '24px',
  background: 'rgba($colors$gray5Rgb, .03)',
  borderRadius: 8,
  padding: '16px 20px 16px 16px',
})

export const Dot = styled('div', {
  width: '5px',
  height: '5px',
  background: '$gray5',
  opacity: '0.5',
  borderRadius: 999,
})

export const HouseName = styled('h1', {
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '32px',
  color: '$gray1',
})

export const HousePrice = styled('span', {
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '24px',
  color: '$green3',
})

export const HouseStatus = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray1',
})

export const Status = styled('span', {
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray1',
})

export const ShareAndSave = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,

  padding: '8px 10px',

  boxShadow: '0 0 0 1px $colors$magenta1',

  borderRadius: '5px',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$magenta1',

  '&:hover': {
    backgroundColor: 'rgba($colors$magenta5Rgb, 0.2)',
    cursor: 'pointer',
  },
})
