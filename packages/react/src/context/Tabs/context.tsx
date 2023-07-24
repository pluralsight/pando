import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
  useTransition,
  useContext,
} from 'react'
import { TabsWrapper } from '../../index.ts'

export interface TabsContextValue {
  activeTab: string
  isPending: boolean
  onTabClick: (tabId: string) => void
}

export const TabsContext = createContext<TabsContextValue | null>(null)

// <TabsProvider />

export interface TabsProviderProps {
  defaultActiveTab?: string
}

export function TabsProvider(props: PropsWithChildren<TabsProviderProps>) {
  const [isPending, startTransition] = useTransition()
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab || '')

  const onTabClick = useCallback((tabId: string) => {
    startTransition(() => setActiveTab(tabId))
  }, [])

  const value = useMemo(
    () => ({ activeTab, isPending, onTabClick }),
    [activeTab, isPending, onTabClick],
  )

  return (
    <TabsContext.Provider value={value}>
      <TabsWrapper>{props.children}</TabsWrapper>
    </TabsContext.Provider>
  )
}

// useTabs()

export function useTabs() {
  const context = useContext(TabsContext)

  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider')
  }

  return context
}
