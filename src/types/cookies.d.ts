export type CookieName = 'pop-up'

type PopUp = {
  subscribed?: boolean
  closed?: boolean
}

export type GetCookieType<T extends CookieName> = T extends 'pop-up'
  ? PopUp | undefined
  : undefined

export type SetCookieOptions = {
  expires?: 'session' | 'one-year' | number
}
