import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'stitches.config'

export const RadioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 16,
  height: 16,
  borderRadius: '100%',

  outline: 'solid 2px $grayW5',
  outlineOffset: -2,

  '&[data-state="checked"]': {
    background: '$magenta1',
    outline: 'none',
  },
  // '&:hover': { backgroundColor: violet.violet3 },
  // '&:focus': { boxShadow: `0 0 0 2px black` },
})

export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '$white',
  },
})

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '14px 16px',
  borderRadius: '4px',
  boxShadow: `0 0 0 1px $colors$grayW9`,

  cursor: 'pointer',

  color: '$gray4',
  fontSize: 14,
  lineHeight: '20px',

  '&:focus-within': { boxShadow: `0 0 0 2px $colors$magenta5` },
})
