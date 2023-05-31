import { createClassNameProp } from '../../utils/helpers'
import {
  createInputClasses,
  createInputInvalidIconProps,
  createInputLeadingIconProps,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import type { InputOptions } from './types'
import './inputCSS.scss'

const INPUT = 'pando-input'

export function getInputWrapperProps() {
  return {
    ...createClassNameProp(`${INPUT}-wrapper`, 'pando_inputWrapper'),
  }
}

export function getInputProps(options?: InputOptions) {
  const defaultOptions = getDefaultInputOptions(options)
  const { baseSizeClass, kindClass } = createInputClasses(defaultOptions)

  return {
    ...createInputProps(defaultOptions),
    ...createClassNameProp(
      INPUT,
      kindClass,
      baseSizeClass,
      ...defaultOptions.classNames
    ),
  }
}

export function getInputLeadingIconProps(
  defaultOptions: Required<InputOptions>
) {
  return {
    ...createInputLeadingIconProps(defaultOptions, {
      iconWrapper: {
        ...createClassNameProp(
          `${INPUT}-leading-icon`,
          'pando_inputLeadingIcon'
        ),
      },
    }),
  }
}

export function getInputInvalidIconProps(
  defaultOptions: Required<InputOptions>
) {
  return {
    ...createInputInvalidIconProps(defaultOptions, {
      invalidIconWrapper: {
        ...createClassNameProp(`${INPUT}-invalid-icon`, 'pando_inputIcon'),
      },
    }),
  }
}
