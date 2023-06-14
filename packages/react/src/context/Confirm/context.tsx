import {
  createContext,
  useContext,
  useId,
  useMemo,
  useReducer,
  useRef,
  type MouseEvent,
  type PropsWithChildren,
} from 'react'
import {
  addConfirmOptions,
  confirmReducer,
  initialConfirmOptions,
  removeConfirmOptions,
} from './reducer.ts'
import type { ConfirmContextProps, ConfirmDialogAlertOptions } from './types'

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

  function cleanup() {
    document.body.removeAttribute('data-modal-open')
    removeConfirmOptions(dispatch)
  }

  function handleConfirm(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    dialogRef.current?.close(String(true))
    cleanup()
  }

  const value = useMemo(() => {
    async function fetchConfirmResponse(): Promise<PromiseLike<boolean>> {
      return new Promise((resolve) => {
        dialogRef.current?.addEventListener('close', (e) => {
          const target = e.target as HTMLDialogElement
          cleanup()
          resolve(Boolean(target?.returnValue))
        })
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
        aria-describedby={`${options.headingId},${options.bodyId}`}
        role="alertdialog"
        ref={dialogRef}
      >
        <h4 id={options.headingId}>{options.heading}</h4>
        <p id={options.bodyId}>{options.text}</p>
        <form>
          <button formMethod="dialog">Cancel</button>
          <button onClick={handleConfirm} type="submit">
            Confirm
          </button>
        </form>
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
