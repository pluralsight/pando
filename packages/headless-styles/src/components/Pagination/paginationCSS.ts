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
  const props = createPaginationProps(defaultOptions)
  const classes = createPaginationClasses(defaultOptions)

  return {
    ...props,
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassNameProp(
        `${PAGINATION}-buttonGroup`,
        styles[classes.buttonGroupClass]
      ),
    },
    container: {
      ...props.container,
      ...createClassNameProp(PAGINATION, styles[classes.containerClass]),
    },
    text: {
      ...props.text,
      ...createClassNameProp(`${PAGINATION}-text`, styles[classes.textClass]),
    },
  }
}
