import {
  createContext,
  Suspense,
  useCallback,
  useMemo,
  useState,
  type PropsWithChildren,
  useContext,
} from 'react'
import { TabsWrapper } from '../index.ts'

export interface TabsContextValue {
  activeTab: string
  onTabClick: (tabId: string) => void
}

export const TabsContext = createContext<TabsContextValue | null>(null)

// <TabsProvider />

export interface TabsProviderProps {
  defaultActiveTab?: string
}

export function TabsProvider(props: PropsWithChildren<TabsProviderProps>) {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab || '')

  const onTabClick = useCallback((tabId: string) => {
    setActiveTab(tabId)
  }, [])

  const value = useMemo(
    () => ({ activeTab, onTabClick }),
    [activeTab, onTabClick],
  )

  return (
    <Suspense>
      <TabsContext.Provider value={value}>
        <TabsWrapper>{props.children}</TabsWrapper>
      </TabsContext.Provider>
    </Suspense>
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
