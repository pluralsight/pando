import {
  forwardRef,
  useId,
  type ForwardedRef,
  type HTMLAttributes,
} from 'react'
import {
  getAlertDialogHeadingProps,
  getAlertDialogLabelProps,
} from '@pluralsight/headless-styles'

// <AlertHeading />

type AlertHeadingProps = HTMLAttributes<HTMLHeadingElement>

function AlertHeadingEl(
  props: AlertHeadingProps,
  ref: ForwardedRef<HTMLHeadingElement>
) {
  const defaultId = useId()

  return (
    <h4
      {...props}
      {...getAlertDialogHeadingProps(props.id ?? defaultId)}
      ref={ref}
    >
      {props.children}
    </h4>
  )
}

// <AlertLabel />

interface AlertLabelProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, 'htmlFor'> {
  htmlFor: string
}

function AlertLabelEl(
  props: AlertLabelProps,
  ref: ForwardedRef<HTMLLabelElement>
) {
  return (
    <label {...props} {...getAlertDialogLabelProps(props.htmlFor)} ref={ref}>
      {props.children}
    </label>
  )
}

// <AlertText />

// There is no API for this component. It is just a wrapper for the text for
// consistency.

type AlertTextProps = HTMLAttributes<HTMLParagraphElement>

function AlertTextEl(
  props: AlertTextProps,
  ref: ForwardedRef<HTMLParagraphElement>
) {
  return <p {...props} ref={ref} />
}

// exports

export const AlertDialogHeading = forwardRef<
  HTMLHeadingElement,
  AlertHeadingProps
>(AlertHeadingEl)
export const AlertDialogLabel = forwardRef<HTMLLabelElement, AlertLabelProps>(
  AlertLabelEl
)
export const AlertDialogText = forwardRef<HTMLParagraphElement, AlertTextProps>(
  AlertTextEl
)
