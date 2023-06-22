import { forwardRef, type ForwardedRef, type ButtonHTMLAttributes } from 'react'
import {
  getAlertDialogIconButtonProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type {
  AlertDialogOptions,
  IconButtonOptions,
} from '@pluralsight/headless-styles/types'
import { CloseIcon } from '@pluralsight/icons'
import { IconButton, Button } from '../../index.ts'

// <AlertCloseIconButton>

type AlertCloseIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function AlertIconButtonEl(
  props: AlertCloseIconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const pandoProps = getAlertDialogIconButtonProps(
    splitClassNameProp(props.className)
  )

  return (
    <span {...pandoProps.iconBtnWrapper}>
      <IconButton
        {...props}
        {...pandoProps.iconBtnOptions}
        icon={CloseIcon}
        ref={ref}
      />
    </span>
  )
}

// <AlertDialogCancel>

type AlertDialogCancelProps = ButtonHTMLAttributes<HTMLButtonElement>

function AlertDialogCancelEl(
  props: AlertDialogCancelProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <Button
      {...props}
      className="pando-alert-cancel"
      sentiment="default"
      usage="outline"
      ref={ref}
    />
  )
}

// <AlertDialogConfirm>

interface AlertDialogConfirmProps
  extends Pick<AlertDialogOptions, 'kind'>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

function AlertDialogConfirmEl(
  props: AlertDialogConfirmProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { kind, ...nativeProps } = props
  return (
    <Button
      {...nativeProps}
      className="pando-alert-confirm"
      sentiment={kind === 'destructive' ? 'danger' : 'action'}
      ref={ref}
    />
  )
}

// exports

export const AlertDialogCloseIconButton = forwardRef<
  HTMLButtonElement,
  AlertCloseIconButtonProps
>(AlertIconButtonEl)

export const AlertDialogCancel = forwardRef<
  HTMLButtonElement,
  AlertDialogCancelProps
>(AlertDialogCancelEl)

export const AlertDialogConfirm = forwardRef<
  HTMLButtonElement,
  AlertDialogConfirmProps
>(AlertDialogConfirmEl)
