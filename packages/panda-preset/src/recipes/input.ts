import { defineSlotRecipe } from '@pandacss/dev'
import { focusStates, formStates } from './shared/states'

const INPUT_COLOR = 'neutral.text.300'
const inputIconProps = {
  color: INPUT_COLOR,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  w: '1.5rem',

  _peerInvalid: {
    color: 'danger.text.100',
  },

  _peerDisabled: {
    opacity: formStates._disabled.opacity,
  },
}

export const input = defineSlotRecipe({
  className: 'input',
  description: 'The styles for the Input component',
  slots: ['root', 'control', 'icon', 'startIcon'],

  base: {
    root: {
      marginTop: '2',
      position: 'relative',
      paddingInlineEnd: '4',
      w: 'full',
    },
    control: {
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

      _startIcon: {
        paddingInlineStart: '10',
      },

      ...focusStates,
    },
    icon: {
      ...inputIconProps,
      right: '1.5rem',
    },
    startIcon: {
      ...inputIconProps,
      left: '1rem',
    },
  },

  variants: {
    size: {
      md: {
        root: {
          h: '2.5rem',
          fontSize: 'sm',
        },
      },
      lg: {
        root: {
          h: '3rem',
        },
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
