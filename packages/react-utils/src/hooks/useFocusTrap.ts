'use client'

import {
  useCallback,
  useEffect,
  type KeyboardEvent,
  type MutableRefObject,
} from 'react'

export function useFocusTrap(
  dialogRef: MutableRefObject<HTMLDialogElement | null>,
) {
  const selectorList =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

  const getFocusItems = useCallback(() => {
    const focusableItems =
      dialogRef?.current?.querySelectorAll(selectorList) ?? []
    return {
      firstItem: focusableItems[0] as HTMLElement,
      lastItem: focusableItems[focusableItems.length - 1] as HTMLElement,
    }
  }, [dialogRef])

  const handleFocus = useCallback(
    (event: KeyboardEvent) => {
      const { activeElement } = document
      const { firstItem, lastItem } = getFocusItems()

      if (event.key !== 'Tab') {
        return
      }

      if (event.shiftKey) {
        if (activeElement === firstItem) {
          event.preventDefault()
          lastItem.focus()
        }
      } else {
        if (activeElement === lastItem) {
          event.preventDefault()
          firstItem.focus()
        }
      }
    },
    [getFocusItems],
  )

  const handleInitFocusTrap = useCallback(() => {
    if (dialogRef?.current != null) {
      const { firstItem } = getFocusItems()
      if (document.activeElement !== firstItem) {
        firstItem?.focus()
      }
    }
  }, [dialogRef, getFocusItems])

  useEffect(() => {
    handleInitFocusTrap()
  }, [handleInitFocusTrap])

  return {
    onKeyDown: handleFocus,
  }
}
