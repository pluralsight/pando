import { defineSlotRecipe } from '@pandacss/dev'
import { focusStates, formStates } from './shared/states'

export const input = defineSlotRecipe({
  className: 'input',
  description: 'The styles for the Input component',
  slots: ['root', 'control', 'icon'],

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
      color: 'neutral.text.300',
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
        opacity: '0.5',
      },

      _userInvalid: {
        borderColor: 'danger.border.initial',

        _hover: {
          borderColor: 'danger.border.initial',
        },
      },

      ...focusStates,
    },
    icon: {
      color: 'neutral.text.300',
      position: 'absolute',
      right: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
      w: '1.5rem',

      _peerInvalid: {
        color: 'danger.text.100',
      },
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
