import { createA11yProps } from '../../../utils/helpers'
import type { InputOptions, TextareaOptions } from '../../../types'

type InputHelperOptions = Required<InputOptions | TextareaOptions>

function inputWithoutPandoProps(options: InputHelperOptions) {
  return {
    id: options.id,
    name: options.name,
    placeholder: options.placeholder,
  }
}

// public

export function createInputProps(options: InputHelperOptions) {
  const { describedBy } = options
  const a11yProps = createA11yProps(options)
  const describedByProps = describedBy && {
    ['aria-describedby']: describedBy,
  }

  return {
    ...a11yProps,
    ...describedByProps,
    ...inputWithoutPandoProps(options),
  }
}
