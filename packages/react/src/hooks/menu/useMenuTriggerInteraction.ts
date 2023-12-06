import { type KeyboardEvent, useMemo } from 'react'
import { useMenu } from '../../context/Menu/context'
import { ESCAPE, ARROW_DOWN, ARROW_UP } from '../../utils/const'

export function useMenuTriggerInteraction() {
  const { setExpanded, setTriggerKey } = useMenu()

  return useMemo(() => {
    function onKeyDown(event: KeyboardEvent) {
      const { key } = event

      switch (key) {
        case ESCAPE:
          setExpanded(false)
          setTriggerKey(null)
          break

        case ARROW_DOWN:
        case ARROW_UP:
          event.preventDefault()
          setTriggerKey(key)
          setExpanded(true)
          break

        default:
          break
      }
    }

    return {
      onKeyDown,
    }
  }, [setExpanded, setTriggerKey])
}
