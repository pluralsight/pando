import iconStyles from '../Icon/generated/iconCSS.module'
import inputStyles from '../Input/generated/InputCSS.module'
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
    ...inputStyles.defaultInput_data_disabled__true,
    _hover: {
      ...inputStyles.defaultInput_data_disabled__true['&:hover'],
    },
  },
  _invalid: {
    ...inputStyles.defaultInput_data_invalid__true,
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
        ...inputStyles.ldefaultInput,
        ...styles.lSelectBase,
      },
      icon: {
        ...inputStyles.lInputIcon,
        ...styles.lSelectIcon,
      },
    },
  },
  defaultProps: {
    size: 'l',
    variant: 'unstyled',
  },
  variants: null,
}
