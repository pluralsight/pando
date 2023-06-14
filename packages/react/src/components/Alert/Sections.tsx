import {
  forwardRef,
  memo,
  useRef,
  type ForwardedRef,
  type MouseEvent,
  type PropsWithChildren,
  type HTMLAttributes,
} from 'react'
import {
  getAlertBackdropProps,
  getAlertBodyProps,
  getAlertFooterProps,
  getAlertHeaderProps,
  getAlertProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import type {
  ConfirmDialogOptions,
  DialogOptions,
} from '@pluralsight/headless-styles/types'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'
import { useFocusTrap, useEscToClose } from '@pluralsight/react-utils'

// <AlertBackdrop>

interface AlertBackdropProps extends DialogOptions {
  onClose: () => void
}

export function AlertBackdrop(props: PropsWithChildren<AlertBackdropProps>) {
  const { onClose, ...alertOptions } = props
  const wrapperRef = useRef(null)
  const { focusGuard, ...backdropProps } = getAlertBackdropProps(alertOptions)

  // function handleKeydown(event: KeyboardEvent<HTMLDivElement>) {
  //   if (event.key === 'Escape') onClose()
  // }

  function handleBackdropClick(event: MouseEvent) {
    event.stopPropagation()
    // if (wrapperRef.current === event.target) {
    //   onClose()
    // }
    if (wrapperRef.current !== event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  return (
    <button {...backdropProps.backdrop} onClick={handleBackdropClick}>
      <div {...focusGuard} />
      <div {...backdropProps.wrapper} ref={wrapperRef}>
        {props.children}
      </div>
      <div {...focusGuard} />
    </button>
  )
}

// <Alert>

type AlertProps = AlertBackdropProps

function AlertEl(
  props: PropsWithChildren<AlertProps>,
  triggerRef: ForwardedRef<HTMLButtonElement>
) {
  const { onClose, children, ...alertBackdropOptions } = props
  const alertProps = getAlertProps()
  const { onKeyDown } = useFocusTrap(triggerRef)

  // TODO: Figure out aria-issues

  return (
    <AlertBackdrop onClose={onClose} {...alertBackdropOptions}>
      <button {...alertProps} onKeyDown={onKeyDown}>
        {children}
      </button>
    </AlertBackdrop>
  )
}

export const Alert = memo(forwardRef(AlertEl))

// <AlertHeader>

export function AlertHeader(
  props: PropsWithChildren<Pick<ConfirmDialogOptions, 'kind'>>
) {
  const headerProps = getAlertHeaderProps(props?.kind ?? 'non-destructive')

  return (
    <header {...headerProps.header}>
      {props.kind === 'destructive' && (
        <span {...headerProps.iconWrapper}>
          <DangerDiamondFilledIcon {...getIconProps(headerProps.iconOptions)} />
        </span>
      )}
      {props.children}
    </header>
  )
}

// <AlertBody>

interface AlertBodyProps extends HTMLAttributes<HTMLDivElement> {
  id: string
}

export function AlertBody(props: AlertBodyProps) {
  return (
    <div {...props} {...getAlertBodyProps(props.id)}>
      {props.children}
    </div>
  )
}

// <AlertFooter>

export function AlertFooter(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <footer {...props} {...getAlertFooterProps()}>
      {props.children}
    </footer>
  )
}
