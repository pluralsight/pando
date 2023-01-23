import { createJSProps } from '../../utils/helpers'
import {
  createSelectOptionProps,
  getDefaultSelectOptionOptions,
} from './shared'
import type { SelectOptionOptions } from './types'
import styles from './generated/selectOptionCSS.module'

export function getJSSelectOptionProps(options?: SelectOptionOptions) {
  const defaultOptions = getDefaultSelectOptionOptions(options)
  const props = createSelectOptionProps(defaultOptions)

  return {
    a11yProps: { ...props },
    option: {
      ...createJSProps(styles.selectOption),
    },
  }
}
