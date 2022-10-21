import iconStyles from '../Icon/generated/iconCSS.module'
import inputStyles from '../Input/generated/InputCSS.module'
import styles from './generated/selectCSS.module'

const baseSelectStyles = {
  ...inputStyles.inputBase,
  ...styles.selectBase,
  _active: {
    ...inputStyles.inputBase['&:active'],
  },
  _hover: {
    ...inputStyles.inputBase['&:hover'],
  },
  _focus: {
    ...inputStyles.inputBase['&:focus'],
    borderColor: 'none',
  },
  _disabled: {
    ...inputStyles.inputBase_data_disabled__true,
    _hover: {
      ...inputStyles.inputBase_data_disabled__true['&:hover'],
    },
  },
  _invalid: {
    ...inputStyles.inputBase_data_invalid__true,
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
      icon: {
        ...inputStyles.lInputIcon,
        ...styles.lSelectIcon,
      },
    },
  },
  defaultProps: {
    size: 'l',
    variant: '',
  },
  variants: null,
}
