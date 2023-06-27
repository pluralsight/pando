import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { getMenuWrapperProps } from '@pluralsight/headless-styles'
import type { MenuContextValue } from './types.ts'

const MenuContext = createContext<MenuContextValue | null>(null)

// <MenuProvider />

export function MenuProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const [expanded, setExpanded] = useState<boolean>(false)
  const menuId = useId()
  const triggerId = useId()

  const value = useMemo(
    () => ({
      expanded,
      menuId,
      triggerId,
      setExpanded,
    }),
    [expanded, menuId, triggerId]
  )

  return (
    <MenuContext.Provider value={value}>
      <div {...getMenuWrapperProps()}>{props.children}</div>
    </MenuContext.Provider>
  )
}

// useMenu()

export function useMenu() {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }

  return context
}
