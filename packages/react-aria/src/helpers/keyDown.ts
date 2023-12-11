import { type MutableRefObject } from 'react'
import { ARROW_LEFT, ARROW_RIGHT, END, HOME } from '../shared/const'
import type { HorizontalNavKeys } from './types'

export function getHorizontalNextFocusLocation(
  currentFocus: number,
  length: number,
  key: HorizontalNavKeys,
) {
  switch (key) {
    case ARROW_RIGHT:
      return currentFocus === length - 1 ? 0 : currentFocus + 1

    case ARROW_LEFT:
      return currentFocus === 0 ? length - 1 : currentFocus - 1

    case HOME:
      return 0

    case END:
      return length - 1

    default:
      return currentFocus
  }
}

export function updateHorizontalFocus(options: {
  list: Record<
    string,
    MutableRefObject<HTMLButtonElement | null> | HTMLButtonElement | null
  >
  currentFocus: number
  key: HorizontalNavKeys
  setFocus: (tabId: string) => void
}) {
  const listKeys = Object.keys(options.list)
  const nextFocus = getHorizontalNextFocusLocation(
    options.currentFocus,
    listKeys.length,
    options.key,
  )
  options.setFocus(listKeys[nextFocus])
  document.getElementById(listKeys[nextFocus])?.focus()
}
