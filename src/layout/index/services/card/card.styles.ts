import { motion } from "framer-motion"
import { styled } from 'stitches.config'

export const Link = styled(motion.a, {
  boxShadow: 'inset 0 0 0 1px $colors$grayW9, 0px 8px 40px rgba($colors$blackRgb, 0.05)',
  borderRadius: '8px',
  overflow: 'hidden',
  flexGrow: 1,
  flexBasis: 0,

  display: 'flex',
  flexDirection: 'column',

  '&:hover span': {
    background: '$$primaryColor',
    color: '$$secondaryColor',

    filter: 'none',
  },
})

export const Title = styled('h3', {
  marginTop: '20px',

  fontWeight: '500',
  fontSize: '18px',
  lineHeight: '27px',
  color: '$gray1',
})

export const Description = styled('p', {
  marginTop: '12px',
  padding: '0 32px',

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '22px',
  color: '$gray4',

  flex: 1,
})
