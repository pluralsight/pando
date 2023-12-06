'use client'

import {
  forwardRef,
  type ForwardedRef,
  type HTMLAttributes,
  type SelectHTMLAttributes,
} from 'react'
import {
  getIconProps,
  getSelectProps,
  getSelectOptionProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type {
  SelectOptions,
  SelectOptionOptions,
} from '@pluralsight/headless-styles/types'
import { ChevronDownIcon, WarningTriangleFilledIcon } from '@pluralsight/icons'
import { useFormControl } from '../context/FormControl'
import { Show } from './Show'

// <Select>

interface SelectProps
  extends SelectOptions,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'name'> {}

function SelectEl(props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) {
  const { describedBy, pandoSize, ...nativeProps } = props
  const state = useFormControl()
  const pandoProps = getSelectProps({
    ...nativeProps,
    ...state,
    classNames: splitClassNameProp(nativeProps.className),
    describedBy,
    pandoSize,
  })

  return (
    <div {...pandoProps.fieldWrapper}>
      <div {...pandoProps.selectWrapper}>
        <select {...nativeProps} {...pandoProps.select} ref={ref} />

        <span {...pandoProps.iconWrapper}>
          <Show
            when={state.invalid ?? false}
            fallback={
              <ChevronDownIcon {...getIconProps(pandoProps.iconOptions)} />
            }
          >
            <WarningTriangleFilledIcon
              {...getIconProps({
                ariaHidden: true,
                ...pandoProps.invalidIconOptions,
              })}
            />
          </Show>
        </span>
      </div>
    </div>
  )
}

// <Option>

interface OptionProps
  extends SelectOptionOptions,
    HTMLAttributes<HTMLOptionElement> {
  children: string
}

function OptionEl(props: OptionProps, ref: ForwardedRef<HTMLOptionElement>) {
  const pandoProps = getSelectOptionProps({
    ...props,
    classNames: splitClassNameProp(props.className),
    value: props.value,
  })

  return <option {...props} {...pandoProps} ref={ref} />
}

// exports

export const Select = forwardRef<HTMLSelectElement, SelectProps>(SelectEl)
export const Option = forwardRef<HTMLOptionElement, OptionProps>(OptionEl)
