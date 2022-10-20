import { select } from '@pluralsight/shared'
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

  if (select) {
    return {
      ...props,
      fieldWrapper: {
        ...props.fieldWrapper,
        ...createClassProp(tech, {
          defaultClass: `${SELECT}-fieldWrapper ${styles.selectFieldWrapper}`,
          svelteClass: `${SELECT}-fieldWrapper selectFieldWrapper`,
        }),
      },
      select: {
        ...props.select,
        ...createClassProp(tech, {
          defaultClass: `${SELECT} ${
            styles[baseSizeClass as keyof typeof styles]
          }`,
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
          defaultClass: `${SELECT}-icon ${
            styles[iconSizeClass as keyof typeof styles]
          }`,
          svelteClass: `${SELECT}-icon ${iconSizeClass} selectIcon`,
        }),
      },
    }
  }
  return null
}
