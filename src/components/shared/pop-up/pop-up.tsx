import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import { Box, Button, Flex, Image, Input } from '@/common'
import { Dialog } from '@/primitives'
import * as Img from './images'
import * as S from './pop-up.styles'
import * as Svg from './svgs'

const nameRegExp = /^[a-z ,.'-]+$/i

const formSchema = z.object({
  first_name: z.string().refine(value => nameRegExp.test(value), {
    message: 'Invalid Name',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email is required',
    })
    .email({
      message: 'Invalid email',
    }),
  number: z
    .string({
      required_error: 'Number is required',
    })
    .refine(value => isValidPhoneNumber(value), {
      message: 'Invalid phone number',
    }),
})

type formSchemaType = z.infer<typeof formSchema>

export function PopUp() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<formSchemaType> = async (values: formSchemaType) => {
    const result = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        ...values,
      }),
    })

    if (result.status === 200) {
      reset()
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>Olá</Dialog.Trigger>
      <Dialog.Content
        variant={2}
        css={{ p: '16px 24px 16px 16px', maxWidth: 'none', w: 'fit-content' }}
      >
        <Flex css={{ gap: 24 }}>
          <Box css={{ overflow: 'hidden', br: 10 }}>
            <Image src={Img.Illustration} alt="finding the right house" />
          </Box>
          <Box css={{ maxWidth: 356, p: '16px 0 26px' }}>
            <S.Title>Your Dream Home Awaits: Uncover It with My Expertise</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore.
            </S.Description>

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

              <Button
                size="2"
                loading={isSubmitting}
                disabled={isSubmitting}
                css={{
                  w: '100%',
                  gridColumn: 'span 2',
                  mt: 8,
                }}
              >
                Submit
              </Button>
            </S.Form>

            <S.Divider />

            <Flex align="start" css={{ gap: 10, w: '100%' }}>
              <Svg.Secure />
              <S.SecureText>
                I agree to the website&apos;s privacy terms and understand my information
                will only be used for contact purposes.
              </S.SecureText>
            </Flex>
          </Box>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
