import { createJSProps } from '../../utils/helpers'
import {
  createInputInvalidIconProps,
  createInputLeadingIconProps,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import styles from './generated/InputCSS.module'
import type { InputOptions } from './types'

export function getJSInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const props = createInputProps(defaultOptions)
  const invalidIconProps = createInputInvalidIconProps(defaultOptions)
  const leadingIconProps = createInputLeadingIconProps(defaultOptions)
  const jsStyles = {
    ...styles.defaultInput,
    ...styles[`${defaultOptions.size}InputBase`],
    ['&::placeholder']: {
      ...styles['']['&::placeholder'],
    },
    ['&[data-disabled="true"]']: {
      ...styles.defaultInput_data_disabled__true,
    },
    ['&[data-invalid="true"]']: {
      ...styles.defaultInput_data_invalid__true,
    },
    ['&[data-readonly="true"]']: {
      ...styles.defaultInput_data_readonly__true,
    },
    ['&[data-disabled="true"]:hover']: {
      ...styles.defaultInput_data_disabled__true['&:hover'],
    },
    ['&[data-readonly="true"]:hover']: {
      ...styles.defaultInput_data_readonly__true['&:hover'],
    },
  }
  const invalidIconWrapperStyles = {
    ...styles.inputIcon,
    ...styles[`${defaultOptions.size}InputIcon`],
    ['&[data-invalid="true"]']: {
      ...styles.inputIcon_data_invalid__true,
    },
  }
  const leadingIconWrapperStyles = {
    ...styles.inputIcon,
    ...styles.inputLeadingIcon,
    ...styles[`${defaultOptions.size}InputIcon`],
  }

  return {
    ...props,
    iconWrapper: {
      a11yProps: {
        ...leadingIconProps.iconWrapper,
      },
      ...createJSProps(leadingIconWrapperStyles),
    },
    invalidIconWrapper: {
      a11yProps: {
        ...invalidIconProps.invalidIconWrapper,
      },
      ...createJSProps(invalidIconWrapperStyles),
    },
    input: {
      a11yProps: { ...props.input },
      ...createJSProps(jsStyles),
    },
    inputWrapper: {
      ...createJSProps(styles.inputWrapper),
    },
  }
}
