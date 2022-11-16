import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createGridProps,
  createGridItemProps,
  getDefaultGridOptions,
  getDefaultGridItemOptions,
} from './shared'
import type { GridOptions, GridItemOptions } from './types'
import styles from './generated/gridCSS.module'

export function getJSGridProps(options?: GridOptions) {
  const defaultOptions = getDefaultGridOptions(options)
  const props = createGridProps(defaultOptions)
  const containerStyles = {
    ...styles.gridContainer,
    ...props.style,
  }

  return {
    ...createJSProps(transformStyles(containerStyles), containerStyles),
  }
}

export function getJSGridItemProps(options?: GridItemOptions) {
  const defaultOptions = getDefaultGridItemOptions(options)
  const { style } = createGridItemProps(defaultOptions)

  return {
    ...createJSProps(transformStyles(style), style),
  }
}
