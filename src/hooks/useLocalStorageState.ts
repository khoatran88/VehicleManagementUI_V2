import { useEffect, useRef, useState } from 'react'

function useLocalStorageState(key: string, defaultValue: unknown) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = localStorage.getItem(key)
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage)
    }

    return defaultValue
  })

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }

    prevKeyRef.current = key
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useLocalStorageState
