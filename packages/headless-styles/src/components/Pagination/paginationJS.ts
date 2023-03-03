import { createJSProps } from '../../utils/helpers'
import {
  createPaginationClasses,
  createPaginationProps,
  getDefaultPaginationOptions,
} from './shared'
import styles from './generated/paginationCSS.module'
import type { PaginationOptions } from './types'

export function getJSPaginationProps(options?: PaginationOptions) {
  const defaultOptions = getDefaultPaginationOptions(options)
  const { containerClass } = createPaginationClasses(defaultOptions)
  const props = createPaginationProps()
  const newerStyles = {
    ...styles.paginationBtn,
    ...styles.paginationNewer,
  }
  const olderStyles = {
    ...styles.paginationBtn,
    ...styles.paginationOlder,
  }
  const textStyles = {
    ...styles.paginationText,
    '& > strong': {
      ...styles.paginationText___strong,
    },
  }

  return {
    ...props,
    container: {
      ...props.container,
      ...createJSProps(styles[containerClass]),
    },
    newer: {
      ...props.newer,
      ...createJSProps(newerStyles),
    },
    older: {
      ...props.older,
      ...createJSProps(olderStyles),
    },
    text: {
      ...props.text,
      ...createJSProps(textStyles),
    },
  }
}
