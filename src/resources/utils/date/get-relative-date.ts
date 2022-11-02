import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function getRelativeDate(ISOString: string) {
  return dayjs().to(dayjs(ISOString))
}
