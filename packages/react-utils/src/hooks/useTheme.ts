import { useEffect, useState, useCallback, useMemo } from 'react'
import {
  getAppliedTheme,
  getCachedTheme,
  setCachedTheme,
} from '../helpers/themeHelpers'
import type { CustomThemes } from '../types'

export function useTheme<T extends string>(initialTheme?: CustomThemes<T>) {
  const [theme, setTheme] = useState<CustomThemes<T>>(() => {
    const preferredTheme = (initialTheme ?? getCachedTheme()) as CustomThemes<T>
    return getAppliedTheme(preferredTheme)
  })

  useEffect(() => {
    setCachedTheme(theme)
  }, [theme])

  const updateTheme = useCallback((theme: CustomThemes<T>) => {
    setTheme(getAppliedTheme(theme))
  }, [])

  return useMemo(
    () => ({
      theme,
      updateTheme,
    }),
    [theme, updateTheme]
  )
}
