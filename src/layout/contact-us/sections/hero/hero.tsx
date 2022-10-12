import { Hat } from '@common'
import { Form } from '@shared'
import { useState } from 'react'
import { ContactInformation } from './contact-information/contact-information'
import * as S from './contact-us.styles'

export function ContactUs() {
  const [openToast, setOpenToast] = useState(false)

=======
import { Box, Button } from '@common'
import { Hat } from '@shared'
import * as S from './hero.styles'
import { MailSvg, PhoneSvg } from './svgs'

export function Hero() {
>>>>>>> new-architecture:src/layout/contact-us/sections/hero/hero.tsx
  return (
    <S.Section>
      <S.Background />
      <S.Container>
        <S.Header>
          <Hat css={{ marginBottom: 8 }}>Contact us</Hat>
          <S.Title>Need help? Send us a message</S.Title>
          <S.Paragraph>
            Our support goes all the way. We love hearing from customers and visitors.
          </S.Paragraph>
        </S.Header>

        <S.FormContainer>
          <ContactInformation openToast={openToast} onOpenToast={setOpenToast} />
          <Box css={{ m: '24px 0' }}>
            <Form onOpenToast={setOpenToast} />
          </Box>
        </S.FormContainer>
      </S.Container>
    </S.Section>
  )
}
