import { createJSProps } from '../../utils/helpers'
import {
  createInputInvalidIconProps,
  createInputLeadingIconProps,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import styles from './generated/inputCSS.module'
import type { InputOptions } from './types'

export function getJSInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const props = createInputProps(defaultOptions)
  const invalidIconProps = createInputInvalidIconProps(defaultOptions)
  const leadingIconProps = createInputLeadingIconProps(defaultOptions)
  const jsStyles = {
    ...styles.input,
    ...styles[`${defaultOptions.size}InputBase`],
  }
  const invalidIconWrapperStyles = {
    ...styles.inputIcon,
  }
  const leadingIconWrapperStyles = {
    ...styles.inputIcon,
    ...styles.inputLeadingIcon,
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
