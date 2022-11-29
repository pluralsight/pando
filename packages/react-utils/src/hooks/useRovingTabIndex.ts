import {
  useMemo,
  useCallback,
  useState,
  type RefObject,
  type FocusEvent,
} from 'react'

export function useRovingTabIndex(menuRef?: RefObject<HTMLMenuElement>) {
  const [tabIndex, setTabIndex] = useState<number>(-1)

  const handleFocus = useCallback(() => {
    setTabIndex(0)
  }, [])

  const handleBlur = useCallback(
    (event: FocusEvent) => {
      if (
        menuRef?.current?.contains(event.relatedTarget) ||
        menuRef?.current == null
      ) {
        return setTabIndex(-1)
      }

      return setTabIndex(0)
    },
    [menuRef]
  )

  return useMemo(
    () => ({
      onFocus: handleFocus,
      onBlur: handleBlur,
      tabIndex,
    }),
    [handleBlur, handleFocus, tabIndex]
  )
}
