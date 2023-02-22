import { useState } from 'react'
import { Box } from '@/common'
import { Toast } from '@/primitives'
import { Form, Hat } from '@/shared'
import { ContactInformation } from '.'
import * as S from './hero.styles'

export function Hero() {
  const [openToast, setOpenToast] = useState(false)

  return (
    <S.Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Header>
        <Hat css={{ marginBottom: 8 }}>Contact us</Hat>
        <S.Title>Need help? Send us a message</S.Title>
        <S.Paragraph>
          Your vision, is our business. Let&apos;s connect to bring it to pass
        </S.Paragraph>
      </S.Header>

      <Box
        css={{
          position: 'relative',
          pb: 160,
          '@bp4': {
            pb: 120,
          },
          '@bp1': {
            pb: 80,
          },
        }}
      >
        <Box
          css={{
            background: '$white',

            position: 'absolute',
            left: '50%',

            transform: 'translate(-50%)',

            height: '100%',
            width: '100vw',
          }}
        />
        <Box
          css={{
            background: 'rgba($colors$tangerine5Rgb, 0.3)',

            position: 'absolute',
            left: '50%',

            transform: 'translate(-50%)',

            height: '10%',
            width: '100vw',
          }}
        />

        <S.FormContainer>
          <ContactInformation />
          <Box css={{ m: '24px 0', width: '100%' }}>
            <Form onOpenToast={setOpenToast} />
          </Box>
        </S.FormContainer>
      </Box>

      <Toast openToast={openToast} onOpenToast={setOpenToast} form />
    </S.Section>
  )
}
