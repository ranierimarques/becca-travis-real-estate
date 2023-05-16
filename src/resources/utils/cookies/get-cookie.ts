import { CookieName, GetCookieType } from '@/types/cookies'

export function getCookie<T extends CookieName>(cookieName: T): GetCookieType<T> {
  const name = cookieName + '='
  const cookies = document.cookie.split('; ')

  for (const cookie of cookies) {
    if (cookie.indexOf(name) === 0) {
      return JSON.parse(cookie.substring(name.length, cookie.length))
    }
  }

  return undefined
}
