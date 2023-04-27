import type { ButtonOptions, ButtonSize } from './types'

function createBtnClass<Name extends string>(name: Name) {
  return `${name}Button` as const
}

// public

export function getIconBtnSize(size?: ButtonSize) {
  switch (size) {
    case 'm':
      return 's'

    case 'l':
      return 'm'

    default:
      return 'm'
  }
}

export function getDefaultButtonOptions(
  options?: ButtonOptions
): Required<ButtonOptions> {
  return {
    classNames: options?.classNames ?? [],
    disabled: options?.disabled ?? false,
    sentiment: options?.sentiment ?? 'action',
    usage: options?.usage ?? 'filled',
    size: options?.size ?? 'l',
  }
}

export function getButtonClasses(options: Required<ButtonOptions>) {
  return {
    sentimentClass: createBtnClass(options.sentiment),
    sizeClass: createBtnClass(options.size),
    usageClass: createBtnClass(options.usage),
  }
}
