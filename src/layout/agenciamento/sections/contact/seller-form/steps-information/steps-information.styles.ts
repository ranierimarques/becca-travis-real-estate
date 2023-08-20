import { styled } from 'stitches.config'
import * as Svg from '../../svgs'

export const Card = styled('div', {
  position: 'relative',

  maxWidth: '366px',

  margin: '16px 0 16px 16px',

  boxShadow: '0 0 0 1px $colors$grayW9',

  borderRadius: '8px',

  overflow: 'hidden',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F6F8 100%)',

  '@bp5': {
    minWidth: '286px',
  },
  '@bp4': {
    width: '100%',
    minWidth: 'auto',
    background: '$white',
    boxShadow: 'none',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const SvgBackground = styled(Svg.Background, {
  position: 'absolute',
  left: 0,
  bottom: 0,

  '@bp4': {
    display: 'none',
  },
})

export const Title = styled('h4', {
  marginBottom: 8,

  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '32px',
  color: '$grayW2',

  '@bp5': {
    fontSize: '20px',
  },

  '@bp4': {
    textAlign: 'center',
  },
})

export const Description = styled('p', {
  marginBottom: 32,

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$grayW4',

  '@bp5': {
    fontSize: '12px',
    lineHeight: '20px',
  },

  '@bp4': {
    fontSize: '14px',
    lineHeight: '26px',

    textAlign: 'center',
    maxWidth: 'none',
  },
})

export const Steps = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,

  position: 'relative',

  padding: '0 32px',

  zIndex: 1,

  '@bp4': {
    display: 'none',
  },
})

export const Step = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  padding: '8px 12px',

  background: '$white',

  boxShadow: '0 0 0 1px $colors$grayW9',
  borderRadius: '4px',

  '@bp4': {
    flexDirection: 'column',
    padding: 0,

    boxShadow: 'none',
  },

  variants: {
    active: {
      true: {
        boxShadow: '0 0 0 1px $colors$magenta4',

        '@bp4': {
          boxShadow: 'none',
        },
      },
    },
  },
})

export const SvgContainer = styled('div', {
  background: '$offWhite2',
  boxShadow: '0 0 0 1px $colors$grayW9',
  borderRadius: '20px',
  padding: '6px',

  '@bp2': {
    display: 'none',
  },

  variants: {
    active: {
      true: {
        boxShadow: '0 0 0 1px $colors$magenta4',

        '& svg': {
          '& path': {
            stroke: '$magenta4',
          },
          '& rect': {
            stroke: '$magenta4',
          },
          '& circle': {
            stroke: '$magenta4',
          },
        },
      },
    },
    completed: {
      true: {
        boxShadow: '0 0 0 1px $colors$green3',
      },
    },
  },
})

export const StepName = styled('span', {
  fontWeight: '500',
  fontSize: '12px',
  lineHeight: '20px',
  color: '$gray4',

  '@bp4': {
    position: 'absolute',
    transform: 'translateY(100%)',
    bottom: -12,
  },

  '@bp2': {
    textAlign: 'center',
  },

  variants: {
    active: {
      true: {
        color: '$gray2',
      },
    },
  },
})

export const StepDescription = styled('span', {
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '20px',
  color: '$gray5',

  '@bp4': {
    display: 'none',
  },
})

export const Hr = styled('div', {
  width: '1px',
  height: '22px',
  background: '$grayW8',

  marginLeft: 26,

  '@bp4': {
    display: 'none',
  },

  variants: {
    active: {
      true: {
        background: '$magenta4',
      },
    },
  },
})

// ============= Mobile ===================

export const StepsMobile = styled('div', {
  display: 'none',

  '@bp4': {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

  '@bp2': {
    padding: '0 26px',
  },
})

export const StepMobile = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexShrink: 0,
})

export const StepCircle = styled('div', {
  width: 12,
  height: 12,
  borderRadius: '999px',
  margin: 2,

  background: '$grayW9',

  outline: '1px solid $grayW8',

  outlineOffset: 2,

  display: 'none',

  '@bp2': {
    display: 'block',
  },

  variants: {
    active: {
      true: {
        background: '$magenta2',

        outline: '1px solid $magenta5',
      },
    },
    completed: {
      true: {
        background: '$green1',

        outline: '1px solid $green3',
      },
    },
  },
})

export const HrMobile = styled('div', {
  width: '100%',
  maxWidth: 99,
  height: '1px',
  background: '$grayW8',

  variants: {
    active: {
      true: {
        background: '$magenta4',
      },
    },
  },
})

export const HrMobile2 = styled('div', {
  width: '100%',
  maxWidth: 99,
  height: '1px',
  background: '$grayW8',

  variants: {
    active: {
      true: {
        background: '$magenta4',
      },
    },
  },
})

export const Divisor = styled('div', {
  width: '100%',
  height: '1px',
  background: '$grayW9',

  display: 'none',

  '@bp4': {
    display: 'block',

    margin: '54px 0 24px',
  },
  '@bp3': {
    margin: '64px 0 24px',
  },
})
