import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import { styled } from 'stitches.config'

export const Title = styled('span', {
  display: 'block',
  whiteSpace: 'nowrap',

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$gray1',

  textTransform: 'uppercase',
})

export const CheckboxesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
})

export const CheckBoxRoot = styled(CheckboxPrimitive.Root, {
  background: '$white',

  width: 22,
  height: 22,
  borderRadius: 4,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'background .15s cubic-bezier(.4,0,.2,1)',

  boxShadow: '0 0 0 1px $colors$gray5, 0 2px 10px $colors$grayW9',
  '&:hover': { background: '$offWhite2' },
  '&:focus': {
    boxShadow: '0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
  },

  '&[data-state="checked"]': {
    background: '$magenta2',
    boxShadow: '0 0 0 1px $colors$magenta2, 0 2px 10px $colors$grayW9',

    '&:focus': {
      boxShadow: '0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
    },
  },
})

export const CheckBoxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$white',
})

export const Label = styled(LabelPrimitive.Root, {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '22px',
  color: '$gray2',
})

export const TopBar = styled('div', {
  p: '8px 16px',

  bg: '$grayW10',
  boxShadow: '0 0 0 1px $colors$grayW8',

  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray3',
})

export const Container = styled('div', {
  display: 'grid',
  gap: 24,

  padding: '16px 16px 24px',

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '12px',
  },

  '&::-webkit-scrollbar-track': {
    background: 'rgba($colors$blackRgb, 0.08)',
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$grayW8',
    borderRadius: '6px',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: 'rgba($colors$grayW7Rgb, 0.8)',
  },
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '21px',
  color: '$grayW4',

  borderRadius: '5px',
  padding: '10px 16px',
  boxShadow: 'inset 0 0 0 1px $colors$grayW4',

  transition: 'filter 150ms ease, box-shadow 150ms ease',

  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$magenta3, 0 0 0 1px $colors$magenta3',
  },

  variants: {
    active: {
      true: {
        background: '$grayW3',
        boxShadow: 'inset 0 0 0 1px $colors$grayW3',
        color: '$white',

        '&:hover': {
          filter: 'brightness(0.85)',
        },
      },
      false: {
        '&:hover': {
          background: 'rgba($grayW9Rgb, 0.5)',
        },
      },
    },
  },
})

export const InputsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  gap: 16,
})

export const InputsText = styled('span', {
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '$gray2',

  variants: {
    small: {
      true: {
        fontSize: '14px',
        lineHeight: '22px',
      },
    },
  },
})

export const Input = styled('input', {
  boxShadow: '0 0 0 1px $colors$grayW7',
  borderRadius: '4px',
  width: '100%',

  padding: '8px 16px',

  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
  color: '$gray2',
  caretColor: '$magenta8',

  '&::placeholder': {
    fontWeight: 400,
    color: '$grayW6',
  },
  '&:hover': {
    boxShadow: '0 0 0 1px $colors$gray5, inset 0px 0px 5px rgba($colors$blackRgb, 0.1)',
  },

  '&:focus': {
    boxShadow:
      '0 0 0 2px $colors$magenta3, inset 0px 0px 5px rgba($colors$blackRgb, 0.1)',
  },
})

export const MultiColumnContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '24px 30px',
})
