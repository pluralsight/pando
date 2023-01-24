import labelStyles from '../FormLabel/generated/formLabelCSS.module'
import styles from './generated/checkboxCSS.module'

export const ChakraCheckbox = {
  baseStyle: {
    container: {
      ...styles.checkboxContainer,
      _disabled: {
        ...styles.checkboxContainer['&[disabled]'],
      },
    },
    control: {
      ...styles.checkboxControl,
      _hover: {
        ...styles.checkboxControl['&:not([disabled]):hover'],
      },
      _focus: {
        ...styles.checkboxInput['&:focus + .checkboxControl'],
      },
      _checked: {
        ...styles.checkboxControl["&[data-checked='true']"],
        color: 'white',
        _hover: {
          ...styles.checkboxControl_data_checked__true['&:hover'],
        },
      },
      _disabled: {
        ...styles.checkboxControl['&[disabled]'],
      },
      _invalid: {
        ...styles.checkboxControl["&[data-invalid='true']"],
        _hover: {
          ...styles.checkboxControl_data_invalid__true['&:hover'],
        },
      },
    },
    label: {
      ...labelStyles,
    },
  },
  parts: ['label', 'icon', 'container', 'control'],
}
