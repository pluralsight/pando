import { useEffect, useState, useCallback, useMemo } from 'react'
import { getCachedTheme, setCachedTheme } from '../helpers/themeHelpers.ts'
import type { CustomThemes } from '../types'

export function useTheme<T extends string>(initialTheme?: CustomThemes<T>) {
  const [theme, setTheme] = useState<CustomThemes<T>>(() => {
    return (initialTheme ?? getCachedTheme()) as CustomThemes<T>
  })

  useEffect(() => {
    setCachedTheme(theme)
  }, [theme])

  const updateTheme = useCallback((theme: CustomThemes<T>) => {
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
