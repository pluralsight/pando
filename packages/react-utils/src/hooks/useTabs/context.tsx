import {
  createContext,
  useMemo,
  useReducer,
  type PropsWithChildren,
} from 'react'
import { reducer } from './reducer'
import { normalizeData, setupData } from './utils'
import type { RawTabData } from './types'

export const TabsContext = createContext(normalizeData())

export interface TabsProviderProps {
  data: RawTabData
}

export function TabsProvider(props: PropsWithChildren<TabsProviderProps>) {
  const { data } = props
  const initialState = useMemo(() => setupData(data), [data])
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state, dispatch]
  )

  return (
    <TabsContext.Provider value={value}>{props.children}</TabsContext.Provider>
  )
}
