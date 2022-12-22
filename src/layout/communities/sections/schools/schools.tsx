import * as S from './schools.styles'

interface SchoolsProps {
  communityName: string
}

export function Schools({ communityName }: SchoolsProps) {
  return (
    <S.Section>
      <S.Title>Schools Near {communityName}</S.Title>
      <S.Description>
        The following schools are within or nearby Athens, Alabama. The rating and
        statistics can serve as a starting point to make baseline comparisons on the right
        schools for your family.
      </S.Description>
    </S.Section>
  )
}
