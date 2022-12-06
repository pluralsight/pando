import { createClassNameProp } from '../../utils/helpers'
import {
  createInputClasses,
  createInputInvalidIconProps,
  createInputLeadingIconProps,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import type { InputOptions } from './types'
import styles from './inputCSS.module.css'

const INPUT = 'ps-input'

export function getInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const { baseSizeClass, iconSizeClass, kindClass } =
    createInputClasses<typeof styles>(defaultOptions)
  const props = createInputProps(defaultOptions)
  const leadingIconProps = createInputLeadingIconProps(defaultOptions, {
    iconWrapper: {
      ...createClassNameProp(
        `${INPUT}-leading-icon ${styles.inputLeadingIcon} ${styles[iconSizeClass]}`
      ),
    },
  })
  const invalidIconProps = createInputInvalidIconProps(defaultOptions, {
    invalidIconWrapper: {
      ...createClassNameProp(`${INPUT}-icon ${styles[iconSizeClass]}`),
    },
  })

  return {
    ...props,
    ...invalidIconProps,
    ...leadingIconProps,
    input: {
      ...props.input,
      ...createClassNameProp(
        `${INPUT} ${styles[kindClass]} ${styles[baseSizeClass]}`
      ),
    },
    inputWrapper: {
      ...props.inputWrapper,
      ...createClassNameProp(`${INPUT}-wrapper ${styles.inputWrapper}`),
    },
  }
}
