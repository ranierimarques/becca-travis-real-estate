import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'stitches.config'

export const Container = styled('div', {
  width: '100%',

  border: '1px solid $grayW8',
  borderRadius: 16,
})

// export const RadioGroupRoot = styled(RadioGroup.Root, {
//   display: 'flex',
//   alignItems: 'center',
//   gap: 16,
// })

// export const RadioGroupItem = styled(RadioGroup.Item, {
//   all: 'unset',
//   backgroundColor: 'white',
//   width: 16,
//   height: 16,
//   borderRadius: '100%',

//   outline: 'solid 2px $grayW5',
//   outlineOffset: -2,

//   '&:focus': { boxShadow: `0 0 0 2px $colors$magenta5` },

//   '&[data-state="checked"]': {
//     background: '$magenta1',
//     outline: 'none',
//   },
// })

// export const RadioGroupIndicator = styled(RadioGroup.Indicator, {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '100%',
//   height: '100%',
//   position: 'relative',

//   '&::after': {
//     content: '""',
//     display: 'block',
//     width: 8,
//     height: 8,
//     borderRadius: '50%',
//     backgroundColor: '$white',
//   },
// })

// export const Label = styled('label', {
//   display: 'flex',
//   alignItems: 'center',
//   gap: 8,

//   color: '$gray3',
//   fontSize: '12px',
//   lineHeight: '16px',

//   fontWeight: 500,
// })
