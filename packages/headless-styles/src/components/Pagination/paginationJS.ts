import { createJSProps } from '../../utils/helpers'
import { createPaginationProps } from './shared'
import styles from './generated/paginationCSS.module'

export function getJSPaginationProps() {
  const props = createPaginationProps()
  const textStyles = {
    ...styles.paginationText,
    '& > strong': {
      ...styles.paginationText___strong,
    },
  }

  return {
    ...props,
    buttonGroup: {
      ...props.buttonGroup,
      ...createJSProps(styles.paginationButtonGroup),
    },
    container: {
      ...props.container,
      ...createJSProps(styles.paginationContainer),
    },
    text: {
      ...props.text,
      ...createJSProps(textStyles),
    },
  }
}
