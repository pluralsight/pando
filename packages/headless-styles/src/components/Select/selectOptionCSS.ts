import { createClassNameProp } from '../../utils/helpers'
import {
  createSelectOptionProps,
  getDefaultSelectOptionOptions,
} from './shared'
import type { SelectOptionOptions } from './types'
import styles from './selectOptionCSS.module.css'

const SELECT_OPTION = 'ps-select-option'

export function getSelectOptionProps(options?: SelectOptionOptions) {
  const defaultOptions = getDefaultSelectOptionOptions(options)
  const props = createSelectOptionProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(`${SELECT_OPTION} ${styles.selectOption}`),
  }
}
