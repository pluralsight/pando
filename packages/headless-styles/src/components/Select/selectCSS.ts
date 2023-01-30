import { createClassNameProp } from '../../utils/helpers'
import {
  createSelectClasses,
  createSelectProps,
  createSelectOptionProps,
  getDefaultSelectOptions,
  getDefaultSelectOptionOptions,
} from './shared'
import type { SelectOptions, SelectOptionOptions } from './types'
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
        `${SELECT}-fieldWrapper`,
        styles.selectFieldWrapper
      ),
    },
    select: {
      ...props.select,
      ...createClassNameProp(SELECT, styles.selectBase, styles[baseSizeClass]),
    },
    selectWrapper: {
      ...props.selectWrapper,
      ...createClassNameProp(`${SELECT}-wrapper`, styles.selectWrapper),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassNameProp(`${SELECT}-icon`, styles.selectIcon),
    },
  }
}

export function getSelectOptionProps(options?: SelectOptionOptions) {
  const defaultOptions = getDefaultSelectOptionOptions(options)
  const props = createSelectOptionProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(`${SELECT}-option`, styles.selectOption),
  }
}
