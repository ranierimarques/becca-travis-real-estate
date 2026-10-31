import type { FaqItem } from '../../data/huntsville-faq'
import { FaqList } from '@/layout/huntsville-faq'
import { Section } from '@/template'
import * as S from './faq-preview.styles'

interface FaqPreviewProps {
  title: string
  id: string
  items: FaqItem[]
  moreHref?: string
}

export function FaqPreview({ title, id, items, moreHref }: FaqPreviewProps) {
  return (
    <Section hasMaxWidth id={id}>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Description>Clear answers, with sources for the details that matter.</S.Description>
      </S.Header>
      <FaqList items={items} limit={4} showSearch={false} />
      {moreHref && (
        <S.More href={moreHref}>Search all Huntsville questions</S.More>
      )}
    </Section>
  )
}
