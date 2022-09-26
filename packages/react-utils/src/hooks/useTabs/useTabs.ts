import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
  useReducer,
  SyntheticEvent,
} from 'react'
import { normalizeData, clearLocalStorage, setLocalStorage } from './utils'
import { reducer, setActiveDispatch } from './reducer'
import type { RawTabData, TabOptions, TabsData } from './types'

function getDefaultTabOptions(tabOptions?: TabOptions) {
  return {
    cache: tabOptions?.cache ?? false,
    onClick: tabOptions?.onClick ?? null,
  }
}

// TODO: Figure out how to know if options.onClick is using useCallback

export function useTabs(data: RawTabData, options?: TabOptions) {
  const { cache, onClick } = getDefaultTabOptions(options)
  const initialState = useMemo(() => {
    return normalizeData(data)
  }, [data])
  const [state, dispatch] = useReducer(reducer, initialState)
  const [activeTab, setActiveTab] = useState(
    () => state.tabs[state.tabList[0]].id ?? ''
  )
  const uuid = useId()

  const handleClick = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.id
      setActiveTab(id)

      if (onClick) {
        onClick(id)
      }
    },
    [onClick]
  )

  useEffect(() => {
    setActiveDispatch(dispatch, activeTab)
  }, [activeTab, dispatch])

  useEffect(() => {
    if (cache) {
      setLocalStorage(uuid, activeTab)
    }

    return () => {
      clearLocalStorage(uuid)
    }
  }, [activeTab, cache, uuid])

  return useMemo(
    () => ({
      ...(state as TabsData),
      onTabClick: handleClick,
    }),
    [state, handleClick]
  )
}
