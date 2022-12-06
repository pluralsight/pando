import { createClassNameProp } from '../../utils/helpers'
import { createPaginationProps, getDefaultPaginationOptions } from './shared'
import type { PaginationOptions } from './types'
import styles from './paginationCSS.module.css'

const PAGINATION = 'ps-pagination'
const paginationClasses = {
  container: PAGINATION,
  newer: `${PAGINATION}-newer`,
  older: `${PAGINATION}-older`,
  text: `${PAGINATION}-text`,
}

export function getPaginationProps(options?: PaginationOptions) {
  const { cols } = getDefaultPaginationOptions(options)
  const props = createPaginationProps(cols)
  const { container, newer, older, text } = paginationClasses

  return {
    ...props,
    container: {
      ...props.container,
      ...createClassNameProp(`${container} ${styles.paginationContainer}`),
    },
    newer: {
      ...props.newer,
      ...createClassNameProp(`${newer} ${styles.paginationNewer}`),
    },
    older: {
      ...props.older,
      ...createClassNameProp(`${older} ${styles.paginationOlder}`),
    },
    text: {
      ...props.text,
      ...createClassNameProp(`${text} ${styles.paginationText}`),
    },
  }
}
