import { isValidPhoneNumber } from 'react-phone-number-input'
import { z } from 'zod'

const nameRegExp = /^[a-z ,.'-]+$/i
const zipcodeRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/

const formSchema = z.object({
  first_name: z.string().refine(value => nameRegExp.test(value), 'Invalid Name'),
  last_name: z.string().refine(value => nameRegExp.test(value), 'Invalid Name'),
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  number: z
    .string({ required_error: 'Number is required' })
    .refine(value => isValidPhoneNumber(value), 'Invalid phone number'),
  street_address: z.string().min(1, 'Address is required'),
  state: z.string().min(1, 'State is required'),
  city: z.string().min(1, 'City is required'),
  zipcode: z.string().refine(value => zipcodeRegExp.test(value), 'Invalid Zipcode'),
  property_details: z.string().optional(),
  preferred_method_of_communication: z.enum(['phone', 'email', 'text']),
  social: z.enum([
    'website',
    'facebook',
    'instagram',
    'linkedin',
    'email',
    'online advertisement',
    'direct mail',
    'word of mouth',
  ]),
  other_comments: z.string().optional(),
})

export type formSchemaType = z.infer<typeof formSchema>

export { formSchema }
