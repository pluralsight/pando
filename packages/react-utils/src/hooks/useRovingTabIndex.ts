import { useMemo, useCallback, type FocusEvent } from 'react'

export function useRovingTabIndex() {
  const handleFocus = useCallback((event: FocusEvent) => {
    const el = event.target as HTMLElement
    el.tabIndex = 0
  }, [])

  const handleBlur = useCallback((event: FocusEvent) => {
    const el = event.target as HTMLElement
    el.tabIndex = -1
  }, [])

  return useMemo(
    () => ({
      onFocus: handleFocus,
      onBlur: handleBlur,
      tabIndex: -1,
    }),
    [handleBlur, handleFocus]
  )
}
