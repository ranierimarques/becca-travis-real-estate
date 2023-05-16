import { getCookie } from '@/resources/utils/cookies'
import { CookieName, GetCookieType, SetCookieOptions } from '@/types/cookies'

function getOneYearLater() {
  const date = new Date()
  return new Date(
    date.getUTCFullYear() + 1,
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}

function getCookieExpiresTime(expires: SetCookieOptions['expires']) {
  // TODO: Implement expires with custom number
  if (typeof expires === 'number') throw new Error('Expires in number not implemented')
  if (expires === 'one-year') return `expires=${getOneYearLater().toUTCString()}`
  if (expires === 'session') return ''

  return ''
}

export function setCookie<T extends CookieName>(
  name: T,
  value: GetCookieType<T>,
  options: SetCookieOptions
) {
  const cookie = getCookie(name)
  const expires = getCookieExpiresTime(options.expires)
  const newValue = JSON.stringify({ cookie, ...value })

  document.cookie = `${name}=${newValue};${expires};path=/`
}
