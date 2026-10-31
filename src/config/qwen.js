const allowedExactHosts = new Set([
  'dashscope.aliyuncs.com',
  'dashscope-intl.aliyuncs.com',
  'dashscope-us.aliyuncs.com',
  'cn-hongkong.dashscope.aliyuncs.com',
  'maas.qwencloudapi.com',
])

const allowedHostSuffixes = ['.maas.aliyuncs.com', '.maas.qwencloudapi.com']
const localOriginHosts = new Set(['127.0.0.1', '::1', 'localhost'])

function getAllowedOrigins(value) {
  if (!value) return null

  try {
    const origins = value
      .split(',')
      .map(origin => origin.trim())
      .filter(Boolean)
      .map(origin => {
        const url = new URL(origin)
        const isLocalHttp = url.protocol === 'http:' && localOriginHosts.has(url.hostname)

        if (
          (url.protocol !== 'https:' && !isLocalHttp) ||
          url.username ||
          url.password ||
          url.pathname !== '/' ||
          url.search ||
          url.hash
        ) {
          throw new Error('Invalid assistant origin')
        }

        return url.origin
      })

    return origins.length ? [...new Set(origins)] : null
  } catch {
    return null
  }
}

function getQwenConfiguration(environment = process.env) {
  if (environment.NEXT_PUBLIC_AI_ASSISTANT_ENABLED !== 'true') return null

  const apiKey = environment.DASHSCOPE_API_KEY?.trim()
  const baseUrlValue = environment.DASHSCOPE_BASE_URL?.trim()
  const model = environment.QWEN_MODEL?.trim()
  const allowedOrigins = getAllowedOrigins(
    environment.AI_ASSISTANT_ALLOWED_ORIGINS?.trim()
  )

  if (!apiKey || !baseUrlValue || !model || !allowedOrigins) return null
  if (!/^sk-[a-zA-Z0-9._-]{16,512}$/.test(apiKey)) return null
  if (!/^[a-zA-Z0-9._-]{1,100}$/.test(model)) return null

  try {
    const baseUrl = new URL(baseUrlValue)
    const isAllowedHost =
      allowedExactHosts.has(baseUrl.hostname) ||
      allowedHostSuffixes.some(suffix => baseUrl.hostname.endsWith(suffix))
    const normalizedPath = baseUrl.pathname.replace(/\/$/, '')

    if (
      baseUrl.protocol !== 'https:' ||
      baseUrl.username ||
      baseUrl.password ||
      (baseUrl.port && baseUrl.port !== '443') ||
      baseUrl.search ||
      baseUrl.hash ||
      normalizedPath !== '/compatible-mode/v1' ||
      !isAllowedHost
    ) {
      return null
    }

    baseUrl.pathname = normalizedPath

    return {
      apiKey,
      allowedOrigins,
      baseUrl: baseUrl.toString().replace(/\/$/, ''),
      model,
    }
  } catch {
    return null
  }
}

module.exports = { getQwenConfiguration }
