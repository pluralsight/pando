import type { CustomThemes } from './types'

export const THEME_KEY = 'pandoTheme'

const DARK = 'dark'
const LIGHT = 'light'
const SYSTEM = 'system'

export function getAppliedTheme<T extends string>(
  userPreference: CustomThemes<T>
) {
  const choseSystem = userPreference === SYSTEM

  if (userPreference === LIGHT) {
    return LIGHT
  }
  if (userPreference === DARK) {
    return DARK
  }
  if (
    choseSystem &&
    window?.matchMedia('(prefers-color-scheme: light)').matches
  ) {
    return LIGHT
  }
  if (
    choseSystem &&
    window?.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return DARK
  }

  // User has not set a system choice (normal mode) so we default to dark
  // or return a custom theme name
  return choseSystem ? DARK : userPreference
}

export function getCachedTheme<T extends string>() {
  const cachedTheme = window?.localStorage.getItem(THEME_KEY) ?? DARK
  return cachedTheme as CustomThemes<T>
}

export function setCachedTheme<T extends string>(theme: CustomThemes<T>) {
  document?.documentElement.setAttribute('data-theme', theme)
  window?.localStorage.setItem(THEME_KEY, theme)
}
