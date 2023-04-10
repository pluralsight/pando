import React, { useRef, forwardRef, memo } from 'react'
import { useEscToClose, useFocusTrap } from '@pluralsight/react-utils'
import {
  getAlertBackdropProps,
  getAlertBodyProps,
  getAlertCancelButtonProps,
  getAlertConfirmButtonProps,
  getAlertHeaderProps,
  getAlertHeadingProps,
  getAlertFooterProps,
  getAlertInputProps,
  getAlertLabelProps,
  getAlertProps,
  getButtonProps,
  getFormControlProps,
  getIconProps,
} from '@pluralsight/headless-styles'
import { DangerDiamondFilledIcon } from '@pluralsight/icons'
import { Input } from '../Input'

export function AlertBackdrop(props) {
  const { onClose, ...alertOptions } = props
  const wrapperRef = useRef(null)
  const { focusGuard, ...backdropProps } = getAlertBackdropProps(alertOptions)

  function handleBackdropClick(event) {
    event.stopPropagation()
    if (wrapperRef.current === event.target) {
      onClose()
    }
  }

  useEscToClose(onClose)

  return (
    <div {...backdropProps.backdrop}>
      <div {...focusGuard} />
      <div
        {...backdropProps.wrapper}
        ref={wrapperRef}
        onClick={handleBackdropClick}
      >
        {props.children}
      </div>
      <div {...focusGuard} />
    </div>
  )
}

function AlertEl(props, triggerRef) {
  const { onClose, children, ...alertBackdropOptions } = props
  const alertProps = getAlertProps()
  const { ref, onKeyDown } = useFocusTrap(triggerRef)

  return (
    <AlertBackdrop onClose={onClose} {...alertBackdropOptions}>
      <section {...alertProps} ref={ref} onKeyDown={onKeyDown}>
        {children}
      </section>
    </AlertBackdrop>
  )
}

export const Alert = memo(forwardRef(AlertEl))

export function AlertHeader(props) {
  const headerProps = getAlertHeaderProps(props.kind)

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

export function AlertHeading(props) {
  const heading = getAlertHeadingProps(props.id)
  return (
    <h4 data-site-override="clearMarginBottom" {...heading}>
      {props.children}
    </h4>
  )
}

export function AlertBody(props) {
  const body = getAlertBodyProps(props.id)
  return <div {...body}>{props.children}</div>
}

export function AlertText(props) {
  return <p>{props.children}</p>
}

export function AlertLabel(props) {
  const label = getAlertLabelProps(props.htmlFor)
  return <label {...label}>{props.children}</label>
}

export function AlertInput(props) {
  const { onChange, ...inputOptions } = props
  const { fieldOptions } = getFormControlProps({
    invalid: Boolean(props.value) && props.value !== props.confirmKey,
  })
  const input = getAlertInputProps({
    ...fieldOptions,
    ...inputOptions,
  })

  return (
    <div {...input.inputWrapper}>
      <Input {...input.inputOptions} onChange={onChange} />
    </div>
  )
}

export function AlertFooter(props) {
  const footer = getAlertFooterProps()
  return <footer {...footer}>{props.children}</footer>
}

export function AlertCancelButton(props) {
  const btnProps = getAlertCancelButtonProps()

  return (
    <span {...btnProps.button}>
      <button {...getButtonProps(btnProps.btnOptions).button} {...props}>
        {props.children}
      </button>
    </span>
  )
}

export function AlertActionButton(props) {
  const { kind, ...restBtnProps } = props
  const btnProps = getAlertConfirmButtonProps(kind)

  return (
    <button {...getButtonProps(btnProps.btnOptions).button} {...restBtnProps}>
      {props.children}
    </button>
  )
}
