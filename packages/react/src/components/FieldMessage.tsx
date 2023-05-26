import {
  forwardRef,
  useId,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react'
import {
  getFieldMessageProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { FieldMessageOptions } from '@pluralsight/headless-styles/types'
import { useFormControl } from '../context/FormControl.tsx'

interface FieldMessageProps
  extends FieldMessageOptions,
    Omit<HTMLAttributes<HTMLParagraphElement>, 'id'> {}

function FieldMessageEl(
  props: FieldMessageProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { id, ...nativeProps } = props
  const uid = useId()
  const { invalid } = useFormControl()
  const pandoProps = getFieldMessageProps({
    classNames: splitClassNameProp(nativeProps.className),
    id: id ?? uid,
  })

  if (invalid) return null

  return <small {...nativeProps} {...pandoProps} ref={ref} />
}

export const FieldMessage = forwardRef<HTMLParagraphElement, FieldMessageProps>(
  FieldMessageEl
)
