import { Hat } from '@common'
import { Form } from '@shared'
import { useState } from 'react'
import { ContactInformation } from './contact-information/contact-information'
import * as S from './contact-us.styles'

export function ContactUs() {
  const [openToast, setOpenToast] = useState(false)

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
          <Form onOpenToast={setOpenToast} />
        </S.FormContainer>
      </S.Container>
    </S.Section>
  )
}
