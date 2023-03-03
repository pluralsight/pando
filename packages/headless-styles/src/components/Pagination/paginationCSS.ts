import { createClassNameProp } from '../../utils/helpers'
import {
  createPaginationClasses,
  createPaginationProps,
  getDefaultPaginationOptions,
} from './shared'
import type { PaginationOptions } from './types'
import styles from './paginationCSS.module.css'

const PAGINATION = 'ps-pagination'

export function getPaginationProps(options?: PaginationOptions) {
  const defaultOptions = getDefaultPaginationOptions(options)
  const { containerClass } = createPaginationClasses(defaultOptions)
  const props = createPaginationProps()

  return {
    ...props,
    container: {
      ...props.container,
      ...createClassNameProp(PAGINATION, styles[containerClass]),
    },
    newer: {
      ...props.newer,
      ...createClassNameProp(`${PAGINATION}-newer`, styles.paginationNewer),
    },
    older: {
      ...props.older,
      ...createClassNameProp(`${PAGINATION}-older`, styles.paginationOlder),
    },
    text: {
      ...props.text,
      ...createClassNameProp(`${PAGINATION}-text`, styles.paginationText),
    },
  }
}
