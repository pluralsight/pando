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

interface AlertDialogProps
  extends AlertDialogOptions,
    HTMLAttributes<HTMLDialogElement> {
  onClose: (e: SyntheticEvent<HTMLDialogElement>) => void
}

function AlertDialogEl(
  props: AlertDialogProps,
  ref: ForwardedRef<HTMLDialogElement>
) {
  const { kind, bodyId, headingId, ...nativeProps } = props
  const defaultHeadingId = useId()
  const pandoProps = getAlertDialogProps({
    bodyId: bodyId,
    headingId: headingId ?? defaultHeadingId,
    kind,
  })
  const { onKeyDown } = useFocusTrap(ref as MutableRefObject<HTMLDialogElement>)

  return (
    <dialog {...nativeProps} {...pandoProps} onKeyDown={onKeyDown} ref={ref} />
  )
}

// <AlertDialogHeader>

interface AlertDialogHeaderProps
  extends Pick<AlertDialogOptions, 'kind'>,
    HTMLAttributes<HTMLDivElement> {}

function AlertDialogHeaderEl(
  props: AlertDialogHeaderProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { kind, ...nativeProps } = props
  const pandoProps = getAlertDialogHeaderProps(kind ?? 'non-destructive')
  return (
    <header {...nativeProps} {...pandoProps.header} ref={ref}>
      <Show when={kind === 'destructive'} fallback={null}>
        <span {...pandoProps.iconWrapper}>
          <DangerDiamondFilledIcon {...getIconProps(pandoProps.iconOptions)} />
        </span>
      </Show>

      {props.children}
    </header>
  )
}

// <AlertDialogBody>

interface AlertDialogBodyProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'id'> {
  id: string
}

function AlertDialogBodyEl(
  props: AlertDialogBodyProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const pandoProps = getAlertDialogBodyProps(props.id)
  return <div {...props} {...pandoProps} ref={ref} />
}

// <AlertDialogFooter>

type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>

function AlertDialogFooterEl(
  props: AlertDialogFooterProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const pandoProps = getAlertDialogFooterProps()
  return <footer {...props} {...pandoProps} ref={ref} />
}

// exports

export const AlertDialog = forwardRef<HTMLDialogElement, AlertDialogProps>(
  AlertDialogEl
)
export const AlertDialogHeader = forwardRef<
  HTMLDivElement,
  AlertDialogHeaderProps
>(AlertDialogHeaderEl)
export const AlertDialogBody = forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  AlertDialogBodyEl
)
export const AlertDialogFooter = forwardRef<
  HTMLDivElement,
  AlertDialogFooterProps
>(AlertDialogFooterEl)
