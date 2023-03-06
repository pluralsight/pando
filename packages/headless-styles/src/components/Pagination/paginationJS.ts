import { createJSProps } from '../../utils/helpers'
import {
  createPaginationClasses,
  createPaginationProps,
  getDefaultPaginationOptions,
} from './shared'
import { PaginationOptions } from './types'
import styles from './generated/paginationCSS.module'

export function getJSPaginationProps(options?: PaginationOptions) {
  const defaultOptions = getDefaultPaginationOptions(options)
  const props = createPaginationProps(defaultOptions)
  const classes = createPaginationClasses(defaultOptions)
  const textStyles = {
    ...styles[classes.textClass],
    '& > strong': {
      ...styles.paginationText___strong,
    },
  }

  return {
    ...props,
    buttonGroup: {
      ...props.buttonGroup,
      ...createJSProps(styles[classes.buttonGroupClass]),
    },
    container: {
      ...props.container,
      ...createJSProps(styles[classes.containerClass]),
    },
    text: {
      ...props.text,
      ...createJSProps(textStyles),
    },
  }
}
