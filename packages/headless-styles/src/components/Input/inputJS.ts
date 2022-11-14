import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createInputInvalidIconProps,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import styles from './generated/InputCSS.module'
import type { InputOptions } from './types'

export function getJSInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const props = createInputProps(defaultOptions)
  const invalidIconProps = createInputInvalidIconProps(defaultOptions)
  const jsStyles = {
    ...styles.inputBase,
    ...styles[`${defaultOptions.size}InputBase`],
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
  const invalidIconWrapperStyles = {
    ...styles.inputIcon,
    ...styles[`${defaultOptions.size}InputIcon`],
    ['&[data-invalid="true"]']: {
      ...styles.inputIcon_data_invalid__true,
    },
  }

  return {
    ...props,
    invalidIconWrapper: {
      a11yProps: {
        ...invalidIconProps.invalidIconWrapper,
      },
      ...createJSProps(
        transformStyles(invalidIconWrapperStyles),
        invalidIconWrapperStyles
      ),
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
