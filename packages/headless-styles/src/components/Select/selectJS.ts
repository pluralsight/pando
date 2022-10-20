import { createJSProps, transformStyles } from '../../utils/helpers'
import { createSelectProps, getDefaultSelectOptions } from './shared'
import styles from './generated/selectCSS.module'
import inputStyles from '../Input/generated/InputCSS.module'
import type { SelectOptions } from './types'

export function getJSSelectProps(options?: SelectOptions) {
  const defaultOptions = getDefaultSelectOptions(options)
  const props = createSelectProps(defaultOptions)
  const jsStyles = {
    ...inputStyles.inputBase,
    ...styles.selectBase,
    ...inputStyles[`${defaultOptions.size}InputBase`],
    ...styles[`${defaultOptions.size}SelectBase`],
    ['&[data-disabled="true"]']: {
      ...inputStyles.inputBase_data_disabled__true,
    },
    ['&[data-invalid="true"]']: {
      ...inputStyles.inputBase_data_invalid__true,
    },
    ['&[data-disabled="true"]:hover']: {
      ...inputStyles.inputBase_data_disabled__true['&:hover'],
    },
  }
  const iconWrapperStyles = {
    ...inputStyles.inputIcon,
    ...styles.selectIcon,
    ...styles[`${defaultOptions.size}SelectIcon`],
  }

  return {
    ...props,
    fieldWrapper: {
      ...createJSProps(
        transformStyles(styles.selectFieldWrapper),
        styles.selectFieldWrapper
      ),
    },
    iconWrapper: {
      a11yProps: {
        ...props.iconWrapper,
      },
      ...createJSProps(transformStyles(iconWrapperStyles), iconWrapperStyles),
    },
    select: {
      a11yProps: { ...props.select },
      ...createJSProps(transformStyles(jsStyles), jsStyles),
    },
    selectWrapper: {
      ...createJSProps(
        transformStyles(inputStyles.inputWrapper),
        inputStyles.inputWrapper
      ),
    },
  }
}
