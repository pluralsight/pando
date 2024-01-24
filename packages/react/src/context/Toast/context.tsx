'use client'

import {
  createContext,
  useEffect,
  useContext,
  useMemo,
  useReducer,
  useRef,
  type PropsWithChildren,
} from 'react'
import {
  Toast,
  ToastHeading,
  ToastText,
  type ToastPalette,
} from '../../components/toast'
import { Portal } from '../../components/Portal'
import { Show } from '../../components/Show'
import { DISMISS, SHOW, defaultDuration, toastReducer } from './reducer'
import type { ToastContextProps, ToastProps } from './types'

const initialState = {
  text: '',
  duration: defaultDuration,
  palette: 'info' as ToastPalette,
  onClose: () => console.log('You forgot to pass an onClose handler to Toast.'),
}

export const ToastContext = createContext<ToastContextProps | null>(null)

// <ToastProvider>

export function ToastProvider(
  props: PropsWithChildren<Record<string, unknown>>,
) {
  const timeoutRef = useRef<number>(defaultDuration)
  const [toast, dispatch] = useReducer<typeof toastReducer, ToastProps>(
    toastReducer,
    initialState,
    // React types bug workaround
    undefined as unknown as () => never,
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

      <Show when={Boolean(toast.text)}>
        <Portal>
          <Toast
            palette={toast.palette}
            onAction={toast.onAction && handleActionClick}
            onClose={() => dispatch({ type: DISMISS })}
          >
            <Show when={Boolean(toast.heading)}>
              <ToastHeading palette={toast.palette}>
                {toast.heading}
              </ToastHeading>
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
      'useToast requires a ToastProvider to be used on a parent component.',
    )
  }

  return context
}
