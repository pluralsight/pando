import { createClassNameProp } from '../../utils/helpers'
import { createInputProps } from '../shared/helpers/input'
import {
  createInputClasses,
  createInputInvalidIconProps,
  createInputLeadingIconProps,
  getDefaultInputOptions,
} from './shared'
import type { InputOptions, InputSize } from './types'
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

export function getInputLeadingIconProps(size: InputSize) {
  return {
    ...createInputLeadingIconProps(size, {
      iconWrapper: {
        ...createClassNameProp(
          `${INPUT}-leading-icon`,
          'pando_inputLeadingIcon'
        ),
      },
    }),
  }
}

export function getInputInvalidIconProps(size: InputSize) {
  return {
    ...createInputInvalidIconProps(size, {
      invalidIconWrapper: {
        ...createClassNameProp(`${INPUT}-invalid-icon`, 'pando_inputIcon'),
      },
    }),
  }
}
