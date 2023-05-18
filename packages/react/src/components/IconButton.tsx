import { forwardRef, type ButtonHTMLAttributes, type ForwardedRef } from 'react'
import {
  getIconButtonProps,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { IconButtonOptions } from '@pluralsight/headless-styles/types'
import type { UsesIconProps } from './shared/types.ts'

interface IconButtonProps
  extends IconButtonOptions,
    Required<UsesIconProps>,
    ButtonHTMLAttributes<HTMLButtonElement> {}

function IconButtonEl(
  props: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { ariaLabel, sentiment, size, usage, ...nativeProps } = props
  const pandoProps = getIconButtonProps({
    ariaLabel,
    classNames: splitClassNameProp(nativeProps.className),
    disabled: nativeProps.disabled,
    sentiment,
    size,
    usage,
  })
  const Icon = props.icon ?? null

  return (
    <button {...nativeProps} {...pandoProps.button} ref={ref}>
      <Icon {...getIconProps(pandoProps.iconOptions)} />
    </button>
  )
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  IconButtonEl
)
