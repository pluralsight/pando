import { createClassNameProp } from '../../utils/helpers'
import {
  createSelectClasses,
  createSelectProps,
  createSelectOptionProps,
  getDefaultSelectOptions,
  getDefaultSelectOptionOptions,
} from './shared'
import type { SelectOptions, SelectOptionOptions } from './types'
import './selectCSS.scss'

const SELECT = 'pando-select'

export function getSelectProps(options?: SelectOptions) {
  const { pandoSize, ...defaultOptions } = getDefaultSelectOptions(options)
  const { baseSizeClass } = createSelectClasses(pandoSize)
  const props = createSelectProps(defaultOptions)

  return {
    ...props,
    fieldWrapper: {
      ...props.fieldWrapper,
      ...createClassNameProp(
        `${SELECT}-fieldWrapper`,
        'pando_selectFieldWrapper'
      ),
    },
    select: {
      ...props.select,
      ...createClassNameProp(SELECT, 'pando_selectBase', baseSizeClass),
    },
    selectWrapper: {
      ...props.selectWrapper,
      ...createClassNameProp(`${SELECT}-wrapper`, 'pando_selectWrapper'),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassNameProp(`${SELECT}-icon`, 'pando_selectIcon'),
    },
  }
}

export function getSelectOptionProps(options?: SelectOptionOptions) {
  const defaultOptions = getDefaultSelectOptionOptions(options)
  const props = createSelectOptionProps(defaultOptions)

  return {
    ...props,
    ...createClassNameProp(`${SELECT}-option`, 'pando_selectOption'),
  }
}
