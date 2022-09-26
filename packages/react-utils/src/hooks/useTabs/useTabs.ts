import { useCallback, useMemo, useReducer, SyntheticEvent } from 'react'
import { normalizeData } from './utils'
import { reducer, setActiveDispatch } from './reducer'
import type { RawTabData, TabOptions, TabsData } from './types'

function getDefaultTabOptions(tabOptions?: TabOptions) {
  return {
    onClick: tabOptions?.onClick ?? null,
  }
}

// TODO: Figure out how to know if options.onClick is using useCallback

export function useTabs(data: RawTabData, options?: TabOptions) {
  const { onClick } = getDefaultTabOptions(options)
  const initialState = useMemo(() => {
    return normalizeData(data)
  }, [data])
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = useCallback(
    (e: SyntheticEvent<HTMLButtonElement>) => {
      const id = e.currentTarget.id
      setActiveDispatch(dispatch, id)

      if (onClick) {
        onClick(id)
      }
    },
    [dispatch, onClick]
  )

  return useMemo(
    () => ({
      ...(state as TabsData),
      onTabClick: handleClick,
    }),
    [state, handleClick]
  )
}
