import { NextApiRequest, NextApiResponse } from 'next'
import {
  getYelpSearchParams,
  isAlabamaBusiness,
} from '@/resources/community-guides/yelp-search'

const options: RequestInit = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json([])
  const { category, community, offset, limit } = req.query
  const params = getYelpSearchParams(
    String(community || ''),
    String(category || ''),
    Number(offset) || 0,
    Number(limit) || 6
  )
  if (!params) return res.status(400).json([])
  if (!process.env.YELP_API_KEY) return res.status(503).json([])

  try {
    const endpoint = `https://api.yelp.com/v3/businesses/search?${params.toString()}`
    const response = await fetch(endpoint, options)
    if (!response.ok) return res.status(502).json([])
    const data = await response.json()

    res
      .status(200)
      .json(
        Array.isArray(data.businesses) ? data.businesses.filter(isAlabamaBusiness) : []
      )
  } catch (error) {
    res.status(502).json([])
  }
}
