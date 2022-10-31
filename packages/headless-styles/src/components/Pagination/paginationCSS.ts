import { pagination } from '@pluralsight/shared'
import { createClassProp } from '../../utils/helpers'
import { createPaginationProps, getDefaultPaginationOptions } from './shared'
import type { PaginationOptions } from './types'
import styles from './paginationCSS.module.css'

const PAGINATION = 'ps-pagination'

export function getPaginationProps(options?: PaginationOptions) {
  const { tech } = getDefaultPaginationOptions(options)
  const props = createPaginationProps()

  if (pagination) {
    return {
      ...props,
      container: {
        ...props.container,
        ...createClassProp(tech, {
          defaultClass: `${PAGINATION} ${styles.paginationContainer}`,
          svelteClass: `${PAGINATION} paginationContainer`,
        }),
      },
    }
  }

  return null
}
