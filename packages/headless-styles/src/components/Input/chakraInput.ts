import styles from './generated/InputCSS.module'

const baseInputStyles = styles.defaultInput
const chakraInputStyle = {
  field: {
    ...baseInputStyles,
    _active: {
      ...styles.defaultInput['&:active'],
    },
    _hover: {
      ...styles.defaultInput['&:hover'],
    },
    _focus: {
      ...styles.defaultInput['&:focus'],
    },
    _disabled: {
      ...styles.defaultInput["&[data-disabled='true']"],
      _hover: {
        ...styles.defaultInput_data_disabled__true['&:hover'],
      },
    },
    _invalid: {
      ...styles.defaultInput["&[data-invalid='true']"],
    },
    _readOnly: {
      ...styles.defaultInput["&[data-readonly='true']"],
      _hover: {
        ...styles.defaultInput_data_readonly__true['&:hover'],
      },
    },
  },
  addon: {
    bg: 'none',
    border: 'none',
  },
}

export const ChakraInput = {
  baseStyle: baseInputStyles,
  sizes: {
    m: {
      ...baseInputStyles,
      ...styles.mInputBase,
    },
    l: {
      ...baseInputStyles,
    },
  },
  variants: {
    outline: chakraInputStyle,
    filled: chakraInputStyle,
    flushed: chakraInputStyle,
    unstyled: chakraInputStyle,
  },
}
