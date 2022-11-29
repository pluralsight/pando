import { createJSProps } from '../../utils/helpers'
import { createCheckboxFieldProps } from '../sharedDefaultOptions'
import { getDefaultRadioOptions } from './shared'
import styles from './generated/radioCSS.module'
import type { RadioOptions } from './types'

export function getJSRadioProps(options?: RadioOptions) {
  const defaultOptions = getDefaultRadioOptions(options)
  const props = createCheckboxFieldProps(defaultOptions)
  const containerStyles = {
    ...styles.radioContainer,
    ...styles[defaultOptions.direction as keyof typeof styles],
    '&[data-disabled="true"]': {
      ...styles.radioContainer_data_disabled__true,
    },
    '&[data-readonly="true"]': {
      ...styles.radioContainer_data_readonly__true,
    },
  }
  const controlStyles = {
    ...styles.radioControl,
    '&[data-checked="true"]': {
      ...styles.radioControl_data_checked__true,
    },
    '&[data-checked="true"]:hover': {
      ...styles.radioControl_data_checked__true['&:hover'],
    },
    '&[data-checked="true"]::before': {
      ...styles.radioControl_data_checked__true['&::before'],
    },
    '&[data-disabled="true"]': {
      ...styles.radioControl_data_disabled__true,
    },
    '&[data-invalid="true"]': {
      ...styles.radioControl_data_invalid__true,
    },
    '&[data-invalid="true"]:hover': {
      ...styles.radioControl_data_invalid__true['&:hover'],
    },
  }

  return {
    input: {
      a11yProps: {
        ...props.input,
        type: 'radio',
      },
      ...createJSProps(styles.radioInput),
    },
    radioContainer: {
      a11yProps: {
        ...props.container,
      },
      ...createJSProps(containerStyles),
    },
    radioControl: {
      a11yProps: {
        ...props.control,
      },
      ...createJSProps(controlStyles),
    },
  }
}
