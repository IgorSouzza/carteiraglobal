import { useEffect, useRef } from 'react'

export function useDebounce (fn, delay) {
  const timeoutRef = useRef(undefined)

  useEffect(() => {
    return () => window.clearTimeout(timeoutRef.current)
  }, [])

  function debouncedFn (...args) {
    window.clearTimeout(timeoutRef.current)

    timeoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debouncedFn
}
