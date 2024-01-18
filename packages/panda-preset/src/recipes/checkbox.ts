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
      position: 'relative',
    },
    control: {
      ...inputControl,
      border: '2px solid',
      h: '1.125rem',
      p: '0',
      rounded: 'sm',
      w: '1.125rem',
      zIndex: 'base',

      _hover: {
        ...inputControl._hover,
        bgColor: 'neutral.bg.hover',
        borderColor: 'action.border.initial',
      },

      _checked: {
        bgColor: 'action.bg.initial',
      },

      _userInvalid: {
        borderColor: 'danger.border.initial',
        _checked: {
          bgColor: 'danger.bg.initial',
        },
      },
    },
    icon: {
      color: 'action.text.initial',
      display: 'none',
      position: 'absolute',
      h: 'full',
      left: '0',
      top: '0',
      w: 'full',
      zIndex: 'decorator',

      _peerChecked: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
      },

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
