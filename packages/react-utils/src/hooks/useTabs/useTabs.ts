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

export function useTabs(data: RawTabData, options: TabOptions) {
  const { cache, onClick } = options
  const initialState = useMemo(() => {
    return normalizeData(data)
  }, [data])
  const [state, dispatch] = useReducer(reducer, initialState)
  const [activeTab, setActiveTab] = useState('')
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
    if (cache) {
      setLocalStorage(uuid, activeTab)
    }

    setActiveDispatch(dispatch, activeTab)

    return () => {
      clearLocalStorage(uuid)
    }
  }, [activeTab, dispatch, cache, uuid])

  return useMemo(
    () => ({
      ...(state as TabsData),
      onTabClick: handleClick,
    }),
    [state, handleClick]
  )
}
