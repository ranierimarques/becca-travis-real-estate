import { styled } from 'stitches.config'
import * as Svg from '../svgs'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 24,

  padding: '24px',
  boxShadow: '0 0 0 1px #CDD1D6',
  borderRadius: '8px',
})

export const Title = styled('h4', {
  alignSelf: 'flex-start',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#33303E',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Asterisk = styled('span', {
  color: '$red3',
})

export const Input = styled('input', {
  width: '100%',
  height: '100%',

  paddingLeft: '16px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',

  '&::placeholder': {
    color: '$grayW6',
  },
})

export const InputWrapper = styled('div', {
  boxShadow: '0 0 0 1px $colors$grayW7',
  borderRadius: '4px',
  width: '100%',
  height: '40px',

  position: 'relative',

  overflow: 'hidden',

  '&:hover': {
    boxShadow: '0 0 0 1px $colors$gray5, inset 0px 0px 5px rgba(0, 0, 0, 0.1)',

    cursor: 'text',
  },

  '&:focus-within': {
    boxShadow: '0 0 0 2px $colors$gray5',
  },
})

export const Warning = styled(Svg.Warning, {
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'none',
})

export const ErrorMessage = styled('span', {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '$red3',

  display: 'block',
})

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  flexGrow: 1,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '$gray2',

  variants: {
    showError: {
      true: {
        '& div:first-child': {
          color: '$red3',
        },

        [`& ${InputWrapper}`]: {
          boxShadow: '0 0 0 1px $colors$red3',
          background: 'rgba($colors$red3Rgb, 0.1)',

          '&:hover': {
            boxShadow: '0 0 0 1px $colors$red3',

            cursor: 'text',
          },

          '&:focus-within': {
            boxShadow: '0 0 0 2px $colors$red3',
          },
        },

        [`& ${Input}`]: {
          padding: '0 32px 0 16px',

          '&::placeholder': {
            color: '$grayW5',
          },
        },

        [`& ${Warning}`]: {
          display: 'block',
        },
      },
    },
  },
})
