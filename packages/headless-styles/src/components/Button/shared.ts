import { createPandoOptions } from '../shared/defaultOptions'
import type { IconOptions } from '../Icon/types'
import type { ButtonOptions, ButtonSize } from './types'

function getIconBtnSize(size?: ButtonSize) {
  switch (size) {
    case 'm':
      return 's'

    case 'l':
      return 'm'

    default:
      return 'm'
  }
}

function createBtnClass<Name extends string>(name: Name) {
  return `${name}Button` as const
}

// public

export function getDefaultButtonOptions(
  options?: ButtonOptions
): Required<ButtonOptions> {
  return {
    classNames: options?.classNames ?? [''],
    disabled: options?.disabled ?? false,
    icon: options?.icon ?? '',
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

export function createButtonProps(options: ButtonOptions) {
  const iconProps = options.icon && {
    iconOptions: createPandoOptions<IconOptions>({
      ariaHidden: true,
      ariaLabel: '',
      size: getIconBtnSize(options.size),
    }),
  }

  return {
    ...iconProps,
    button: {
      disabled: options.disabled,
    },
  }
}
