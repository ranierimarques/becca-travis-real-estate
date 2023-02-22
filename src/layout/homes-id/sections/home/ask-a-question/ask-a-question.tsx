import { useState } from 'react'
import { Box } from '@/common'
import { Toast } from '@/primitives'
import { Form } from '@/shared'
import * as S from './ask-a-question.styles'

export function AskAQuestion() {
  const [openToast, setOpenToast] = useState(false)
  return (
    <Box id="ask-a-question" data-tab-container css={{ scrollMarginTop: 100 }}>
      <S.Title>Ask a Question</S.Title>

      <S.Container>
        <Form askAQuestion onOpenToast={setOpenToast} />
        <Toast openToast={openToast} onOpenToast={setOpenToast} form />
      </S.Container>
    </Box>
  )
}
