import { Control, Controller, UseFormRegister } from 'react-hook-form'
import * as S from './input.styles'

interface InputProps {
  register: UseFormRegister<{
    number: string
    email: string
    first_name: string
    last_name: string
    message: string
  }>
  control: Control<{
    number: string
    message: string
    first_name: string
    last_name: string
    email: string
  }>
  error: undefined | string
  disabled: boolean
  name: 'number' | 'email' | 'first_name' | 'last_name' | 'message'
  type: string
  placeholder: string
  label: string
  required: boolean
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
      <S.Label>
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
