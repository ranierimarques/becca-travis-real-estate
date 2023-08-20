import * as RadioGroup from '@radix-ui/react-radio-group'
import * as S from './radio-group.styles'

export const RadioGroupItem = ({ label }: { label: string }) => (
  <S.Label>
    {label}
    <S.RadioGroupItem value={label.toLowerCase()}>
      <S.RadioGroupIndicator />
    </S.RadioGroupItem>
  </S.Label>
)

export const RadioGroupRoot = RadioGroup.Root
