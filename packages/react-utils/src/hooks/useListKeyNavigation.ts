import { useCallback, useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'

export function useListKeyNavigation() {
  const menuRef = useRef<HTMLElement>(null)
  const selectorList = '[tabindex="0"], [tabindex="-1"]'

  // TODO: Only include visible and update when submenus open/close
  const getFocusItems = useCallback(() => {
    return menuRef.current?.querySelectorAll(selectorList) ?? []
  }, [menuRef])

  function handleFocus(event: FocusEvent) {
    if (event.target instanceof Element) {
      event.target.setAttribute('tabindex', '0')
    }
  }

  // TODO: If focus is outside of menu, stays at 0
  function handleBlur(event: FocusEvent) {
    if (
      menuRef.current?.contains(document.activeElement) &&
      event.target instanceof Element
    ) {
      event.target?.setAttribute('tabindex', '-1')
    }
  }

  function focusTo(offset: 1 | -1) {
    const { activeElement } = document
    const focusItems = getFocusItems()
    const index = Array.prototype.indexOf.call(focusItems, activeElement)
    const nextIndex = (index + offset) % focusItems.length
    const nextItem = focusItems[nextIndex] as HTMLElement

    nextItem.focus()
  }

  const handleKeypress = useCallback(
    (event: KeyboardEvent) => {
      // const { activeElement } = document
      // const focusItems = getFocusItems()

      switch (event.key) {
        case 'ArrowUp':
          // Opens submenu and moves focus to last item in the submenu.
          break

        case 'ArrowDown':
          // Opens submenu and moves focus to first item in the submenu.
          break

        case 'ArrowLeft':
          focusTo(-1)
          break

        case 'ArrowRight':
          focusTo(1)
          break

        case 'Escape':
          break

        case 'Home':
          break

        case 'End':
          break

        case 'Enter':
        case 'Space':
          break

        default:
          // character - moves to next item starting with that character, or does not move
          return null
      }
    },
    [getFocusItems]
  )

  const handleInitListKeyNavigation = useCallback(() => {
    if (menuRef.current != null) {
      const focusItems = getFocusItems()

      focusItems.forEach((element) => {
        element.addEventListener('focus', handleFocus)
        element.addEventListener('blur', handleBlur)
      })

      // if (document.activeElement !== firstItem) {
      //   firstItem.focus()
      // }
    }
  }, [getFocusItems, menuRef])

  useEffect(() => {
    // const trigger = triggerRef.current

    return () => {
      // document.body.removeAttribute('data-modal-open')
      // trigger?.focus()

      const focusItems = getFocusItems()

      focusItems.forEach((element) => {
        element.removeEventListener('focus', handleFocus)
        element.removeEventListener('blur', handleBlur)
      })
    }
    // }, [triggerRef])
  }, [])

  return {
    ref: menuRef,
    setupListKeyNavigation: handleInitListKeyNavigation,
    onKeydown: handleKeypress,
  }
}
