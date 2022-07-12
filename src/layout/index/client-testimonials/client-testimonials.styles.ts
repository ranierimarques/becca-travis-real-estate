import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { styled } from 'stitches.config'

export const Section = styled('section', {
  paddingBottom: '120px',
  margin: '0 auto',
  maxWidth: '1072px',
})

// =========== Title ===========

export const Title = styled('h2', {
  marginBottom: 16,

  fontWeight: '500',
  fontSize: '36px',
  lineHeight: '50px',
  color: '$magenta6',
})

export const Description = styled('p', {
  maxWidth: '295px',

  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '28px',
  color: '$gray2',
})

export const MoreTestimonials = styled('a', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '36px',
  color: '$magenta9',
})

// =========== Testimonials ===========

// ======== Clients Buttons ========

export const Clients = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const ImageWrapper = styled('span', {
  opacity: '0.4',
})

export const ClientName = styled('span', {
  alignSelf: 'start',

  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '21px',
  color: '#A6AEB8',
})

export const BeccaClient = styled('span', {
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '15px',
  color: '#A6AEB8',
})

export const Client = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  padding: '16px 0 18px 24px',

  width: '336px',

  borderRadius: '8px',
  cursor: 'pointer',

  variants: {
    active: {
      true: {
        background: '$tangerine5',
        [`${ImageWrapper}`]: {
          opacity: '1',
        },
        [`${ClientName}`]: {
          color: '$magenta7',
        },
        [`${BeccaClient}`]: {
          color: '$magenta9',
        },
      },
    },
  },
})

// ======== Client Message ========

export const Testimonial = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',

  padding: '16px 16px 0 16px',

  background: 'rgba(205, 209, 214, 0.1)',
  borderRadius: '8px',
})

export const TestimonialClientName = styled('span', {
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta7',
})

export const TestimonialBeccaClient = styled('span', {
  marginBottom: 32,

  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '15px',
  color: '$magenta9',
})

export const Message = styled('p', {
  maxWidth: '612px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '30px',
  color: '$gray2',
})

//  ========== Radix ===============

export const ScrollArea = styled(ScrollAreaPrimitive.Root, {
  overflow: 'hidden',
})

export const Viewport = styled(ScrollAreaPrimitive.Viewport, {
  maxHeight: '242px',
  padding: '0 16px 16px 16px',

  background: 'rgba(205, 209, 214, 0.1)',
  borderRadius: '8px',

  overscrollBehavior: 'contain',
})

export const Scrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  marginRight: 2,

  '&[data-orientation="vertical"]': { width: 8 },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: 10,
  },
})

export const Thumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: 'rgba(140, 138, 151, 0.2)',
  borderRadius: 10,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
})

export const Corner = styled(ScrollAreaPrimitive.Corner, {
  background: '$black',
})
