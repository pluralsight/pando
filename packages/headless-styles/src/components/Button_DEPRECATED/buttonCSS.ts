import type { ClassOptions } from '../../utils/helpers'
import { createClassProp } from '../../utils/helpers'
import type { Tech } from '../types'
import { getDefaultOptions, getDefaultDangerOptions } from './shared'
import type { ButtonOptions, ButtonType, DangerOptions } from './types'
import styles from './buttonCSS.module.css'

function createButton(tech: Tech, classes: ClassOptions) {
  return {
    ...createClassProp(tech, classes),
    type: 'button' as ButtonType,
  }
}

// Public

export function getDangerButtonProps(options?: DangerOptions) {
  const defaultOptions = getDefaultDangerOptions(options)
  const { kind, size } = defaultOptions
  const dangerKind = `${kind}Danger`

  return createButton(defaultOptions.tech, {
    defaultClass: `ps-danger-btn ${styles[dangerKind]} ${styles[size]}`,
    svelteClass: `base ${kind}Danger ${size}`,
  })
}

export function getButtonProps(options?: ButtonOptions) {
  const defaultOptions = getDefaultOptions(options)
  const { kind, size } = defaultOptions

  return createButton(defaultOptions.tech, {
    defaultClass: `ps-btn ${styles[kind]} ${styles[size]}`,
    svelteClass: `base ${kind} ${size}`,
  })
}
