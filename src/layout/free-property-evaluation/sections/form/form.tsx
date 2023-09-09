import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Box, Button, Flex, Input } from '@/common'
import { RadioGroupItem, RadioGroupRoot, Select, Toast } from '@/primitives'
import { Section } from '@/template'
import { formSchema, formSchemaType } from './form-schema'
import * as S from './form.styles'
import * as Svg from './svgs'

const radioItems = ['Phone', 'Email', 'Text']

const aboutYou = [
  {
    name: 'first_name',
    type: 'text',
    placeholder: 'Michael',
    label: 'First Name',
    required: true,
  },
  {
    name: 'last_name',
    type: 'text',
    placeholder: 'Scott',
    label: 'Last Name',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'michael@example.com',
    label: 'Email',
    required: true,
  },
  {
    name: 'number',
    type: 'tel',
    placeholder: '(000) 000-0000',
    label: 'Number',
    required: true,
  },
] as {
  name: 'first_name' | 'last_name' | 'email' | 'number'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

const propertyInformations = [
  {
    name: 'street_address',
    type: 'text',
    placeholder: '14114 Lannister Lane',
    label: 'Street Address',
    required: true,
  },
  {
    name: 'state',
    type: 'text',
    placeholder: 'Alabama',
    label: 'State',
    required: true,
  },
  {
    name: 'city',
    type: 'text',
    placeholder: 'Huntsville',
    label: 'City',
    required: true,
  },
  {
    name: 'zipcode',
    type: 'text',
    placeholder: '35242',
    label: 'Zipcode',
    required: true,
  },
  {
    name: 'property_details',
    type: 'textarea',
    placeholder:
      'Please enter any other details such as number of bedrooms and bathrooms, square feet, upgrades, land improvements, or other information you think could be useful to your property valuation.',
    label: 'Additional information',
  },
] as {
  name: 'street_address' | 'state' | 'city' | 'zipcode' | 'property_details'
  type: string
  placeholder: string
  label: string
  required: boolean
}[]

export function Form() {
  const [openToast, setOpenToast] = useState(false)

  const {
    register,
    control,
    reset,
    handleSubmit,
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
        subject: 'Free Property Evaluation Form',
        from_name: 'Becca Travis Website',
        ...values,
      }),
    })

    if (result.status === 200) {
      setOpenToast(true)
      reset()
    }
  }

  return (
    <Section hasMaxWidth>
      <form onSubmit={handleSubmit(onSubmit)} noValidate id="form">
        <S.StepContainer>
          <S.StepTitle>About you</S.StepTitle>
          <Box
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
              width: '100%',

              '@bp4': {
                gap: 24,
              },

              '@bp2': {
                gridTemplateColumns: '1fr',

                gap: 20,
              },
            }}
          >
            {aboutYou.map(({ name, ...input }) => {
              return (
                <Input
                  key={name}
                  error={errors[name]?.message}
                  register={register}
                  name={name}
                  control={control}
                  disabled={isSubmitting}
                  {...input}
                />
              )
            })}
          </Box>
        </S.StepContainer>
        <S.StepContainer>
          <S.StepTitle>Property informations</S.StepTitle>
          <Box
            css={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
              width: '100%',

              '@bp4': {
                gap: 24,
              },

              '@bp2': {
                gridTemplateColumns: '1fr',

                gap: 20,
              },
            }}
          >
            {propertyInformations.map(({ name, ...input }) => {
              return (
                <Input
                  key={name}
                  error={errors[name]?.message}
                  register={register}
                  name={name}
                  disabled={isSubmitting}
                  {...input}
                />
              )
            })}
          </Box>
        </S.StepContainer>
        <Flex direction="column" css={{ gap: 20 }}>
          <S.StepTitle css={{ m: 0 }}>Preferred method of communication</S.StepTitle>

          <Controller
            control={control}
            name="preferred_method_of_communication"
            render={({ field }) => (
              <RadioGroupRoot onValueChange={field.onChange} {...field}>
                <Flex direction="column" css={{ gap: 20 }}>
                  {radioItems.map(method => (
                    <RadioGroupItem key={method} label={method} conventional />
                  ))}
                </Flex>
              </RadioGroupRoot>
            )}
          />

          <S.TextReminder>
            If you select &quot;Text,&quot; be sure the phone number you enter can receive
            texts.
          </S.TextReminder>
        </Flex>
        <S.StepContainer>
          <S.StepTitle>Additional details</S.StepTitle>
          <Flex direction="column" css={{ gap: 24 }}>
            <S.Label>
              <span>
                Social <S.Asterisk>*</S.Asterisk>
              </span>
              <Controller
                control={control}
                name="social"
                render={({ field }) => (
                  <SelectPrimitive.Root onValueChange={field.onChange} {...field}>
                    <S.Trigger>
                      <SelectPrimitive.Value
                        placeholder={field.value ?? 'How did you find this site?'}
                      />
                      <SelectPrimitive.Icon>
                        <Svg.ArrowDown />
                      </SelectPrimitive.Icon>
                    </S.Trigger>

                    <SelectPrimitive.Portal>
                      <S.Content>
                        <S.ScrollUpButton>
                          <Svg.Arrow />
                        </S.ScrollUpButton>

                        <SelectPrimitive.Viewport>
                          <Select.Item value="website">Website</Select.Item>
                          <Select.Item value="facebook">Facebook</Select.Item>
                          <Select.Item value="instagram">Instagram</Select.Item>
                          <Select.Item value="linkedin">Linkedin</Select.Item>
                          <Select.Item value="email">Email</Select.Item>
                          <Select.Item value="online advertisement">
                            Online advertisement
                          </Select.Item>
                          <Select.Item value="direct mail">Direct mail</Select.Item>
                          <Select.Item value="word of mouth">Word of mouth</Select.Item>
                        </SelectPrimitive.Viewport>

                        <S.ScrollDownButton>
                          <Svg.Arrow />
                        </S.ScrollDownButton>
                      </S.Content>
                    </SelectPrimitive.Portal>
                  </SelectPrimitive.Root>
                )}
              />
            </S.Label>
            <Input
              error={errors.other_comments?.message}
              register={register}
              name="other_comments"
              disabled={isSubmitting}
              type="textarea"
              placeholder="Anything else you would like to add?"
              label="Other comments"
            />
          </Flex>
        </S.StepContainer>
        <Button
          disabled={isSubmitting}
          type="submit"
          loading={isSubmitting}
          size="2"
          css={{ '@bp2': { w: '100%' } }}
        >
          Get your free home evaluation!
        </Button>
      </form>
      <Toast openToast={openToast} onOpenToast={setOpenToast} form />
    </Section>
  )
}
