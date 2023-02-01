import styles from './generated/inputCSS.module'

const baseInputStyles = styles.defaultInput
const chakraInputStyle = {
  field: {
    ...baseInputStyles,
    _active: {
      ...baseInputStyles['&:focus'],
    },
    _hover: {
      ...baseInputStyles["&:not(:disabled, [data-readonly='true']):hover"],
    },
    _focus: {
      ...baseInputStyles['&:focus'],
    },
    _disabled: {
      ...baseInputStyles['&:disabled'],
      _hover: {
        ...baseInputStyles['&:disabled'],
      },
    },
    _invalid: {
      ...baseInputStyles["&[data-invalid='true']"],
    },
    _readOnly: {
      ...baseInputStyles["&:is(:disabled, [data-readonly='true'])"],
      _hover: {
        ...baseInputStyles["&:is(:disabled, [data-readonly='true'])"],
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
