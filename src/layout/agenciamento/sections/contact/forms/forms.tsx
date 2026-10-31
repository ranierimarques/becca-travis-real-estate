import { useState } from 'react'
import type { RelocationPlan } from '@/layout/agenciamento/relocation-plan'
import { BuyerForm, SelectScreen, SellerForm } from '..'
import * as S from './forms.styles'

export function Forms({
  buyerFirst = false,
  relocationPlan,
  defaultState,
  defaultCity,
}: {
  buyerFirst?: boolean
  relocationPlan?: RelocationPlan
  defaultState?: string
  defaultCity?: string
}) {
  const [form, setForm] = useState<'select-screen' | 'selling' | 'buying'>(
    buyerFirst ? 'buying' : 'select-screen'
  )

  return (
    <S.Container>
      {form === 'select-screen' && <SelectScreen setForm={setForm} />}
      {form === 'selling' && <SellerForm setForm={setForm} />}
      {form === 'buying' && (
        <BuyerForm
          setForm={setForm}
          relocationPlan={relocationPlan}
          defaultState={defaultState}
          defaultCity={defaultCity}
        />
      )}
    </S.Container>
  )
}
