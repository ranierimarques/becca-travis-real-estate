import { css, styled } from 'stitches.config'
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

  maxWidth: '900px',
  textAlign: 'center',

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',

  '@bp4': {
    fontSize: '30px',
    lineHeight: '42px',

    marginBottom: '24px',
  },
  '@bp2': {
    marginBottom: '16px',
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

  '@bp4': {
    fontSize: '14px',
    lineHeight: '26px',

    marginBottom: '16px',
    padding: '0',

    width: 'auto',
    textAlign: 'center',

    boxShadow: 'none',
  },
  '@bp2': {
    marginBottom: '8px',
  },
})

const normalLineStyles = css({
  position: 'absolute',
  bottom: '-90px',

  '@bp5': {
    display: 'none',
  },
})

const smallLineStyles = css({
  position: 'absolute',
  bottom: '-74px',

  display: 'none',

  '@bp5': {
    display: 'block',
  },
  '@bp4': {
    display: 'none',
  },
})

export const LineLeft = styled(Svg.LineLeft, normalLineStyles, {
  left: '50%',
})

export const LineRight = styled(Svg.LineRight, normalLineStyles, {
  right: '50%',
})

export const LineLeftSmall = styled(Svg.LineLeftSmall, smallLineStyles, {
  left: '50%',
})

export const LineRightSmall = styled(Svg.LineRightSmall, smallLineStyles, {
  right: '50%',
})

export const Badge = styled('li', {
  display: 'flex',
  flexDirection: 'column',
  gap: '9px',

  '@bp4': {
    gap: 16,
    justifyContent: 'space-between',
  },

  '& svg': {
    flexShrink: 0,
  },
})

export const Badges = styled('ul', {
  position: 'relative',

  height: 'fit-content',

  padding: '16px 17px 18px 16px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifySelf: 'end',

  gap: '15px',

  boxShadow: '0px 0px 0px 2px rgba($colors$tangerine10Rgb, 1)',
  filter: 'drop-shadow(0px 8px 15px rgba($colors$tangerine6Rgb, 0.08))',
  borderRadius: '8px',

  '@bp4': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',

    boxShadow: 'none',
    filter: 'none',

    gap: '16px 32px',

    padding: 0,

    [`& ${Badge}:nth-child(3) > svg`]: {
      display: 'none',
    },
  },

  '@bp2': {
    gridTemplateColumns: '1fr',

    [`& ${Badge} > svg`]: {
      display: 'none',
    },
  },
})

export const BadgeDescription = styled('span', {
  maxWidth: '198px',

  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '24px',

  color: '$tangerine7',

  '@bp4': {
    maxWidth: '235px',

    fontSize: '16px',
    lineHeight: '26px',
  },

  '@bp2': {
    maxWidth: '100%',
  },

  '@bp1': {
    fontSize: '13px',
    lineHeight: '24px',
  },
})

export const LineWithTriangle = styled('div', {
  position: 'relative',

  height: 1,
  width: '100%',

  background: '$grayW9',

  display: 'none',

  '@bp2': {
    display: 'block',
  },

  '&::before': {
    content: '',
    position: 'absolute',

    top: '50%',

    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',

    borderTop: '5px solid $colors$grayW9',

    transform: 'translate(-0.5px, -50%) rotate(-90deg)',
  },
  '&::after': {
    content: '',
    position: 'absolute',

    top: '50%',
    right: 0,

    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',

    borderTop: '5px solid $colors$grayW9',

    transform: 'translate(0.5px, -50%) rotate(90deg)',
  },
})
