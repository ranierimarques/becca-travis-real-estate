import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from 'stitches.config'

export const Form = styled('form', {})

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

export const Asterisk = styled('span', {
  color: '$red3',
})

export const StepContainer = styled('div', {
  padding: '48px 0',
})

export const StepTitle = styled('h3', {
  marginBottom: 24,

  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '28px',
  color: '$gray2',
})

export const TextReminder = styled('span', {
  color: '$gray5',
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '18px',
})

export const Trigger = styled(SelectPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,

  padding: '8px 16px',

  width: '100%',

  borderRadius: 4,
  boxShadow: '0 0 0 1px $colors$grayW7',

  fontWeight: 600,
  fontSize: 14,
  lineHeight: '30px',
  color: '$gray2',
  letterSpacing: '-0.02em',

  transition: 'box-shadow 150ms ease',

  '&:hover': {
    boxShadow: '0 0 0 1px rgba($colors$grayW7Rgb, 0.65)',
  },

  '&[data-placeholder]': {
    fontWeight: 500,
    color: '$grayW5',
  },
})

export const Content = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: '$white',
  borderRadius: 8,
  boxShadow:
    '0 0 0 1px $colors$grayW8, 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

export const Item = styled(SelectPrimitive.Item, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',

  padding: '8px 20px 8px 36px',

  position: 'relative',

  fontWeight: 600,
  fontSize: 14,
  lineHeight: '30px',
  color: '$gray2',
  letterSpacing: '-0.02em',

  userSelect: 'none',

  '&[data-highlighted]': {
    background: 'rgba($colors$grayW7Rgb, 0.15)',
  },
})

export const ItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 10,
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const ScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles, {
  transform: 'rotate(-180deg)',
})

export const ScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)
