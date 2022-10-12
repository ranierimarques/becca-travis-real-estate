import { styled } from 'stitches.config'

export const PropertyDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  padding: '20px 0 23px',

  borderRadius: '8px',

  background: '$offWhite2',
})

export const Title = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0 20px',

  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '22px',
  color: '$gray1',
})

export const Hr = styled('div', {
  width: '336px',
  height: '1px',
  backgroundColor: '$grayW9',

  margin: '20px 0 19px',
})

export const DetailItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
})

export const DetailText = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
  color: '$gray2',
})

export const TooltipButton = styled('button', {
  lineHeight: 0,
})

export const MoreDetail = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const DetailTitle = styled('span', {
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',
})

export const DetailDescription = styled('span', {
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '18px',
  color: '$gray2',
})
