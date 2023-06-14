import { type HTMLAttributes, type LabelHTMLAttributes } from 'react'
import {
  getAlertHeadingProps,
  getAlertLabelProps,
} from '@pluralsight/headless-styles'

// <AlertHeading>

interface AlertHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  id: string
}

export function AlertHeading(props: AlertHeadingProps) {
  return (
    <h4 {...props} {...getAlertHeadingProps(props.id)}>
      {props.children}
    </h4>
  )
}

// <AlertText>

export function AlertText(props: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props}>{props.children}</p>
}

// <AlertLabel>

export function AlertLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label {...props} {...getAlertLabelProps(props?.htmlFor ?? '')}>
      {props.children}
    </label>
  )
}
