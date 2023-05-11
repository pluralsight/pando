import { createClassNameProp } from '../../utils/helpers'
import { createCheckboxProps, getDefaultCheckboxOptions } from './shared'
import type { CheckboxOptions } from './types'
import './checkboxCSS.scss'

const CHECKBOX = 'ps-checkbox'

export function getCheckboxProps(options?: CheckboxOptions) {
  const defaultOptions = getDefaultCheckboxOptions(options)
  const props = createCheckboxProps(defaultOptions)

  return {
    ...props,
    input: {
      ...props.input,
      ...createClassNameProp(`${CHECKBOX}-input`, 'pando_checkboxInput'),
    },
    checkboxContainer: {
      ...props.checkboxContainer,
      ...createClassNameProp(
        `${CHECKBOX}-container`,
        'pando_checkboxContainer'
      ),
    },
    checkboxControl: {
      ...props.checkboxControl,
      ...createClassNameProp(`${CHECKBOX}-control`, 'pando_checkboxControl'),
    },
  }
}
