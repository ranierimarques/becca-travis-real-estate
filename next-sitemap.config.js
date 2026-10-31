const { getApprovedSmartFrameUrl } = require('./src/config/idx-smart-frame')

const environment = process.env.NEXT_PUBLIC_VERCEL_ENV
const vercelURL = process.env.NEXT_PUBLIC_VERCEL_URL
const smartFrameUrl = getApprovedSmartFrameUrl(
  process.env.VALLEYMLS_IDX_SMARTFRAME_URL
)

const url = environment === 'production' ? 'beccatravis.com' : vercelURL
const fullURL = `${url ? 'https://' + url : 'http://localhost:3000'}`

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: fullURL,
  generateRobotsTxt: true,
  exclude: [
    '/follow-up-copyboard',
    ...(smartFrameUrl ? [] : ['/homes']),
  ],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: '*', allow: '/' },
    ],
  },
}
