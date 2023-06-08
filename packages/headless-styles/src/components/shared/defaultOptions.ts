import type { ConfirmDialogOptions, IconOptions } from '../../types'
import type {
  FieldStates,
  FieldOptions,
  IconPropsOptions,
  MessageOptions,
} from '../types'

export interface CreateDialogIconPropsOptions {
  kind: ConfirmDialogOptions['kind']
}

export function createDialogIconProps(
  options: CreateDialogIconPropsOptions,
  additions?: IconPropsOptions
) {
  if (options.kind === 'destructive') {
    return {
      iconOptions: createPandoOptions<IconOptions>({
        ariaHidden: true,
        size: 'm',
        ...additions?.iconOptions,
      }),
      iconWrapper: {
        ...additions?.iconWrapper,
      },
    }
  }

  return {}
}

export function createPandoOptions<T>(options: T) {
  return { ...options } as T
}

export function getDefaultFieldOptions(options?: FieldOptions) {
  return {
    ...getDefaultFieldStates(options),
    id: options?.id ?? '',
    name: options?.name ?? '',
  }
}

export function getDefaultFieldStates(options?: FieldStates) {
  return {
    disabled: options?.disabled ?? false,
    invalid: options?.invalid ?? false,
    readOnly: options?.readOnly ?? false,
    required: options?.required ?? false,
  }
}

export function getDefaultMessageOptions(options?: MessageOptions) {
  return {
    classNames: options?.classNames ?? [],
    id: options?.id ?? '',
  }
}

export function createMessageProps(options: MessageOptions) {
  return {
    id: options.id,
  }
}

export function getDefaultPlaceholder(value?: string) {
  return value ?? 'Enter text'
}
