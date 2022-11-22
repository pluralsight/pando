import { createClassProp } from '../../utils/helpers'
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
  const { tech, cols } = getDefaultPaginationOptions(options)
  const props = createPaginationProps(cols)
  const { container, newer, older, text } = paginationClasses

  return {
    ...props,
    container: {
      ...props.container,
      ...createClassProp(tech, {
        defaultClass: `${container} ${styles.paginationContainer}`,
        svelteClass: `${container} paginationContainer`,
      }),
    },
    newer: {
      ...props.newer,
      ...createClassProp(tech, {
        defaultClass: `${newer} ${styles.paginationNewer}`,
        svelteClass: `${newer} paginationNewer`,
      }),
    },
    older: {
      ...props.older,
      ...createClassProp(tech, {
        defaultClass: `${older} ${styles.paginationOlder}`,
        svelteClass: `${older} paginationOlder`,
      }),
    },
    text: {
      ...props.text,
      ...createClassProp(tech, {
        defaultClass: `${text} ${styles.paginationText}`,
        svelteClass: `${text} paginationText`,
      }),
    },
  }
}
