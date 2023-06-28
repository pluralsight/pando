import {
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { useFloating, flip } from '@floating-ui/react-dom'
import type { MenuContextValue } from './types.ts'

const MenuContext = createContext<MenuContextValue | null>(null)

// <MenuProvider />

export function MenuProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const [expanded, setExpanded] = useState<boolean>(false)
  const floating = useFloating({
    middleware: [flip()],
  })
  const menuId = useId()
  const triggerId = useId()

  const value = useMemo(
    () => ({
      expanded,
      menuId,
      triggerId,
      setExpanded,
      floating,
    }),
    [expanded, floating, menuId, triggerId]
  )

  return (
    <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
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
