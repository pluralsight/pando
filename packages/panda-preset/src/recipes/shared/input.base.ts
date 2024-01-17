import { focusStates, formStates } from './states'

export const INPUT_COLOR = 'neutral.text.300'

export const inputControl = {
  appearance: 'none',
  background: 'inherit',
  borderImage: 'initial',
  borderRadius: 'md',
  border: '1px solid',
  borderColor: 'action.border.initial',
  color: INPUT_COLOR,
  h: 'full',
  paddingInlineStart: '4',
  paddingInlineEnd: '10',
  position: 'relative',
  transitionDuration: '150ms',
  transitionProperty: 'border-color',
  w: 'full',

  _hover: {
    borderColor: 'neutral.border.200',
  },

  _disabled: {
    ...formStates._disabled,
    bgColor: 'neutral.bg.initial',
    borderColor: 'action.border.initial',
    color: 'neutral.text.100',
  },

  _userInvalid: {
    borderColor: 'danger.border.initial',

    _hover: {
      borderColor: 'danger.border.initial',
    },
  },

  ...focusStates,
}
