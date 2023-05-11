import { getCookie } from './get-cookie'

export function checkCookie(name: string) {
  const cookie = getCookie(name)

  if (cookie === 'true') {
    return true
  }
}
