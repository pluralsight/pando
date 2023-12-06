'use client'

import { useMemo, type KeyboardEvent, useEffect, useCallback } from 'react'
import { useMenu } from '../../context/Menu/context'
import { ESCAPE, ARROW_DOWN, ARROW_UP, HOME, END } from '../../utils/const'
import {
  handleArrowKeys,
  handleCharacterSearch,
  handleTriggerArrowKeys,
} from './helpers'

export function useMenuListInteraction() {
  const { triggerKey, setExpanded, setTriggerKey, floating } = useMenu()

  const btnSignal = useCallback(
    () => floating.elements.reference as HTMLElement,
    [floating.elements.reference],
  )

  const menuListSignal = useCallback(
    () => floating.elements.floating,
    [floating.elements.floating],
  )

  useEffect(() => {
    function onListMount() {
      if (triggerKey === ARROW_DOWN || triggerKey === ARROW_UP) {
        handleTriggerArrowKeys(menuListSignal, triggerKey)
      }
    }

    onListMount()

    return () => {
      setTriggerKey(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuListSignal])

  return useMemo(() => {
    function onKeyDown(event: KeyboardEvent) {
      const { key } = event

      switch (key) {
        case ESCAPE:
          setExpanded(false)
          btnSignal()?.focus()
          break

        case HOME:
        case END:
        case ARROW_DOWN:
        case ARROW_UP:
          event.preventDefault()
          handleArrowKeys(menuListSignal, key)
          break

        default:
          handleCharacterSearch(event, menuListSignal)
          break
      }
    }

    return {
      onKeyDown,
    }
  }, [btnSignal, menuListSignal, setExpanded])
}
