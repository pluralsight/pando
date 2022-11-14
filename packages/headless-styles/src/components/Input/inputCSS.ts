import { createClassProp } from '../../utils/helpers'
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
  const { tech, ...defaultOptions } = getDefaultInputOptions(options)
  const { baseSizeClass, iconSizeClass, kindClass } =
    createInputClasses(defaultOptions)
  const props = createInputProps(defaultOptions)
  const leadingIconProps = createInputLeadingIconProps(defaultOptions, {
    iconWrapper: {
      ...createClassProp(tech, {
        defaultClass: `${INPUT}-leading-icon ${styles.inputLeadingIcon} ${styles[iconSizeClass]}`,
        svelteClass: `${INPUT}-leading-icon ${iconSizeClass} inputLeadingIcon inputIcon`,
      }),
    },
  })
  const invalidIconProps = createInputInvalidIconProps(defaultOptions, {
    invalidIconWrapper: {
      ...createClassProp(tech, {
        defaultClass: `${INPUT}-icon ${styles[iconSizeClass]}`,
        svelteClass: `${INPUT}-icon ${iconSizeClass} inputIcon`,
      }),
    },
  })

  return {
    ...props,
    ...invalidIconProps,
    ...leadingIconProps,
    input: {
      ...props.input,
      ...createClassProp(tech, {
        defaultClass: `${INPUT} ${styles[kindClass]} ${styles[baseSizeClass]}`,
        svelteClass: `${INPUT} ${kindClass} ${baseSizeClass}`,
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
