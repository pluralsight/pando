import {
  forwardRef,
  type FieldsetHTMLAttributes,
  type ForwardedRef,
  type HTMLAttributes,
} from 'react'
import {
  getFieldsetProps,
  getLegendProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type {
  FieldsetOptions,
  LegendOptions,
} from '@pluralsight/headless-styles/types'
import { useFormControl } from '../context/FormControl'

// <Fieldset>

interface FieldsetProps
  extends FieldsetOptions,
    FieldsetHTMLAttributes<HTMLFieldSetElement> {}

function FieldsetEl(
  props: FieldsetProps,
  forwardedRef: ForwardedRef<HTMLFieldSetElement>,
) {
  const { disabled } = useFormControl()
  const pandoProps = getFieldsetProps({
    classNames: splitClassNameProp(props.className),
  })

  return (
    <fieldset
      {...props}
      {...pandoProps}
      disabled={disabled}
      ref={forwardedRef}
    />
  )
}

// <Legend>

interface LegendProps
  extends LegendOptions,
    HTMLAttributes<HTMLLegendElement> {}

function LegendEl(
  props: LegendProps,
  forwardedRef: ForwardedRef<HTMLLegendElement>,
) {
  const pandoProps = getLegendProps({
    classNames: splitClassNameProp(props.className),
  })

  return <legend {...props} {...pandoProps} ref={forwardedRef} />
}

// exports

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  FieldsetEl,
)
export const Legend = forwardRef<HTMLLegendElement, LegendProps>(LegendEl)
