/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.graphassets.com",
      "dvvjkgh94f2v6.cloudfront.net",
      "s3.amazonaws.com",
    ],
  },
}

module.exports = nextConfig
