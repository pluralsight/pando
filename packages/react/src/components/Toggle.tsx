'use client'

import {
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ForwardedRef,
} from 'react'
import { useFormControl } from '../context/FormControl'
import { createLabelText } from '../helpers/label.helpers'
import type { Sizes } from './shared/types'
import { cx } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'
import { switchInput } from '@/styled-system/recipes'

export type ToggleSize = Exclude<Sizes, 'xs' | 'md' | 'xl'>

// <Toggle />

export interface ToggleProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  size?: ToggleSize
}

function ToggleEl(props: ToggleProps, ref: ForwardedRef<HTMLLabelElement>) {
  const { children, size, ...nativeProps } = props
  const { invalid, disabled, checked, ...formStates } = useFormControl()

  return (
    <label
      {...formStates}
      {...nativeProps}
      {...(invalid && { 'aria-invalid': true, invalid: 'true' })}
      {...(checked && { 'aria-checked': true, checked: true })}
      {...(disabled && { 'data-disabled': true, disabled: true })}
      className={cx(
        'group',
        nativeProps.className,
        hstack({ w: 'fit-content' }),
        switchInput({ size }).root,
      )}
      htmlFor={nativeProps.htmlFor}
      ref={ref}
    >
      {children}
    </label>
  )
}

// <ToggleLabel />

type ToggleLabelProps = {
  children: string
}

function ToggleLabelEl(props: ToggleLabelProps) {
  const { required } = useFormControl()
  return createLabelText(props.children as string, required)
}

// <ToggleButton />

interface ToggleButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  pandoSize?: ToggleSize
}

function ToggleButtonEl(
  props: ToggleButtonProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { pandoSize, ...nativeProps } = props
  const { checked, invalid, disabled, ...formState } = useFormControl()

  return (
    <div
      className={cx(
        nativeProps.className,
        switchInput({ size: pandoSize }).track,
      )}
    >
      <input
        {...nativeProps}
        {...formState}
        {...(checked && { 'aria-checked': true })}
        {...(invalid && { 'aria-invalid': true, invalid: 'true' })}
        {...(disabled && { 'data-disabled': true, disabled: true })}
        checked={checked}
        className={cx('peer', switchInput({ size: pandoSize }).control)}
        onChange={nativeProps.onChange}
        role="switch"
        type="checkbox"
        ref={ref}
      />
      <span className={switchInput({ size: pandoSize }).thumb} />
    </div>
  )
}

// exports

export const Toggle = forwardRef<HTMLLabelElement, ToggleProps>(ToggleEl)
export const ToggleLabel = ToggleLabelEl
export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ToggleButtonEl,
)

export const SwitchInput = Toggle
export const SwitchInputLabel = ToggleLabel
export const SwitchInputButton = ToggleButton
