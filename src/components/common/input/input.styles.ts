import PhoneInput from 'react-phone-number-input/input'
import { styled } from 'stitches.config'
import * as Svg from './svgs'

export const Label = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,

  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '$gray2',

  variants: {
    checkbox: {
      true: {
        flexDirection: 'row',
        gap: 8,
        fontWeight: '500',
        color: '$gray3',
      },
    },
  },
})

export const LabelWrapper = styled('div', {
  variants: {
    showError: {
      true: {
        color: '$red3',
      },
    },
  },
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

export const TelInput = styled(PhoneInput, {
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

export const TextArea = styled('textarea', {
  width: '100%',
  height: '100%',

  resize: 'none',

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

  variants: {
    showError: {
      true: {
        boxShadow: '0 0 0 1px $colors$red3',
        '&:hover': {
          boxShadow: '0 0 0 1px $colors$red3',

          cursor: 'text',
        },

        '&:focus-within': {
          boxShadow: '0 0 0 2px $colors$red3',
        },

        [`& ${Input}`]: {
          padding: '0 32px 0 16px',
        },

        [`& ${TelInput}`]: {
          padding: '0 32px 0 16px',
        },

        [`& ${TextArea}`]: {
          paddingRight: '32px',
        },
      },
    },
    textArea: {
      true: {
        padding: '10px 0 0 16px',
        height: '155px',
        cursor: 'text',
      },
    },
  },
})

export const Warning = styled(Svg.Warning, {
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translate(-50%, -50%)',

  display: 'none',

  variants: {
    showError: {
      true: {
        display: 'block',
      },
    },
    textArea: {
      true: {
        top: 20,
      },
    },
  },
})

export const ErrorMessage = styled('span', {
  fontWeight: '400',
  fontSize: '12px',
  lineHeight: '16px',
  color: '$red3',

  display: 'block',
})
