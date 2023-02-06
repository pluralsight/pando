import { useEffect, useState, useCallback, useMemo } from 'react'
import { getCachedTheme, setCachedTheme } from '../helpers/themeHelpers'
import type { Themes } from '../types'

export function useTheme(initialTheme?: Themes) {
  const [isBrowser, setIsBrowser] = useState<boolean>(false)
  const [theme, setTheme] = useState<Themes>(() => {
    return initialTheme ?? (isBrowser ? getCachedTheme() : 'dark')
  })

  // Prevent SSR hydration issues with more reliable check than using
  // traditional window condition.
  useEffect(() => {
    setIsBrowser(true)
  }, [])

  useEffect(() => {
    setCachedTheme(theme)
  }, [theme])

  const toggleTheme = useCallback((theme: Themes) => {
    setTheme(theme)
  }, [])

  return useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  )
}
