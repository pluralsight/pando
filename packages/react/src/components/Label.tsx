'use client'

import {
  forwardRef,
  useMemo,
  type LabelHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import { useFormControl } from '../context/FormControl'
import { createLabelText } from '../helpers/label.helpers'
import { cx } from '@/styled-system/css'
import { label } from '@/styled-system/recipes'

export interface LabelProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'> {
  htmlFor: string
  usage?: 'default' | 'hidden'
}

function LabelEl(
  props: PropsWithChildren<LabelProps>,
  ref: ForwardedRef<HTMLLabelElement>,
) {
  const { usage, ...nativeProps } = props
  const state = useFormControl()
  const pandoValue = createLabelText(props.children as string, state.required)
  const classes = useMemo(() => {
    if (usage === 'hidden') return label({ usage: 'hidden' })
    return label()
  }, [usage])

  return (
    <label
      {...nativeProps}
      className={cx(nativeProps.className, classes)}
      ref={ref}
    >
      {pandoValue}
    </label>
  )
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(LabelEl)
