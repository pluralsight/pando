import { createClassProp } from '../../utils/helpers'
import {
  createInputClasses,
  createInputProps,
  getDefaultInputOptions,
} from './shared'
import type { InputOptions } from './types'
import styles from './inputCSS.module.css'

const INPUT = 'ps-input'

export function getInputProps(options?: InputOptions) {
  const { tech, size, ...defaultOptions } = getDefaultInputOptions(options)
  const { baseSizeClass, iconSizeClass } = createInputClasses(size)
  const props = createInputProps(defaultOptions)

  return {
    ...props,
    input: {
      ...props.input,
      ...createClassProp(tech, {
        defaultClass: `${INPUT} ${styles[baseSizeClass]}`,
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
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassProp(tech, {
        defaultClass: `${INPUT}-icon ${styles[iconSizeClass]}`,
        svelteClass: `${INPUT}-icon ${iconSizeClass} inputIcon`,
      }),
    },
  }
}
