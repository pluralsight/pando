import { createClassNameProp } from '../../utils/helpers'
import { createPaginationProps } from './shared'
import styles from './paginationCSS.module.css'

const PAGINATION = 'ps-pagination'

export function getPaginationProps() {
  const props = createPaginationProps()

  return {
    ...props,
    buttonGroup: {
      ...props.buttonGroup,
      ...createClassNameProp(
        `${PAGINATION}-buttonGroup`,
        styles.paginationButtonGroup
      ),
    },
    container: {
      ...props.container,
      ...createClassNameProp(PAGINATION, styles.paginationContainer),
    },
    text: {
      ...props.text,
      ...createClassNameProp(`${PAGINATION}-text`, styles.paginationText),
    },
  }
}
