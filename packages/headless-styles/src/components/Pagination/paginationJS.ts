import { pagination } from '@pluralsight/shared'
import { createJSProps, transformStyles } from '../../utils/helpers'
import { createPaginationProps } from './shared'
import styles from './generated/paginationCSS.module'

export function getJSPaginationProps() {
  const { paginationContainer } = styles
  const props = createPaginationProps()

  if (pagination) {
    return {
      ...props,
      container: {
        ...props.container,
        ...createJSProps(
          transformStyles(paginationContainer),
          paginationContainer
        ),
      },
    }
  }

  return null
}
