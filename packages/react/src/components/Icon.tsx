import { forwardRef, type ForwardedRef, type SVGAttributes } from 'react'
import { getIconProps, splitClassNameProp } from '@pluralsight/headless-styles'
import type { IconOptions } from '@pluralsight/headless-styles/types'
import type { UsesIconProps } from './shared/types.ts'

type IconProps = IconOptions &
  Required<UsesIconProps> &
  SVGAttributes<SVGSVGElement>

function IconEl(props: IconProps, ref: ForwardedRef<HTMLSpanElement>) {
  const { customSize, size, ...nativeProps } = props
  const pandoProps = getIconProps({
    ...getIconAriaLabel(props),
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

// TODO: Export this from headless-styles

const WARNING =
  'You have set ariaHidden to false, but have not provided an ariaLabel'

function getIconAriaLabel(options: IconOptions) {
  if (options.ariaHidden) {
    return {}
  } else if (options.ariaHidden === false && options.ariaLabel) {
    return {
      'aria-label': options.ariaLabel ?? '',
    }
  } else {
    console.warn(WARNING)
    return {}
  }
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(IconEl)
