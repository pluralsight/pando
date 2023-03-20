import { useMemo } from 'react'

export function useIsIndeterminate(checkboxOptions: Record<string, boolean>) {
  const checkedItems = Object.keys(checkboxOptions).map(
    (optionItem) => checkboxOptions[optionItem]
  )
  const allChecked = checkedItems.every(Boolean)

  return useMemo(
    () => (checkedItems.some(Boolean) && !allChecked) ?? false,
    [allChecked, checkedItems]
  )
}
