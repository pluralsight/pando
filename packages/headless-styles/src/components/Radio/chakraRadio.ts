import labelStyles from '../FormLabel/generated/formLabelCSS.module'
import styles from './generated/radioCSS.module'

export const ChakraRadio = {
  baseStyle: {
    container: {
      ...styles.radioContainer,
      _disabled: {
        ...styles.radioContainer["&[data-disabled='true']"],
      },
    },
    control: {
      ...styles.radioControl,
      _hover: {
        ...styles.radioControl['&:hover'],
      },
      _focus: {
        ...styles.radioInput['&:focus + .radioControl'],
      },
      _checked: {
        ...styles.radioControl["&[data-checked='true']"],
        _before: {
          ...styles.radioControl_data_checked__true['&::before'],
        },
        _hover: {
          ...styles.radioControl_data_checked__true['&:hover'],
        },
      },
      _disabled: {
        ...styles.radioContainer["&[data-disabled='true']"],
      },
      _invalid: {
        ...styles.radioControl["&[data-invalid='true']"],
        _hover: {
          ...styles.radioControl_data_invalid__true['&:hover'],
        },
      },
    },
    label: {
      ...labelStyles,
    },
  },
  parts: ['label', 'container', 'control'],
}
