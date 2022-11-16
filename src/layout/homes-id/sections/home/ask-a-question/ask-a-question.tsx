import { Box } from '@/common'
import { Toast } from '@/primitives'
import { Form } from '@/shared'
import { useState } from 'react'
import * as S from './ask-a-question.styles'

export function AskAQuestion() {
  const [openToast, setOpenToast] = useState(false)
  return (
    <div>
      <S.Title id="ask-a-question">Ask a Question</S.Title>

      <S.Container>
        <Form noTitle onOpenToast={setOpenToast} />
        <Box css={{ position: 'absolute', left: 16, bottom: 16 }}>
          <Toast openToast={openToast} onOpenToast={setOpenToast} form />
        </Box>
      </S.Container>
    </div>
  )
}
