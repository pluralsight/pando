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
import { Portal, Show, Toast, ToastHeading, ToastText } from '../../index.ts'
import { DISMISS, SHOW, defaultDuration, toastReducer } from './reducer.ts'
import type { ToastContextProps, ToastProps } from './types.ts'

const initialState = {
  text: '',
  duration: defaultDuration,
  heading: undefined,
  onAction: undefined,
  sentiment: 'info' as ToastSentiment,
}

export const ToastContext = createContext<ToastContextProps | null>(null)

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

  function handleActionClick() {
    if (toast.onAction) toast.onAction()
    dispatch({ type: DISMISS })
  }

  const value = useMemo(() => {
    function show(data: ToastProps) {
      dispatch({ type: SHOW, data })

      timeoutRef.current = window.setTimeout(() => {
        dispatch({ type: DISMISS })
      }, data.duration ?? defaultDuration)
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

      <Show when={Boolean(toast.text)} fallback={null}>
        <Portal>
          <Toast
            sentiment={toast.sentiment}
            onAction={handleActionClick}
            onClose={() => dispatch({ type: DISMISS })}
          >
            <Show when={Boolean(toast.heading)} fallback={null}>
              <ToastHeading>{toast.heading}</ToastHeading>
            </Show>
            <ToastText>{toast.text}</ToastText>
          </Toast>
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
