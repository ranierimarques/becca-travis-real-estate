import dayjs from 'dayjs'

export function getFormattedDate(ISOString: string) {
  return dayjs(ISOString).format('DD MMM HH:mm')
}
