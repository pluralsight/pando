import { defineRecipe } from '@pandacss/dev'
import {
  buttonBase,
  buttonPalettes,
  filledUsage,
  textUsage,
} from './shared/button.base'

export const iconButton = defineRecipe({
  className: 'icon-button',
  description: 'The styles for the IconButton component',

  base: {
    ...buttonBase,
  },

  variants: {
    palette: buttonPalettes,
    size: {
      xs: {
        h: '1.5rem',
        w: '1.5rem',
        pxi: '1',
      },
      sm: {
        h: '2rem',
        w: '2rem',
        pxi: '2',
      },
      md: {
        h: '2.5rem',
        w: '2.5rem',
        pxi: '2.5',
      },
      lg: {
        h: '3rem',
        w: '3rem',
        pxi: '3',
      },
    },
    shape: {
      circle: {
        borderRadius: '50%',
      },
      square: {
        borderRadius: '0.375rem',
      },
    },
    usage: {
      text: textUsage,
      filled: filledUsage,
    },
  },

  defaultVariants: {
    palette: 'action',
    size: 'lg',
    shape: 'square',
    usage: 'filled',
  },
})
