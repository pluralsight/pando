import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Portal, Show } from '../../index.ts'
import type { Callback, ConfirmContext } from './types'

const defaultCallback = () => null

const ConfirmContext = createContext<ConfirmContext | null>(null)

// <ConfirmProvider>

export function ConfirmProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const callbackRef = useRef<Callback>(() => defaultCallback)

  function handleConfirm() {
    setShowAlert(false)
    callbackRef.current(true)
  }

  function handleCancel() {
    setShowAlert(false)
    callbackRef.current(false)
  }

  const value = useMemo(() => {
    function confirm(cb: Callback) {
      setShowAlert(true)
      callbackRef.current = cb
    }

    return confirm
  }, [])

  return (
    <ConfirmContext.Provider value={value}>
      {props.children}

      <Show when={showAlert} fallback={null}>
        <Portal>
          <div>Confirm dialog</div>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </Portal>
      </Show>
    </ConfirmContext.Provider>
  )
}

// useConfirm()

export function useConfirm() {
  const context = useContext(ConfirmContext)

  if (!context) {
    throw new Error('useConfirm must be used within a ConfirmProvider.')
  }

  return context
}
