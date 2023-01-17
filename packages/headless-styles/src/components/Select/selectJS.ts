import { createJSProps } from '../../utils/helpers'
import inputStyles from '../Input/generated/inputCSS.module'
import { createSelectProps, getDefaultSelectOptions } from './shared'
import type { SelectOptions } from './types'
import styles from './generated/selectCSS.module'

export function getJSSelectProps(options?: SelectOptions) {
  const defaultOptions = getDefaultSelectOptions(options)
  const props = createSelectProps(defaultOptions)
  const jsStyles = {
    ...inputStyles.defaultInput,
    ...styles.selectBase,
    ...inputStyles[`${defaultOptions.size}InputBase`],
    ...styles[`${defaultOptions.size}SelectBase`],
    ['&[data-disabled="true"]:hover']: {
      ...inputStyles.defaultInput_data_disabled__true['&:hover'],
    },
  }
  const iconWrapperStyles = {
    ...inputStyles.inputIcon,
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
      ...createJSProps(inputStyles.inputWrapper),
    },
  }
}
