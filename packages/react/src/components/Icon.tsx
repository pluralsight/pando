import { forwardRef, type ForwardedRef, type SVGAttributes } from 'react'
import { getIconProps, splitClassNameProp } from '@pluralsight/headless-styles'
import type { IconOptions } from '@pluralsight/headless-styles/types'
import type { UsesIconProps } from './shared/types.ts'

type IconProps = IconOptions &
  Required<UsesIconProps> &
  SVGAttributes<SVGSVGElement>

function IconEl(props: IconProps, ref: ForwardedRef<HTMLSpanElement>) {
  // @ts-expect-error ariaLabel only exists if ariaHidden is false
  const { ariaHidden, ariaLabel, customSize, icon, size, ...nativeProps } =
    props
  const pandoProps = getIconProps({
    ariaHidden,
    ariaLabel,
    classNames: splitClassNameProp(nativeProps.className),
    customSize,
    size,
  })
  const Icon = icon ?? null

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
