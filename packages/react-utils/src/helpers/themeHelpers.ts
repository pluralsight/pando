import type { CustomThemes } from './types'

export const THEME_KEY = 'pandoTheme'

export function getCachedTheme<T extends string>() {
  const cachedTheme = window?.localStorage.getItem(THEME_KEY) ?? 'dark'
  return cachedTheme as CustomThemes<T>
}

export function setCachedTheme<T extends string>(theme: CustomThemes<T>) {
  document?.documentElement.setAttribute('data-theme', theme)
  window?.localStorage.setItem(THEME_KEY, theme)
}
