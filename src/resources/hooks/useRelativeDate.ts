import { useEffect, useState } from 'react'
import { getFormattedDate, getRelativeDate } from '@/resources/utils/date'

function useRelativeDate(timestamp: string): string {
  const [relativeDate, setRelativeDate] = useState(() => getFormattedDate(timestamp))

  useEffect(() => {
    setRelativeDate(getRelativeDate(timestamp))

    const intervalId = setInterval(() => {
      setRelativeDate(getRelativeDate(timestamp))
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [timestamp])

  return relativeDate
}

export default useRelativeDate
