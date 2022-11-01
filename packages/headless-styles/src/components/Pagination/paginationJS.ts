import { pagination } from '@pluralsight/shared'
import { createJSProps, transformStyles } from '../../utils/helpers'
import btnStyles from '../Button/generated/buttonCSS.module'
import { createPaginationProps, getDefaultPaginationOptions } from './shared'
import styles from './generated/paginationCSS.module'
import type { PaginationOptions } from './types'

export function getJSPaginationProps(options: PaginationOptions) {
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

  if (pagination) {
    return {
      ...props,
      container: {
        ...props.container,
        ...createJSProps(transformStyles(containerStyles), containerStyles),
      },
      newer: {
        ...props.newer,
        ...createJSProps(transformStyles(newerStyles), newerStyles),
      },
      older: {
        ...props.older,
        ...createJSProps(transformStyles(olderStyles), olderStyles),
      },
      text: {
        ...props.text,
        ...createJSProps(transformStyles(textStyles), textStyles),
      },
    }
  }

  return null
}
