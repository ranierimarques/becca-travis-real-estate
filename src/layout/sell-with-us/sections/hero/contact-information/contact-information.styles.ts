import { styled } from 'stitches.config'
import * as Svg from '../svgs'

export const Card = styled('div', {
  position: 'relative',

  minWidth: '366px',

  boxShadow: '0 0 0 1px rgba(227, 229, 232, 1)',

  borderRadius: '8px',

  overflow: 'hidden',

  background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F6F8 100%)',
})

export const SvgBackground = styled(Svg.Background, {
  position: 'absolute',
  left: 0,
  bottom: 0,
})

export const Title = styled('h4', {
  marginBottom: 8,

  fontWeight: '600',
  fontSize: '22px',
  lineHeight: '32px',
  color: '$grayW2',
})

export const Description = styled('p', {
  marginBottom: 32,
  maxWidth: '251px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$grayW4',
})

export const Steps = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,

  position: 'relative',

  padding: '0 32px',

  zIndex: 1,
})

export const Step = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  padding: '8px 12px',

  background: '$white',

  boxShadow: '0 0 0 1px #E3E5E8',
  borderRadius: '4px',

  variants: {
    active: {
      true: {
        boxShadow: '0 0 0 1px #DC9DBB',
      },
    },
  },
})

export const SvgContainer = styled('div', {
  background: '#F6F6F8',
  boxShadow: '0 0 0 1px #E3E5E8',
  borderRadius: '20px',
  padding: '6px',

  variants: {
    active: {
      true: {
        boxShadow: '0 0 0 1px #DC9DBB',

        '& svg': {
          '& path': {
            stroke: '#DC9DBB',
          },
          '& circle': {
            stroke: '#DC9DBB',
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
  color: '#7A7786',

  variants: {
    active: {
      true: {
        color: '#4E4B59',
      },
    },
  },
})

export const Hr = styled('div', {
  position: 'absolute',
  top: 57,
  left: 58,

  width: '1px',
  height: '22px',
  background: '#CDD1D6',

  variants: {
    active: {
      true: {
        background: '#DC9DBB',
      },
    },
  },
})

export const Hr2 = styled('div', {
  position: 'absolute',

  bottom: 57,
  left: 58,

  width: '1px',
  height: '22px',
  background: '#CDD1D6',

  variants: {
    active: {
      true: {
        background: '#DC9DBB',
      },
    },
  },
})
export const StepDescription = styled('span', {
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '20px',
  color: '#8C8A97',
})
