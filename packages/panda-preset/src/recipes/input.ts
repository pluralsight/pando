import { defineSlotRecipe } from '@pandacss/dev'
import { formStates } from './shared/states'
import { INPUT_COLOR, inputControl } from './shared/input.base'

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
      ...inputControl,
      _startIcon: {
        paddingInlineStart: '10',
      },
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
