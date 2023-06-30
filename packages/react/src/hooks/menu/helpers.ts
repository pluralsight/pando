import { ARROW_DOWN, ARROW_UP, END, HOME } from '../../utils/const.ts'
import type { MenuNavKeys } from './types.ts'

export function getNextFocusLocation(
  currentFocus: number,
  length: number,
  key: MenuNavKeys
) {
  switch (key) {
    case ARROW_DOWN:
      return currentFocus === length - 1 ? 0 : currentFocus + 1

    case ARROW_UP:
      return currentFocus === 0 ? length - 1 : currentFocus - 1

    case HOME:
      return 0

    case END:
      return length - 1

    default:
      return currentFocus
  }
}

export function updateMenuListFocus(
  menuList: HTMLElement,
  currentFocus: number,
  key: MenuNavKeys
) {
  const items = menuList.querySelectorAll('[role="menuitem"]')
  const nextFocus = getNextFocusLocation(currentFocus, items.length, key)
  const el = items[nextFocus] as HTMLElement
  el.focus()
}

type MenuListSignal = () => HTMLElement | null

export function handleArrowKeys(
  menuListSignal: MenuListSignal,
  key: MenuNavKeys = ARROW_DOWN
) {
  if (menuListSignal()) {
    const menuList = menuListSignal() as HTMLElement
    const currentFocus = Array.from(
      menuList.querySelectorAll('[role="menuitem"]')
    ).findIndex((item) => item === document.activeElement)

    updateMenuListFocus(menuList, currentFocus, key)
  }
}

export function handleTriggerArrowKeys(
  menuListSignal: MenuListSignal,
  key: MenuNavKeys = ARROW_DOWN
) {
  if (menuListSignal()) {
    const menuList = menuListSignal() as HTMLElement
    const currentFocus = key === ARROW_DOWN ? -1 : 0
    updateMenuListFocus(menuList, currentFocus, key)
  }
}
