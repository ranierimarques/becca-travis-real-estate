import { useState } from 'react'
import { BuyerForm, SelectScreen, SellerForm } from '..'
import * as S from './forms.styles'

export function Forms() {
  const [form, setForm] = useState<'select-screen' | 'selling' | 'buying'>(
    'select-screen'
  )

  return (
    <S.Container>
      {form === 'select-screen' && <SelectScreen setForm={setForm} />}
      {form === 'selling' && <SellerForm setForm={setForm} />}
      {form === 'buying' && <BuyerForm setForm={setForm} />}
    </S.Container>
  )
}
