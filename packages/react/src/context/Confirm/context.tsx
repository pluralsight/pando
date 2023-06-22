import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
  type MouseEvent,
  type PropsWithChildren,
  type SyntheticEvent,
} from 'react'
import { stringToBoolean } from '../../utils/helpers.ts'
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogHeading,
  AlertDialogText,
  AlertDialogCancel,
  AlertDialogConfirm,
  Flex,
  Show,
} from '../../index.ts'
import { useInitialAlertOptions } from '../shared/alert.hooks.ts'
import {
  addConfirmOptions,
  confirmReducer,
  initialConfirmOptions,
  removeConfirmOptions,
} from './reducer.ts'
import type { ConfirmContextProps, ConfirmDialogAlertOptions } from './types.ts'

const ConfirmContext = createContext<ConfirmContextProps | null>(null)

// <ConfirmProvider>

export function ConfirmProvider(
  props: PropsWithChildren<Record<string, unknown>>
) {
  const initialOptions = useInitialAlertOptions(initialConfirmOptions)
  const [options, dispatch] = useReducer<
    typeof confirmReducer,
    ConfirmDialogAlertOptions
  >(
    confirmReducer,
    initialOptions,
    // React types bug workaround
    undefined as unknown as () => never
  )
  const dialogRef = useRef<HTMLDialogElement>(null)
  const resolveRef = useRef<(value: boolean) => void>(() => null)

  function cleanup() {
    document.body.removeAttribute('data-modal-open')
    removeConfirmOptions(dispatch)
  }

  function handleCancel(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement
    e.preventDefault()
    dialogRef.current?.close(target.value)
    cleanup()
  }

  const handleClose = useCallback((e: SyntheticEvent<HTMLDialogElement>) => {
    const target = e.target as HTMLDialogElement
    cleanup()
    resolveRef.current(stringToBoolean(target?.returnValue))
  }, [])

  const value = useMemo(() => {
    async function fetchConfirmResponse(): Promise<PromiseLike<boolean>> {
      return new Promise((resolve) => {
        resolveRef.current = resolve
      })
    }

    async function confirm(options: ConfirmDialogAlertOptions) {
      addConfirmOptions(dispatch, options)
      document.body.setAttribute('data-modal-open', 'true')
      dialogRef.current?.showModal()
      return fetchConfirmResponse()
    }

    return {
      confirm,
    }
  }, [])

  return (
    <ConfirmContext.Provider value={value}>
      {props.children}

      <AlertDialog
        bodyId={options.bodyId ?? initialConfirmOptions.bodyId}
        headingId={options.headingId ?? initialConfirmOptions.headingId}
        onClose={handleClose}
        ref={dialogRef}
      >
        <Show when={Boolean(options.heading)} fallback={null}>
          <AlertDialogHeader kind={options.kind}>
            <AlertDialogHeading id={options.headingId}>
              {options.heading}
            </AlertDialogHeading>
          </AlertDialogHeader>
        </Show>

        <AlertDialogText className="pando-alert-text" id={options.bodyId}>
          {options.text}
        </AlertDialogText>

        <AlertDialogFooter>
          <form method="dialog">
            <Flex gap={16} justify="flex-end">
              <AlertDialogCancel
                onClick={handleCancel}
                type="button"
                value="false"
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogConfirm
                kind={options.kind}
                type="submit"
                value="true"
              >
                Confirm
              </AlertDialogConfirm>
            </Flex>
          </form>
        </AlertDialogFooter>
      </AlertDialog>
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
