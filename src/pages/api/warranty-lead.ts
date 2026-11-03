import type { NextApiRequest, NextApiResponse } from 'next'
import { randomUUID } from 'crypto'
import { z } from 'zod'

const requestSchema = z
  .object({
    stage: z.enum(['plan_request', 'closing_details']),
    requestId: z.string().uuid().optional(),
    plan: z.enum(['essential', 'complete', 'premier']),
    zip: z.string().regex(/^\d{5}$/),
    email: z.string().trim().email().max(180).or(z.literal('')),
    phone: z.string().trim().max(24),
    contactMethod: z.enum(['email', 'text', 'call']),
    consent: z.literal(true),
    website: z.string().max(0).optional().default(''),
    planning: z.object({
      hvacAge: z.number().min(0).max(100),
      squareFeet: z.number().min(100).max(100000),
      systems: z.array(z.enum(['hvac', 'plumbing', 'electrical', 'appliances'])).max(4),
      comparisonFocus: z.string().trim().max(80),
    }),
    name: z.string().trim().max(120).optional().default(''),
    journey: z.enum(['buyer', 'seller', 'listing', 'exploring']).optional(),
    propertyAddress: z.string().trim().max(240).optional().default(''),
    closingDate: z.string().trim().max(20).optional().default(''),
    notes: z.string().trim().max(800).optional().default(''),
  })
  .superRefine((data, context) => {
    if (data.contactMethod === 'email' && !data.email) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['email'],
        message: 'Email is required.',
      })
    }
    if (
      (data.contactMethod === 'text' || data.contactMethod === 'call') &&
      data.phone.replace(/\D/g, '').length !== 10
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['phone'],
        message: 'A 10-digit phone is required.',
      })
    }
  })

const planNames = {
  essential: 'Home Essential',
  complete: 'Home Complete',
  premier: 'Home Premier',
}

type LeadData = z.infer<typeof requestSchema>
type DeliveryResult = 'sent' | 'rejected' | 'timeout'

function web3FormsPayload(data: LeadData, requestId: string, accessKey: string) {
  const phone = data.phone.replace(/[^\d()+\-\s]/g, '')
  const subject =
    data.stage === 'plan_request'
      ? `Warranty plan request · ${planNames[data.plan]} · ${data.zip}`
      : `Warranty closing details · ${planNames[data.plan]} · ${data.zip}`

  return {
    access_key: accessKey,
    subject,
    from_name: 'BeccaTravis.com warranty planner',
    form_source: 'ARW warranty and closing hub v1',
    request_id: requestId,
    submission_stage: data.stage,
    selected_plan: planNames[data.plan],
    property_zip: data.zip,
    preferred_contact_method: data.contactMethod,
    email: data.email || 'Not provided',
    phone: phone || 'Not provided',
    express_consent: 'Yes — user checked the contact-consent box and pressed submit',
    comparison_focus: data.planning.comparisonFocus,
    hvac_age_years: data.planning.hvacAge,
    approximate_square_feet: data.planning.squareFeet,
    systems_to_review: data.planning.systems.join(', ') || 'None selected',
    name: data.name || 'Not provided',
    real_estate_stage: data.journey || 'Not provided in step 1',
    property_address: data.propertyAddress || 'Not provided',
    estimated_closing_date: data.closingDate || 'Not provided',
    notes: data.notes || 'Not provided',
    page_path: '/alabama-home-warranty#warranty-plan-builder',
  }
}

async function deliverLead(
  data: LeadData,
  requestId: string,
  accessKey: string
): Promise<DeliveryResult> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 9000)

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify(web3FormsPayload(data, requestId, accessKey)),
    })
    const result = (await response.json()) as { success?: boolean }
    return response.ok && result.success ? 'sent' : 'rejected'
  } catch {
    return 'timeout'
  } finally {
    clearTimeout(timeout)
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Method not allowed.' })
  }

  const parsed = requestSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      message: 'Please check the highlighted contact details and try again.',
    })
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY
  if (!accessKey) {
    return res.status(503).json({
      ok: false,
      message: 'Online requests are temporarily unavailable. Please call (256) 318-9066.',
    })
  }

  const data = parsed.data
  const requestId = data.requestId || randomUUID()
  const delivery = await deliverLead(data, requestId, accessKey)
  if (delivery !== 'sent') {
    const message =
      delivery === 'timeout'
        ? 'The connection timed out. Please try again or call (256) 318-9066.'
        : 'Your request could not be delivered yet. Please try again or call (256) 318-9066.'
    return res.status(502).json({
      ok: false,
      message,
    })
  }
  return res.status(200).json({ ok: true, requestId })
}
