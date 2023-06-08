import { createClassNameProp } from '../../utils/helpers'
import { getDefaultFieldsetOptions, getDefaultLegendOptions } from './shared'
import type { FieldsetOptions, LegendOptions } from './types'
import './fieldset.scss'

const FIELDSET = 'pando-fieldset'

export function getFieldsetProps(options?: FieldsetOptions) {
  const defaultOptions = getDefaultFieldsetOptions(options)

  return {
    ...createClassNameProp(
      FIELDSET,
      'pando_fieldset',
      ...defaultOptions.classNames
    ),
  }
}

export function getLegendProps(options?: LegendOptions) {
  const defaultOptions = getDefaultLegendOptions(options)

  return {
    ...createClassNameProp(
      `${FIELDSET}-legend`,
      'pando_legend',
      ...defaultOptions.classNames
    ),
  }
}
