export function getCookie(cookieName: string) {
  const name = cookieName + '='
  const cookies = document.cookie.split('; ')

  for (const cookie of cookies) {
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length)
    }
  }

  return ''
}
