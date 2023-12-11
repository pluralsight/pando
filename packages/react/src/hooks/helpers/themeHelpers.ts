'use client'

import { type CustomThemes, type CustomModes } from '../useTheme'

export const THEME_KEY = 'pandoTheme'
export const INKY_BLUE = 'inkyBlue'

export const MODE_KEY = 'pandoMode'
export const DARK = 'dark'
export const LIGHT = 'light'
export const SYSTEM = 'system'

export function getAppliedMode<T extends string>(
  userPreference: CustomModes<T>,
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
  let cachedTheme = null

  if (typeof window !== 'undefined') {
    cachedTheme = window?.localStorage.getItem(THEME_KEY) ?? INKY_BLUE
  }

  return cachedTheme as CustomThemes<T>
}

export function setCachedTheme<T extends string>(theme: CustomModes<T>) {
  document?.documentElement.setAttribute('data-theme', getAppliedMode(theme))
  window?.localStorage.setItem(THEME_KEY, theme)
}

export function getCachedMode<T extends string>() {
  let cachedMode = null

  if (typeof window !== 'undefined') {
    cachedMode = window?.localStorage.getItem(MODE_KEY) ?? DARK
  }

  return cachedMode as CustomModes<T>
}

export function setCachedMode<T extends string>(mode: CustomModes<T>) {
  document?.documentElement.setAttribute(
    'data-color-mode',
    getAppliedMode(mode),
  )
  window?.localStorage.setItem(MODE_KEY, mode)
}
