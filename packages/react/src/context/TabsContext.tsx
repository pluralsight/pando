'use client'

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type MutableRefObject,
  type SetStateAction,
} from 'react'
import { TabsWrapper } from '../components/tabs.tsx'

export interface TabsContextValue {
  activeTab: string
  onTabClick: (tabId: string) => void
  tabsRefList: TabsRefList
  setTabsRefList: Dispatch<SetStateAction<TabsRefList>>
}

export const TabsContext = createContext<TabsContextValue | null>(null)

// <TabsProvider />

export interface TabsProviderProps {
  defaultActiveTab?: string
}

export type TabsRefList = Record<
  string,
  MutableRefObject<HTMLButtonElement | null> | HTMLButtonElement | null
>

export function TabsProvider(props: PropsWithChildren<TabsProviderProps>) {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab || '')
  const [tabsRefList, setTabsRefList] = useState<TabsRefList>({})

  const onTabClick = useCallback((tabId: string) => {
    setActiveTab(tabId)
  }, [])

  const value = useMemo(
    () => ({ activeTab, onTabClick, tabsRefList, setTabsRefList }),
    [activeTab, onTabClick, tabsRefList],
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
