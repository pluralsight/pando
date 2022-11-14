import { createClassProp } from '../../utils/helpers'
import {
  createInputClasses,
  createInputInvalidIconProps,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import type { InputOptions } from './types'
import styles from './inputCSS.module.css'

export type StyleKey = keyof typeof styles

const INPUT = 'ps-input'

export function getInputProps(options?: InputOptions) {
  const { tech, size, ...defaultOptions } = getDefaultInputOptions(options)
  const { baseSizeClass, iconSizeClass } = createInputClasses(size)
  const props = createInputProps(defaultOptions)
  const invalidIconProps = createInputInvalidIconProps(
    { ...defaultOptions, size },
    {
      invalidIconWrapper: {
        ...createClassProp(tech, {
          defaultClass: `${INPUT}-icon ${styles[iconSizeClass as StyleKey]}`,
          svelteClass: `${INPUT}-icon ${iconSizeClass} inputIcon`,
        }),
      },
    }
  )

  return {
    ...props,
    ...invalidIconProps,
    input: {
      ...props.input,
      ...createClassProp(tech, {
        defaultClass: `${INPUT} ${styles[baseSizeClass as StyleKey]}`,
        svelteClass: `${INPUT} inputBase ${baseSizeClass}`,
      }),
    },
    inputWrapper: {
      ...props.inputWrapper,
      ...createClassProp(tech, {
        defaultClass: `${INPUT}-wrapper ${styles.inputWrapper}`,
        svelteClass: `${INPUT}-wrapper inputWrapper`,
      }),
    },
  }
}
