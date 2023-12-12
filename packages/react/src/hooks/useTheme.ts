'use client'

import { useEffect, useState, useCallback, useMemo } from 'react'
import {
  DARK,
  INKY_BLUE,
  getCachedMode,
  getCachedTheme,
  setCachedMode,
  setCachedTheme,
} from './helpers/themeHelpers'

export type Modes = 'light' | 'dark' | 'system'
export type Themes = 'inkyBlue'
export type CustomModes<T extends string> = T | Modes
export type CustomThemes<T extends string> = T | Themes

export function useTheme<T extends string, M extends string>(
  initialTheme?: CustomThemes<T>,
  initialMode?: CustomModes<M>,
) {
  const [isClient, setIsClient] = useState(false)
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
    setIsClient(true)
  }, [])

  useEffect(() => {
    setCachedTheme(theme)
  }, [theme])

  useEffect(() => {
    setCachedMode(mode)
  }, [mode])

  return useMemo(
    () => ({
      theme: isClient ? theme : INKY_BLUE,
      mode: isClient ? mode : DARK,
      updateMode,
      updateTheme,
    }),
    [mode, theme, updateMode, updateTheme, isClient],
  )
}
