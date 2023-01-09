import {
  useCallback,
  useEffect,
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

export function useMenuInteraction() {
  const [expanded, setExpanded] = useState(false)
  const [focusOnExpand, setFocusOnExpand] = useState(false)
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

  const openMenu = useCallback(() => {
    setExpanded(true)
  }, [])

  const closeMenu = useCallback(() => {
    setExpanded(false)
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
    setFocusOnExpand(true)
  }, [openMenu])

  const handleMenuTriggerKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'Enter' ||
        event.key === ' '
      ) {
        stopKeyEvent(event)
        openMenuWithFocus()
      }
    },
    [openMenuWithFocus]
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

  useEffect(() => {
    if (expanded && focusOnExpand) {
      focusFirstItem()
      setFocusOnExpand(false)
    }
  }, [expanded, focusOnExpand])

  return useMemo(
    () => ({
      expanded,
      menu: {
        [menuExpanded]: expanded,
        ref: menuRef,
        role: 'menu',
        onKeyDown: handleMenuKeypress,
        onBlur: handleBlur,
      },
      trigger: {
        [triggerExpanded]: expanded,
        'aria-haspopup': 'true' as AriaAttributes['aria-haspopup'],
        ref: triggerRef,
        onClick: toggleMenu,
        onBlur: handleBlur,
        onKeyDown: handleMenuTriggerKeypress,
      },
    }),
    [
      expanded,
      handleBlur,
      handleMenuKeypress,
      handleMenuTriggerKeypress,
      toggleMenu,
    ]
  )
}
