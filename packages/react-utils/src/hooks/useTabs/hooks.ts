import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type SyntheticEvent,
} from 'react'
import { TabsContext } from './context'
import { setActiveDispatch, setFocusDispatch, setRefList } from './reducer'
import type { TabOptions } from './types'

function getDefaultTabOptions(tabOptions?: TabOptions) {
  return {
    onClick: tabOptions?.onClick ?? null,
  }
}

// public

export function useTabList() {
  const { dispatch, refList, tabList } = useContext(TabsContext)
  const [tabFocus, setTabFocus] = useState(-1)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const key = e.key
      const tabLength = tabList.length

      if (key === 'ArrowRight') {
        setTabFocus((prev) => {
          const next = prev + 1
          if (next >= tabLength) {
            return 0
          }
          return next
        })
      } else if (key === 'ArrowLeft') {
        setTabFocus((prev) => {
          const next = prev - 1
          if (next < 0) {
            return tabLength - 1
          }
          return next
        })
      }
    },
    [tabList]
  )

  useEffect(() => {
    if (tabFocus >= 0) {
      setFocusDispatch(dispatch, tabFocus)
      refList[tabFocus]?.focus()
    }
  }, [dispatch, refList, tabFocus])

  return useMemo(
    () => ({
      onKeyDown: handleKeyDown,
      tabList,
    }),
    [handleKeyDown, tabList]
  )
}

export function useTab(options?: TabOptions) {
  const tabRef = useRef(null)
  const { dispatch, tabs } = useContext(TabsContext)
  const { onClick } = getDefaultTabOptions(options)

  const handleClick = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.id

      if (onClick) {
        onClick(id)
      }

      setActiveDispatch(dispatch, id)
    },
    [dispatch, onClick]
  )

  useEffect(() => {
    if (tabRef.current !== null) {
      setRefList(dispatch, tabRef.current)
    }
  }, [dispatch])

  return useMemo(
    () => ({
      onClick: handleClick,
      ref: tabRef,
      tabs,
    }),
    [handleClick, tabs]
  )
}

export function usePanelList() {
  const { panelList } = useContext(TabsContext)
  return {
    panelList,
  }
}

export function usePanel() {
  const { panels } = useContext(TabsContext)
  return {
    panels,
  }
}
