import { MutableRefObject, useCallback, useEffect, useRef } from 'react'

function useDebounceTwo(delay: number, skip: MutableRefObject<boolean>) {
  const timeoutRef = useRef<number | null>(null)

  const throttle = useCallback(
    (callback: () => void) => {
      skip.current = false

      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      if (timeoutRef.current === null) {
        timeoutRef.current = window.setTimeout(() => {
          timeoutRef.current = null
          callback()
        }, delay)
      }
    },
    [delay, skip]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  return throttle
}

export default useDebounceTwo
