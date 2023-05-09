import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ElementType,
  type ForwardedRef,
  type PropsWithChildren,
} from 'react'
import {
  getButtonProps,
  getButtonIconOptions,
  getIconProps,
} from '@pluralsight/headless-styles'
import type { ButtonOptions } from '@pluralsight/headless-styles/types'

interface ButtonProps
  extends ButtonOptions,
    ButtonHTMLAttributes<HTMLButtonElement> {
  endIcon?: ElementType
  startIcon?: ElementType
}

function ButtonEl(
  props: PropsWithChildren<ButtonProps>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const {
    children,
    disabled,
    size,
    sentiment,
    usage,
    startIcon,
    endIcon,
    ...nativeProps
  } = props
  const btnProps = getButtonProps({
    disabled,
    size,
    sentiment,
    usage,
  })
  const iconProps = getIconProps(getButtonIconOptions(size))
  const StartIcon = startIcon
  const EndIcon = endIcon

  return (
    <button {...btnProps} {...nativeProps} ref={ref}>
      {StartIcon && <StartIcon {...iconProps} />}
      {children}
      {EndIcon && <EndIcon {...iconProps} />}
    </button>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(ButtonEl)
