import { defineRecipe } from '@pandacss/dev'
import { buttonBase } from './shared/button.base'

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',

  base: buttonBase,

  variants: {
    sentiment: {
      action: { bg: 'red.200', color: 'white' },
      neutral: { border: '1px solid {colors.red.500}' },
      danger: {},
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '40px' },
    },
    usage: {
      text: {},
      outline: {},
      filled: {},
    },
  },

  defaultVariants: {
    sentiment: 'action',
    size: 'lg',
    usage: 'filled',
  },
})
