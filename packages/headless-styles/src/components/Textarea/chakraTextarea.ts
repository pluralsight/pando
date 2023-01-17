import inputStyles from '../Input/generated/inputCSS.module'
import styles from './generated/textareaCSS.module'

const baseTextareaStyles = styles.textareaBase
const chakraTextareaStyle = {
  ...inputStyles.defaultInput,
  ...baseTextareaStyles,
  border: `${inputStyles.defaultInput.borderWidth} ${inputStyles.defaultInput.borderStyle} ${inputStyles.defaultInput.borderColor}`,
  _active: {
    ...baseTextareaStyles['&:active'],
  },
  _hover: {
    ...baseTextareaStyles['&:hover'],
  },
  _focus: {
    ...baseTextareaStyles['&:focus'],
    borderColor: 'none',
  },
  _disabled: {
    ...styles.textareaBase["&[data-disabled='true']"],
    _hover: {
      ...styles.textareaBase_data_disabled__true['&:hover'],
    },
  },
  _invalid: {
    ...styles.textareaBase["&[data-invalid='true']"],
  },
  _readOnly: {
    ...styles.textareaBase["&[data-readonly='true']"],
    _hover: {
      ...styles.textareaBase_data_readonly__true['&:hover'],
    },
  },
}

const textAreaSize = {
  ...baseTextareaStyles,
}

export const ChakraTextarea = {
  baseStyle: baseTextareaStyles,
  sizes: {
    xs: textAreaSize,
    sm: textAreaSize,
    m: textAreaSize,
    lg: textAreaSize,
  },
  variants: {
    outline: chakraTextareaStyle,
    filled: chakraTextareaStyle,
    flushed: chakraTextareaStyle,
    unstyled: chakraTextareaStyle,
  },
}
