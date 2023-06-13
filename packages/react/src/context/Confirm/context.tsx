import {
  PropsWithChildren,
  createContext,
  useContext,
  useId,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import { Portal, Show } from '../../index.ts'
import {
  addConfirmOptions,
  confirmReducer,
  initialConfirmOptions,
  removeConfirmOptions,
} from './reducer.ts'
import type { Callback, ConfirmContext, ConfirmDialogElOptions } from './types'

const defaultCallback = () => null

const ConfirmContext = createContext<ConfirmContext | null>(null)

// <ConfirmProvider>

export function ConfirmProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const defaultId = useId()
  const defaultBodyId = useId()
  const [showAlert, setShowAlert] = useState<boolean>(false)
  const [options, dispatch] = useReducer<
    typeof confirmReducer,
    ConfirmDialogElOptions
  >(
    confirmReducer,
    {
      ...initialConfirmOptions,
      id: defaultId,
      bodyId: defaultBodyId,
    },
    // React types bug workaround
    undefined as unknown as () => never
  )
  const callbackRef = useRef<Callback>(() => defaultCallback)

  function cleanup() {
    setShowAlert(false)
    removeConfirmOptions(dispatch)
  }

  function handleConfirm() {
    callbackRef.current(true)
    cleanup()
  }

  function handleCancel() {
    callbackRef.current(false)
    cleanup()
  }

  const value = useMemo(() => {
    function confirm(cb: Callback, options: ConfirmDialogElOptions) {
      setShowAlert(true)
      addConfirmOptions(dispatch, options)
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
