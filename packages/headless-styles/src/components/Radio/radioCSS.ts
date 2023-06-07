import { createClassNameProp } from '../../utils/helpers'
import { getDefaultRadioOptions, createRadioProps } from './shared'
import type { RadioOptions } from './types'
import './radioCSS.scss'

const RADIO = 'pando-radio'

export function getRadioProps(options?: RadioOptions) {
  const defaultOptions = getDefaultRadioOptions(options)
  const props = createRadioProps(defaultOptions)

  return {
    input: {
      ...props.input,
      ...createClassNameProp(`${RADIO}-input`, 'pando_radioInput'),
    },
    radioContainer: {
      ...props.container,
      ...createClassNameProp(
        `${RADIO}-container`,
        'pando_radioContainer',
        ...defaultOptions.classNames
      ),
    },
    radioControl: {
      ...props.control,
      ...createClassNameProp(`${RADIO}-control`, 'pando_radioControl'),
    },
  }
}
