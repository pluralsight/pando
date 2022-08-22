import { createJSProps, transformStyles } from '../../utils/helpers'
import { createInputProps, getDefaultInputOptions } from './shared'
import styles from './generated/InputCSS.module'
import type { InputOptions } from './types'

export function getJSInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const props = createInputProps(defaultOptions)
  const jsStyles = {
    ...styles.inputBase,
    ...styles[`${defaultOptions.size}InputSize`],
    ['&::placeholder']: {
      ...styles['']['&::placeholder'],
    },
    ['&[data-disabled="true"]']: {
      ...styles.inputBase_data_disabled__true,
    },
    ['&[data-invalid="true"]']: {
      ...styles.inputBase_data_invalid__true,
    },
    ['&[data-readonly="true"]']: {
      ...styles.inputBase_data_readonly__true,
    },
    ['&[data-disabled="true"]:hover']: {
      ...styles.inputBase_data_disabled__true['&:hover'],
    },
    ['&[data-readonly="true"]:hover']: {
      ...styles.inputBase_data_readonly__true['&:hover'],
    },
  }
  const iconWrapperStyles = {
    ...styles.inputIcon,
    ...styles[`${defaultOptions.size}InputIcon`],
    ['&[data-invalid="true"']: {
      ...styles.inputIcon_data_invalid__true,
    },
  }

  return {
    ...props,
    iconWrapper: {
      a11yProps: {
        ...props.iconWrapper,
      },
      ...createJSProps(transformStyles(iconWrapperStyles), iconWrapperStyles),
    },
    input: {
      a11yProps: { ...props.input },
      ...createJSProps(transformStyles(jsStyles), jsStyles),
    },
    inputWrapper: {
      ...createJSProps(
        transformStyles(styles.inputWrapper),
        styles.inputWrapper
      ),
    },
  }
}
