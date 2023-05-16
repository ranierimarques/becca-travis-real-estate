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

export function setCookie(name: string, value: Record<string, unknown>) {
  const oneYearLater = getOneYearLater()
  const expires = `expires=${oneYearLater.toUTCString()}`

  const stringValue = JSON.stringify(value)
  console.log(stringValue, value)
  const isSubscribed = Object.keys(value).includes('subscribed')

  document.cookie = `${name}=${stringValue};${isSubscribed ? expires : ''};path=/`
}
