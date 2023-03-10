/* eslint-disable @next/next/no-img-element */
import { NextRequest } from 'next/server'
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default function handleOg(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title')
  const image = searchParams.get('image') ?? 'test'

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{title}</span>
        <img src={image} alt="" width="256" height="256" />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
