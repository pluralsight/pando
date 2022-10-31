import { pagination } from '@pluralsight/shared'
import { createJSProps, transformStyles } from '../../utils/helpers'
import { createPaginationProps } from './shared'
import styles from './generated/paginationCSS.module'
import btnStyles from '../Button/generated/buttonCSS.module'

export function getJSPaginationProps() {
  const { paginationContainer, paginationNewer, paginationOlder } = styles
  const props = createPaginationProps()
  const paginationBtnStyles = {
    ...btnStyles.btnBase,
    ...styles.paginationBtn,
  }
  const newerStyles = {
    ...paginationBtnStyles,
    ...paginationNewer,
  }
  const olderStyles = {
    ...paginationBtnStyles,
    ...paginationOlder,
  }

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
      newer: {
        ...props.newer,
        ...createJSProps(transformStyles(newerStyles), newerStyles),
      },
      older: {
        ...props.older,
        ...createJSProps(transformStyles(olderStyles), olderStyles),
      },
    }
  }

  return null
}
