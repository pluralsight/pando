import { pagination } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import { createPaginationProps, getDefaultPaginationOptions } from './shared'
import type { PaginationOptions } from './types'
import styles from './paginationCSS.module.css'

const PAGINATION = 'ps-pagination'
const paginationClasses = {
  container: PAGINATION,
  newer: `${PAGINATION}-newer`,
  older: `${PAGINATION}-older`,
}

export function getPaginationProps(options?: PaginationOptions) {
  const { tech } = getDefaultPaginationOptions(options)
  const props = createPaginationProps()
  const { container, newer, older } = paginationClasses

  if (pagination) {
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
    }
  }

  return null
}
