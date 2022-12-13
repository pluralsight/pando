import { createJSProps } from '../../utils/helpers'
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
    ...createJSProps(containerStyles),
  }
}

export function getJSGridItemProps(options?: GridItemOptions) {
  const defaultOptions = getDefaultGridItemOptions(options)
  const props = createGridItemProps(defaultOptions)

  return {
    ...createJSProps({
      ...styles.gridItem,
      ...props.style,
    }),
  }
}
