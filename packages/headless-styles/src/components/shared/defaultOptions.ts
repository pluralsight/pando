import { createA11yProps } from '../../utils/helpers'
import type {
  CheckboxOptions,
  ConfirmDialogOptions,
  IconOptions,
  RadioOptions,
} from '../../types'
import type {
  FieldStates,
  FieldOptions,
  IconPropsOptions,
  MessageOptions,
} from '../types'

export type AllCheckboxFieldOptions = CheckboxOptions | RadioOptions
export type CheckboxTypes = 'checkbox' | 'radio'

export function createCheckboxFieldProps(
  options: Required<AllCheckboxFieldOptions>
) {
  const { inputProps, dataProps, hidden } = getCheckboxFieldA11yProps(options)
  const disabled = inputProps.disabled

  return {
    input: {
      ...inputProps,
    },
    container: {
      ...dataProps,
      disabled,
    },
    control: {
      ...hidden,
      ...dataProps,
      disabled,
      'data-control': true,
    },
  }
}

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

export function getDefaultCheckboxFieldOptions(
  options?: AllCheckboxFieldOptions
) {
  return {
    ...getDefaultFieldOptions(options),
    checked: options?.checked ?? false,
    value: options?.value ?? '',
  }
}

export function getCheckboxFieldA11yProps(options: AllCheckboxFieldOptions) {
  const a11yProps = createA11yProps(options)
  const inputA11yProps = {
    ['aria-invalid']: a11yProps['aria-invalid'],
    disabled: a11yProps.disabled,
    readOnly: a11yProps.readOnly,
    required: a11yProps.required,
  }
  const dataProps = {
    ['data-invalid']: a11yProps['data-invalid'],
    ['data-readonly']: a11yProps['data-readonly'],
    ['data-required']: a11yProps['data-required'],
  }

  return {
    inputProps: {
      ...inputA11yProps,
      checked: options.checked,
      id: options.id,
      name: options.name,
      value: options.value,
    },
    dataProps: {
      ...dataProps,
      'data-checked': options.checked,
    },
    hidden: {
      'aria-hidden': true,
    },
  }
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
