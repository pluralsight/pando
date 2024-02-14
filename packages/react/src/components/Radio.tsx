'use client'

import { forwardRef, type InputHTMLAttributes, type ForwardedRef } from 'react'
import { useFormControl } from '../context/FormControl'
import { createLabelText } from '../helpers/label.helpers'
import { label, radio } from '@/styled-system/recipes'
import { cx } from '@/styled-system/css'
import { hstack } from '@/styled-system/patterns'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

function RadioEl(props: RadioProps, ref: ForwardedRef<HTMLInputElement>) {
  const { children, ...nativeProps } = props
  const { invalid, ...state } = useFormControl()
  const pandoLabel = createLabelText(children as string, state.required)
  const styles = radio()

  return (
    <label
      {...state}
      className={cx(hstack({ gap: '2' }), label())}
      htmlFor={nativeProps.name}
    >
      <div className={styles.root}>
        <input
          {...nativeProps}
          {...state}
          {...(invalid && { 'aria-invalid': true, invalid: 'true' })}
          className={cx('peer', styles.control)}
          ref={ref}
          type="radio"
        />
        <span aria-hidden={true} className={styles.container} />
      </div>
      {pandoLabel}
    </label>
  )
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(RadioEl)
