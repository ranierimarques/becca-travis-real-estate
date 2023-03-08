import { styled } from 'stitches.config'
import * as Svg from '../svgs'

export const Header = styled('div', {
  gridArea: 'header',

  marginBottom: 24,
  background: 'rgba($colors$gray5Rgb, .03)',
  borderRadius: 8,
  padding: '16px 20px 16px 16px',

  '@bp4': {
    background: 'none',
    padding: 0,
    marginTop: 32,
  },
  '@bp2': {
    marginTop: 24,
    marginBottom: 16,

    px: 24,
  },
  '@bp1': {
    marginTop: 16,
    px: 16,
  },
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

  '@bp4': {
    fontSize: '18px',
    lineHeight: '26px',
  },
  '@bp2': {
    maxWidth: 288,
  },
  '@bp1': {
    fontSize: '16px',
    maxWidth: 248,
  },
})

export const HousePrice = styled('span', {
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '24px',
  color: '$green3',

  '@bp2': {
    lineHeight: '27px',
  },
  '@bp1': {
    fontSize: '20px',
  },
})

export const StatusWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,

  '@bp2': {
    display: 'none',
  },
})

export const HouseStatus = styled('div', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray1',

  '@bp4': {
    fontSize: '12px',
  },
})

export const Status = styled('span', {
  fontWeight: 'bold',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray1',

  '@bp4': {
    fontSize: '12px',
  },
})

export const ShareAndSave = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  padding: '8px 10px',

  boxShadow: '0 0 0 1px $colors$magenta1',

  borderRadius: '5px',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$magenta1',

  '&:not(:disabled)': {
    '&:hover': {
      backgroundColor: 'rgba($colors$magenta5Rgb, 0.2)',
      cursor: 'pointer',
    },
  },

  '&:disabled': {
    opacity: 0.5,
  },
})

export const ShareButton = styled('button', {
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

  '@bp4': {
    padding: 0,
    boxShadow: 'none',
  },
})

export const Dots = styled(Svg.Dots, {
  display: 'none',

  '@bp4': {
    display: 'block',
  },
  '@bp2': {
    minWidth: 32,
    height: 32,
  },
  '@bp1': {
    minWidth: 24,
    height: 24,
  },
})

export const ShareOption = styled('span', {
  display: 'block',
  marginLeft: 12,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray2',
})
