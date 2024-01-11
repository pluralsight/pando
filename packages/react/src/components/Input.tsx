import {
  forwardRef,
  useMemo,
  type ForwardedRef,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import { WarningTriangleFilledIcon } from '@pluralsight/icons'
import { createInputIconProps } from '../helpers/input.helpers'
import { useFormControl } from '../context/FormControl'
import { Show } from './Show'
import type { Sizes } from './shared/types'
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
  id?: string
  name: string
  pandoSize?: InputSize
  startIcon?: ReactNode
}

function InputEl(props: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const { pandoSize, startIcon, ...nativeProps } = props
  const { invalid, ...state } = useFormControl()
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
        {...(invalid && { 'aria-invalid': true, invalid: 'true' })}
        {...(startIcon && { 'data-start-icon': true })}
        className={cx(nativeProps.className, styles.control)}
        ref={ref}
      />

      <Show when={invalid ?? false}>
        <span className={styles.icon}>
          <InvalidInputIcon pandoSize={pandoSize ?? 'lg'} />
        </span>
      </Show>
    </div>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputEl)
