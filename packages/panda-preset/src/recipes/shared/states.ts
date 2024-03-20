export const focusStates = {
  _focusVisible: {
    boxShadow: 'none',
    outline: '3px solid',
    outlineColor: 'action.border.focus',
    outlineOffset: '2px',
  },
}

const invisibleFocusStates = {
  boxShadow: 'none',
  outline: 'none',
}

export const formStates = {
  _disabled: {
    cursor: 'not-allowed',
    opacity: '0.5',
  },
  _readOnly: {
    cursor: 'default',
  },
}

const interactiveCursorStates = {
  "&:is([aria-disabled='true'], :disabled, [disabled], [data-readonly='true'])":
    {
      cursor: 'not-allowed',
    },
}

const defaultFocusStates = {
  _focus: focusStates,
  '&:focus:not(:focus-visible)': invisibleFocusStates,
}

export const defaultStates = {
  ...interactiveCursorStates,
  ...defaultFocusStates,
  fontFamily: 'inherit',

  // states

  "&:is([aria-disabled='true'], :disabled)": {
    opacity: 0.5,
  },
}
