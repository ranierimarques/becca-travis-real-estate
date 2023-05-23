import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'stitches.config'

export const Form = styled('form', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  width: '100%',

  '@bp4': {
    columnGap: 30,
    rowGap: 20,
  },
  '@bp3': {
    columnGap: 16,
  },

  '@bp2': {
    gridTemplateColumns: '1fr',

    gap: 20,

    '& label': {
      gridColumn: 'span 2',
    },
  },
})

export const Divider = styled('div', {
  width: 1,
  height: '100%',

  margin: '24px 0',

  background: '$grayW8',

  '@bp2': {
    display: 'none',
  },
})

export const RadioGroupRoot = styled(RadioGroup.Root, {
  display: 'flex',
  gap: 16,
})

export const RadioGroupItem = styled(RadioGroup.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 16,
  height: 16,
  borderRadius: '100%',

  outline: 'solid 2px $grayW5',
  outlineOffset: -2,

  '&:focus': { boxShadow: `0 0 0 2px $colors$magenta5` },

  '&[data-state="checked"]': {
    background: '$magenta1',
    outline: 'none',
  },
})

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  '&:hover': { cursor: 'pointer' },
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
