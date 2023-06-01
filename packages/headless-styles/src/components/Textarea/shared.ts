import { createA11yProps } from '../../utils/helpers'
import {
  getDefaultFieldStates,
  getDefaultPlaceholder,
} from '../shared/defaultOptions'
import type { TextareaOptions, TextareaResize } from './types'

type TextareaHelperOptions = Required<TextareaOptions>

function getDefaultDisabledOptions(options: TextareaOptions) {
  const { disabled } = options
  return {
    placeholder: disabled ? '' : getDefaultPlaceholder(options?.placeholder),
  }
}

function textareaWithoutPandoProps(options: TextareaHelperOptions) {
  return {
    id: options.id,
    name: options.name,
    placeholder: options.placeholder,
  }
}

// public

export function getDefaultTextareaOptions(options?: TextareaOptions) {
  const internalState = getDefaultFieldStates(options)

  return {
    ...internalState,
    ...getDefaultDisabledOptions({ ...options, ...internalState }),
    classNames: options?.classNames ?? [],
    describedBy: options?.describedBy ?? '',
    id: options?.id ?? '',
    name: options?.name ?? '',
    resize: options?.resize ?? 'initial',
  }
}

export function getTextareaClasses(resize: TextareaResize) {
  return {
    resizeClass: `pando_${resize}Textarea` as const,
  }
}

export function createTextareaProps(options: TextareaHelperOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    ...a11yProps,
    ...describedByProps,
    ...textareaWithoutPandoProps(options),
  }
}
