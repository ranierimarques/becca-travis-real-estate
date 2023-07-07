import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'
import { Box, Flex, Image } from '@/common'
import { Dialog } from '@/primitives'
import { getCookie, setCookie } from '@/resources/utils/cookies'
import { Form } from './'
import * as Img from './images'
import * as S from './pop-up.styles'

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
  method_of_communication: z.enum(['phone', 'text']).default('text'),
  subject_of_preference: z.enum(['buying', 'selling']).default('buying'),
})

export type FormSchemaType = z.infer<typeof formSchema>

export function PopUp() {
  const popUpForm = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  })

  const {
    formState: { isSubmitting, isSubmitSuccessful },
  } = popUpForm

  const [openPopup, setOpenPopup] = useState(false)

  useEffect(() => {
    const cookie = getCookie('pop-up')

    if (!cookie?.subscribed && !cookie?.closed) {
      const timer = setTimeout(() => {
        setOpenPopup(true)
      }, 1000 * 5)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [])

  function handleOpenChange(open: boolean) {
    if (!isSubmitting && !isSubmitSuccessful) {
      setOpenPopup(open)
      setCookie('pop-up', { closed: true }, { expires: 'session' })
    }
  }

  return (
    <Dialog.Root onOpenChange={handleOpenChange} open={openPopup}>
      <Dialog.Content
        onPointerDownOutside={e => e.preventDefault()}
        variant={2}
        css={{
          p: '16px 24px 16px 16px',
          maxWidth: 900,
          maxHeight: 'min(90vh, 495px)',
          w: 'auto',

          '@bp5': {
            p: '14px 16px 14px 14px',
          },

          '@bp4': {
            p: '24px 24px 24px 24px',

            maxHeight: '90vh',

            overflowY: 'scroll',
          },
          '@bp2': {
            p: '16px 16px 16px 16px',
          },
          '@bp1': {
            p: '14px 14px 14px 14px',
          },
        }}
      >
        <Flex css={{ gap: 24 }}>
          <Box
            css={{
              overflow: 'hidden',
              br: 10,
              minWidth: 'fit-content',
              '@bp4': { display: 'none' },
            }}
          >
            <Image src={Img.Illustration} alt="finding the right house" />
          </Box>
          <Box>
            <S.Title>
              Discover the Power of Expert Advice personalized for all of Your Real Estate
              Needs
            </S.Title>
            <S.Description>
              Every real estate need is unique. Complete the form to receive the
              exceptional support and guidance you deserve.
            </S.Description>

            <FormProvider {...popUpForm}>
              <Form onOpenPopup={setOpenPopup} />
            </FormProvider>
          </Box>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
}
