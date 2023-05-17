import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ForwardedRef,
  type ElementType,
} from 'react'
import {
  getIconButtonProps,
  getIconProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type { IconButtonOptions } from '@pluralsight/headless-styles/types'

interface IconButtonProps
  extends IconButtonOptions,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

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
