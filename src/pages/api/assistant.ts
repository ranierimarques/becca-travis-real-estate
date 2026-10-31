import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { getQwenConfiguration } from '../../config/qwen'

const requestSchema = z
  .object({
    messages: z
      .array(
        z.object({
          role: z.enum(['assistant', 'user']),
          content: z.string().trim().min(1).max(1000),
        })
      )
      .min(1)
      .max(8)
      .refine(
        messages =>
          messages.reduce((total, message) => total + message.content.length, 0) <= 6000,
        'Conversation is too long'
      )
      .refine(
        messages => messages.at(-1)?.role === 'user',
        'The last message must be from the user'
      ),
  })
  .strict()

const providerResponseSchema = z.object({
  choices: z
    .array(
      z.object({
        message: z.object({ content: z.string().trim().min(1).max(5000) }),
      })
    )
    .min(1),
})

const systemMessage = `You are the website assistant for Becca Travis, a North Alabama real estate agent.
Give concise, useful, general information about buying, selling, moving, and communities in North Alabama.
Never claim live MLS access or invent listing availability, prices, property facts, school assignments, or market statistics.
Do not provide legal, tax, lending, inspection, appraisal, or investment advice. Direct specific questions to Becca or the appropriate licensed professional.
Do not discuss, infer, rank, or recommend locations based on protected classes, demographic composition, crime as a proxy for protected classes, or school-quality judgments. Use objective property and location criteria only.
Do not request contact, financial, identity, or other sensitive information. Answer in the user's language and keep the response under 140 words.`

const requestHistory = new Map<string, number[]>()
const rateLimitWindow = 10 * 60 * 1000
const maxRequestsPerWindow = 8
const maxTrackedIdentifiers = 10_000
const sweepInterval = 100
let requestsSinceSweep = 0

function sweepExpiredRequests(now: number) {
  for (const [identifier, timestamps] of requestHistory) {
    const recentRequests = timestamps.filter(
      timestamp => now - timestamp < rateLimitWindow
    )

    if (recentRequests.length) requestHistory.set(identifier, recentRequests)
    else requestHistory.delete(identifier)
  }
}

function isRateLimited(identifier: string) {
  const now = Date.now()
  requestsSinceSweep += 1

  if (requestsSinceSweep >= sweepInterval) {
    sweepExpiredRequests(now)
    requestsSinceSweep = 0
  }

  if (!requestHistory.has(identifier) && requestHistory.size >= maxTrackedIdentifiers)
    return true

  const recentRequests = (requestHistory.get(identifier) ?? []).filter(
    timestamp => now - timestamp < rateLimitWindow
  )

  if (recentRequests.length >= maxRequestsPerWindow) return true

  requestHistory.set(identifier, [...recentRequests, now])
  return false
}

function getRequestIdentifier(req: NextApiRequest) {
  const forwardedFor = req.headers['x-forwarded-for']

  if (Array.isArray(forwardedFor)) return forwardedFor[0]
  if (forwardedFor) return forwardedFor.split(',')[0].trim()

  return req.socket.remoteAddress ?? 'unknown'
}

function isValidWebsiteRequest(req: NextApiRequest, allowedOrigins: string[]) {
  if (req.headers['x-becca-assistant-client'] !== 'website-v1') return false
  if (req.headers['sec-fetch-site'] !== 'same-origin') return false

  const origin = req.headers.origin
  if (!origin || !allowedOrigins.includes(origin)) return false

  const forwardedHost = req.headers['x-forwarded-host']
  const hostHeader = Array.isArray(forwardedHost)
    ? forwardedHost[0]
    : forwardedHost ?? req.headers.host
  const host = hostHeader?.split(',')[0].trim().toLowerCase()

  try {
    return Boolean(host && new URL(origin).host.toLowerCase() === host)
  } catch {
    return false
  }
}

export const config = {
  api: { bodyParser: { sizeLimit: '16kb' } },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin')
  res.setHeader('X-Content-Type-Options', 'nosniff')

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const configuration = getQwenConfiguration()
  if (!configuration) return res.status(503).json({ error: 'Assistant is unavailable' })

  if (!req.headers['content-type']?.toLowerCase().startsWith('application/json')) {
    return res.status(415).json({ error: 'Content type must be application/json' })
  }

  if (!isValidWebsiteRequest(req, configuration.allowedOrigins)) {
    return res.status(403).json({ error: 'Request is not allowed' })
  }

  if (isRateLimited(getRequestIdentifier(req))) {
    return res.status(429).json({ error: 'Please wait before sending another message' })
  }

  const parsedRequest = requestSchema.safeParse(req.body)
  if (!parsedRequest.success) return res.status(400).json({ error: 'Invalid request' })

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15_000)

  try {
    const providerResponse = await fetch(`${configuration.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${configuration.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: configuration.model,
        messages: [
          { role: 'system', content: systemMessage },
          ...parsedRequest.data.messages,
        ],
        max_tokens: 500,
        temperature: 0.2,
      }),
      redirect: 'error',
      signal: controller.signal,
    })

    if (!providerResponse.ok) {
      return res.status(502).json({ error: 'Assistant is temporarily unavailable' })
    }

    const parsedResponse = providerResponseSchema.safeParse(await providerResponse.json())
    if (!parsedResponse.success) {
      return res.status(502).json({ error: 'Assistant returned an invalid response' })
    }

    return res
      .status(200)
      .json({ message: parsedResponse.data.choices[0].message.content })
  } catch {
    return res.status(502).json({ error: 'Assistant is temporarily unavailable' })
  } finally {
    clearTimeout(timeout)
  }
}
