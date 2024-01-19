'use client'

import {
  forwardRef,
  type InputHTMLAttributes,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import { CheckIcon, IndeterminateIcon } from '@pluralsight/icons'
import { useFormControl } from '../context/FormControl'
import { createButtonIconProps } from '../helpers/button.helpers'
import { Show } from './Show'
import { cx } from '@/styled-system/css'
import { checkbox } from '@/styled-system/recipes'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'> {
  id: string
  name: string
  indeterminate?: boolean
}

function CheckboxEl(
  props: PropsWithChildren<CheckboxProps>,
  forwardedRef: ForwardedRef<HTMLInputElement>,
) {
  const { children, indeterminate, ...nativeProps } = props
  const { invalid, ...state } = useFormControl()
  const styles = checkbox()
  const iconProps = createButtonIconProps({
    width: '0.75rem',
    height: '0.75rem',
  })

  return (
    <label htmlFor={nativeProps.id} className={styles.root}>
      <span className={styles.root}>
        <input
          {...state}
          {...(invalid && { 'aria-invalid': true, invalid: 'true' })}
          {...nativeProps}
          className={cx('peer', nativeProps.className, styles.control)}
          type="checkbox"
          ref={forwardedRef}
        />

        <Show when={Boolean(nativeProps.checked)}>
          <span className={styles.icon}>
            <Show
              when={Boolean(indeterminate)}
              fallback={<CheckIcon {...iconProps} />}
            >
              <IndeterminateIcon {...iconProps} />
            </Show>
          </span>
        </Show>
      </span>

      {children}
    </label>
  )
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxEl)
