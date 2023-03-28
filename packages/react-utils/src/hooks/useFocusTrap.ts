import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type RefObject,
} from 'react'

export interface FocusTrapOptions {
  blockScroll?: boolean
}

export function useFocusTrap(
  triggerRef: RefObject<HTMLButtonElement>,
  options?: FocusTrapOptions
) {
  const defaultOptions = defaultFocusTrapOptions(options)
  const [blockScroll, setBlockScroll] = useState(defaultOptions.blockScroll)
  const modalRef = useRef<HTMLElement>(null)
  const selectorList =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

  const getFocusItems = useCallback(() => {
    const focusableItems =
      modalRef.current?.querySelectorAll(selectorList) ?? []
    return {
      firstItem: focusableItems[0] as HTMLElement,
      lastItem: focusableItems[focusableItems.length - 1] as HTMLElement,
    }
  }, [modalRef])

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
    [getFocusItems]
  )

  const handleInitFocusTrap = useCallback(() => {
    setBlockScrollAttr(blockScroll)

    if (modalRef.current != null) {
      const { firstItem } = getFocusItems()
      if (document.activeElement !== firstItem) {
        firstItem.focus()
      }
    }
  }, [blockScroll, getFocusItems])

  const manualInitFocusTrap = useCallback((blockScroll?: boolean) => {
    const defaultOptions = defaultFocusTrapOptions({ blockScroll })
    setBlockScroll(defaultOptions.blockScroll)
  }, [])

  useEffect(() => {
    const trigger = triggerRef.current
    return () => {
      setBlockScrollAttr(false)
      trigger?.focus()
    }
  }, [triggerRef])

  useEffect(() => {
    handleInitFocusTrap()
  }, [handleInitFocusTrap])

  return {
    ref: modalRef,
    setupFocusTrap: manualInitFocusTrap, // deprecated
    onKeyDown: handleFocus,
  }
}

function defaultFocusTrapOptions(options?: FocusTrapOptions) {
  return {
    blockScroll: options?.blockScroll ?? true,
  }
}

function setBlockScrollAttr(blockScroll?: boolean) {
  if (blockScroll) {
    document.body.setAttribute('data-modal-open', 'true')
  } else {
    document.body.removeAttribute('data-modal-open')
  }
}
