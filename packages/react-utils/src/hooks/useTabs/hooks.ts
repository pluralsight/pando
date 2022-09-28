import { tabsHook } from '@pluralsight/shared'
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  type KeyboardEvent,
  type SyntheticEvent,
} from 'react'
import { TabsContext } from './context'
import {
  setActiveDispatch,
  setFocusDispatch,
  setRefListDispatch,
  setTabFocusDispatch,
} from './reducer'
import type { TabOptions } from './types'

function getDefaultTabOptions(tabOptions?: TabOptions) {
  return {
    onClick: tabOptions?.onClick ?? null,
  }
}

// public

export function useTabList() {
  const { dispatch, refList, tabList, tabFocus } = useContext(TabsContext)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const key = e.key
      const tabLength = tabList.length

      if (key === 'ArrowRight') {
        const next = tabFocus + 1
        if (next >= tabLength) {
          setTabFocusDispatch(dispatch, 0)
          return
        }
        setTabFocusDispatch(dispatch, next)
      } else if (key === 'ArrowLeft') {
        const next = tabFocus - 1
        if (next < 0) {
          setTabFocusDispatch(dispatch, tabLength - 1)
          return
        }
        setTabFocusDispatch(dispatch, next)
      }
    },
    [dispatch, tabList, tabFocus]
  )

  useEffect(() => {
    if (tabFocus >= 0) {
      setFocusDispatch(dispatch, tabFocus)
      refList[tabFocus]?.focus()
    }
  }, [dispatch, refList, tabFocus])

  return useMemo(() => {
    if (tabsHook) {
      return {
        onKeyDown: handleKeyDown,
        tabList,
      }
    }

    return null
  }, [handleKeyDown, tabList])
}

export function useTab(options?: TabOptions) {
  const tabRef = useRef(null)
  const { dispatch, tabList, tabs } = useContext(TabsContext)
  const { onClick } = getDefaultTabOptions(options)

  const handleClick = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.id

      if (onClick) {
        onClick(id)
      }

      setActiveDispatch(dispatch, id)
      setTabFocusDispatch(dispatch, tabList.indexOf(id))
    },
    [dispatch, onClick, tabList]
  )

  useEffect(() => {
    if (tabRef.current !== null) {
      setRefListDispatch(dispatch, tabRef.current)
    }
  }, [dispatch])

  return useMemo(() => {
    if (tabsHook) {
      return {
        onClick: handleClick,
        ref: tabRef,
        tabs,
      }
    }

    return null
  }, [handleClick, tabs])
}

export function usePanelList() {
  const { panelList } = useContext(TabsContext)
  return useMemo(() => {
    if (tabsHook) {
      return {
        panelList,
      }
    }

    return null
  }, [panelList])
}

export function usePanel() {
  const { panels } = useContext(TabsContext)
  return useMemo(() => {
    if (tabsHook) {
      return {
        panels,
      }
    }

    return null
  }, [panels])
}
