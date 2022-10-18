import { createClassProp } from '../../utils/helpers'
import {
  createSelectClasses,
  createSelectProps,
  getDefaultSelectOptions,
} from './shared'
import type { SelectOptions } from './types'
import styles from './selectCSS.module.css'

const SELECT = 'ps-select'

export function getSelectProps(options?: SelectOptions) {
  const { tech, size, ...defaultOptions } = getDefaultSelectOptions(options)
  const { baseSizeClass, iconSizeClass } = createSelectClasses(size)
  const props = createSelectProps(defaultOptions)

  return {
    ...props,
    select: {
      ...props.select,
      ...createClassProp(tech, {
        defaultClass: `${SELECT} ${styles[baseSizeClass]}`,
        svelteClass: `${SELECT} selectBase ${baseSizeClass}`,
      }),
    },
    selectWrapper: {
      ...props.selectWrapper,
      ...createClassProp(tech, {
        defaultClass: `${SELECT}-wrapper ${styles.selectWrapper}`,
        svelteClass: `${SELECT}-wrapper selectWrapper`,
      }),
    },
    iconWrapper: {
      ...props.iconWrapper,
      ...createClassProp(tech, {
        defaultClass: `${SELECT}-icon ${styles[iconSizeClass]}`,
        svelteClass: `${SELECT}-icon ${iconSizeClass} selectIcon`,
      }),
    },
  }
}
