/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fl.yelpcdn.com',
      },
    ],
    domains: [
      'media.graphassets.com',
      'dvvjkgh94f2v6.cloudfront.net',
      's3.amazonaws.com',
      'cdn.rets.ly',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1400, 1920, 2560],
  },
  experimental: {
    scrollRestoration: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      cleanupIDs: false,
                      removeViewBox: false,
                    },
                  },
                },
                'removeXMLNS',
              ],
            },
          },
        },
      ],
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: '/blog/1',
      },
    ]
  },
}

module.exports = nextConfig
