import { useEffect, useState, useCallback, useMemo } from 'react'
import { getCachedTheme, setCachedTheme } from '../helpers/themeHelpers'
import type { Themes } from '../types'

export function useTheme<T extends string>(initialTheme?: T | Themes) {
  const [theme, setTheme] = useState<T | Themes>(() => {
    return initialTheme ?? getCachedTheme()
  })

  useEffect(() => {
    setCachedTheme(theme)
  }, [theme])

  const updateTheme = useCallback((theme: T | Themes) => {
    setTheme(theme)
  }, [])

  return useMemo(
    () => ({
      theme,
      updateTheme,
    }),
    [theme, updateTheme]
  )
}
