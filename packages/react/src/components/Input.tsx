import {
  forwardRef,
  useMemo,
  type ForwardedRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
// import {
//   getIconProps,
//   getInputProps,
//   getInputWrapperProps,
//   getInputInvalidIconProps,
//   getInputStartIconProps,
//   splitClassNameProp,
// } from '@pluralsight/headless-styles'
import { WarningTriangleFilledIcon } from '@pluralsight/icons'
// import type { InputOptions } from '@pluralsight/headless-styles/types'
import { createInputIconProps } from '../helpers/input.helpers'
import { useFormControl } from '../context/FormControl'
import type { Sizes } from './shared/types'
import { Show } from './Show'
import { cx } from '@/styled-system/css'
import { input } from '@/styled-system/recipes'

// <InvalidIcon />

function InvalidInputIcon(props: Required<Pick<InputProps, 'pandoSize'>>) {
  return (
    <WarningTriangleFilledIcon
      {...createInputIconProps({ pandoSize: props.pandoSize })}
    />
  )
}

// <Input />

export type InputSize = Exclude<Sizes, 'xs' | 'sm' | 'xl'>

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'> {
  pandoSize?: InputSize
  startIcon?: ReactNode
}

function InputEl(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { pandoSize, startIcon, ...nativeProps } = props
  const state = useFormControl()
  const styles = useMemo(() => {
    return pandoSize === 'md' ? input({ size: 'md' }) : input()
  }, [pandoSize])

  return (
    <div className={styles.root}>
      <Show when={Boolean(startIcon)}>
        <span className={styles.startIcon}>{startIcon}</span>
      </Show>

      <input
        {...nativeProps}
        {...state}
        {...(state.invalid && { 'aria-invalid': true })}
        {...(startIcon && { 'data-start-icon': true })}
        className={cx(nativeProps.className, styles.control)}
        ref={ref}
      />

      <Show when={state.invalid ?? false}>
        <span className={styles.icon}>
          <InvalidInputIcon pandoSize={pandoSize ?? 'lg'} />
        </span>
      </Show>
    </div>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputEl)
