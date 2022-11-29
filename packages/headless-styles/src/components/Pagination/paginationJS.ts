import { createJSProps } from '../../utils/helpers'
import btnStyles from '../Button/generated/buttonCSS.module'
import { createPaginationProps, getDefaultPaginationOptions } from './shared'
import styles from './generated/paginationCSS.module'
import type { PaginationOptions } from './types'

export function getJSPaginationProps(options?: PaginationOptions) {
  const { cols } = getDefaultPaginationOptions(options)
  const { paginationContainer, paginationNewer, paginationOlder } = styles
  const props = createPaginationProps(cols)
  const containerStyles = {
    ...paginationContainer,
    ...props.container.style,
  }
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
      ...createJSProps(containerStyles),
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
