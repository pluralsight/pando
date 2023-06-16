import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useReducer,
  useRef,
  type MouseEvent,
  type PropsWithChildren,
  type SyntheticEvent,
} from 'react'
import { stringToBoolean } from '../../utils/helpers.ts'
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
  const defaultHeadingId = useId()
  const defaultBodyId = useId()
  const [options, dispatch] = useReducer<
    typeof confirmReducer,
    ConfirmDialogAlertOptions
  >(
    confirmReducer,
    {
      ...initialConfirmOptions,
      bodyId: defaultBodyId,
      headingId: defaultHeadingId,
    },
    // React types bug workaround
    undefined as unknown as () => never
  )
  const dialogRef = useRef<HTMLDialogElement>(null)
  const resolveRef = useRef<(value: boolean) => void>(() => null)

  function cleanup() {
    document.body.removeAttribute('data-modal-open')
    removeConfirmOptions(dispatch)
  }

  function handleConfirm(e: MouseEvent<HTMLButtonElement>) {
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

    async function show(options: ConfirmDialogAlertOptions) {
      addConfirmOptions(dispatch, options)
      document.body.setAttribute('data-modal-open', 'true')
      dialogRef.current?.showModal()
      return fetchConfirmResponse()
    }

    return {
      show,
    }
  }, [])

  return (
    <ConfirmContext.Provider value={value}>
      {props.children}

      <dialog
        aria-describedby={options.bodyId}
        aria-labelledby={options.headingId}
        onClose={handleClose}
        role="alertdialog"
        ref={dialogRef}
      >
        <header>
          <h4 id={options.headingId}>{options.heading}</h4>
        </header>

        <p id={options.bodyId}>{options.text}</p>

        <footer>
          <form>
            <button formMethod="dialog" value="false">
              Cancel
            </button>
            <button onClick={handleConfirm} type="submit" value="true">
              Confirm
            </button>
          </form>
        </footer>
      </dialog>
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
