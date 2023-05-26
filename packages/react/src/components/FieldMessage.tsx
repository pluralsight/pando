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

interface FieldMessageProps
  extends FieldMessageOptions,
    Omit<HTMLAttributes<HTMLParagraphElement>, 'id'> {}

function FieldMessageEl(
  props: FieldMessageProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { id, ...nativeProps } = props
  const uid = useId()
  const pandoProps = getFieldMessageProps({
    classNames: splitClassNameProp(nativeProps.className),
    id: id ?? uid,
  })

  return <small {...nativeProps} {...pandoProps} ref={ref} />
}

export const FieldMessage = forwardRef<HTMLParagraphElement, FieldMessageProps>(
  FieldMessageEl
)
