import {
  forwardRef,
  useId,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react'
import {
  getErrorMessageProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { ErrorMessageOptions } from '@pluralsight/headless-styles/types'
import { useFormControl } from '../context/FormControl.tsx'

interface ErrorMessageProps
  extends ErrorMessageOptions,
    Omit<HTMLAttributes<HTMLParagraphElement>, 'id'> {}

function ErrorMessageEl(
  props: ErrorMessageProps,
  ref: ForwardedRef<HTMLParagraphElement>
) {
  const { id, ...nativeProps } = props
  const uid = useId()
  const { invalid } = useFormControl()
  const pandoProps = getErrorMessageProps({
    classNames: splitClassNameProp(nativeProps.className),
    id: id ?? uid,
  })

  if (invalid) return <small {...nativeProps} {...pandoProps} ref={ref} />

  return null
}

export const ErrorMessage = forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ErrorMessageEl
)
