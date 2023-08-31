import {
  getAlertDialogProps,
  getAlertDialogHeaderProps,
  getAlertDialogBodyProps,
  getAlertDialogFooterProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import type { AlertDialogOptions } from '@pluralsight/headless-styles/types'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'
import { useFocusTrap } from '@pluralsight/react-utils'
import {
  forwardRef,
  useId,
  type ForwardedRef,
  type SyntheticEvent,
  type HTMLAttributes,
  type MutableRefObject,
} from 'react'
import { Show } from '../../index.ts'

// <AlertDialog>

export interface AlertDialogProps
  extends AlertDialogOptions,
    HTMLAttributes<HTMLDialogElement> {
  onClose?: (e: SyntheticEvent<HTMLDialogElement>) => void
}

function AlertDialogEl(
  props: AlertDialogProps,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  const { kind, bodyId, headingId, usage, ...nativeProps } = props
  const defaultHeadingId = useId()
  const pandoProps = getAlertDialogProps({
    bodyId: bodyId,
    headingId: headingId ?? defaultHeadingId,
    kind,
    usage,
  })
  const { onKeyDown } = useFocusTrap(ref as MutableRefObject<HTMLDialogElement>)

  return (
    <dialog {...nativeProps} {...pandoProps} onKeyDown={onKeyDown} ref={ref} />
  )
}

// <AlertDialogHeader>

export interface AlertDialogHeaderProps
  extends Pick<AlertDialogOptions, 'kind'>,
    HTMLAttributes<HTMLDivElement> {}

function AlertDialogHeaderEl(
  props: AlertDialogHeaderProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const { kind, ...nativeProps } = props
  const pandoProps = getAlertDialogHeaderProps(kind ?? 'non-destructive')
  return (
    <header {...nativeProps} {...pandoProps.header} ref={ref}>
      <Show when={kind === 'destructive'} fallback={null}>
        <span {...pandoProps.iconWrapper}>
          <DangerDiamondFilledIcon
            {...getIconProps({ ...pandoProps.iconOptions, ariaHidden: true })}
          />
        </span>
      </Show>

      {props.children}
    </header>
  )
}

// <AlertDialogBody>

export interface AlertDialogBodyProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  id: string
}

function AlertDialogBodyEl(
  props: AlertDialogBodyProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const pandoProps = getAlertDialogBodyProps(props.id)
  return <div {...props} {...pandoProps} ref={ref} />
}

// <AlertDialogFooter>

export type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>

function AlertDialogFooterEl(
  props: AlertDialogFooterProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const pandoProps = getAlertDialogFooterProps()
  return <footer {...props} {...pandoProps} ref={ref} />
}

// exports

/**
 * Alert dialog wrapper component
 * @param props any prop that can be passed to the underlying HTMLDialogElement
 * @param ref React ref to the underlying HTMLDialogElement
 * @param props.onClose callback when the dialog is closed
 * @returns <dialog> element
 */
export const AlertDialog = forwardRef<HTMLDialogElement, AlertDialogProps>(
  AlertDialogEl,
)

/**
 * Alert dialog header component
 * @param props any prop that can be passed to the underlying HTMLDivElement
 * @param ref React ref to the underlying HTMLDivElement
 * @param props.kind the type of alert dialog
 * @returns <header> element
 */
export const AlertDialogHeader = forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(AlertDialogHeaderEl)

/**
 * Alert dialog body component
 * @param props any prop that can be passed to the underlying HTMLDivElement
 * @param ref React ref to the underlying HTMLDivElement
 * @param props.id the id of the alert dialog body
 * @returns <div> element
 */
export const AlertDialogBody = forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  AlertDialogBodyEl,
)

/**
 * Alert dialog footer component
 * @param props any prop that can be passed to the underlying HTMLDivElement
 * @param ref React ref to the underlying HTMLDivElement
 * @returns <footer> element
 */
export const AlertDialogFooter = forwardRef<
  HTMLDivElement,
  AlertDialogFooterProps
>(AlertDialogFooterEl)
