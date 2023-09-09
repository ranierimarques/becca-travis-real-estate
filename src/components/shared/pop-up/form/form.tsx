import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { Box, Button, Flex, Input } from '@/common'
import { setCookie } from '@/resources/utils/cookies'
import { FormSchemaType } from '../pop-up'
import * as S from './form.styles'

type FormTypes = {
  onOpenPopup: (value: boolean) => void
}

export function Form({ onOpenPopup }: FormTypes) {
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useFormContext<FormSchemaType>()

  const onSubmit: SubmitHandler<FormSchemaType> = async (values: FormSchemaType) => {
    const result = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        subject: 'New Pop-up Form',
        from_name: 'Becca Travis Website',
        ...values,
      }),
    })

    if (result.status === 200) {
      setCookie('pop-up', { subscribed: true }, { expires: 'one-year' })
      reset()

      setTimeout(() => {
        onOpenPopup(false)
      }, 1000)
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        key="first_name"
        error={errors['first_name']?.message}
        type="text"
        placeholder="Michael"
        label="First Name"
        required={true}
        control={control}
        name="first_name"
        register={register}
        disabled={isSubmitting}
      />
      <Input
        key="number"
        error={errors['number']?.message}
        type="tel"
        placeholder="(000) 000-0000"
        label="Number"
        required={true}
        register={register}
        control={control}
        name="number"
        disabled={isSubmitting}
      />
      <Box css={{ gridColumn: 'span 2' }}>
        <Input
          key="email"
          error={errors['email']?.message}
          type="email"
          placeholder="Email"
          label="Email"
          required={true}
          control={control}
          register={register}
          name="email"
          disabled={isSubmitting}
        />
      </Box>

      <Flex
        align={{
          '@initial': 'center',
          '@bp2': 'start',
        }}
        direction={{
          '@initial': 'row',
          '@bp2': 'column',
        }}
        css={{
          gap: 24,
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '22px',
          color: '$gray3',
          gridColumn: 'span 2',

          '@bp2': {
            gap: 16,
          },
        }}
      >
        <Flex direction="column">
          Method of communication:
          <Controller
            control={control}
            name="method_of_communication"
            render={({ field }) => (
              <S.RadioGroupRoot
                defaultValue="text"
                aria-label="Method of communication"
                onValueChange={field.onChange}
                {...field}
              >
                <S.Label>
                  <S.RadioGroupItem value="phone">
                    <S.RadioGroupIndicator />
                  </S.RadioGroupItem>
                  Phone
                </S.Label>
                <S.Label>
                  <S.RadioGroupItem value="text">
                    <S.RadioGroupIndicator />
                  </S.RadioGroupItem>
                  Text
                </S.Label>
              </S.RadioGroupRoot>
            )}
          />
        </Flex>

        <S.Divider />

        <Flex direction="column">
          Subject of preference:
          <Controller
            control={control}
            name="subject_of_preference"
            render={({ field }) => (
              <S.RadioGroupRoot
                defaultValue="buying"
                aria-label="Subject of preference"
                {...field}
                onValueChange={field.onChange}
              >
                <S.Label>
                  <S.RadioGroupItem value="buying">
                    <S.RadioGroupIndicator />
                  </S.RadioGroupItem>
                  Buying
                </S.Label>
                <S.Label>
                  <S.RadioGroupItem value="selling">
                    <S.RadioGroupIndicator />
                  </S.RadioGroupItem>
                  Selling
                </S.Label>
              </S.RadioGroupRoot>
            )}
          />
        </Flex>
      </Flex>

      <Button
        size="2"
        loading={isSubmitting}
        type="submit"
        disabled={isSubmitting || isSubmitSuccessful}
        submitted={isSubmitSuccessful}
        css={{
          w: '100%',
          gridColumn: 'span 2',
          mt: 8,

          '&:disabled': {
            opacity: '1',
          },
        }}
      >
        {isSubmitSuccessful ? 'Submitted!' : 'Submit'}
      </Button>
    </S.Form>
  )
}
