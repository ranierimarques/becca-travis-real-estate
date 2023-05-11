export function setCookie(name: string, value: string) {
  const date = new Date()
  const oneYearLater = new Date(
    date.getUTCFullYear() + 1,
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
  const expires = 'expires=' + oneYearLater.toUTCString()

  if (name === 'subscribed') {
    document.cookie = name + '=' + value + ';' + expires + ';path=/'
  } else {
    document.cookie = name + '=' + value + ';' + ';path=/'
  }
}
