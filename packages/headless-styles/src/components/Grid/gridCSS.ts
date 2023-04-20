import { createClassNameProp } from '../../utils/helpers'
import {
  getDefaultGridOptions,
  getDefaultGridItemOptions,
  createGridProps,
  createGridItemProps,
} from './shared'
import type { GridOptions, GridItemOptions } from './types'
import styles from './gridCSS.module.css'

const GRID = 'pando-grid'

export function getGridProps(options?: GridOptions) {
  const defaultOptions = getDefaultGridOptions(options)
  const props = createGridProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(
      GRID,
      styles.gridContainer,
      ...defaultOptions.classNames
    ),
  }
}

export function getGridItemProps(options?: GridItemOptions) {
  const defaultOptions = getDefaultGridItemOptions(options)
  const props = createGridItemProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(
      `${GRID}-item`,
      styles.gridItem,
      ...defaultOptions.classNames
    ),
  }
}
