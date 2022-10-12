import { Box } from '@common'
import { Form, Hat } from '@shared'
import { useState } from 'react'
import { ContactInformation } from '.'
import * as S from './hero.styles'

export function Hero() {
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
          <Box css={{ m: '24px 0' }}>
            <Form onOpenToast={setOpenToast} />
          </Box>
        </S.FormContainer>
      </S.Container>
    </S.Section>
  )
}
