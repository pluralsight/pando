'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
  useRef,
  useState,
  type MouseEvent,
  type PropsWithChildren,
  type SyntheticEvent,
} from 'react'
import { getFormLabelProps } from '@pluralsight/headless-styles'
import {
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogBody,
} from '../../components/AlertDialog/sections'
import {
  AlertDialogCancel,
  AlertDialogConfirm,
} from '../../components/AlertDialog/actions'
import {
  AlertDialogHeading,
  AlertDialogText,
} from '../../components/AlertDialog/text'
import { Flex } from '../../components/Flex'
import { Show } from '../../components/Show'
import { Input } from '../../components/Input'
import { Label } from '../../components/Label'
import { useInitialAlertOptions } from '../shared/alert.hooks'
import { FormControlProvider } from '../FormControl'
import {
  addPromptOptions,
  promptReducer,
  initialPromptOptions,
  removePromptOptions,
} from './reducer'
import type { PromptContextProps, PromptDialogAlertOptions } from './types'

const PromptContext = createContext<PromptContextProps | null>(null)

// <PromptProvider>

export function PromptProvider(
  props: PropsWithChildren<Record<string, unknown>>,
) {
  const initialOptions = useInitialAlertOptions(initialPromptOptions)
  const [options, dispatch] = useReducer<
    typeof promptReducer,
    PromptDialogAlertOptions
  >(
    promptReducer,
    initialOptions,
    // React types bug workaround
    undefined as unknown as () => never,
  )
  const [inputValue, setInputValue] = useState<string>('')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const resolveRef = useRef<(value: string) => void>(() => null)
  const invalid =
    options.kind === 'destructive' && inputValue !== options.promptValidationKey

  function cleanup() {
    document.body.removeAttribute('data-modal-open')
    setInputValue('')
    removePromptOptions(dispatch)
  }

  function handleCancel(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement
    e.preventDefault()
    console.log('handleConfirm')
    dialogRef.current?.close(target.value)
    cleanup()
  }

  const handleClose = useCallback((e: SyntheticEvent<HTMLDialogElement>) => {
    const target = e.target as HTMLDialogElement
    cleanup()
    resolveRef.current(target?.returnValue)
  }, [])

  function handleInputChange(e: SyntheticEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement
    setInputValue(target.value)
  }

  const value = useMemo(() => {
    async function fetchConfirmResponse(): Promise<PromiseLike<string>> {
      return new Promise((resolve) => {
        resolveRef.current = resolve
      })
    }

    async function prompt(options: PromptDialogAlertOptions) {
      addPromptOptions(dispatch, options)
      document.body.setAttribute('data-modal-open', 'true')
      dialogRef.current?.showModal()
      return fetchConfirmResponse()
    }

    return {
      prompt,
    }
  }, [])

  return (
    <PromptContext.Provider value={value}>
      {props.children}

      <AlertDialog
        bodyId={options.bodyId ?? initialOptions.bodyId}
        headingId={options.headingId ?? initialOptions.headingId}
        onClose={handleClose}
        ref={dialogRef}
        role="alertdialog"
      >
        <Show when={Boolean(options.heading)} fallback={null}>
          <AlertDialogHeader kind={options.kind}>
            <AlertDialogHeading id={options.headingId}>
              {options.heading}
            </AlertDialogHeading>
          </AlertDialogHeader>
        </Show>

        <form method="dialog">
          <AlertDialogBody id={options.bodyId ?? initialOptions.bodyId}>
            <AlertDialogText className="pando-alert-text">
              {options.text}
            </AlertDialogText>

            <br />
            <FormControlProvider invalid={invalid} required={true}>
              <Show
                when={options.kind === 'destructive'}
                fallback={
                  <Label htmlFor="prompt:validate" kind="hidden">
                    {options.promptValidationKey ?? 'Validation'}
                  </Label>
                }
              >
                <label
                  {...getFormLabelProps({
                    htmlFor: 'prompt:validate',
                    value: '',
                  })}
                >
                  <p>
                    Type{' '}
                    <strong>{options.promptValidationKey ?? 'DELETE'}</strong>{' '}
                    to confirm:
                  </p>
                </label>
              </Show>

              <Input
                id="prompt:validate"
                name="prompt:validate"
                onChange={handleInputChange}
                type="text"
                value={inputValue}
              />
            </FormControlProvider>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Flex gap={16} justify="flex-end">
              <AlertDialogCancel
                onClick={handleCancel}
                type="button"
                value="cancel"
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogConfirm
                disabled={invalid}
                kind={options.kind}
                type="submit"
                value={inputValue}
              >
                {options.kind === 'destructive' ? 'Confirm' : 'OK'}
              </AlertDialogConfirm>
            </Flex>
          </AlertDialogFooter>
        </form>
      </AlertDialog>
    </PromptContext.Provider>
  )
}

// useConfirm()

export function usePrompt() {
  const context = useContext(PromptContext)

  if (!context) {
    throw new Error('usePrompt must be used within a PromptProvider.')
  }

  return context
}
