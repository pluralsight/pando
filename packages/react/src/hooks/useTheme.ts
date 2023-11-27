'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import {
  getCachedMode,
  getCachedTheme,
  setCachedMode,
  setCachedTheme,
} from './helpers/themeHelpers.ts'

export type Modes = 'light' | 'dark' | 'system'
export type Themes = 'inkyBlue'
export type CustomModes<T extends string> = T | Modes
export type CustomThemes<T extends string> = T | Themes

export function useTheme<T extends string, M extends string>(
  initialTheme?: CustomThemes<T>,
  initialMode?: CustomModes<M>,
) {
  const [theme, setTheme] = useState<CustomThemes<T>>(() => {
    return (initialTheme ?? getCachedTheme()) as CustomThemes<T>
  })
  const [mode, setMode] = useState<CustomModes<T>>(() => {
    return (initialMode ?? getCachedMode()) as CustomModes<T>
  })

  const updateTheme = useCallback((newTheme: CustomThemes<T>) => {
    setTheme(newTheme)
  }, [])

  const updateMode = useCallback((newMode: CustomModes<T>) => {
    setMode(newMode)
  }, [])

  useEffect(() => {
    setCachedTheme(theme)
  }, [theme])

  useEffect(() => {
    setCachedMode(mode)
  }, [mode])

  return useMemo(
    () => ({
      theme,
      mode,
      updateMode,
      updateTheme,
    }),
    [mode, theme, updateMode, updateTheme],
  )
}
