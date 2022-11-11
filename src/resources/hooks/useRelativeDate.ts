import { getRelativeDate } from '@/resources/utils/date'
import { useEffect, useState } from 'react'

function useRelativeDate(timestamp: string): string {
  const [relativeDate, setRelativeDate] = useState(() => getRelativeDate(timestamp))

  useEffect(() => {
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
