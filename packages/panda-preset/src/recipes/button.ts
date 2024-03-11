import { defineRecipe } from '@pandacss/dev'
import {
  buttonBase,
  buttonPalettes,
  filledUsage,
  outlineUsage,
  textUsage,
} from './shared/button.base'

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',

  base: { ...buttonBase, borderRadius: '0.375rem' },

  variants: {
    palette: buttonPalettes,
    size: {
      md: {
        fontSize: '0.875rem',
        h: '8',
        minW: '2.5rem',
        pxi: '1.125rem',
      },
      lg: {
        h: '12',
        minW: '2.5rem',
        pxi: '1.5rem',
      },
    },
    usage: {
      text: textUsage,
      outline: outlineUsage,
      filled: filledUsage,
    },
  },

  defaultVariants: {
    palette: 'action',
    size: 'lg',
    usage: 'filled',
  },
})
