import { forwardRef, type ForwardedRef, type ButtonHTMLAttributes } from 'react'
import type { AlertDialogOptions } from '@pluralsight/headless-styles/types'
import { Button } from '../../index.ts'

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

export const AlertDialogCancel = forwardRef<
  HTMLButtonElement,
  AlertDialogCancelProps
>(AlertDialogCancelEl)
export const AlertDialogConfirm = forwardRef<
  HTMLButtonElement,
  AlertDialogConfirmProps
>(AlertDialogConfirmEl)
