'use client'

import {
  createContext,
  useContext,
  useId,
  useMemo,
  type PropsWithChildren,
  useState,
  useRef,
  useLayoutEffect,
} from 'react'
import type { PopoverContextValue, PopoverProviderProps } from './types'

const PopoverContext = createContext<PopoverContextValue | null>(null)

// <PopoverProvider />

export function PopoverProvider(
  props: PropsWithChildren<PopoverProviderProps>,
) {
  const parentRef = useRef<HTMLSpanElement>(null)
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const id = useId()
  const triggerId = useId()

  useLayoutEffect(() => {
    if (parentRef.current) {
      const { height, width } = parentRef.current.getBoundingClientRect()
      setHeight(height)
      setWidth(width)
    }
  }, [])

  const value = useMemo(
    () => ({
      height,
      width,
      id,
      position: props.position,
      triggerId,
    }),
    [height, id, props.position, triggerId, width],
  )

  return (
    <PopoverContext.Provider value={value}>
      <span
        ref={parentRef}
        style={{
          display: 'inline-block',
          position: 'relative',
        }}
      >
        {props.children}
      </span>
    </PopoverContext.Provider>
  )
}

// usePopover()

export function usePopover() {
  const context = useContext(PopoverContext)

  if (!context) {
    throw new Error('usePopover must be used within a PopoverProvider')
  }

  return context
}
