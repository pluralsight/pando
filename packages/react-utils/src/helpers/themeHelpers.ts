import type { Themes } from './types'

export const THEME_KEY = 'pandoTheme'

export function getCachedTheme() {
  const cachedTheme = localStorage.getItem(THEME_KEY) ?? 'dark'
  return cachedTheme as Themes
}

export function setCachedTheme(theme: Themes) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(THEME_KEY, theme)
}
