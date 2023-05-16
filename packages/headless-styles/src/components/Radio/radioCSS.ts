import { createClassNameProp } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../shared/defaultOptions'
import { getDefaultRadioOptions } from './shared'
import type { RadioOptions } from './types'
import './radioCSS.scss'

const RADIO = 'pando-radio'

export function getRadioProps(options?: RadioOptions) {
  const defaultOptions = getDefaultRadioOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)

  return {
    input: {
      ...props.input,
      type: 'radio',
      ...createClassNameProp(`${RADIO}-input`, 'pando_radioInput'),
    },
    radioContainer: {
      ...props.container,
      ...createClassNameProp(`${RADIO}-container`, 'pando_radioContainer'),
    },
    radioControl: {
      ...props.control,
      ...createClassNameProp(`${RADIO}-control`, 'pando_radioControl'),
    },
  }
}
