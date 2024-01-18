import { defineSlotRecipe } from '@pandacss/dev'
import { formStates } from './shared/states'
import { inputControl } from './shared/input.base'

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  description: 'The styles for the Checkbox component',
  slots: ['root', 'control', 'icon'],

  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      gap: '3',
    },
    control: {
      ...inputControl,
      h: '1.125rem',
      w: '1.125rem',
      border: '2px solid',
    },
    icon: {
      color: 'action.text.initial',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      w: '1.5rem',

      _peerInvalid: {
        color: 'danger.text.inverse',
      },

      _peerDisabled: {
        opacity: formStates._disabled.opacity,
      },
    },
  },

  variants: {},

  defaultVariants: {},
})
