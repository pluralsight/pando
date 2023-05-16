import { createJSProps } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../shared/defaultOptions'
import { getDefaultRadioOptions } from './shared'
import styles from './generated/radioCSS'
import type { RadioOptions } from './types'

export function getJSRadioProps(options?: RadioOptions) {
  const defaultOptions = getDefaultRadioOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)
  const controlStyles = {
    ...styles.pando_radioControl,
    "&[data-checked='true']": {
      ...styles.pando_radioControl_data_checked_true,
    },
  }

  return {
    input: {
      a11yProps: {
        ...props.input,
        type: 'radio',
      },
      ...createJSProps(styles.pando_radioInput),
    },
    radioContainer: {
      a11yProps: {
        ...props.container,
      },
      ...createJSProps(styles.pando_radioContainer),
    },
    radioControl: {
      a11yProps: {
        ...props.control,
      },
      ...createJSProps(controlStyles),
    },
  }
}
