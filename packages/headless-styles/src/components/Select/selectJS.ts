import { createJSProps } from '../../utils/helpers'
import {
  createSelectProps,
  createSelectOptionProps,
  getDefaultSelectOptionOptions,
  getDefaultSelectOptions,
} from './shared'
import type { SelectOptions, SelectOptionOptions } from './types'
import styles from './generated/selectCSS.module'

export function getJSSelectProps(options?: SelectOptions) {
  const defaultOptions = getDefaultSelectOptions(options)
  const props = createSelectProps(defaultOptions)
  const jsStyles = {
    ...styles.selectBase,
    ...styles[`${defaultOptions.size}SelectBase`],
  }
  const iconWrapperStyles = {
    ...styles.selectIcon,
  }

  return {
    ...props,
    fieldWrapper: {
      ...createJSProps(styles.selectFieldWrapper),
    },
    iconWrapper: {
      ...createJSProps(iconWrapperStyles),
    },
    select: {
      a11yProps: { ...props.select },
      ...createJSProps(jsStyles),
    },
    selectWrapper: {
      ...createJSProps(styles.selectWrapper),
    },
  }
}

export function getJSSelectOptionProps(options?: SelectOptionOptions) {
  const defaultOptions = getDefaultSelectOptionOptions(options)
  const props = createSelectOptionProps(defaultOptions)

  return {
    option: {
      a11yProps: { ...props },
      ...createJSProps(styles.selectOption),
    },
  }
}
