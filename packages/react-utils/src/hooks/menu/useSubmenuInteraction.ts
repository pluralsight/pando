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
} from './utils.ts'

const menuExpanded = 'data-expanded'
const triggerExpanded = 'aria-expanded'

export function useSubmenuInteraction() {
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
    if (triggerEnabled()) {
      setExpanded(true)
    }
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

  function triggerEnabled() {
    return triggerRef.current?.getAttribute('aria-disabled') !== 'true'
  }

  const openMenuWithFocus = useCallback(() => {
    openMenu()
    setFocusOnExpand(true)
  }, [openMenu])

  const toggleMenuWithFocus = useCallback(() => {
    toggleMenu()
    setFocusOnExpand(true)
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
        onBlur: handleBlur,
        onKeyDown: handleMenuKeypress,
      },
      trigger: {
        [triggerExpanded]: expanded,
        'aria-haspopup': 'true' as AriaAttributes['aria-haspopup'],
        ref: triggerRef,
        role: 'menuitem',
        onBlur: handleBlur,
        onClick: toggleMenu,
        onKeyDown: handleSubmenuTriggerKeypress,
      },
    }),
    [
      expanded,
      handleBlur,
      handleMenuKeypress,
      handleSubmenuTriggerKeypress,
      toggleMenu,
    ]
  )
}
