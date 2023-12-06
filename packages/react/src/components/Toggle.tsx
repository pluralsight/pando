'use client'

import {
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ForwardedRef,
} from 'react'
import {
  getSwitchProps,
  getSwitchWrapperProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { SwitchOptions } from '@pluralsight/headless-styles/types'
import { useFormControl } from '../context/FormControl'

// <Toggle />

type ToggleProps = HTMLAttributes<HTMLDivElement>

function ToggleEl(props: ToggleProps, ref: ForwardedRef<HTMLInputElement>) {
  const pandoProps = getSwitchWrapperProps({
    classNames: splitClassNameProp(props.className),
  })
  return <div {...props} {...pandoProps} ref={ref} />
}

// <ToggleButton />

interface ToggleButtonProps
  extends SwitchOptions,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name' | 'children'> {}

function ToggleButtonEl(
  props: ToggleButtonProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { pandoSize, ...nativeProps } = props
  const state = useFormControl()
  const pandoProps = getSwitchProps({
    ...nativeProps,
    ...state,
    classNames: splitClassNameProp(nativeProps.className),
    pandoSize,
  })

  return (
    <label {...pandoProps.switchContainer}>
      <input {...nativeProps} {...pandoProps.input} ref={ref} />
      <span {...pandoProps.switchTrack}>
        <span {...pandoProps.switchThumb} />
      </span>
    </label>
  )
}

// exports

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(ToggleEl)
export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ToggleButtonEl,
)
