'use client'

import { forwardRef, type InputHTMLAttributes, type ForwardedRef } from 'react'
import {
  getCheckboxProps,
  getFormLabelProps,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { CheckboxOptions } from '@pluralsight/headless-styles/types'
import { CheckIcon, IndeterminateIcon } from '@pluralsight/icons'
import { useFormControl } from '../context/FormControl'
import { Show } from './Show'

export interface CheckboxProps
  extends CheckboxOptions,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'children'> {
  children?: string
}

function CheckboxEl(
  props: CheckboxProps,
  forwardedRef: ForwardedRef<HTMLInputElement>,
) {
  const { children, indeterminate, ...nativeProps } = props
  const state = useFormControl()
  const pandoProps = getCheckboxProps({
    classNames: splitClassNameProp(nativeProps.className),
    indeterminate,
    ...nativeProps,
    ...state,
  })
  const { value, ...pandoLabelProps } = getFormLabelProps({
    ...state,
    htmlFor: pandoProps.input.id,
    value: children ?? '',
  })

  return (
    <label {...pandoLabelProps}>
      <div {...pandoProps.checkboxContainer}>
        <input {...nativeProps} {...pandoProps.input} ref={forwardedRef} />

        <span {...pandoProps.checkboxControl}>
          <Show
            when={pandoProps.input.checked && !indeterminate}
            fallback={null}
          >
            <CheckIcon {...getIconProps(pandoProps.iconOptions)} />
          </Show>
          <Show
            when={pandoProps.input.checked && Boolean(indeterminate)}
            fallback={null}
          >
            <IndeterminateIcon {...getIconProps(pandoProps.iconOptions)} />
          </Show>
        </span>

        {value}
      </div>
    </label>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxEl)
