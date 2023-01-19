import { createClassNameProp } from '../../utils/helpers'
import {
  createSelectClasses,
  createSelectProps,
  getDefaultSelectOptions,
} from './shared'
import type { SelectOptions } from './types'
import styles from './selectCSS.module.css'

const SELECT = 'ps-select'

export function getSelectProps(options?: SelectOptions) {
  const { size, ...defaultOptions } = getDefaultSelectOptions(options)
  const { baseSizeClass } = createSelectClasses<typeof styles>(size)
  const props = createSelectProps(defaultOptions)

  return {
    ...props,
    fieldWrapper: {
      ...props.fieldWrapper,
      ...createClassNameProp(
        `${SELECT}-fieldWrapper ${styles.selectFieldWrapper}`
      ),
    },
    select: {
      ...props.select,
      ...createClassNameProp(`${SELECT} ${styles[baseSizeClass]}`),
    },
    option: {
      ...props.option,
      ...createClassNameProp(`${SELECT}-option ${styles.selectOption}`),
    },
    selectWrapper: {
      ...props.selectWrapper,
      ...createClassNameProp(`${SELECT}-wrapper ${styles.selectWrapper}`),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassNameProp(`${SELECT}-icon ${styles.selectIcon}`),
    },
  }
}
