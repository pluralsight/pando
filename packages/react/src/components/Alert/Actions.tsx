import { type ButtonHTMLAttributes, type InputHTMLAttributes } from 'react'
import {
  getAlertCancelButtonProps,
  getAlertConfirmButtonProps,
  getButtonProps,
} from '@pluralsight/headless-styles'
import type {
  ButtonOptions,
  ConfirmDialogOptions,
} from '@pluralsight/headless-styles/types'
import { FormControlProvider, Input } from '../../index.ts'

// <AlertCancelButton>

interface AlertCancelButtonProps
  extends ButtonOptions,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export function AlertCancelButton(props: AlertCancelButtonProps) {
  const btnProps = getAlertCancelButtonProps()

  return (
    <span {...btnProps.button}>
      <button {...props} {...getButtonProps(btnProps.btnOptions)}>
        {props.children}
      </button>
    </span>
  )
}

// <AlertActionButton>

interface AlertActionButtonProps
  extends Pick<ConfirmDialogOptions, 'kind'>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export function AlertActionButton(props: AlertActionButtonProps) {
  const { kind, ...restBtnProps } = props
  const btnProps = getAlertConfirmButtonProps(kind ?? 'non-destructive')

  return (
    <button {...getButtonProps(btnProps.btnOptions)} {...restBtnProps}>
      {props.children}
    </button>
  )
}

// <AlertInput>

interface AlertInputProps extends InputHTMLAttributes<HTMLInputElement> {
  confirmKey: string
  id: string
  name: string
}

export function AlertInput(props: AlertInputProps) {
  const { onChange, ...nativeProps } = props
  const invalid = Boolean(props.value) && props.value !== props.confirmKey

  return (
    <FormControlProvider invalid={invalid} required={true}>
      <Input
        {...nativeProps}
        id={props.id}
        name={props.name}
        onChange={onChange}
      />
    </FormControlProvider>
  )
}
