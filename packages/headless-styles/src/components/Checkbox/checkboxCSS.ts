import { createClassNameProp } from '../../utils/helpers'
import { createCheckboxProps, getDefaultCheckboxOptions } from './shared'
import type { CheckboxOptions } from './types'
import styles from './checkboxCSS.module.css'

const CHECKBOX = 'ps-checkbox'

export function getCheckboxProps(options?: CheckboxOptions) {
  const { direction, ...defaultOptions } = getDefaultCheckboxOptions(options)
  const props = createCheckboxProps(defaultOptions)
  const directionClass = `checkbox${direction}` as keyof typeof styles

  return {
    ...props,
    input: {
      ...props.input,
      ...createClassNameProp(`${CHECKBOX}-input ${styles.checkboxInput}`),
    },
    checkboxContainer: {
      ...props.checkboxContainer,
      ...createClassNameProp(
        `${CHECKBOX}-container ${styles.checkboxContainer} ${styles[directionClass]}`
      ),
    },
    checkboxControl: {
      ...props.checkboxControl,
      ...createClassNameProp(`${CHECKBOX}-control ${styles.checkboxControl}`),
    },
  }
}
