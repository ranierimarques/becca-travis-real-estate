import { NextApiRequest, NextApiResponse } from 'next'

const options: RequestInit = {
  method: 'GET',
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, community, offset, limit } = req.query

  try {
    const endpoint = `https://api.yelp.com/v3/businesses/search?categories=${category}&location=${community}&sort_by=review_count&limit=${limit}&offset=${offset}`
    const response = await fetch(endpoint, options)
    const data = await response.json()

    res.status(200).json(data.businesses)
  } catch (error) {
    res.status(400).json({ data: 'Error', error })
  }
}
