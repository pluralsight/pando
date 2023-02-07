import type { Themes } from './types'

export const THEME_KEY = 'pandoTheme'

export function getCachedTheme() {
  const cachedTheme = window?.localStorage.getItem(THEME_KEY) ?? 'dark'
  return cachedTheme as Themes
}

export function setCachedTheme(theme: Themes) {
  document?.documentElement.setAttribute('data-theme', theme)
  window?.localStorage.setItem(THEME_KEY, theme)
}
