'use client'

import {
  forwardRef,
  useMemo,
  type HTMLAttributes,
  type ForwardedRef,
} from 'react'
import { useFormControl } from '../context/FormControl'
import { cx } from '@/styled-system/css'
import { fieldMessage } from '@/styled-system/recipes'

export type FieldMessageUsage = 'help' | 'invalid'
export interface FieldMessageProps
  extends Omit<HTMLAttributes<HTMLParagraphElement>, 'id'> {
  id: string
}

function FieldMessageEl(
  props: FieldMessageProps,
  ref: ForwardedRef<HTMLParagraphElement>,
) {
  const { ...nativeProps } = props
  const { invalid } = useFormControl()
  const pandoClasses = useMemo(() => {
    return invalid
      ? fieldMessage({ usage: 'invalid' })
      : fieldMessage({ usage: 'help' })
  }, [invalid])

  return (
    <small
      {...nativeProps}
      className={cx(nativeProps.className, pandoClasses)}
      ref={ref}
    />
  )
}

export const FieldMessage = forwardRef<HTMLParagraphElement, FieldMessageProps>(
  FieldMessageEl,
)
