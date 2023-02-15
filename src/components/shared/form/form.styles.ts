import { styled } from 'stitches.config'

export const Form = styled('form', {
  width: '100%',
})

export const FormTitle = styled('h4', {
  marginBottom: 24,

  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$grayW3',
})

export const TextInput = styled('input', {
  boxShadow: '0 0 0 1px $colors$grayW7',
  borderRadius: '4px',
  width: '288px',
  height: '40px',

  padding: '8px 16px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',

  '&::placeholder': {
    color: '$grayW6',
  },
})

export const DisclaimerContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp4': {
    flexDirection: 'column',
    gap: 32,
  },
  '@bp3': {
    gap: 24,
  },
  '@bp2': {
    gap: 32,
  },

  variants: {
    askAQuestion: {
      true: {
        '@bp4': {
          flexDirection: 'row',
        },

        '@bp2': {
          flexDirection: 'column',
        },
      },
    },
  },
})

export const DisclaimerText = styled('span', {
  maxWidth: '327px',

  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '16px',
  color: '$gray3',

  '@bp4': {
    order: 2,
    maxWidth: 'inherit',

    fontSize: '12px',
    lineHeight: '20px',
  },

  variants: {
    askAQuestion: {
      true: {
        '@bp4': {
          order: 'initial',
        },

        '@bp2': {
          maxWidth: 'inherit',
        },
      },
    },
  },
})

export const Disclaimer = styled('strong', {
  fontSize: '10px',
  lineHeight: '18px',
  color: '$gray1',

  '@bp4': {
    fontSize: '12px',
    lineHeight: '20px',
  },
})
