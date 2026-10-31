import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box } from '@/common'
import { Toast } from '@/primitives'
import { Form, Hat } from '@/shared'
import { ContactInformation } from '.'
import * as S from './hero.styles'

function readQueryValue(value: string | string[] | undefined) {
  return typeof value === 'string' ? value : ''
}

function getContactContext(intent: string, tool: string, area: string) {
  if (intent === 'planning-help') {
    return {
      title: 'Turn your worksheet into a next step',
      paragraph:
        'Tell Becca what you are deciding and where the numbers or next steps still feel unclear.',
      initialMessage: `I used the ${tool || 'planning tools'} and would like help with: `,
      formSource: 'Planning tools contextual request',
    }
  }

  if (intent === 'area-help') {
    return {
      title: `Ask Becca about ${area || 'this area'}`,
      paragraph:
        'Share what you need to compare so the conversation starts with your area and priorities.',
      initialMessage: `I am considering ${
        area || 'this area'
      } and would like help comparing: `,
      formSource: 'Area guide contextual request',
    }
  }

  return {
    title: 'Need help? Send us a message',
    paragraph:
      'Tell Becca what you are trying to accomplish so the first reply can be useful.',
    initialMessage: undefined,
    formSource: 'General contact page',
  }
}

export function Hero() {
  const router = useRouter()
  const [openToast, setOpenToast] = useState(false)
  const context = getContactContext(
    readQueryValue(router.query.intent),
    readQueryValue(router.query.tool),
    readQueryValue(router.query.area)
  )

  return (
    <S.Section hasMaxWidth background="rgba($colors$tangerine5Rgb, 0.3)">
      <S.Header>
        <Hat css={{ marginBottom: 8 }}>Contact us</Hat>
        <S.Title>{context.title}</S.Title>
        <S.Paragraph>{context.paragraph}</S.Paragraph>
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
            <Form
              onOpenToast={setOpenToast}
              initialMessage={context.initialMessage}
              formSource={context.formSource}
            />
          </Box>
        </S.FormContainer>
      </Box>

      <Toast openToast={openToast} onOpenToast={setOpenToast} form />
    </S.Section>
  )
}
