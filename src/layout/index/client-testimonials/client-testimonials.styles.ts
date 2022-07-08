import { styled } from 'stitches.config'

export const Section = styled('section', {
  padding: '160px 0 120px',
  margin: '0 auto',
  maxWidth: '1072px',
})

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

export const Clients = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
})

export const Client = styled('button', {
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: '16px 0 18px 24px',

  width: '336px',

  borderRadius: '8px',
  cursor: 'pointer',

  '&.active': {
    background: '#FADCD0',
  }
})


export const ListClientName = styled('div', {
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '21px',
  color: '#A6AEB8',

  '&.active': {
    color: '#692C49',
  }
})

export const ListBeccaClient = styled('div', {
  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '15px',
  color: '#A6AEB8',

  '&.active': {
    color: '#8C3C62',
  }
})

export const Testimonial = styled('div', {
  display: "flex",
  flexDirection: 'column',
  justifyContent: "flex-start",
  
  padding: '16px',

  background: 'rgba(205, 209, 214, 0.1)',
  borderRadius: '8px',
})


export const ClientName = styled('span', {
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '36px',
  color: '$magenta7',
})


export const BeccaClient = styled('span', {
  marginBottom: 32,

  fontWeight: '400',
  fontSize: '10px',
  lineHeight: '15px',
  color: '$magenta9',
})

export const Message = styled('p', {
  maxWidth: "612px",

  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '30px',
  color: '$gray2',
})


