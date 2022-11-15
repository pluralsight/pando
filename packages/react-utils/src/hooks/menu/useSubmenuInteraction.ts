import { submenuHook } from '@pluralsight/shared'
import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type FocusEvent,
  type AriaAttributes,
} from 'react'
import {
  elementInMenu,
  getItemRelativeToActive,
  getMenuItems,
  stopKeyEvent,
} from './utils'

const menuExpanded = 'data-expanded'
const triggerExpanded = 'aria-expanded'

export function useSubmenuInteraction() {
  const [expanded, setExpanded] = useState(false)
  const menuRef = useRef<HTMLMenuElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  function focusTrigger() {
    triggerRef.current?.focus()
  }

  function focusNextItem() {
    getItemRelativeToActive(1, getMenuItems(menuRef.current)).focus()
  }

  function focusPreviousItem() {
    getItemRelativeToActive(-1, getMenuItems(menuRef.current)).focus()
  }

  function focusFirstItem() {
    const firstItem = getMenuItems(menuRef.current)[0] as HTMLElement
    firstItem.focus()
  }

  function focusLastItem() {
    const menuItems = getMenuItems(menuRef.current)
    const lastItem = menuItems[menuItems.length - 1] as HTMLElement
    lastItem.focus()
  }

  function setExpandedAttributes(value: boolean) {
    menuRef.current?.setAttribute(menuExpanded, value.toString())
    triggerRef.current?.setAttribute(triggerExpanded, value.toString())
  }

  const openMenu = useCallback(() => {
    setExpanded(true)
    setExpandedAttributes(true)
  }, [])

  const closeMenu = useCallback(() => {
    setExpanded(false)
    setExpandedAttributes(false)
  }, [])

  const toggleMenu = useCallback(() => {
    if (expanded) {
      closeMenu()
    } else {
      openMenu()
    }
  }, [closeMenu, expanded, openMenu])

  const openMenuWithFocus = useCallback(() => {
    openMenu()
    focusFirstItem()
  }, [openMenu])

  const toggleMenuWithFocus = useCallback(() => {
    toggleMenu()
    focusFirstItem()
  }, [toggleMenu])

  const handleSubmenuTriggerKeypress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          stopKeyEvent(event)
          openMenuWithFocus()
          break

        case 'ArrowLeft':
          stopKeyEvent(event)
          toggleMenu()
          break

        case 'Enter':
        case ' ':
          stopKeyEvent(event)
          toggleMenuWithFocus()
          break

        default:
          break
      }
    },
    [openMenuWithFocus, toggleMenu, toggleMenuWithFocus]
  )

  const handleMenuKeypress = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          stopKeyEvent(event)
          focusPreviousItem()
          break

        case 'ArrowDown':
          stopKeyEvent(event)
          focusNextItem()
          break

        case 'ArrowLeft':
        case 'Escape':
          stopKeyEvent(event)
          closeMenu()
          focusTrigger()
          break

        case 'Home':
          stopKeyEvent(event)
          focusFirstItem()
          break

        case 'End':
          stopKeyEvent(event)
          focusLastItem()
          break

        case 'Tab':
          closeMenu()
          focusTrigger()
          break

        default:
          break
      }
    },
    [closeMenu]
  )

  const handleBlur = useCallback(
    (event: FocusEvent) => {
      if (
        !elementInMenu(
          event.relatedTarget as HTMLElement,
          menuRef.current,
          triggerRef.current
        )
      ) {
        closeMenu()
      }
    },
    [closeMenu]
  )

  return useMemo(() => {
    if (submenuHook) {
      return {
        expanded,
        menu: {
          [menuExpanded]: 'false',
          ref: menuRef,
          role: 'menu',
          onBlur: handleBlur,
          onKeyDown: handleMenuKeypress,
        },
        trigger: {
          [triggerExpanded]: 'false' as 'true' | 'false',
          'aria-haspopup': 'true' as AriaAttributes['aria-haspopup'],
          ref: triggerRef,
          role: 'menuitem',
          onClick: toggleMenu,
          onKeyDown: handleSubmenuTriggerKeypress,
        },
      }
    }
    return null
  }, [
    expanded,
    handleBlur,
    handleMenuKeypress,
    handleSubmenuTriggerKeypress,
    toggleMenu,
  ])
}
