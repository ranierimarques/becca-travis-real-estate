/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.graphassets.com',
      'dvvjkgh94f2v6.cloudfront.net',
      's3.amazonaws.com',
      'cdn.rets.ly',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2560],
  },
}

module.exports = nextConfig
