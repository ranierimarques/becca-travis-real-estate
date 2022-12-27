import { styled } from 'stitches.config'
import * as Svg from './svgs'

export const Line = styled('div', {
  width: '40px',
  height: '2px',

  background: '$magenta1',
  borderRadius: '35px',

  '@bp4': {
    display: 'none',
  },
})

export const Title = styled('h2', {
  marginBottom: '101px',

  maxWidth: '847px',
  textAlign: 'center',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',
  },
  '@bp1': {
    fontSize: '28px',
    lineHeight: '40px',
  },
})

export const Paragraph = styled('p', {
  position: 'relative',

  width: '298px',
  height: 'fit-content',

  boxShadow: '0px 0px 0px 1px $colors$magenta3',
  borderRadius: '8px',
  padding: '24px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const LineLeft = styled(Svg.LineLeft, {
  position: 'absolute',
  bottom: '-90px',
  left: '50%',
})

export const LineRight = styled(Svg.LineRight, {
  position: 'absolute',
  bottom: '-90px',
  right: '50%',
})

export const Badges = styled('ul', {
  justifySelf: 'end',

  height: 'fit-content',

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
  gap: '9px',
})

export const BadgeDescription = styled('span', {
  maxWidth: '198px',

  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '24px',

  color: '$tangerine7',
})
