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
  const { baseSizeClass, iconSizeClass } =
    createSelectClasses<typeof styles>(size)
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
    selectWrapper: {
      ...props.selectWrapper,
      ...createClassNameProp(`${SELECT}-wrapper ${styles.selectWrapper}`),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassNameProp(`${SELECT}-icon ${styles[iconSizeClass]}`),
    },
  }
}
