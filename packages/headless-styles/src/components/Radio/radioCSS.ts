import { createClassNameProp } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../shared/defaultOptions'
import { getDefaultRadioOptions } from './shared'
import type { RadioOptions } from './types'
import styles from './radioCSS.module.css'

const RADIO = 'ps-radio'

export function getRadioProps(options?: RadioOptions) {
  const defaultOptions = getDefaultRadioOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)

  return {
    input: {
      ...props.input,
      type: 'radio',
      ...createClassNameProp(`${RADIO}-input ${styles.radioInput}`),
    },
    radioContainer: {
      ...props.container,
      ...createClassNameProp(`${RADIO}-container ${styles.radioContainer}`),
    },
    radioControl: {
      ...props.control,
      ...createClassNameProp(`${RADIO}-control ${styles.radioControl}`),
    },
  }
}
