import { createClassNameProp } from '../../utils/helpers'
import { createInputProps } from '../shared/helpers/input'
import {
  createInputClasses,
  createInputInvalidIconProps,
  createInputLeadingIconProps,
  getDefaultInputOptions,
} from './shared'
import type { InputKindAndSize, InputOptions } from './types'
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
  defaultOptions: Required<InputKindAndSize>
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
  defaultOptions: Required<Pick<InputOptions, 'invalid' | 'size'>>
) {
  return {
    ...createInputInvalidIconProps(defaultOptions, {
      invalidIconWrapper: {
        ...createClassNameProp(`${INPUT}-invalid-icon`, 'pando_inputIcon'),
      },
    }),
  }
}
