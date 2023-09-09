import { Controller } from 'react-hook-form'
import * as S from './input.styles'

interface InputProps {
  register: any
  control?: any
  error: any
  disabled: boolean
  name:
    | 'number'
    | 'email'
    | 'first_name'
    | 'last_name'
    | 'message'
    | 'street_address'
    | 'state'
    | 'city'
    | 'zipcode'
    | 'additional_information'
    | 'timeframe'
    | 'selling_price'
    | 'property_details'
    | 'other_comments'
  type: string
  placeholder: string
  label: string | string[]
  required?: boolean
}

export function Input({
  label,
  register,
  control,
  name,
  error,
  type,
  ...props
}: InputProps) {
  const hasError = Boolean(error)

  if (type === 'tel') {
    return (
      <S.Label>
        <S.LabelWrapper showError={hasError}>
          {label} {props.required && <S.Asterisk>*</S.Asterisk>}
        </S.LabelWrapper>
        <S.InputWrapper showError={hasError}>
          <Controller
            control={control}
            name={name}
            render={({ field }) => (
              <S.TelInput country="US" placeholder="(000) 000-0000" {...field} />
            )}
          />
          <S.Warning showError={hasError} />
        </S.InputWrapper>

        {hasError && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Label>
    )
  }

  if (type === 'textarea') {
    return (
      <S.Label css={{ gridColumn: 'span 2', '@bp2': { gridColumn: 'auto' } }}>
        <S.LabelWrapper showError={hasError}>
          {label} {props.required && <S.Asterisk>*</S.Asterisk>}
        </S.LabelWrapper>
        <S.InputWrapper showError={hasError} textArea>
          <S.TextArea {...register(name)} placeholder={props.placeholder} />
          <S.Warning showError={hasError} textArea />
        </S.InputWrapper>

        {hasError && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Label>
    )
  }

  return (
    <S.Label>
      <S.LabelWrapper showError={hasError}>
        {label} {props.required && <S.Asterisk>*</S.Asterisk>}
      </S.LabelWrapper>
      <S.InputWrapper showError={hasError}>
        <S.Input {...props} {...register(name)} />
        <S.Warning showError={hasError} />
      </S.InputWrapper>

      {hasError && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Label>
  )
}
