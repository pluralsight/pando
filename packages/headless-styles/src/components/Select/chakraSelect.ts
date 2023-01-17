import iconStyles from '../Icon/generated/iconCSS.module'
import inputStyles from '../Input/generated/inputCSS.module'
import styles from './generated/selectCSS.module'

const baseSelectStyles = {
  ...inputStyles.defaultInput,
  ...styles.selectBase,
  _active: {
    ...inputStyles.defaultInput['&:active'],
  },
  _hover: {
    ...inputStyles.defaultInput['&:hover'],
  },
  _focus: {
    ...inputStyles.defaultInput['&:focus'],
    borderColor: 'none',
  },
  _disabled: {
    ...inputStyles.defaultInput["&[data-disabled='true']"],
    _hover: {
      ...inputStyles.defaultInput_data_disabled__true['&:hover'],
    },
  },
  _invalid: {
    ...inputStyles.defaultInput["&[data-invalid='true']"],
  },
}

export const ChakraSelect = {
  baseStyle: {
    field: baseSelectStyles,
    icon: {
      ...inputStyles.inputIcon,
      ...styles.selectIcon,
      ...iconStyles.mIconSize,
      marginTop: '4px',
    },
    addon: {
      bg: 'none',
      border: 'none',
    },
  },
  sizes: {
    m: {
      field: {},
      icon: {},
    },
    l: {
      field: {
        ...inputStyles.lInputBase,
        ...styles.lSelectBase,
      },
    },
  },
  defaultProps: {
    size: 'l',
    variant: 'unstyled',
  },
  variants: null,
}
