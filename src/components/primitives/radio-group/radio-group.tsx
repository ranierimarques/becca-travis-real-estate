import * as RadioGroup from '@radix-ui/react-radio-group'
import * as S from './radio-group.styles'
import * as Svg from './svgs'

export const RadioGroupItem = ({
  label,
  conventional,
}: {
  label: string
  conventional?: boolean
}) => (
  <S.Label conventional={conventional}>
    <span>{label}</span>
    <S.RadioGroupItem value={label.toLowerCase()} conventional={conventional}>
      <S.RadioGroupIndicator conventional={conventional}>
        {conventional ? <Svg.Check /> : ''}
      </S.RadioGroupIndicator>
    </S.RadioGroupItem>
  </S.Label>
)

export const RadioGroupRoot = RadioGroup.Root
