import { type KeyboardEvent } from 'react'

export function getWrappedIndex(index: number, length: number) {
  if (index < 0) {
    return length - 1
  }

  return index % length
}

export function stopKeyEvent(event: KeyboardEvent<Element>) {
  event.preventDefault()
  event.stopPropagation()
}

export function getItemRelativeToActive(offset: number, menuItems: Element[]) {
  const { activeElement } = document
  const activeIndex = Array.prototype.indexOf.call(menuItems, activeElement)
  const nextIndex = getWrappedIndex(activeIndex + offset, menuItems.length)

  return menuItems[nextIndex] as HTMLElement
}

export function getMenuItems(menuElement: HTMLMenuElement | null) {
  return Array.from(
    menuElement?.querySelectorAll(':scope > li > [role="menuitem"]') ?? []
  )
}

export function elementInMenu(
  element: HTMLElement | null,
  menuElement: HTMLMenuElement | null,
  triggerElement: HTMLButtonElement | null
) {
  return (
    element && (menuElement?.contains(element) || element === triggerElement)
  )
}
