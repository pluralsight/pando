import { forwardRef, type HTMLAttributes, type ForwardedRef } from 'react'
import {
  getFlexProps,
  getFlexItemProps,
  splitClassNameProp,
} from '@pluralsight/headless-styles'
import type {
  FlexOptions,
  FlexItemOptions,
} from '@pluralsight/headless-styles/types'

// <Flex>

interface FlexProps
  extends FlexOptions,
    Omit<HTMLAttributes<HTMLDivElement>, 'style'> {}

function FlexEl(props: FlexProps, ref: ForwardedRef<HTMLDivElement>) {
  const { align, direction, gap, justify, wrap, ...nativeProps } = props
  const pandoProps = getFlexProps({
    align,
    classNames: splitClassNameProp(nativeProps.className),
    direction,
    gap,
    justify,
    style: nativeProps.style,
    wrap,
  })

  return <div {...nativeProps} {...pandoProps} ref={ref} />
}

// <FlexItem>

interface FlexItemProps
  extends FlexItemOptions,
    Omit<HTMLAttributes<HTMLDivElement>, 'style'> {}

function FlexItemEl(props: FlexItemProps, ref: ForwardedRef<HTMLDivElement>) {
  const { basis, grow, shrink, ...nativeProps } = props
  const pandoProps = getFlexItemProps({
    basis,
    classNames: splitClassNameProp(nativeProps.className),
    grow,
    shrink,
    style: nativeProps.style,
  })

  return <div {...nativeProps} {...pandoProps} ref={ref} />
}

// exports

export const Flex = forwardRef<HTMLDivElement, FlexProps>(FlexEl)
export const FlexItem = forwardRef<HTMLDivElement, FlexItemProps>(FlexItemEl)
