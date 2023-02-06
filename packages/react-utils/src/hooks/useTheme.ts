import { useEffect, useState, useCallback, useMemo } from 'react'
import { getCachedTheme, setCachedTheme } from '../helpers/themeHelpers'
import type { Themes } from '../types'

export function useTheme(initialTheme?: Themes) {
  const [theme, setTheme] = useState<Themes>(initialTheme ?? 'dark')

  // This mounting Effect allows this hook to avoid Hydration errors
  // for SSR apps vs. the unreliable window check. For context see:
  // https://github.com/facebook/docusaurus/blob/main/packages/docusaurus/src/client/browserContext.tsx
  useEffect(() => {
    setTheme(getCachedTheme())
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
      handleToggleTheme: toggleTheme,
    }),
    [theme, toggleTheme]
  )
}
