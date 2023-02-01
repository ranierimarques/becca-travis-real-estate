import * as SelectPrimitive from '@radix-ui/react-select'
import { styled } from 'stitches.config'

export const Trigger = styled(SelectPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,

  padding: '8px 16px',

  width: '100%',

  borderRadius: 4,
  boxShadow: '0 0 0 1px $colors$grayW7',

  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
  color: '$gray2',

  transition: 'box-shadow 150ms ease',

  '&:hover': {
    boxShadow: '0 0 0 1px rgba($colors$grayW7Rgb, 0.65)',
  },

  '&[data-placeholder]': {
    fontWeight: 500,
    color: '$grayW6',
  },

  '&:focus': {
    boxShadow: '0 0 0 4px rgba($colors$magenta1Rgb, 0.2)',
  },
})

export const Content = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  background: '$white',
  borderRadius: 4,
  boxShadow:
    '0 0 0 1px $colors$grayW8, 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  zIndex: 1,
})

export const Item = styled(SelectPrimitive.Item, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',

  padding: '8px 20px 8px 36px',

  position: 'relative',

  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
  color: '$gray2',

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
