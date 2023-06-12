import {
  createContext,
  useEffect,
  useContext,
  useMemo,
  useReducer,
  useRef,
  type PropsWithChildren,
} from 'react'
import type { ToastSentiment } from '@pluralsight/headless-styles/types'
import { Portal, Show } from '../../index.ts'
import { DISMISS, SHOW, defaultDuration, toastReducer } from './reducer.ts'
import type { ToastProps } from './types.ts'

const initialState = {
  description: '',
  duration: defaultDuration,
  heading: undefined,
  onAction: undefined,
  sentiment: 'info' as ToastSentiment,
}

const initialContext = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  show: (_: ToastProps) => undefined as void,
}

export const ToastContext = createContext(initialContext)

// <ToastProvider>

export function ToastProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const timeoutRef = useRef<number>(defaultDuration)
  const [toast, dispatch] = useReducer<typeof toastReducer, ToastProps>(
    toastReducer,
    initialState,
    // React types bug workaround
    undefined as unknown as () => never
  )

  const value = useMemo(() => {
    function show(data: ToastProps) {
      dispatch({ type: SHOW, data })

      timeoutRef.current = window.setTimeout(() => {
        dispatch({ type: DISMISS })
      }, data.duration)
    }

    return { show }
  }, [])

  useEffect(() => {
    return () => {
      window.clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <ToastContext.Provider value={value}>
      {props.children}

      <Show when={toast} fallback={null}>
        <Portal>
          <div>PUT TOAST HERE</div>
        </Portal>
      </Show>
    </ToastContext.Provider>
  )
}

// useToast()

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error(
      'useToast requires a ToastProvider to be used on a parent component.'
    )
  }

  return context
}
