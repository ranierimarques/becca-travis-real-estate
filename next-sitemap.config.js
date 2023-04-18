const generatedUrl = process.env.NEXT_PUBLIC_VERCEL_URL
const url = `${generatedUrl ? 'https://' + generatedUrl : 'http://localhost:3000/'}`

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: url,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}
