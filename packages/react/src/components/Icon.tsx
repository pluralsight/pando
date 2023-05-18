import { forwardRef, type ForwardedRef, type SVGAttributes } from 'react'
import { getIconProps, splitClassNameProp } from '@pluralsight/headless-styles'
import type { IconOptions } from '@pluralsight/headless-styles/types'
import type { UsesIconProps } from './shared/types.ts'

interface IconProps
  extends IconOptions,
    Required<UsesIconProps>,
    SVGAttributes<SVGSVGElement> {}

function IconEl(props: IconProps, ref: ForwardedRef<HTMLSpanElement>) {
  const { ariaLabel, ariaHidden, customSize, size, ...nativeProps } = props
  const pandoProps = getIconProps({
    ariaHidden,
    ariaLabel,
    classNames: splitClassNameProp(nativeProps.className),
    customSize,
    size,
  })
  const Icon = props.icon ?? null

  if (!Icon) {
    return null
  }

  return (
    <span ref={ref}>
      <Icon {...nativeProps} {...pandoProps} />
    </span>
  )
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(IconEl)
